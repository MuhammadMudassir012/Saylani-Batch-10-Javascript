// function abc(){
//     alert('Welcom to the website')
// }


// function abc(){

//     document.getElementById('ttt').innerHTML = 'lorem ipsum nhuud fejfds dhwujddb bdhhjaj'
//     document.getElementById('anc').style.display = 'none'



    // var a = 'lorem ipsum nhuud fejfds dhwujddb bdhhjaj'
    // document.getElementById('anc').innerHTML = a

    // document.getElementById('abc').innerHTML = 'Hello world'
// }



       //  Calculator

function btn(e){
    document.getElementById('inp').value += e
}

function eq(){
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}

function clr(){
    document.getElementById('inp').value = ''
}

function clrr(){
    var a = document.getElementById('inp')
    a.value = a.value.slice(0,-1)
}
















