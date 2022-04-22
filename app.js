function hit() {
    let ran = Math.floor(Math.random() * 21);
}

function reset(params) {

    
}

function fold (params) {
    
}


function hit(){
    var r = Math.floor(Math.random() * 10) + 1
    var suits = [ "C", "D", "H", "S"]
    var ransuit = Math.floor(Math.random() * 4)
    document.getElementById("carddeck").insertAdjacentHTML ("beforeend", "<img src=images/"+ r + suits[ransuit] +".jpg class=card-img-top alt=..>")
}
