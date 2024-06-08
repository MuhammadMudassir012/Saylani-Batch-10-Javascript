// for(i= 1; i<=1000; i++){
//     document.write(i,'-  Muhammad Mudassir Mushtaq Jan Muhammad Habib Kodvavi <br> <hr> <hr>')
// }

// var arr = [1,2,3,4,5,6,7,8,9,10]

// for(i = 0; i<10; i++){
//     document.write(arr[i] ,'<br>')
// }

// document.write(2+"x"+1+"="+2*1 + '<br>')
// document.write(2+"x"+2+"="+2*2 + '<br>')
// document.write(2+"x"+3+"="+2*3 + '<br>')
// document.write(2+"x"+4+"="+2*4 + '<br>')
// document.write(2+"x"+5+"="+2*5 + '<br>')z

var userInp = +prompt('Enter Table Number')
var userInp2 = +prompt('Enter Value')

for(var i = 1; i<=userInp2; i++){
    document.write(userInp+" "+"x"+" "+i+" "+"="+" "+userInp*i + "<br>")
}