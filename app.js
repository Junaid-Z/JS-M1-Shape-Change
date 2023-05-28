let shape = document.getElementById('shape')
function triangle() {
    shape.style.borderRadius = "0"
    shape.style.backgroundColor = "transparent"
    shape.style.border = "100px solid transparent"
    shape.style.borderBottom = "100px solid cornflowerblue"
    shape.style.width = "0"
    shape.style.height = "0"
}
function rectangle() {
    shape.style.borderRadius = "0"
    shape.style.border = "none"
    shape.style.backgroundColor = "cornflowerblue"
    shape.style.width = "400px"
    shape.style.height = "200px"
}
function circle() {
    shape.style.borderRadius = "50%"
    shape.style.border = "none"
    shape.style.backgroundColor = "cornflowerblue"
    shape.style.width = "200px"
    shape.style.height = "200px"
}

function square() {
    shape.style.borderRadius = "0"
    shape.style.border = "none"
    shape.style.backgroundColor = "cornflowerblue"
    shape.style.width = "200px"
    shape.style.height = "200px"
}