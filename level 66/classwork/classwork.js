function concStrings() {
    let str1 = prompt("პირველი სტრიქონი:");
    let str2 = prompt("მეორე სტრიქონი:");
    
    let result = str1 + " " + str2;
    console.log(result);
}

function comparestrings() {
    let str1 =prompt("enter info:")
    let str2 =prompt("enter second info:")
    console.log(str1 == str2)
     console.log(str2 === str1)
}
comparestrings()


function compareNums(num1, num2) {
    console.log(`{num1} > {num2}: {num1 > num2}`);
    console.log(`{num1} >= {num2}: {num1 >= num2}`);
    console.log(`{num1} < {num2}: {num1 < num2}`);
    console.log(`{num1} <= {num2}: {num1 <= num2}`);
    console.log(`{num1} == {num2}: {num1 == num2}`);
    console.log(`{num1} === {num2}: {num1 === num2}`);
    console.log(`{num1} != {num2}: {num1 != num2}`);
    console.log(`{num1} !=={num2}: {num1 !== num2}`);
}

compareNums(10, 5);
compareNums(7, 7);
compareNums('5', 5);