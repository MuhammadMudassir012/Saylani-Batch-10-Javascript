// var a = document.childNodes[1].childNodes[2].childNodes[1].textContent = 'Hello Pakistan'

// console.log(a)

// var a = document.getElementById('getUl')
// console.log(a.childNodes[3].textContent = 'HEHEHE')

// var a = document.getElementById('getli')
// console.log(a.parentNode.childNodes[1].textContent += ' About')


function changecolor(){
    var getElement = document.getElementsByTagName('p')
    for(var i = 0; i < getElement.length; i++){
        getElement[i].className = 'abc'
        getElement[i].style.backgroundColor = 'black'
        getElement[i].style.color = 'white'
    }
}