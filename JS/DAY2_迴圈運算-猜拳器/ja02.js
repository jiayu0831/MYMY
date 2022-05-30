let to = document.querySelector('#to');
let count = document.querySelector('#count');

let result = document.querySelector('#result');

console.log(to, result);

count.addEventListener('click', function(){
    console.log('確認輸入');

    let to1 = parseFloat(to.value);

    console.log(to1);

    let sum = 1;
    let n = to1;
    let go = n + '! <br> =  ';

    // console.log(go);
    for (let i = n; i >0; i--) {
        sum = sum * i;
        go = go + i + ' * ';

        if(i == 1){
            go = go + i;
        }
        
    }

    result.innerHTML =  go + '<br>' + ' = ' + sum;
});

// count.addEventListener('click', function(){
//     let sum = 1;
//     let n = to.value;
//     let go = n + '! <br> = ';
    
//     if(n == '' || n<0){

//     }

// });


// 猜拳
let yourAll = document.querySelectorAll('.yours');
let resultt =document.querySelector('.result_2');

yourAll.forEach(function(yours,index){
    yours.addEventListener('click', function(){
        console.log(yours,index);

        resultt.innerHTML = '';
        let computer = Math.floor(Math.random()*3)+1;
        console.log(computer);

        let yours_i = index + 1;
        let y_r = '';
        let c_r = '';
        let out1 = '';

        if (yours_i == 1){
            y_r = "使用了喀嚓喀嚓";
        }else if(yours_i == 2){
            y_r = "唱起了海哭的聲音";
        }else if(yours_i == 3){
            y_r = "手掌開始冒圈圈";
        }

        if (computer == 1){
            c_r = "也掏出了小剪刀";
        }else if(computer == 2){
            c_r = "請你吃了粽子";
        }else if(computer == 3){
            c_r = "「啊 ♂ ~」";
        }
        if (yours_i - computer == 0){
            out1 = "心有靈犀，怕是...";
        }else if( yours_i - computer == -1 || yours_i - computer == 2){
            out1 = "究竟是誰不講武德？"
        }else if ( yours_i - computer == 1  || yours_i - computer == -2){
            out1 = "運氣不錯，對面認輸";
        }

        console.log(out1);
        resultt.innerHTML = "我方 ： " + y_r + '<br>' +"對面：" + c_r + '<br>' + '<br>' + "結果 ： " + out1;
    });
});