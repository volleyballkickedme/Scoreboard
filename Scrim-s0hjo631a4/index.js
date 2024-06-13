let guestScore = document.getElementById("guest-score")
let homeScore = document.getElementById("home-score")

let home = 0;
let guest = 0;

function addGuest() {
    guest+=1
    guestScore.innerText = guest
}

function addHome() {
    home+=1
    homeScore.textContent = home
}

function reset() {
    home = 0
    guest = 0
    homeScore.textContent = home
    guestScore.textContent = guest
}