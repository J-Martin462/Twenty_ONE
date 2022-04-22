

function reset(params) {

    
}

function fold (params) {
    
}

function hit(){
    var r = Math.floor(Math.random() * 10) + 1
    var suits = [ "C", "D", "H", "S"]
    var ransuit = Math.floor(Math.random() * 4)
    document.getElementById("carddeck").insertAdjacentHTML ("beforeend", "<img src=Cards/"+ r + suits[ransuit] +".jpg class=card-img-top alt=..>")
    return r
}

function compGam() {
    var r = Math.floor(Math.random() * 10) + 1
    var suits = [ "C", "D", "H", "S"]
    var ransuit = Math.floor(Math.random() * 4)
    document.getElementById("carddeck-comp").insertAdjacentHTML ("beforeend", "<img src=Cards/"+ r + suits[ransuit] +".jpg class=card-img-top alt=..>")
    return r
    
}

function compLogic() {

    var cpuscr = 0
    
    while (cpuscr < 16) {
        var a = compGam()
        cpuscr = a + cpuscr  
    }
    return cpuscr
}

function fullGame(a) {
        if(a < 20){     /* change score limit here */
            document.getElementById("jumbo").innerText = ("The computer has chose to stand")

        }else if(x == 20){  /* change score limit here */
            document.getElementById("jumbo").innerText = ("The computer has 20 points and can win unless you have 20 points the computer wins ")
        }else if(x > 20){   /* change score limit here */
            document.getElementById("jumbo").innerText = ("The computer busted. You win. :{ ")
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
}

compLogic()
