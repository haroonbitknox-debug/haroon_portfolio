import { useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaXmark } from "react-icons/fa6";
import { RiRobot2Fill } from "react-icons/ri";
import "../ChatWidget.css";

// Your backend URL: no trailing slash, nothing after .vercel.app
const API_URL = "https://haroon-portfolio-chatbot.vercel.app";

const STARTERS = [
  "What projects has Haroon built?",
  "Does he know FastAPI and LangChain?",
  "How can I contact him?",
];

// Messages shown while the answer is being prepared. The phase comes from the server.
const PHASES = {
  start: ["Reaching the assistant…"],
  search: ["Fetching details about Haroon…", "Reading his projects…", "Checking his experience…"],
  write: ["Thinking…", "Crafting your answer…", "Putting it together…"],
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // {role, content, sources?, error?}
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [phase, setPhase] = useState("start");
  const [tick, setTick] = useState(0);
  const [slow, setSlow] = useState(false);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  // Wake a sleeping server as soon as the page loads.
  useEffect(() => {
    fetch(`${API_URL}/health`).catch(() => {});
  }, []);

  // Lets other pages open the chat: window.dispatchEvent(new Event("open-chat"))
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-chat", handler);
    return () => window.removeEventListener("open-chat", handler);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, phase, tick]);

  // Rotate the status text while waiting.
  useEffect(() => {
    if (!busy) return;
    const id = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(id);
  }, [busy]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const lines = PHASES[phase] || PHASES.start;
  const statusText =
    phase === "start" && slow
      ? "Waking up the assistant. This can take a moment…"
      : lines[tick % lines.length];

  async function send(text) {
    const question = text.trim();
    if (!question || busy) return;

    const history = messages.slice(-6).map(({ role, content }) => ({ role, content }));
    setMessages((m) => [...m, { role: "user", content: question }, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);
    setPhase("start");
    setTick(0);
    setSlow(false);

    const slowTimer = setTimeout(() => setSlow(true), 4000);
    const patchLast = (fn) =>
      setMessages((m) => m.map((msg, i) => (i === m.length - 1 ? fn(msg) : msg)));

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, history }),
      });
      if (res.status === 429) throw new Error("You're sending messages too quickly. Wait a minute and try again.");
      if (!res.ok || !res.body) throw new Error("The assistant is unavailable right now.");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        clearTimeout(slowTimer);
        setSlow(false);
        buffer += decoder.decode(value, { stream: true });

        const events = buffer.split("\n\n");
        buffer = events.pop(); // keep any incomplete event for the next read

        for (const evt of events) {
          if (!evt.startsWith("data: ")) continue;
          const data = JSON.parse(evt.slice(6));
          if (data.type === "status" && PHASES[data.phase]) {
            setPhase(data.phase);
            setTick(0);
          } else if (data.type === "token") {
            patchLast((msg) => ({ ...msg, content: msg.content + data.text }));
          } else if (data.type === "sources") {
            patchLast((msg) => ({ ...msg, sources: data.sources }));
          } else if (data.type === "error") {
            throw new Error(data.message);
          }
        }
      }
    } catch (err) {
      patchLast((msg) => ({ ...msg, content: msg.content || err.message, error: true }));
    } finally {
      clearTimeout(slowTimer);
      setSlow(false);
      setBusy(false);
    }
  }

  return (
    <div className="cw-root">
      {open ? (
        <section
          className="cw-panel"
          role="dialog"
          aria-label="Ask about Haroon"
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        >
          <header className="cw-header">
            <span className="cw-avatar"><RiRobot2Fill /></span>
            <div className="cw-title">
              <strong>Haroon's Assistant</strong>
              <span>Answers come from his resume and projects</span>
            </div>
            <button className="cw-icon-btn" onClick={() => setOpen(false)} aria-label="Close chat">
              <FaXmark />
            </button>
          </header>

          <div className="cw-messages" aria-live="polite">
            {messages.length === 0 && (
              <div className="cw-empty">
                <span className="cw-empty-icon"><RiRobot2Fill /></span>
                <h3>Hi, I'm Haroon's assistant</h3>
                <p>Ask me about his projects, skills, or experience.</p>
                {STARTERS.map((s) => (
                  <button key={s} className="cw-chip" onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m, i) => {
              const isLast = i === messages.length - 1;
              if (m.role === "assistant" && !m.content && busy && isLast) {
                return (
                  <div key={i} className="cw-msg cw-assistant cw-typing" role="status">
                    <span className="cw-dots"><i /><i /><i /></span>
                    <span key={statusText} className="cw-status">{statusText}</span>
                  </div>
                );
              }
              return (
                <div key={i} className={`cw-msg cw-${m.role}${m.error ? " cw-error" : ""}`}>
                  <p>{m.content}</p>
                  {m.sources?.length > 0 && m.content && (
                    <small className="cw-sources">Sources: {m.sources.join(", ")}</small>
                  )}
                </div>
              );
            })}
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
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question"
              maxLength={500}
              aria-label="Your question"
            />
            <button type="submit" disabled={busy || !input.trim()} aria-label="Send">
              <FaPaperPlane />
            </button>
          </form>
        </section>
      ) : (
        <button className="cw-launcher" onClick={() => setOpen(true)} aria-label="Open chat with Haroon's assistant">
          <RiRobot2Fill />
          <span className="cw-launcher-label">Ask AI</span>
        </button>
      )}
    </div>
  );
}
