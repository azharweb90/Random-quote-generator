import React, { useState } from "react";
import { quotes } from "./quotes";

export default function InspirationalQuotes({ count }) {
  const quote = quotes[count];

  return (
    <div>
      <h2>{quote.title}</h2>
      <i>{quote.author}</i>
    </div>
  );
}
