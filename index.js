res = 0
min = 1
max = 100
let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
maxLimit = 10
count = 0


function myFunc() {

    let UserInput = document.getElementById("Num").value
    if (maxLimit > count) {

        if (randomInt > UserInput) {
            document.getElementById("myPara").innerHTML = "User Entered Input is less Than The Random Number";
            count += 1
            document.getElementById("myChances").innerHTML = maxLimit - count
        }

        else if (randomInt < UserInput) {
            document.getElementById("myPara").innerHTML = "User Entered Input is greater Than The Random Number";
            count += 1
            document.getElementById("myChances").innerHTML = maxLimit - count
        }

        else {
            document.getElementById("myPara").innerHTML = "Yessss! Your Guess Correct " + " And You take  = " + count + "Chances";
            document.getElementById("myPara").style.backgroundColor = "#001F3F"
            document.getElementById("myPara").style.color = "#FFD700"
            document.getElementById("BigDIV").style.backgroundColor = "#696969"
            endGame();

        }
    }


    if (count == 10) {

        document.getElementById("myPara").innerHTML = "You lose this game " + " Correct Number is   = " + randomInt;
        document.getElementById("myPara").style.backgroundColor = "#000000"

        document.getElementById("myPara").style.color = "#FF0000"
        document.getElementById("BigDIV").style.backgroundColor = "#696969"
        endGame();


    }
}

function reset() {
    count = 0;
    randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("Num").value = "";
    document.getElementById("myPara").innerHTML = "";
    document.getElementById("myPara").style.color = "black"
    document.getElementById("myPara").style.backgroundColor = "lightgoldenrodyellow";
    document.getElementById("BigDIV").style.backgroundColor = "";
    document.getElementById("myChances").innerHTML = maxLimit;
}

function endGame() {
    setTimeout(() => {
        let ans = confirm("Play Again?");
        if (ans) {
            reset();
        }
        else
        {
            alert("Thank You !!! Play Next Time")
        }
    }, 2000);
}