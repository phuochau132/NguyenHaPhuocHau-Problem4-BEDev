const MAX_SAFE_INTEGER: number = 5;
// The complexity: O(n)
function sum_to_n_a(n: number): number {
  if (!n) {
    return 0;
  }
  return n + sum_to_n_a(n - 1);
}
// The complexity: O(n)
function sum_to_n_b(n: number): number {
  let sum = 0;
  for (let index = n; index > 0; index--) {
    sum += index;
  }
  return sum;
}
//The complexity: O(1)
function sum_to_n_c(n: number): number {
  return (n * (n + 1)) / 2;
}
console.log("sum_to_n_a", sum_to_n_a(MAX_SAFE_INTEGER));
console.log("sum_to_n_b", sum_to_n_b(MAX_SAFE_INTEGER));
console.log("sum_to_n_c", sum_to_n_c(MAX_SAFE_INTEGER));
