// for(var i = 1; i > 0; i++){
//     console.log(i)
// }

       //     IndexOf

// var arr = ['mudassir','jahnzaib','ahmed','shazaib','faiz ahmed','arshad','mudassir','jahnzaib']

// document.write(arr.indexOf('jahnzaib',2))

      //    LastIndexOf

// var arr = ['mudassir','jahnzaib','ahmed','shazaib','faiz ahmed','arshad','mudassir','jahnzaib']

// document.write(arr.lastIndexOf('jahnzaib',6))

     //    CharAt

// var naam = 'red'

// document.write(naam.charAt(1))  

    //  floor

// var per = 72.4

// document.write(Math.floor(per))

    // round

// var per = 72.6

// document.write(Math.round(per))

    // ceil

// var per = 72.4

// document.write(Math.ceil(per))

    //  random

// console.log(Math.random() * 2)


var teamName = prompt('Enter Team Name') 
var teamName2 = prompt('Enter Team Name')

var toss = Math.random() * 2
var res = Math.floor(toss)  

if(res == 0){
    document.write(teamName+" head win")
}
else{
    document.write(teamName2+" tails win")
}















































