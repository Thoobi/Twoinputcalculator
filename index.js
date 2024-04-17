// document.getElementById("tolNum").addEventListener("click", addNumber);
// document.getElementById("tolNum").addEventListener("click", subNum);
// document.getElementById("tolNum").addEventListener("click", mulNum);
// document.getElementById("reset1").addEventListener("click", resetIt);

// function liNumber(){
//     const firstNum = parseFloat(document.getElementById("first").value);
//     const secondNum = parseFloat(document.getElementById("second").value);
//     let totalNum = firstNum + secondNum;
//     // document.getElementById("total") = totalNum;
//     const all = document.getElementById("total").innerHTML = totalNum;
//     // console.log(totalNum);
//     // console.log(all);
// }   

function addNumber(){
    const firstNum = parseFloat(document.getElementById("first").value);
    const secondNum = parseFloat(document.getElementById("second").value);
    let totalNum = firstNum + secondNum;
    const all = document.getElementById("total").innerHTML = totalNum;
    console.log(totalNum);
    console.log(all);
}   

function subNum(){
    const firstNum = parseFloat(document.getElementById("first").value);
    const secondNum = parseFloat(document.getElementById("second").value);
    let totalNum = firstNum - secondNum;
    const all = document.getElementById("total").innerHTML = totalNum;
    console.log(totalNum);
    console.log(all);
}

function mulNum(){
    const firstNum = parseFloat(document.getElementById("first").value);
    const secondNum = parseFloat(document.getElementById("second").value);
    let totalNum = firstNum * secondNum;
    const all = document.getElementById("total").innerHTML = totalNum;
    console.log(totalNum);
    console.log(all);
}

function divNum(){
    const firstNum = parseFloat(document.getElementById("first").value);
    const secondNum = parseFloat(document.getElementById("second").value);
    let totalNum = firstNum / secondNum;
    const all = document.getElementById("total").innerHTML = totalNum.toFixed(1);
    console.log(totalNum);
    console.log(all);
}

function remain(){
    const firstNum = parseFloat(document.getElementById("first").value);
    const secondNum = parseFloat(document.getElementById("second").value);
    let totalNum = firstNum % secondNum;
    const all = document.getElementById("total").innerHTML = totalNum;
    console.log(totalNum);
    console.log(all);
}

function resetIt()
{
    const first1 = document.getElementById("first").value ="";
    const second1 = document.getElementById("second").value = "";
    const total1 = document.getElementById("total").innerHTML = "";
    console.log(first1);
    console.log(second1);
    console.log(total1);
}


