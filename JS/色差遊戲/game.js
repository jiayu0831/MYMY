// 開始頁
let start = document.querySelector('.start_btn');
let page = document.querySelector('.start');

let time = 60;
let timeS = document.querySelector('.time');

start.addEventListener('click', function() {
    page.classList.add('none');
    contdown();
    game();
});


function contdown() {
    var timer = setInterval(function() {
        if (time <= 0) {
            clearInterval(timer)
                // alert('時間到！你的分數'+ point + ' 分');
                // window.location.reload();
            Swal.fire({
                title: '時間到！你的分數' + point + ' 分',
                showDenyButton: false,
                showCancelButton: false,
                // showClass: {
                //     popup: 'animate__animated animate__fadeInDown'
                //   },
                //   hideClass: {
                //     popup: 'animate__animated animate__fadeOutUp'
                //   }
                //   }).then((result) => {
                //     /* Read more about isConfirmed, isDenied below */
                //     if (result.isConfirmed) {
                //       Swal.fire('你超棒！', '', 'success')

                //     }
            }).then(() => {
                /* Read more about isConfirmed, isDenied below */

                window.location.reload();

            })
        } else {
            time--;
            timeS.innerHTML = time;
        }
    }, 1000);
}



// 第2部分
let box = document.querySelector('.box');
let boxAll = document.querySelector('.main');
let pointer = document.querySelector('.point')
console.log(pointer);
const c = 256;
let level = 1;
let size;
let color;
let answer;
let point = 0;

game();

function game() {
    if (point % 2 == 0) {
        if (level < 10) {
            level++;
        }
    }
    // level++; 
    // console.log(level);
    size = 96 / level
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    // let color = `rgb(${Math.floor(Math.random()*c)},${Math.floor(Math.random()*c)},${Math.floor(Math.random()*c)})`;
    answer = Math.floor(Math.random() * level ** 2);
    boxAll.innerHTML = '';
    for (let i = 0; i < level ** 2; i++) {
        if (i != answer) {
            boxAll.innerHTML += `
                <div class="box" style= "width:${size - 0.35}%; height:${size - 0.35}%;background-color: rgb(${r},${g},${b});"></div>
            `;
        } else {
            boxAll.innerHTML += `<div class="box answer_box" style="width:${size}%; height:${size}%; background-color: rgb(${r},${g},${b}); opacity:${0.7+level*0.01};"></div>`;
        }
    }

    // answerbox.style.opacity = `$(0.5+level*0.01)`;

    boxSmallAll = document.querySelectorAll('.box');

    boxSmallAll[answer].classList.add('.answer_box');

    let answerbox = document.querySelector('.answer_box');
    answerbox.addEventListener('click', function() {
        // alert("我是答案");
        point++;
        pointer.innerHTML = point;
        game();
    });
    console.log(point);
}

// 暫停頁
let pass = document.querySelector('.pass');
let go = document.querySelector('.go');
let stop = document.querySelector('.stop');
let pause = document.querySelector('.pause');

pause.addEventListener('click', function() {
    window.location.reload();
});




// let answer = Math.floor(Math.random()*4);
// for(let i=0; i < 4; i++){
//     if (i != answer) {
//         boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//     }else{
//         boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//     }
// }
// let answerbox = document.querySelector('.answer_box');
// answerbox.addEventListener('click', function(){
//     // alert("我是答案");
//     level = 3;

//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     let answer = Math.floor(Math.random()*3*3);

//     boxAll.innerHTML = '';
//     for(let i=0; i < 3*3; i++){
//         if(i != answer){
//             boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//         }else{
//             boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//         }
//     }

//     All_box = document.querySelectorAll('.box');
//     All_box.forEach(function(box){
//         box.style.width = "31%";
//         box.style.height = "31%";        
//     });

//     let answerbox = document.querySelector('.answer_box');
//     answerbox.addEventListener('click', function(){
//         // alert("我是答案");
//         level = 4;
//         let r = Math.floor(Math.random()*256);
//         let g = Math.floor(Math.random()*256);
//         let b = Math.floor(Math.random()*256);
//         let answer = Math.floor(Math.random()*4*4);

