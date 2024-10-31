export const calculateTotalPages = (count: number | undefined, pageSize: number) => {
  const t = (count ?? 0) / pageSize;
  return Math.ceil(t);
};
