import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

  const getValue = () => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  };

  const setValue = (value) => {
    setSavedValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  const [savedValue, setSavedValue] = useState(getValue);
  return [savedValue, setValue];
};
