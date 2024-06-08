// var arr = {
//     s_id : '01',
//     s_name : 'Muhammad Mudassir',
//     s_age : '18',
//     s_rollno : '805468',
//     s_depart : 'SMIT',
// }
 
// for(var key in arr){
//     document.write(key,' : ',arr[key],'<br>')
// }


// localStorage.setItem('firstName','Muhammad')
// localStorage.setItem('lastName','Mudassir')

// localStorage.clear()

// sessionStorage.setItem('firstName','Muhammad Mudassir')



function signup(){
    var email = document.getElementById('semail').value
    var password = document.getElementById('spass').value
    localStorage.setItem('Email',email)
    localStorage.setItem('Password',password)
    location.href = './signin.html'
}

function signin(){
    var email = document.getElementById('lemail').value
    var password = document.getElementById('lpass').value
    if(localStorage.getItem('Email') == email && localStorage.getItem('Password') == password){
        location.href = './welcome.html'
    }
    else{
        alert('Chal Nikal')
    }
}

function logOut(){
    localStorage.clear()
    location.href = './signup.html'
}


























// document.write(arr.s_id,arr.s_name)