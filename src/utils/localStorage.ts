export const saveToStorage = <T>(key: string, value: T) =>
  localStorage.setItem(key, JSON.stringify(value));
export const getFromStorage = <T>(key: string): T =>
  // @ts-expect-error
  localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
