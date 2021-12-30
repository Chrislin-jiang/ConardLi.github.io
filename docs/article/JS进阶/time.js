const arr = [1, 2, 3, 4, 5, 6]
function whileFn(arr) {
  let i = 0
  const len = arr.length
  let res = []
  while (i++ < len) {
    res.push(arr[i] + 1)
  }
  return res
}
function forFn(arr) {
  const len = arr.length
  let res = []
  for (let i = 0; i < len; i++) {
    res.push(arr[i] + 1)
  }
  return res
}
console.time('while')
whileFn(arr)
console.timeEnd('while')
console.time('for')
forFn(arr)
console.timeEnd('for')