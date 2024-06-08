   // getattribute

// function foo(){
//     var a = document.getElementById('inp')
//     var b = a.getAttribute('class')
//     console.log(b)
// }

   // hasattribute

// function foo(){
//     var a = document.getElementById('inp')
//     var b = a.hasAttribute('class')
//     console.log(b)
// }

   // setattribute

// function foo(){
//     var a = document.getElementById('inp')
//     var b = a.setAttribute('class','abc')
//     console.log(b)
// }

var getul = document.getElementById('ul')

function foo(){
    var a = document.getElementById('inp')
    var li = document.createElement('li')
    var litext = document.createTextNode(a.value)
    li.appendChild(litext)
    getul.appendChild(li)
    a.value = '' 
    var deletebtn = document.createElement('button')
    var deletebtntext = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtntext)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick','del(this)')
    var editbtn = document.createElement('button')
    var editbtntext = document.createTextNode('Edit')
    editbtn.appendChild(editbtntext)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick','editfun(this)')
   }
   
   function deleteall(){
      getul.innerHTML = ''
   }
   function del(e){
      e.parentNode.remove()
   }
   function editfun(a){
      var edit = prompt('Enter Edit Value',a.parentNode.firstChild.nodeValue)
      a.parentNode.firstChild.nodeValue = edit  
   }
   
   // a.parentNode.childNode = edit2
   // var edit2 = edit.value = ''
      
   
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
    }
    else{
        alert('Chal Nikal')
    }
    location.href = './welcome.html'
}

function logOut(){
    localStorage.clear()
    location.href = './signup.html'
}










