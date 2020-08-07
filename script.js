/* DOM Manipulation */

//Carousel Circle Elements
const cir1 = document.querySelector("#c1")
const cir2 = document.querySelector("#c2")
const cir3 = document.querySelector("#c3")
const cir4 = document.querySelector("#c4")

//Mountain Nav Elements
const mnt1 = document.querySelector("#mnt1")
const mnt2 = document.querySelector("#mnt2")

//Section Backgrounds
const one = document.querySelector("#one")
const two = document.querySelector("#two")

//Content
const tc_1 = document.querySelector("#tc-1")
const tc_2 = document.querySelector("#tc-2")

/* ---------------------------------------------- */

// Handle Carousel Functionality
let circles = [cir1, cir2, cir3, cir4]
let cirHighlight = 0

function setImageOne() {
    one.style.backgroundImage = 'url("images/coal-bg01.jpg")'
}

function setImageTwo() {
    one.style.backgroundImage = 'url("images/coal-bg04.jpg")'
}

function setHighlight(idx) {
    if (cirHighlight != idx) {
        circles[cirHighlight].style.backgroundColor = "gray"
        circles[idx].style.backgroundColor = "white"
        cirHighlight = idx
    }
}

cir1.addEventListener("click", () => {
    setImageOne()
    setHighlight(0)
})
cir2.addEventListener("click", () => {
    setImageTwo()
    setHighlight(1)
})
cir3.addEventListener("click", () => {
    setImageOne()
    setHighlight(2)
})
cir4.addEventListener("click", () => {
    setImageTwo()
    setHighlight(3)
})

document.querySelector("#i1").addEventListener("click", () => {
    setImageOne()
    setHighlight(0)
})
document.querySelector("#i2").addEventListener("click", () => {
    setImageTwo()
    setHighlight(1)
})
document.querySelector("#i3").addEventListener("click", () => {
    setImageOne()
    setHighlight(2)
})
document.querySelector("#i4").addEventListener("click", () => {
    setImageTwo()
    setHighlight(3)
})

cir1.style.backgroundColor = "white"

/* ---------------------------------------------- */

// Handle Mountains Functionality
let mountains = [mnt1, mnt2]
let mntHighlight = 0

function setMountain(idx) {
    if (mntHighlight != idx) {
        mountains[mntHighlight].style.backgroundColor = "rgb(16, 42, 80)"
        mountains[mntHighlight].style.color = "lightgray"
        mountains[idx].style.backgroundColor = "lightgray"
        mountains[idx].style.color = "rgb(16, 42, 80)"
        mntHighlight = idx
    }
}

function setContent() {
    if (mntHighlight == 0) {
        two.style.backgroundImage = 'url("images/coal-bg04.jpg")'
        tc_1.style.display = "block"
        tc_2.style.display = "none"
    } else {
        two.style.backgroundImage = 'url("images/coal-bg01.jpg")'
        tc_2.style.display = "block"
        tc_1.style.display = "none"
    }
}

mnt1.addEventListener("click", () => {
    setMountain(0)
    setContent()
})

mnt2.addEventListener("click", () => {
    setMountain(1)
    setContent()
})

tc_1.style.display = "show"
tc_2.style.display = "none"