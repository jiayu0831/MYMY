console.log("hello");
console.log(document.querySelector('.box'));


// 單擊樣式
document.querySelector('.box').addEventListener('click', function () {
    console.log('你點了我');
    // document.querySelector('.box').style.backgroundColor = '#22ff88';
});

var box = document.querySelector('.box');
box.addEventListener('click', function () {
    box.style.backgroundColor = '#22ff88';
});

var box_2 = document.querySelector
    ('#another-box');
box_2.addEventListener('click', function () {
    box_2.style.backgroundColor = '#2288ff';
});



// 計算
var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var cala = document.querySelector('#cala');
var result = document.querySelector('#result');

console.log(num1, num2, result);

cala.addEventListener('click', function () {
    console.log('按三小');
    var num1_d = parseInt(num1.value);
    var num2_d = parseInt(num2.value);

    console.log(num1_d, num2_d);

    var sum = num1_d + num2_d;

    result.innerHTML = sum;
});


// 成績計算


var _chinese = document.querySelector('#chinese');
var _english = document.querySelector('#english');
var _math = document.querySelector('#math');

var s_calc = document.querySelector('#s_calc');
var s_result = document.querySelector('#s_result');

console.log(chinese, english, math, s_result);

s_calc.addEventListener('click', function () {
    console.log('恭迎慈孤觀音,渡世靈顯四方');

    var chinese = parseInt(_chinese.value);
    var english = parseInt(_english.value);
    var math = parseInt(_math.value);

    var sum;
    sum = (chinese + english + math) / 3;
    console.log(sum);

    if (sum >= 90) {
        console.log('A');
        point = 'A';
    } else if (sum >= 80) {
        console.log('B');
        point = 'B';
    } else if (sum >= 70) {
        console.log('cC');
        point = 'C';

    } else if (sum >= 60) {
        console.log('D');
        point = 'D';

    } else if (sum < 60) {
        console.log('F');
        point = '死當，明年再來!!!';
        s_result.style.color = '#DD2233';
    }
    s_result.innerHTML = sum + '分' + '　' + '等級:' + point;

    sum = '';

});