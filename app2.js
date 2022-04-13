//Notes: When changing score limits CHANGE ALL MARKED LIMMITS AND TO SAME NUMBER
// CPU logic is changable at discretion UNDER DEFAULT OR SET LIMMIT

//Grabs Users name
function usrName() {
    alert("Welcome to 20! A bad spinoff of 21 the card game!")  /* change score limit here*/
    var usrName = prompt("What is your name")
    return usrName
}

//Grabs random number 0 to 10
function randInt() {
    var num = Math.floor(Math.random() * 10)
    return num
}

//User controle of hit or stand option
function usrGame() {

    var choice = "y"
    var usrTotal = 0
    while (choice == "y" ) {
        var x = randInt()
        usrTotal = x + usrTotal
        if (usrTotal > 20) {    /* change score limit here*/
            break
        }

        choice = prompt(`You have ${usrTotal} points. Would you like to hit? Please only type y or n.`)

        while (choice != "y" && choice != "n"){
            choice = prompt(`You did not type y or n. You have ${usrTotal} points. Would you like to hit? Please only type y or n.`)
        }
    }

    return usrTotal

}

//CPU run untill score > 16
function compGame() {

    var compText = 0
    var compScore = 0
    var x = 0
    while (compScore < 16) {    /* change logic here */

        x = randInt()
        if (compText == 0){
            alert("The computer has chose to hit!")
            compText = 2
        }else if(compText == 2){
            alert("The computer has chose to hit AGAIN!")
            compText = 5
        }else if (compText == 5){
            alert("AND AGAIN")
        }
        
        compScore = compScore + x

    }

    return compScore

}

//compares totals || adds & alerts score || ? user to play again
function papaFunc(z) {
    
    var compScore = []
    var usrScore = []
    var play = "y"
    while (play == "y") {
        
        var skip = "no"
        var x = compGame()
        if(x < 20){     /* change score limit here */
            alert("The computer has chose to stand")

        }else if(x == 20){  /* change score limit here */
            alert("The computer has 20 points and can win unless you have 20 points the computer wins ")
        }else if(x > 20){   /* change score limit here */
            alert("The computer busted. You win. :{ ")
            skip = "true"
            usrScore.push(1)
        }
        
        if(skip != "true"){

            var y = usrGame()
            if(x > y){
                alert(`Congradulations! You lost. ${x} to ${y}`)
                compScore.push(1)
            }else if (y > 20){/* change score limit here*/
                alert("oof, you busted. The computer WINS!")
                compScore.push(1)
            }else if(x < y){
                alert(`Yeah, Yeah, Yeah, you won. ${y} to ${x}`)
                usrScore.push(1)
            }else{
                alert( `We tied. No points. ${x} to ${y}`)
            }
            
        }
        
        play = prompt(`The score is CPU: ${compScore.length} ${z}: ${usrScore.length} Would you like to play again? Please type y or n`)
        while (play != "y" && play != "n"){
           play = prompt("Please only type y or n. ")
        }


    }

    if(compScore.length > usrScore.length){
        alert(`The final score is CPU: ${compScore.length} ${z}: ${usrScore.length}. I win! `)
    } else if(compScore.length < usrScore.length){
        alert(`The final score is ${z}: ${usrScore.length} CPU: ${compScore.length}. You won. :{ `)
    }else if(compScore.length == usrScore.length){
        alert(`WE TIED ${usrScore.length} to ${compScore.length}. `)
    }
}
