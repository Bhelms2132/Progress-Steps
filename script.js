const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

//--Represents an index
let currentActive = 1

//--Event Listner
next.addEventListener('click', () => {
    currentActive++

    //--Prevents clicks from exceeding 4 step limit
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
})