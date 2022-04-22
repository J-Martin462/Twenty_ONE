var q = 0
function hit() {
    let ran = Math.floor(Math.random() * 21);
}


function reset(params) {

    
}

function fold(params) {
    
}

function usrgm(){
    var r = Math.floor(Math.random() * 10) + 1
    var suits = [ "C", "D", "H", "S"]
    var ransuit = Math.floor(Math.random() * 4)
    document.getElementById("carddeck").insertAdjacentHTML ("beforeend", "<img src=images/"+ r + suits[ransuit] +".jpg class=card-img-top alt=..>")
    return r
}

function hit(){
    var q = 0
    q = usrgm() + q
    if (q > 20) {
        document.getElementById("jumbo").innerText = ("You BUSTED. Reset.")
        
    }
    return q
}


function compGam() {
    var r = Math.floor(Math.random() * 10) + 1
    var suits = [ "C", "D", "H", "S"]
    var ransuit = Math.floor(Math.random() * 4)
    document.getElementById("carddeck-comp").insertAdjacentHTML ("beforeend", "<img src=images/"+ r + suits[ransuit] +".jpg class=card-img-top alt=..>")
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

function fullGame(a, y) {


    var skip = "e"
        if(a < 20){     /* change score limit here */
            document.getElementById("jumbo").innerText = ("The computer has chose to stand")

        }else if(a == 20){  /* change score limit here */
            document.getElementById("jumbo").innerText = ("The computer has 20 points and can win unless you have 20 points the computer wins ")
        }else if(a > 20){   /* change score limit here */
            document.getElementById("jumbo").innerText = ("The computer busted. You win. :{ ")
            skip = "true"
            usrScore.push(1)
        }
        
        if(skip != "true"){

            var y = usrGame()
            if(x > y){
                alert(`Congradulations! You lost. ${a} to ${y}`)
                compScore.push(1)
            }else if (y > 20){/* change score limit here*/
                alert("oof, you busted. The computer WINS!")
                compScore.push(1)
            }else if(x < y){
                alert(`Yeah, Yeah, Yeah, you won. ${y} to ${a}`)
                usrScore.push(1)
            }else{
                alert( `We tied. No points. ${a} to ${y}`)
            }
        }
}
fullGame(compLogic(), hit())
