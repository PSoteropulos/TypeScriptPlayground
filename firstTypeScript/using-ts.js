var button = document.querySelector("button");
var input1 = document.getElementById("num1"); //the bang tells ts this will never yield null, the as... is type casting 
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value)); //ts compiles down to regular javascript but addresses typing issues early (seen here when casting string inputs as nums)
});
