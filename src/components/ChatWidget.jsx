import { useEffect, useRef, useState } from "react";
import "../ChatWidget.css";

// Set this to your deployed FastAPI URL (e.g. https://your-app.onrender.com).
const API_URL =
  "https://haroon-portfolio-chatbot-git-main-haroons-projects-244629ce.vercel.app/health";

const STARTERS = [
  "What projects has Haroon built?",
  "Does he know FastAPI and LangChain?",
  "How can I contact him?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // {role, content, sources?}
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [waking, setWaking] = useState(false);
  const endRef = useRef(null);

  // Wake a sleeping free-tier server as soon as the page loads.
  useEffect(() => {
    fetch(`${API_URL}/health`).catch(() => {});
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send(text) {
    const question = text.trim();
    if (!question || busy) return;

    const history = messages
      .slice(-6)
      .map(({ role, content }) => ({ role, content }));
    setMessages((m) => [
      ...m,
      { role: "user", content: question },
      { role: "assistant", content: "" },
    ]);
    setInput("");
    setBusy(true);

    const wakeTimer = setTimeout(() => setWaking(true), 4000);
    const patchLast = (fn) =>
      setMessages((m) =>
        m.map((msg, i) => (i === m.length - 1 ? fn(msg) : msg)),
      );

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, history }),
      });
      if (res.status === 429)
        throw new Error(
          "You're sending messages too quickly. Wait a minute and try again.",
        );
      if (!res.ok || !res.body)
        throw new Error("The assistant is unavailable right now.");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        clearTimeout(wakeTimer);
        setWaking(false);
        buffer += decoder.decode(value, { stream: true });

        const events = buffer.split("\n\n");
        buffer = events.pop(); // keep any incomplete event for the next read

        for (const evt of events) {
          if (!evt.startsWith("data: ")) continue;
          const data = JSON.parse(evt.slice(6));
          if (data.type === "token")
            patchLast((msg) => ({ ...msg, content: msg.content + data.text }));
          else if (data.type === "sources")
            patchLast((msg) => ({ ...msg, sources: data.sources }));
          else if (data.type === "error") throw new Error(data.message);
        }
      }
    } catch (err) {
      patchLast((msg) => ({
        ...msg,
        content: msg.content || err.message,
        error: true,
      }));
    } finally {
      clearTimeout(wakeTimer);
      setWaking(false);
      setBusy(false);
    }
  }

  return (
    <div className="cw-root">
      {open && (
        <section
          className="cw-panel"
          role="dialog"
          aria-label="Ask about Haroon"
        >
          <header className="cw-header">
            <div>
              <strong>Ask about Haroon</strong>
              <span>Answers come from his resume and projects</span>
            </div>
            <button
              className="cw-icon-btn"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </header>

          <div className="cw-messages" aria-live="polite">
            {messages.length === 0 && (
              <div className="cw-empty">
                <p>Not sure where to start? Try one of these.</p>
                {STARTERS.map((s) => (
                  <button key={s} className="cw-chip" onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`cw-msg cw-${m.role}${m.error ? " cw-error" : ""}`}
              >
                <p>
                  {m.content || (busy && i === messages.length - 1 ? "…" : "")}
                </p>
                {m.sources?.length > 0 && m.content && (
                  <small className="cw-sources">
                    Sources: {m.sources.join(", ")}
                  </small>
                )}
              </div>
            ))}

            {waking && (
              <p className="cw-note">
                Waking up the assistant. The first reply can take up to a
                minute.
              </p>
            )}
            <div ref={endRef} />
          </div>

          <form
            className="cw-form"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question"
              maxLength={500}
              aria-label="Your question"
            />
            <button type="submit" disabled={busy || !input.trim()}>
              Send
            </button>
          </form>
        </section>
      )}

      <button
        className="cw-launcher"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {open ? "Close" : "Ask about Haroon"}
      </button>
    </div>
  );
}
