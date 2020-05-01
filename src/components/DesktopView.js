import React from "react";
import Tile from "./Tile";
import { useWindowDimentions } from "../contexts/WindowDimensionsProvider";

export default function DesktopView({ items }) {
  const { width } = useWindowDimentions();
  return (
    <div
      className={`title isancesor `.concat(width < 1088 ? `is-vertical` : ``)}
    >
      {items.map((item, idx) => (
        <Tile key={item.title} {...item} />
      ))}
    </div>
  );
}