//         boxAll.innerHTML = '';
//         for(let i=0; i < 4*4; i++){
//             if(i != answer){
//                 boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//             }else{
//                 boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//             }
//         }

//         All_box = document.querySelectorAll('.box');
//         All_box.forEach(function(box){
//             box.style.width = "23%";
//             box.style.height = "23%";        
//         });

//         let answerbox = document.querySelector('.answer_box');
//         answerbox.addEventListener('click', function(){
//             // alert("我是答案");
//             level = 5_4;
//             let r = Math.floor(Math.random()*256);
//             let g = Math.floor(Math.random()*256);
//             let b = Math.floor(Math.random()*256);
//             let answer = Math.floor(Math.random()*4*4);

//             boxAll.innerHTML = '';
//             for(let i=0; i < 4*4; i++){
//                 if(i != answer){
//                     boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                 }else{
//                     boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                 }
//             }

//             All_box = document.querySelectorAll('.box');
//             All_box.forEach(function(box){
//                 box.style.width = "23%";
//                 box.style.height = "23%";        
//             });

//             let answerbox = document.querySelector('.answer_box');
//             answerbox.addEventListener('click', function(){
//                 // alert("我是答案");
//                 level = 6_5;

//                 let r = Math.floor(Math.random()*256);
//                 let g = Math.floor(Math.random()*256);
//                 let b = Math.floor(Math.random()*256);
//                 let answer = Math.floor(Math.random()*5*5);

//                 boxAll.innerHTML = '';
//                 for(let i=0; i < 5*5; i++){
//                     if(i != answer){
//                         boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                     }else{
//                         boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                     }
//                 }

//                 All_box = document.querySelectorAll('.box');
//                 All_box.forEach(function(box){
//                     box.style.width = "18.5%";
//                     box.style.height = "18.5%";        
//                 });

//                 let answerbox = document.querySelector('.answer_box');
//                 answerbox.addEventListener('click', function(){
//                     // alert("我是答案");
//                     level = 7_5;

//                     let r = Math.floor(Math.random()*256);
//                     let g = Math.floor(Math.random()*256);
//                     let b = Math.floor(Math.random()*256);
//                     let answer = Math.floor(Math.random()*5*5);

//                     boxAll.innerHTML = '';
//                     for(let i=0; i < 5*5; i++){
//                         if(i != answer){
//                             boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                         }else{
//                             boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                         }
//                     }

//                     All_box = document.querySelectorAll('.box');
//                     All_box.forEach(function(box){
//                         box.style.width = "18.5%";
//                         box.style.height = "18.5%";        
//                     });

//                     let answerbox = document.querySelector('.answer_box');
//                     answerbox.addEventListener('click', function(){
//                         // alert("我是答案");
//                         level = 8_6;

//                         let r = Math.floor(Math.random()*256);
//                         let g = Math.floor(Math.random()*256);
//                         let b = Math.floor(Math.random()*256);
//                         let answer = Math.floor(Math.random()*6*6);

//                         boxAll.innerHTML = '';
//                         for(let i=0; i < 6*6; i++){
//                             if(i != answer){
//                                 boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                             }else{
//                                 boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                             }
//                         }

//                         All_box = document.querySelectorAll('.box');
//                         All_box.forEach(function(box){
//                             box.style.width = "15.5%";
//                             box.style.height = "15.5%";        
//                         });

//                         let answerbox = document.querySelector('.answer_box');
//                         answerbox.addEventListener('click', function(){
//                             // alert("我是答案");
//                             level = 9_6;

//                             let r = Math.floor(Math.random()*256);
//                             let g = Math.floor(Math.random()*256);
//                             let b = Math.floor(Math.random()*256);
//                             let answer = Math.floor(Math.random()*6*6);

//                             boxAll.innerHTML = '';
//                             for(let i=0; i < 6*6; i++){
//                                 if(i != answer){
//                                     boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                 }else{
//                                     boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                 }
//                             }

