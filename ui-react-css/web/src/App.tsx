import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  return (
    <box className={dark ? "page dark" : "page"}>
      <box className="card">
        <box className="title">Counter</box>
        <box className="count">{`${count}`}</box>
        <box className="actions">
          <Button onClick={() => setCount((value) => value - 1)}>-</Button>
          <Button primary onClick={() => setCount((value) => value + 1)}>+</Button>
          <Button onClick={() => setCount(0)}>Reset</Button>
        </box>
        <Button onClick={() => setDark((value) => !value)}>{dark ? "Light theme" : "Dark theme"}</Button>
      </box>
    </box>
  );
}

function Button(props: { primary?: boolean; onClick: () => void; children: string }) {
  return (
    <box role="button" tabIndex={0} className={props.primary ? "button primary" : "button"} onClick={props.onClick}>
      {props.children}
    </box>
  );
}
