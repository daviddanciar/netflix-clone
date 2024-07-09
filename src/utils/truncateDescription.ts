export const truncate = (string, n): string => {
  return string?.length > n ? string.substr(0, n - 1) + '...' : string;
};
