// data type

//'hello world' // string
//1,2,123 // integer
//1.3  // float


//alert(123)

 //var abc = 'Muhammad Mudassir'
 //alert(abc)

//document.write('<p>'+'hello world'+'</p>')

//var firstName = 'Muhammad '
//var lastName = 'Mudassir'
//document.write(firstName+lastName)

// var num1 = "50"
// var num2 = 10
// document.write(num1+num2)

// var a = +prompt("Enter Valve 1")
// var b = +prompt("Enter Value 2")
// document.write(a - b )


var num1 = +prompt('Enter Value 1')
var num2 = +prompt('Enter Value 2')
// var num3 = +prompt('Enter Value 3')
// var num4 = +prompt('Enter Value 4')
var add = num1 + num2
var min = num1 - num2
var div = num1 / num2
var mul = num1 * num2

document.write(
    "<table border='1px'>"+
    "<tr>"+
    "<th>"+"ADDITION"+"</th>"
    +"</tr>"+
    "<tr>"+
    "<td>"+add+"</td>"
    +"</tr>"   
    +"</table>"
)

document.write(
    "<table border='1px'>"+
    "<tr>"+
    "<th>"+"SUBTRACTION"+"</th>"
    +"</tr>"+
    "<tr>"+
    "<td>"+min+"</td>"
    +"</tr>"   
    +"</table>"
)

document.write(
    "<table border='1px'>"+
    "<tr>"+
    "<th>"+"DIVISION"+"</th>"
    +"</tr>"+
    "<tr>"+
    "<td>"+div+"</td>"
    +"</tr>"   
    +"</table>"
)

document.write(
    "<table border='1px'>"+
    "<tr>"+
    "<th>"+"MULTIPLICATION"+"</th>"
    +"</tr>"+
    "<tr>"+
    "<td>"+mul+"</td>"
    +"</tr>"   
    +"</table>"
)