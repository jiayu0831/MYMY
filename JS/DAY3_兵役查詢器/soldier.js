let query = document.querySelector('.btn');
let result = document.querySelector('.result');
let age = document.querySelector('#age');

query.addEventListener("click", function(){
    let ageValue = age.value;
    console.log("ageValue.value: ",ageValue);

    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender || gender == null){
        alert("請選擇性別");
        return;
        
    }
    console.log("gender: ",gender);
    console.log("gender.value: ",gender.value);

    console.log("result: ",result);
    let genderValue = gender.value;
    console.log("genderValue: ",genderValue);
    if(genderValue == '女'){
        result.innerHTML = "好耶";
        console.log("result: ",result);
        return;
    }

    console.log("result: ",result);
    if(ageValue > 36){
        result.innerHTML = "老了啦";
    }else if(ageValue  >= 18){
        result.innerHTML = "恭喜發財，每月三千";
    }else if (ageValue < 18){
        result.innerHTML = "未來勇者是尼!!!";
    }
});