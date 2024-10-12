import React, { useState } from "react";
import "./Counter.css";

export default function Counter({ count }) {
  return (
    <>
      <div>
        <h1>{count + 1}</h1>
      </div>
    </>
  );
}
