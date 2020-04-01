import React from "react";

export default function GifList(props) {
  return (
    <li>
      <img src={props.gif.images.original.url} alt="" />
    </li>
  );
}
