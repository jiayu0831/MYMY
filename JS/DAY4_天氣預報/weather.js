let url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-77A17354-85D5-470D-9036-4FD1B8C7124C'

    let cities = [
        ['基隆市', '新北市', '臺北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣'],
        ['基隆市', '新北市', '臺北市', '桃園市', '新竹市', '新竹縣', '苗栗縣'], ['臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義市', '嘉義縣'],
        ['臺南市', '高雄市', '屏東縣'],['宜蘭縣', '花蓮縣', '臺東縣'], ['澎湖縣', '金門縣', '連江縣'],
    ];

    let nowCities;
    let orgData = {};
    nowCities = cities[0];

    fetch_data();

    function fetch_data() {
        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            organizationData(data);
            arrange_cities();
        })
    }
    function organizationData(data){
        let locations = data.records.location;
        // console.log(locations);
        locations.forEach(location => {
            let locationName = location.locationName;
            let loc_wE_t_0 = location.weatherElement[0].time[0];

            let startTime = loc_wE_t_0.startTime;
            let endTime = loc_wE_t_0.endTime;
            let wx = loc_wE_t_0.parameter.parameterName;
            // console.log('wx: ',wx)
            let maxT = location.weatherElement[4].time[0].parameter.parameterName;
            let minT = location.weatherElement[2].time[0].parameter.parameterName;
            // console.log(maxT,minT);

            let pop = location.weatherElement[1].time[0].parameter.parameterName;
            // console.log(pop);

            let ci = location.weatherElement[3].time[0].parameter.parameterName;
            // console.log(ci);
            // console.log('orgData: ',orgData)
            orgData[locationName] = {
                'wx': wx,
                'startTime': startTime,
                'endTime': endTime,
                'maxT': maxT,
                'minT' :minT,
            }
        });
    }

    function arrange_cities(){
        let card_region = document.querySelector('.card-region');
        card_region.innerHTML = '';

        nowCities.forEach((city,index) => {
            console.log('city: ',city);
            let cityData = orgData[city];
            // console.log('cityData=>',city,cityData);
            console.log('cityData: ');
            console.log(cityData);
            card_region.innerHTML +=
            `
            <div class="single_card">
                ${index}單張卡片的內容
                <p>${city}</p>
                <p>${cityData.wx}</p>
                <p>${cityData.startTime.substr(0,16).replaceAll('-','/')}</p>
                <p>${cityData.endTime.substr(0,16).replaceAll('-','/')}</p>
            </div>
            `
        })
    }
    







// fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-77A17354-85D5-470D-9036-4FD1B8C7124C')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         console.log(data.success);

//         let data_records = data.records.location;
//         console.log(data_records);
//         let cities = [];

//         for(let i = 0; i < data_records.length; i++){
//             cities.push(data_records[i]);
//             console.log(cities[i]);
//         }

//         for(let i = 0; i < cities.length; i++){
//             let weather_time = cities[i].weatherElement[0].time[0]; //取出時間訊息

//             console.log(weather_time.startTime); //取開始時間
//             console.log(weather_time.endTime);  //取結束時間

//             let MaxT = cities[i].weatherElement[1].time[0].parameter.parameterName;
//             let MinT = cities[i].weatherElement[4].time[0].parameter.parameterName;

//             console.log(MaxT.MinT);
//         }
//     });