export function TotalAmount(amountData, qty) {
  let total = amountData.reduce((acc, item) => acc + item.price *item.qty, 0);
  return total;
}
