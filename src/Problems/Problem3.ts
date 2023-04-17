export const generateId = (): string => {
  const randStr = () => Math.random().toString(36).substring(2, 4).toUpperCase();
  return `${randStr()}-${randStr()}-${randStr()}-${randStr()}`;
};