export default function intentionalError() {
  const number = Math.floor(Math.random() * 100 + 1);
  return number >= 15;
}
