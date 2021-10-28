
        
        
        let input = document.getElementById('time');
        let play_button = document.getElementById('play');
        let pause_button = document.getElementById('pause');

        var circle = document.getElementById('circle');
        var strokeDasharray = circle.getAttribute('stroke-dasharray');

        let i = 0;
        

        input.addEventListener('blur',()=>{
            i = 0;
            circle.setAttribute('stroke-dashoffset',i);
        })

        play_button.addEventListener('click', () => {
            time_for_ani = parseInt(Number(input.value)*1000/strokeDasharray);
            var clr = setInterval(() => {
                i = i - 1;
                if (-(i) <= strokeDasharray) {
                    console.log(strokeDasharray);
                    circle.setAttribute('stroke-dashoffset', i);
                }
            },time_for_ani)
            pause_button.addEventListener('click', () => {
                clearInterval(clr);
            })
        })

        play_button.addEventListener('click', () => {
            let value = Number(input.value);

            var clear = setInterval(()=>{
                value = value - 1;
                if (value >= 0) {
                    input.value = value;
                    console.log(value);
                }
            }, 1000);
            pause_button.addEventListener('click', () => {
                clearInterval(clear);
            })
        })
