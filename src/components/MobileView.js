import React from "react";
import TabbedView from "./TabbedView";

export default function MobileView({ items }) {
  return (
    <div className="container box">
      <TabbedView items={items} />
    </div>
  );
}
