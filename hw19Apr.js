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
    case "Boolean":
    case "Boolean: if":
    case "Array: booleans":
        var Q = {
            Hum : confirm("Are you a human?"),
            Sex : confirm("Are you a man?"),
            Race : confirm("Are you white?"),
            Age : confirm("Are you older 18?"),
            Int : confirm("Do you like reading?")
        }
        if (Hum) {
            if (Sex) {alert("Men are cool")} else alert("Women are beautiful")
            if (Race) {alert("I like it")} else alert("Congratulations")
            if (Age) {alert("You are an adult")} else alert("Sweeet childhood")
            if (Int) {alert("I like books too")} else alert("Try films")
            // var Int = confirm("Do you like reading?")
            // (Int) ? alert("I like books too") : alert("Try films")
            // TypeError: confirm(...) is not a function
        } else alert("I talk to humans only")
        break;
    case "Array: plus":
        var Arr = [1,20,300,4,5,6]
        // Arr[2] = 
        Arr[0]+Arr[1]
        break;
    case "Array: plus string":
        var ArrS = ['q', 'w', 'e', 'r']
        ArrS[0]+ArrS[2]
        break;
    case "Object: real":
    case "Object: change":
        var myQ = {
            mSex: "female",
            mRace: "white",
            mAge: 20,
            mInt: "theatre"
        }
        // myQ[mAge] = ++myQ[mAge]
        myQ.mAge = ++myQ.mAge
        var newAge = alert(myQ.mAge)
        break;
    