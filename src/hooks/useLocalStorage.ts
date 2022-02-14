import { useState } from 'react';

export function getStorageValue(key: string, defaultValue: unknown) {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : defaultValue;
}

const useLocalStorage = (key: string, defaultValue: unknown) => {
  const [storedValue, setStoredValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  function setValue(value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  }

  return [storedValue, setValue];
};

export default useLocalStorage;
