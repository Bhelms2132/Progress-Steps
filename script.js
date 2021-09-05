const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

//--Represents an index
let currentActive = 1

//--Event Listners
next.addEventListener('click', () => {
    currentActive++

    //--Prevents clicks from exceeding 4 step limit
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    //--Call Function
  update()
})

prev.addEventListener('click', () => {
    currentActive--

    
    if(currentActive < 1) {
        currentActive = 1
    }

    //--Call Function
    update()
})

function update() {
    circles.forEach ((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true 
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}