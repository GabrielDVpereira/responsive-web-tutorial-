import React from "react";

export default function Tile({ title, content }) {
  return (
    <div className="title is-parent notification box">
      <div className="tile is-child">
        <p className="title">{title}</p>
        <span className="content">{content}</span>
      </div>
    </div>
  );
}
