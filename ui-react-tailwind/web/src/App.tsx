import { useState } from "react";

export function App() {
  const [clicks, setClicks] = useState(0);
  return (
    <box className="absolute inset-0 flex items-center justify-center bg-slate-50 font-sans">
      <box
        role="button"
        tabIndex={0}
        className="counter-button flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-lg text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-blue-500"
        onClick={() => setClicks((value) => value + 1)}
      >
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
        {`Clicked ${clicks} time${clicks === 1 ? "" : "s"}`}
      </box>
    </box>
  );
}