//                             All_box = document.querySelectorAll('.box');
//                             All_box.forEach(function(box){
//                                 box.style.width = "15.5%";
//                                 box.style.height = "15.5%";        
//                             });

//                             let answerbox = document.querySelector('.answer_box');
//                             answerbox.addEventListener('click', function(){
//                                 // alert("我是答案");
//                                 level = 10_7;

//                                 let r = Math.floor(Math.random()*256);
//                                 let g = Math.floor(Math.random()*256);
//                                 let b = Math.floor(Math.random()*256);
//                                 let answer = Math.floor(Math.random()*7*7);

//                                 boxAll.innerHTML = '';
//                                 for(let i=0; i < 7*7; i++){
//                                     if(i != answer){
//                                         boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                     }else{
//                                         boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                     }
//                                 }

//                                 All_box = document.querySelectorAll('.box');
//                                 All_box.forEach(function(box){
//                                     box.style.width = "calc((100% / 7) - 7px)";
//                                     box.style.height = "calc((100% / 7) - 7px)";        
//                                 });

//                                 let answerbox = document.querySelector('.answer_box');
//                                 answerbox.addEventListener('click', function(){
//                                     // alert("我是答案");
//                                     level = 11_7;

//                                     let r = Math.floor(Math.random()*256);
//                                     let g = Math.floor(Math.random()*256);
//                                     let b = Math.floor(Math.random()*256);
//                                     let answer = Math.floor(Math.random()*7*7);

//                                     boxAll.innerHTML = '';
//                                     for(let i=0; i < 7*7; i++){
//                                         if(i != answer){
//                                             boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                         }else{
//                                             boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                         }
//                                     }

//                                     All_box = document.querySelectorAll('.box');
//                                     All_box.forEach(function(box){
//                                         box.style.width = "calc((100% / 7) - 7px)";
//                                         box.style.height = "calc((100% / 7) - 7px)";        
//                                     });

//                                     let answerbox = document.querySelector('.answer_box');
//                                     answerbox.addEventListener('click', function(){
//                                         // alert("我是答案");
//                                         level = 12_8;

//                                         let r = Math.floor(Math.random()*256);
//                                         let g = Math.floor(Math.random()*256);
//                                         let b = Math.floor(Math.random()*256);
//                                         let answer = Math.floor(Math.random()*8*8);

//                                         boxAll.innerHTML = '';
//                                         for(let i=0; i < 8*8; i++){
//                                             if(i != answer){
//                                                 boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                             }else{
//                                                 boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                             }
//                                         }

//                                         All_box = document.querySelectorAll('.box');
//                                         All_box.forEach(function(box){
//                                             box.style.width = "calc((100% / 8) - 7px)";
//                                             box.style.height = "calc((100% / 8) - 7px)";        
//                                         });

//                                         let answerbox = document.querySelector('.answer_box');
//                                         answerbox.addEventListener('click', function(){
//                                             // alert("我是答案");
//                                             level = 13_8;

//                                             let r = Math.floor(Math.random()*256);
//                                             let g = Math.floor(Math.random()*256);
//                                             let b = Math.floor(Math.random()*256);
//                                             let answer = Math.floor(Math.random()*8*8);

//                                             boxAll.innerHTML = '';
//                                             for(let i=0; i < 8*8; i++){
//                                                 if(i != answer){
//                                                     boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                                 }else{
//                                                     boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                                 }
//                                             }

//                                             All_box = document.querySelectorAll('.box');
//                                             All_box.forEach(function(box){
//                                                 box.style.width = "calc((100% / 8) - 7px)";
//                                                 box.style.height = "calc((100% / 8) - 7px)";        
//                                             });

//                                             let answerbox = document.querySelector('.answer_box');
//                                             answerbox.addEventListener('click', function(){
//                                                 // alert("我是答案");
//                                                 level = 14_9;

//                                                 let r = Math.floor(Math.random()*256);
//                                                 let g = Math.floor(Math.random()*256);
//                                                 let b = Math.floor(Math.random()*256);
//                                                 let answer = Math.floor(Math.random()*9*9);

