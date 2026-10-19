import { useEffect, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Types a word, pauses, erases it, then moves to the next (loops). Pass a constant array. */
export default function Typewriter({ words, typeSpeed = 80, eraseSpeed = 40, hold = 1500 }) {
  const reduce = prefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = words[index];
    let delay = erasing ? eraseSpeed : typeSpeed;
    if (!erasing && text === word) delay = hold;
    else if (erasing && text === "") delay = 350;

    const id = setTimeout(() => {
      if (!erasing && text === word) setErasing(true);
      else if (erasing && text === "") {
        setErasing(false);
        setIndex((i) => (i + 1) % words.length);
      } else setText(word.slice(0, text.length + (erasing ? -1 : 1)));
    }, delay);
    return () => clearTimeout(id);
  }, [text, erasing, index, words, typeSpeed, eraseSpeed, hold, reduce]);

  if (reduce) return <span className="typed">{words.join(" · ")}</span>;

  return (
    <>
      <span className="visually-hidden">{words.join(", ")}</span>
      <span className="typed" aria-hidden="true">{text}</span>
      <span className="typed-cursor" aria-hidden="true" />
    </>
  );
}
