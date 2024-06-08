var allUsers = []
var users = localStorage.getItem('Users')
if(users !== null){
    allUsers = JSON.parse(users)
}

function signup(){
    var email = document.getElementById('semail').value
    var password = document.getElementById('spass').value
    var obj = {
        email : email,
        password : password
    }
    allUsers.push(obj)
    localStorage.setItem('Users',JSON.stringify(allUsers))
    location.href = './signin.html'
}

function signin(){
    var email = document.getElementById('lemail').value
    var password = document.getElementById('lpass').value
    var filterUser = allUsers.filter(function(obj){
        return obj.email === email && obj.password === password
    })
    if(filterUser.length){
        alert('Login Successful')
        location.href = './welcome.html'
    }
    else{
        alert('Please Sign Up First')
        location.href = './signup.html'
    }
}

// function logout(){
//     localStorage.clear()
//     location.href = './signup.html'
// }