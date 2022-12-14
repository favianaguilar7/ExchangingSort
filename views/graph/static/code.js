let onStart = () => {
    nums2order_lenght = 250;
    for (let i = nums2order_lenght; i >= 0; i--) {
        nums2order[i] = Math.round(Math.random() * 100)
    }

    setInterval(function() {
        step()
    }, 5)

}

let step = () => {
    ctx.clearRect(0, 0, 1000, 300);

    for (let i = 0; i < nums2order_lenght; i++) {
        ctx.fillRect(i * bars_width, canvas.getAttribute('height'), bars_width, -nums2order[i] * 3)
        if (i + 1 === swap_count) ctx.fillStyle = 'blue'
        else if (i + 1 === round) { ctx.fillStyle = 'red' } else { ctx.fillStyle = 'black' }
    }



    if (nums2order[round] < nums2order[swap_count]) {
        temp = nums2order[round]
        nums2order[round] = nums2order[swap_count]
        nums2order[swap_count] = temp
    }


    if (round >= nums2order_lenght) {
        swap_count += 1;
        round = swap_count + 1
    }
    round = round + 1
}


let nums2order = [];
let nums2order_lenght = 0;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let bars_width = 4;
let swap_count = 0
let round = 1

onStart()