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
        var Hum = confirm("Are you a human?");
        if (Hum) {
            var Sex = confirm("Are you a man?") ? alert("Men are cool"): alert("Women are beautiful");
            var Race = confirm("Are you white?") ? alert("I like it"): alert("Congratulations");
            var Age = confirm("Are you older 18?") ? alert("18+"): alert("Sweet childhood");
            var Int = confirm("Do you like reading?") ? alert("I like books too") : alert("Try films");
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
    case "Comparison if":
        var age = +prompt("Сколько вам лет?","");
        if (age < 18){
            alert("школьник");
        }
        else {
            if (age < 30){
            alert("молодеж");}            
            else {
                if (age < 45){
                alert("зрелость");}
                else {
                    if (age < 60){
                    alert("закат");}
                    else {
                        if (age > 60){
                        alert("как пенсия?");}
                        else {
                            alert("то ли киборг, то ли ошибка"); 
                        }
                    }
                }
            }
        }
        break;
    case "Comparison: sizes":
        var Size =["34","36","38","40","42","44"]
        var Susa =[6,8,10,12,14,16]
        var SizeA = prompt("What is your size?")
        var Ind1 = Size.indexOf(SizeA)
        var SizeR = alert(Susa[Ind1])
        break;
    case "Ternary":
        var Women = confirm("Are you a woman?") ? alert("Oh, hi:)") : alert("Sorry, i talk to women only:)")
        break;
default: alert("Ooops..")}