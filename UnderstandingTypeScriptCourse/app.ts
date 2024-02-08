const add = (
    n1: number,
    n2: number,
    showResult: boolean,
    resultPhrase: string
) => {
    // console.log(typeof(n1))
    // if (typeof n1 !== "number" || typeof n2 !== "number") { // this accomplishes the same thing non typescript way
    //     throw new Error("Incorrect input type"); // this is not optimal since we can check this at development instead of runtime
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    } else {
        return result;
    }
};

const number1 = 5; //in js and ts all numbers are number- no int or float
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
// const result = add(number1, number2, printResult);
// console.log(result);

//key takeaway is js uses dynamic types (resolved at runtime) whereas ts uses static types (set during development)
// typescript is only during development as the browser can not execute ts code
