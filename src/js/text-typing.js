let string1 = "Hello, I'm Nolasco Medina Full Stack Web Developer";
let array1 = string1.split("");
let timer;

function frameLooper () {
    if (array1.length > 43) {

        document.getElementById("text1").innerHTML += array1.shift();
        // let blink1 = document.getElementById("blink1")
        // blink1.textContent = "|"
        // if(array1.length < 44){
        //     // let blink1 = document.getElementById("blink1")
        //     blink1.remove()
        // }

    } else if(array1.length > 24){
        document.getElementById("text2").innerHTML += array1.shift();
    } else if(array1.length > 0){
        document.getElementById("text3").innerHTML += array1.shift();
    }else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('frameLooper()',70); /* change 70 for speed */
}
frameLooper();