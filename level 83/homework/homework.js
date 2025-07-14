// === 6: Function scope ===
function demoFunction() {
  let localVar = "I'm local!";
}
try {
  console.log(localVar); // ReferenceError
} catch (e) {
  console.log("6) Error accessing localVar:", e.message);
}

// === 7: Nested function modifying outer variable ===
function outerFunction() {
  let count = 0;
  function innerFunction() {
    count += 5;
  }
  console.log("7) Before innerFunction:", count);
  innerFunction();
  console.log("7) After innerFunction:", count);
}
outerFunction();

// === 8: var vs let vs const in block scope ===
function testScope() {
  {
    var a = "var scoped";
    let b = "let scoped";
    const c = "const scoped";
  }
  console.log("8) var:", a);
  try {
    console.log("8) let:", b);
  } catch (e) {
    console.log("8) Error accessing let:", e.message);
  }
  try {
    console.log("8) const:", c);
  } catch (e) {
    console.log("8) Error accessing const:", e.message);
  }
}
testScope();

// === 9: eval basic expression ===
console.log("9) eval '2 + 2':", eval("2 + 2"));

// === 10: eval declare variable ===
eval("var x = 10;");
console.log("10) x after eval:", x);

// === 11: eval function declaration ===
eval("function greet() { return 'Hello'; }");
console.log("11) greet():", greet());

// === 12: eval access external variable ===
let message = "Hi";
eval("console.log('12) message via eval:', message);");

// === 13: prompt and eval input ===
try {
  let input = prompt("13) Enter expression to eval:");
  console.log("13) Result:", eval(input));
} catch (e) {
  console.log("13) Eval error:", e.message);
}

// === 14: isNaN with a string ===
console.log("14) isNaN('hello'):", isNaN("hello"));

// === 15: prompt and check isNaN ===
try {
  let userInput = prompt("15) Enter a number:");
  console.log("15) isNaN(user input):", isNaN(userInput));
} catch (e) {
  console.log("15) Prompt error:", e.message);
}

// === 16: isNaN with various values ===
let values = [NaN, undefined, null, true, "123"];
values.forEach((val, i) => {
  console.log(`16) isNaN(${val}):`, isNaN(val));
});

// === 17: parseInt with "42" ===
console.log("17) parseInt('42'):", parseInt("42"));

// === 18: parseInt with "42px" ===
console.log("18) parseInt('42px'):", parseInt("42px"));

// === 19: parseInt with "abc" ===
console.log("19) parseInt('abc'):", parseInt("abc"));

// === 20: parseInt on array ===
["10", "20", "30"].forEach((str, i) => {
  console.log(`20) parseInt(${str}):`, parseInt(str));
});

// === 21: parseFloat with "3.14" ===
console.log("21) parseFloat('3.14'):", parseFloat("3.14"));

// === 22: parseFloat with "3.14abc" ===
console.log("22) parseFloat('3.14abc'):", parseFloat("3.14abc"));

// === 23: parseFloat with "abc3.14" ===
console.log("23) parseFloat('abc3.14'):", parseFloat("abc3.14"));

// === 24: parseFloat with "100" ===
console.log("24) parseFloat('100'):", parseFloat("100"));

// === 25: parseFloat on mixed array ===
["10.5", "20.0", "abc", "30.7xyz"].forEach((str, i) => {
  console.log(`25) parseFloat(${str}):`, parseFloat(str));
});