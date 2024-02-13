import { useEffect, useState } from "react";

export const useLocalStorage = (key:string, defaultValue:string) => {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      const initialValue = JSON.parse(saved);
      return initialValue ?? defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};

export default useLocalStorage;
