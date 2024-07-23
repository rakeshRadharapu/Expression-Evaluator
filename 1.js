function hlper() {
    var ele = document.getElementById("expression");
    console.log(ele.value)

    var resultEle = document.getElementById("result")
    let res = eval(ele.value)
    if(res)
    resultEle.innerText="Result is: " + res
    else
    resultEle.innerText="Please enter proper expression"
}