function foo(x) {
  if (x === null) {
    return 0;
  } else if (x === undefined) {
    return -1; // or handle undefined as needed
  } else {
    return x + 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: -1