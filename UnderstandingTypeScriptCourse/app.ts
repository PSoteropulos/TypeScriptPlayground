const add = (n1: number, n2: number) => {
    // console.log(typeof(n1))
    // if (typeof n1 !== "number" || typeof n2 !== "number") { // this accomplishes the same thing non typescript way
    //     throw new Error("Incorrect input type"); // this is not optimal since we can check this at development instead of runtime
    // }
    return n1 + n2;
};

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

//key takeaway is js uses dynamic types (resolved at runtime) whereas ts uses static types (set during development)
// typescript is only during development as the browser can not execute ts code