export const convertAmount = (amount: string) => {
  const num_amount = Number(amount);
  return num_amount.toLocaleString("ko-KR");
};
