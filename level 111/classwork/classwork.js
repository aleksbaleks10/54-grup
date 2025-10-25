function Array(arr) {
  arr.forEach(num => console.log(num));

  const newArr = [...arr.map(num => num > 0 ? num + 10 : num - 10)];

  return newArr;
}
