export default (string, onlyEnds) => {
  if (onlyEnds) {
    return string.trim();
  }

  return string.trim().replace(/\s+/g, '');
};
