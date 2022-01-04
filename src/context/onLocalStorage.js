import React, { useState } from "react";

function getSave(key, initial) {
  const saveValues = JSON.parse(localStorage.getItem(key));

  if (saveValues) return saveValues;

  if (initial instanceof Function) return initial();

  return initial;
}

export default function onLocalStorage(initial) {
  const [value, setValue] = useState(() => {
    return getSave(key, initial);
  });

  return [value, setValue];
}
