let countingBox = document.querySelector('#counting-box')
let resetButton = document.querySelector("#reset")
let tasbiUp = document.querySelector("#T_up")
let T_Down = document.querySelector("#T_down")
let incrementNumber = 0

tasbiUp.addEventListener('click', function(){
    incrementNumber++
    countingBox.textContent = incrementNumber
})

T_Down.addEventListener('click', function(){
    incrementNumber--
    countingBox.textContent = incrementNumber
})


resetButton.addEventListener('click', function(){
    countingBox.innerHTML = '0'
})