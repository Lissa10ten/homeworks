var Case = prompt("Which task do you want to see?")
switch(Case) {
    case "switch: sizes": 
            var size = prompt("What is your size?")
            switch (size.toUpperCase()) {
                case "XXS": alert("8")
                    break;
                case "XS": alert("10")
                    break;
                case "S": alert("12")
                    break;
                case "M": alert("14")
                    break;
                case "L": alert("16")
                    break;
                case "XL": alert("18")
                    break;
                case "XXL": alert("20")
                    break;
                case "XXXL": alert("22")
                    break;
                default: alert("Goodbye")
            }
            break;
    case "switch: if":
            var color = prompt("Введите цвет", "")
            if (color === "red") {
                document.write("<div style='background-color: red;'>красный</div>")
            }
            if ((color === "red") || (color === "black")) {
                document.write("<div style='background-color: black; color: white;'>черный</div>")
            }
            if (color === "blue") {
                document.write("<div style='background-color: blue;'>синий</div>")
            }
            if ((color === "blue") || (color === "green")) {
                document.write("<div style='background-color: green;'>зеленый</div>")
            }
            break;
    case "prompt: or":
            var age = prompt("How old are you?")
            if ((age === null) || (age === "") || (age === "0")) {
                alert("Error")
            }
            else {
                alert("Be Happy")
            }
            break;
    case "confirm: or this days":
            confirm("Shopping?") || alert("Bye")
            break;
    case "confirm: if this days":
            var a = confirm("Shopping?")
            if (a !== true) {
                alert("Bye")
            }
            break;
    case "default: or":
    case "default: if":
    case "triple prompt":
            var Name = prompt("Type your name") || "Ivanov"
            var Second = prompt("Second name") || "Ivan"
            var Last = prompt("Last name") || "Ivanych"
            alert("Thank you, " + Name + " " + Second + " " + Last)
            break;
    case "login and password":
                var Login=prompt("Enter your login")
                var Password=prompt("Enter your password")
                var rightUser = {
                    user: 'admin',
                    password: 'god'
                }
                if ((rightUser.user === Login) && (rightUser.password === Password)) {
                    alert("Congratulations!")
                }
                else alert("Try again!")
            }
            break;
    case "currency calc":
    case "currency calc: improved":
    case "currency calc: two rates":
    case "currency calc: if":
    case "Задание на синий пояс":
            var b = confirm("Are you going to sell UAH?")
            var c = +prompt("Which sum do you have?")
            var a = prompt("Which currency are you interested in?")
            var calc = {
                sell: { usd: (c/26.58),
                        eur: (c/29.79)
                    },
                buy: { usd: (c*26.75),
                        eur: (c*30.01)
                }
            }
            if (b==true) {
                switch (a.toLowerCase()) {
                    case "$":
                    case "dollar":
                    case "dollars":
                    case "usd": alert("You will have " +calc.sell.usd.toFixed(2) +" USD" )
                        break;
                    case "euro":
                    case "eur": alert("You will have " +calc.sell.eur.toFixed(2) +" EUR" )
                        break;
                    default: alert("Sorry, i know only 'usd' and 'eur'")
                }
            } else {
                switch (a.toLowerCase()) {
                    case "$":
                    case "dollar":
                    case "dollars":
                    case "usd": alert("You will have " +calc.buy.usd.toFixed(2) +" UAH" )
                        break;
                    case "euro":
                    case "eur": alert("You will have " +calc.buy.eur.toFixed(2) +" UAH" )
                        break;
                    default: alert("Sorry, i know only 'usd' and 'eur'")
                }
            }
            break;
    case "scissors":
            var player = prompt('Enter "stone" "scissors" or "paper"')
            var PlAnsw1 = (player.toLowerCase()==="stone")
            var PlAnsw2 = (player.toLowerCase()==="scissors")
            var PlAnsw3 = (player.toLowerCase()==="paper")
            var compAnsw
            var comp = Math.random() 
            var CAnsw1 = (comp < 0.3)
            var CAnsw2 = ((0.3 < comp) && (comp < 0.6))
            var CAnsw3 = (comp > 0.6)
            var Result
            if (PlAnsw1 || PlAnsw2 || PlAnsw3) {
                if (CAnsw1) {compAnsw=alert("My answear is stone ")}
                if (CAnsw2) {compAnsw=alert("My answear is scissors ")} 
                if (CAnsw3) {compAnsw=alert("My answear is paper ")} 
                if (PlAnsw1 && CAnsw1) {Result=alert("dead heat:)")}
                if (PlAnsw1 && CAnsw2) {Result=alert("You are winner")}
                if (PlAnsw1 && CAnsw3) {Result=alert("Computer wins")}
                if (PlAnsw2 && CAnsw1) {Result=alert("Computer wins")}
                if (PlAnsw2 && CAnsw2) {Result=alert("dead heat:)")}
                if (PlAnsw2 && CAnsw3) {Result=alert("You are winner")}
                if (PlAnsw3 && CAnsw1) {Result=alert("You are winner")}
                if (PlAnsw3 && CAnsw2) {Result=alert("Computer wins")}
                if (PlAnsw3 && CAnsw3) {Result=alert("dead heat:)")}
                }     
            else {
                compAnsw=alert("Sorry, i didn't understand you")
            }
            break;
    default: alert("Ooops..")}


