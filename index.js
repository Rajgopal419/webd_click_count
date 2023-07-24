let red=document.getElementById('red')
let yellow=document.getElementById('yellow')
let green=document.getElementById('green')
let reset_button=document.getElementById('reset')


// red.onclick=()=>console.log('you clicked red')
// yellow.onclick=()=>console.log('you clicked yellow')

// green.onclick=()=>console.log('you clicked green')



const squares=document.querySelectorAll('.colorsquares')
// console.log(squares[0].value)
console.log(squares)
// console.log(red.value);
// squares.forEach(square => console.log(square.value))




const timesClicked={
    'red':0,
    'yellow':0,
    'green':0
}

// --------********************--a-----c--------t--------i-----o----n--------##############################&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


red.onclick=()=>{
    timesClicked['red']+=1
    // console.log(timesClicked['red'])
    red.innerText=timesClicked['red']

}

yellow.onclick=()=>{
    timesClicked['yellow']+=1
    // console.log(timesClicked['red'])
    yellow.innerText=timesClicked['yellow']

}


green.onclick=()=>{
    timesClicked['green']+=1
    // console.log(timesClicked['red'])
    green.innerText=timesClicked['green']
    // console.log("green")

}

reset_button.onclick=()=>{
    timesClicked['red']=0
    timesClicked['yellow']=0
    timesClicked['green']=0
    // console.log("Reset cliucked")
        squares.forEach(square=>square.innerText='')

}

// --------********************-------------------------##############################&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// --------------*************alternative for the above code ---------------#####################################


squares.forEach(square=>{
    square.onclick=()=>{
        timesClicked[square.value]+=1
        square.innerText=timesClicked[square.value]
    }

})

reset_button.onclick=()=>clearScores()

function clearScores(){
    // squares.forEach(square =>timesClicked[square.vaue]='')
    squares.forEach(square=>timesClicked[square.value]=0)
    squares.forEach(square=>square.innerText='')

}
// --------------*************!@#$%^*(&*^$#$%&*&*((***)())) ---------------#####################################









