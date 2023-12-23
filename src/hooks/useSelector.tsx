import React, { useState } from "react";

export default function useSelector() {
  const [selectors, setSelectors] = useState({ 0: "", 1: "", 2: "", 3: "" });
  return {
    selectors,
    setSelectors,
  };
}
