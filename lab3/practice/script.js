let count = 0;
const plussing = document.getElementById("plus");
const minusing = document.getElementById("minus");
const resetting = document.querySelector('reset');

function render() {
    if(count > 0) {
        document.documentElement.style.setProperty('--main-color', "green");
    } else if(count === 0){
        document.documentElement.style.setProperty('--main-color', "black");
    } else {
        document.documentElement.style.setProperty('--main-color', "red");
    }
    document.getElementById('count').innerHTML = count;
}
/*
function increase() {
    count++;
    render();
}

function decrease() {
    count--;
    render();
}
function reset() {
    count = 0;
    render();
}
*/
plussing.addEventListener('click', (event) => {
    count++;
    render();
})

minusing.addEventListener('click', (event) => {
    count--;
    render();
})

reset.addEventListener('click', (event) => {
    count = 0;
    render();
})
