function hit() {
    let ran = Math.floor(Math.random() * 21);
}

function reset(params) {

    
}

function fold (params) {
    
}



function hit(){
    var deckArray = []
    var r = Math.floor(Math.random() * 10) + 1
    var suits = [ "C", "D", "H", "S"]
    var ransuit = Math.floor(Math.random() * 4)
    deckArray.push("<div class=card> <img src=images/"+ r + suits[ransuit] +".jpg class=card-img-top alt=..> </div>")
    document.getElementById("carddeck").innerHTML = (deckArray[0,1,2,3,4,5,6,7,8,9,10])
}
