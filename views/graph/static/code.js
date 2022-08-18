let onStart = () => {
    nums2order_lenght = 100;
    for (let i = nums2order_lenght; i >= 0; i--) {
        nums2order[i] = Math.round(Math.random() * 100)
    }

    setInterval(function() {
        step()
    }, 1000)

}

let step = () => {
    ctx.clearRect(0, 0, 1000, 300);

    for (let i = 0; i < nums2order_lenght; i++) {
        ctx.fillRect(i * bars_width, canvas.getAttribute('height'), bars_width, -nums2order[i] * 3)
        if (i === swap_count - 1) ctx.fillStyle = 'blue'
        else { ctx.fillStyle = 'black' }
    }


    for (let j = swap_count + 1; j < nums2order.length - 1; j++) {
        if (nums2order[j] < nums2order[swap_count]) {
            temp = nums2order[j]
            nums2order[j] = nums2order[swap_count]
            nums2order[swap_count] = temp
        }
    }
    swap_count += 1

}


let nums2order = [];
let nums2order_lenght = 0;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let bars_width = 10;
let swap_count = 0

onStart()