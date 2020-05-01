import React, { useState } from "react";

export default function TabbedView({ className, items, renderItem }) {
  const [active, setActive] = useState(0);

  return (
    <div className="tabs-container">
      <nav className="tabs is-centered">
        <ul>
          {items.map(({ title }, idx) => (
            <li className={idx === active ? "is-active" : ""} key={title}>
              <a onClick={() => setActive(idx)}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <p className="content">{items[active].content}</p>
      </div>
    </div>
  );
}
