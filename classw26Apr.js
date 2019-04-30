 
// confirm() && null || false
// confirm() && "dskljf" || false
// (confirm() && "ddd") &&

// var i = 0
// arr[i++] = i++

//  arr=[]
//  var i=0
//  arr[i++] = i*5
//  arr [5,10,15,20]

// var i = 0
// arr[i++] = ++i
//  =>
// arr = []


{/* <body>
<div>
    <span>Enter a data please:</span><br/>
    <input type='text' id='name'>
    <input type='text' id='surname'>
</div>
<div>
    <button id='ok'>OK</button>
    <button id='cancel'>Cancel</button>
</div>
</body> */}




var html = {
    tagName: "body",
    paired: true,
    children: [{
        tagName: "div",
        paired: true,
        children: [{
            tagName: "span",
            paired: true,
            content: "Enter a data please:",
        },
        {
            tagName: "br",
            paired: false,
        },
        {
            tagName: "input",
            paired: true,
            attrib {
               type: "text",
               id: "name",
            }
        },
        {
            tagName: "input",
            paired: true,
            attrib {
               type: "text",
               id: "name", 
            }
        }]
    }],
}




for (var key in table) {
    console.log(key, table[key])
}