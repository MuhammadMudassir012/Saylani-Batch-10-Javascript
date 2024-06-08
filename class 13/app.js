// var date = new Date()
// var convert = date.toString()
// var copy = convert.slice(16,25)
// document.write(copy)

// var date = new Date()
// var getday = date.getTime()
// document.write(getday)


// .toFixed()
 
//  switch method

// var prompt = prompt('Enter number')

// switch(prompt){
//     case '5' :
//     document.write('han sahi ha');
//     break


//     case '6' :
//     document.write('han galat ha');
//     break

//     default :
//     document.write('Invalid number')
// }


//  .replace

// var text = 'hello world hello world hello world hello world '
// var text2 = text.replace(/world/g,'Pakistan')
// document.write(text2) 

// Age calculator incomplete

// function calculate(){
    //     var date = new Date()
    //     var datemili = date.getTime()

    // var getinp = document.getElementById('inp')
    // var dob = new Date('14 aug, 1947')
    // var dobmili = dob.getTime()
    
    // var minus = datemili - dobmili
    // var formula = minus / (1000*60*60*24*365)
    // document.write(Math.floor(formula))
    
    // var getbtn = document.getElementById('btn')
    // getinp.appendChild(getbtn)
    // }
    
    
//  Age Calculator
    
    var date = new Date()
    var datemili = date.getTime()
    
    var dob = new Date('14 aug, 2000')
    var dobmili = dob.getTime()

    var minus = datemili - dobmili
    var formula = minus / (1000*60*60*24*365)
    document.write(Math.floor(formula))

