//                                                 boxAll.innerHTML = '';
//                                                 for(let i=0; i < 9*9; i++){
//                                                     if(i != answer){
//                                                         boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                                     }else{
//                                                         boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                                     }
//                                                 }

//                                                 All_box = document.querySelectorAll('.box');
//                                                 All_box.forEach(function(box){
//                                                     box.style.width = "calc((100% / 9) - 6px)";
//                                                     box.style.height = "calc((100% / 9) - 6px)";        
//                                                 });

//                                                 let answerbox = document.querySelector('.answer_box');
//                                                 answerbox.addEventListener('click', function(){
//                                                     // alert("我是答案");
//                                                     level = 15_9;

//                                                     let r = Math.floor(Math.random()*256);
//                                                     let g = Math.floor(Math.random()*256);
//                                                     let b = Math.floor(Math.random()*256);
//                                                     let answer = Math.floor(Math.random()*9*9);

//                                                     boxAll.innerHTML = '';
//                                                     for(let i=0; i < 9*9; i++){
//                                                         if(i != answer){
//                                                             boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                                         }else{
//                                                             boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                                         }
//                                                     }

//                                                     All_box = document.querySelectorAll('.box');
//                                                     All_box.forEach(function(box){
//                                                         box.style.width = "calc((100% / 9) - 6px)";
//                                                         box.style.height = "calc((100% / 9) - 6px)";        
//                                                     });

//                                                     let answerbox = document.querySelector('.answer_box');
//                                                     answerbox.addEventListener('click', function(){
//                                                         // alert("我是答案");
//                                                         level = 16_10;

//                                                         let r = Math.floor(Math.random()*256);
//                                                         let g = Math.floor(Math.random()*256);
//                                                         let b = Math.floor(Math.random()*256);
//                                                         let answer = Math.floor(Math.random()*10*10);

//                                                         boxAll.innerHTML = '';
//                                                         for(let i=0; i < 10*10; i++){
//                                                             if(i != answer){
//                                                                 boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                                             }else{
//                                                                 boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                                             }
//                                                         }

//                                                         All_box = document.querySelectorAll('.box');
//                                                         All_box.forEach(function(box){
//                                                             box.style.width = "calc((100% / 10) - 5px)";
//                                                             box.style.height = "calc((100% / 10) - 5px)";        
//                                                         });

//                                                         let answerbox = document.querySelector('.answer_box');
//                                                         answerbox.addEventListener('click', function(){
//                                                             // alert("我是答案");
//                                                             level = 17_10;

//                                                             let r = Math.floor(Math.random()*256);
//                                                             let g = Math.floor(Math.random()*256);
//                                                             let b = Math.floor(Math.random()*256);
//                                                             let answer = Math.floor(Math.random()*10*10);

//                                                             boxAll.innerHTML = '';
//                                                             for(let i=0; i < 10*10; i++){
//                                                                 if(i != answer){
//                                                                     boxAll.innerHTML += `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                                                 }else{
//                                                                     boxAll.innerHTML += `<div class="box answer_box" style="background-color: rgb(${r},${g},${b});"></div>`;
//                                                                 }
//                                                             }

//                                                             All_box = document.querySelectorAll('.box');
//                                                             All_box.forEach(function(box){
//                                                                 box.style.width = "calc((100% / 10) - 5px)";
//                                                                 box.style.height = "calc((100% / 10) - 5px)";        
//                                                             });

//                                                             let answerbox = document.querySelector('.answer_box');

//                                                         });
//                                                     });
//                                                 });
//                                             });
//                                         });
//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });


// });



// box.addEventListener('click', function(){
//     boxAll.innerHTML = `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//     boxAll.innerHTML = '';
//     leve = 2;
//     for (iet i=0; i < ieve**2; i++){
//         // boxAll.innerHTML += `<div class="box"></div>`;
//         boxAll.innerHTML = `<div class="box" style="background-color: rgb(${r},${g},${b});"></div>`;
//     }

//     boxSmallAll[answer].classList.add('answer_dox');
// });