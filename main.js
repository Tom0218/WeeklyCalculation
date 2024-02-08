const userinput = document.getElementById("userinput");
const answer = document.getElementById("answer")

const btn = document.getElementById("btn");





btn.addEventListener('click',function(){

    let a = parseInt(userinput.value)%7;
    let sun = "sunday";
    let mon = "monday"; 
    let tue = "tuesday";
    let wed = "wednesday";
    let thr = "thrisday";
    let fri = "friday";
    let sat = "saturaday";

    switch(a){
        case 1: 
            answer.innerText = mon;
            break;
        case 2:
            answer.innerText = tue;
            break;
        case 3:
            answer.innerText = wed;
            break;
        case 4:
            answer.innerText = thr;
            break;
        case 5:
            answer.innerText = fri;
            break;
        case 6:
            answer.innerText = sat;
            break;
        default:
            answer.innerText = sun;
            break;
    }
//     let a = parseInt(userinput.value)
//     let b = a%7
//     switch(b){
//         case 0:
//             answer.innerText="星期7";
//         default:
//             answer.innerText="星期"+b;
//     }
    
})