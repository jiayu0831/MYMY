var hight = document.querySelector('#hight');
var weight = document.querySelector('#weight');

var count = document.querySelector('#count');
var clear = document.querySelector('#clear');

var result = document.querySelector('.result');

console.log(hight, weight, result);
console.log(clear);

count.addEventListener('click', function(){
    console.log('確認輸入');

    var hight1 = parseFloat(hight.value);
    var weight1 = parseFloat(weight.value);
    console.log(hight1);

    var go;
    go = weight1 / ((hight1 / 100) ** 2);
    console.log(go);

    if (go > 40){
        console.log('病態肥胖');
        point = '病態肥胖';
    } else if (go > 30){
        console.log('肥胖');
        point = '肥胖';
    } else if (go > 25){
        console.log('體重過重');
        point = '體重過重';
    } else if (go > 20){
        console.log('正常範圍');
        point = '正常範圍';
    } else if (go > 20){
        console.log('體重過輕');
        point = '體重過輕';
    }

    result.innerHTML = '你的BMI值 : ' + go + '，' + '是 : ' + point;
    go = '';
});

clear.addEventListener('click', function () {
    console.log(123);
   hight.value = '';
    weight.value = '';
    result.innerHTML = '';
});

// clear.addEventListener('click', function(){
// //     // hight1 = '';
// //     // weight1 = '';
// //     // go = '';
// //      var hight2 = hight1
// //      console.log(hight2);
// // //      hight2 = '';
// //         hight1.innerHTML = '　';
// //         weight1.innerHTML = '　';
// //         result.innerHTML = '　';
// });