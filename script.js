/* DOM Manipulation */
/* jQuery */

//Carousel Circle Elements
const cir1 = $("#c1")
const cir2 = $("#c2")
const cir3 = $("#c3")
const cir4 = $("#c4")

//Mountain Nav Elements
const mnt1 = $("#mnt1")
const mnt2 = $("#mnt2")

//Section Backgrounds
const one = $("#one")
const two = $("#two")

//Content
const tc_1 = $("#tc-1")
const tc_2 = $("#tc-2")

/* ---------------------------------------------- */

// Handle Carousel Functionality

let circles = [cir1, cir2, cir3, cir4]
let cirHighlight = 0

function setImageOne() {
    one.css("background-image", "url('images/coal-bg01.jpg')")
}

function setImageTwo() {
    one.css("background-image", "url('images/coal-bg04.jpg')")
}

function setHighlight(idx) {
    if (cirHighlight != idx) {
        circles[cirHighlight].css("background-color", "gray")
        circles[idx].css("background-color", "white")
        cirHighlight = idx
    }
}

cir1.click(() => {
    setImageOne()
    setHighlight(0)
})
cir2.click(() => {
    setImageTwo()
    setHighlight(1)
})
cir3.click(() => {
    setImageOne()
    setHighlight(2)
})
cir4.click(() => {
    setImageTwo()
    setHighlight(3)
})

$("#i1").click(() => {
    setImageOne()
    setHighlight(0)
})
$("#i2").click(() => {
    setImageTwo()
    setHighlight(1)
})
$("#i3").click(() => {
    setImageOne()
    setHighlight(2)
})
$("#i4").click(() => {
    setImageTwo()
    setHighlight(3)
})

cir1.css("background-color", "white")

/* ---------------------------------------------- */

// Handle Mountains Functionality

let mountains = [mnt1, mnt2]
let mntHighlight = 0

function setMountain(idx) {
    if (mntHighlight != idx) {
        mountains[mntHighlight].css("background-color", "rgb(16, 42, 80)")
        mountains[mntHighlight].css("color", "lightgray")
        mountains[idx].css("background-color", "lightgray")
        mountains[idx].css("color", "rgb(16, 42, 80)")
        mntHighlight = idx
    }
}

function setContent() {
    if (mntHighlight == 0) {
        two.css("background-image", "url('images/coal-bg04.jpg')")
        tc_1.css("display", "block")
        tc_2.css("display", "none")
    } else {
        two.css("background-image", "url('images/coal-bg01.jpg')")
        tc_1.css("display", "none")
        tc_2.css("display", "block")
    }
}

mnt1.click(() => {
    setMountain(0)
    setContent()
})
mnt2.click(() => {
    setMountain(1)
    setContent()
})

tc_1.css("display", "block")
tc_2.css("display", "none")

/* ---------------------------------------------- */

// Scroll Transition

$(".nav a").on("click", function(e) {
    if (this.hash) {
        e.preventDefault()
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 800)
    }
})