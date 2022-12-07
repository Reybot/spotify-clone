export function formatTime(seconds) {
  const rest = (seconds % 60).toFixed(0);
  const minutes = Math.floor(seconds / 60);
  const restSeconds = rest < 10 ? `0${rest}` : rest;
  return `${minutes}:${restSeconds}`;
}
