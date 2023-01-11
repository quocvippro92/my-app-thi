
export const LocalStorage = (key, defaultValue) => {
  const get = () =>
    JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
  const set = (value) => localStorage.setItem(key, JSON.stringify(value));
  return { get, set };
};
