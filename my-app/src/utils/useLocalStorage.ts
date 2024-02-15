/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useState } from "react";
import { OrderProductType } from "../types/OrderProductType";


export const useLocalStorage = (key: string, defaultValue: OrderProductType[]) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key)
      if (value) {
        console.log(value)
        return JSON.parse(value)
      } else {
          localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue
      }
  } catch (error) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue
  }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageValue));
  }, [localStorageValue, key]);
  return [localStorageValue, setLocalStorageValue];
};

export default useLocalStorage;