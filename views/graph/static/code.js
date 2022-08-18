let onStart = () => {
    nums2order_lenght = 100;
    for (let i = nums2order_lenght - 1; i >= 0; i--) {
        nums2order[i] = Math.round(Math.random() * 100)
    }

    setInterval(function() {
        step()
    }, 1000)

}

let step = () => {
    for (let i = 0; i < nums2order_lenght; i++) {
        ctx.fillRect(i * bars_width, canvas.getAttribute('height'), bars_width, -nums2order[i] * 3)
    }
    console.log(1)
}


let nums2order = [];
let nums2order_lenght = 0;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let bars_width = 10;

onStart()