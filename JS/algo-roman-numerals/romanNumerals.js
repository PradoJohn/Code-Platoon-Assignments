let roman_numerals = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
}

function toRomanLazy(num) {
  
  roman_numerals.push({CM:num})

  
  return roman_numerals;
}

function toRoman(num) {
  return "";
}
console.log(toRomanLazy(5))
module.exports = { toRoman, toRomanLazy };
