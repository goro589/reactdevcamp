let arr = [1,2,3,4,5,6,7,8,9,10]

const result = arr.filter(arr => (arr%2 == 0)).map((arr) => arr*1000)

console.log(result);