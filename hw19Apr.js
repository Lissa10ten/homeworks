var Case = prompt("Which task do you want to see?")
switch(Case) {
    case "Number: age":        
        var age = prompt("How old are you?")
        var year = 2019 - age
            if ((age === null) || (age === "") || (age === "0")) {
                alert("Error")
            }
            else {
                alert("I guess, you were born in " +year)
            }
            break;
    case "Number: temperature":
        var Tempr = prompt("how many degrees to convert?");
        var Tname = prompt("Conver into 'C' or 'F'?");
        var tempR;
        if (((Tname.toUpperCase() ==='F') || (Tname.toUpperCase()==='C')) && ((Tempr!=='') && Tempr!== null)) {
            (Tname.toUpperCase() === 'F') 
            ? tempR = alert(((Tempr * 9/5) + 32).toFixed(2)) 
            : tempR = alert(((Tempr-32) * 5/9).toFixed(2))
        } else alert("Sorry, enter right value")
        break;
    case "Number: divide": 
        var Ex = prompt("x / y = z", "x is")
        var Ey = prompt("x / y = z", "y is")
        var Ez = alert("Rounded answear is  " +Math.round(Ex / Ey))
    case "Number: odd":
        var n1 = prompt("Enter a number")
        var n1o = n1 % 2
        var n1A
        if ((n1 !== "") && (n1 !== null)) {
            if(n1o === 0) {n1A=alert("Your number is even")}
            if(n1o === 1)  {n1A=alert("Your number is odd")}
            else alert("Enter a number")
        } else alert("Sorry")
        break;
    case "String: greeting":
        var Name = prompt("Type your name") 
        if ((Name!==null) && (Name!=='')) {alert("Hello, " + Name)}
        else alert("Goodbye")
        break;
    case "String: lexics":
        var Al = prompt("How are you today?")
        Al.toLowerCase().includes("bad")
        break;
    case ""