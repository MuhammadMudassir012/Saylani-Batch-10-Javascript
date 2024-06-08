var userInp = prompt('Enter City Name')
var arr = ['Karachi','Lahore','Islamabad','Peshawar','Quetta']
var userInp2 = userInp.slice(0,1).toUpperCase()
var userInp3 = userInp.slice(1).toLowerCase()
var finalUser = userInp2 + userInp3


var match = false

for(var i = 0; i < arr.length; i++){
    if(finalUser == arr[i]){
        match = true
        alert('City Found')
        break
    }
}

if(match == false){
    alert('City Not Found')
}