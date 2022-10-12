const compute = () => {
    const num0 = document.querySelector("#num1").value;
    const fnum = document.querySelector("#fnum");
    const num1 = document.querySelector("#num2").value;
    const sol = document.querySelector("#solution");
    const res = document.querySelector("#result");
    fnum.innerHTML = "Total = " + '\n' + Number(num0) * Number(num1);

    const solution = 'Solution'
    const symbol = '*';

    sol.innerHTML = `${solution}`;
    res.innerHTML = `${num0}` + `${symbol}` + `${num1}`;


    if(num0 == '' || num1 == '') {
        alert("Insert")
    }
}