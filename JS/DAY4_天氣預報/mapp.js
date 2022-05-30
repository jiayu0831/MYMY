let url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-77A17354-85D5-470D-9036-4FD1B8C7124C'

let cities = [
    ['基隆市', '新北市', '臺北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣'],
    ['基隆市', '新北市', '臺北市', '桃園市', '新竹市', '新竹縣', '苗栗縣'], ['臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義市', '嘉義縣'],
    ['臺南市', '高雄市', '屏東縣'], ['宜蘭縣', '花蓮縣', '臺東縣'], ['澎湖縣', '金門縣', '連江縣'],
];

let nowCities;
let orgData = {};
nowCities = cities[0];

fetch_data();

let mapCities = document.querySelectorAll('path');
mapCities.forEach((city, index) => {
    if (city.dataset.nameZh !== undefined) {
        document.querySelector('[data-name-zh="' + city.dataset.nameZh + '"]').addEventListener('click', function () {
            console.log(city.dataset.nameZh)

            let cardAll = document.querySelectorAll('.single_card');
            cardAll.forEach(function(e, i) {
                e.style.display="none"
            })

            document.querySelector('[id="'+ this.dataset.nameZh+'"]').style.display="block"
        });
    }
})

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
function organizationData(data) {
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
            'minT': minT,
        }
    });
}

function arrange_cities() {
    let card_region = document.querySelector('.card-region');
    card_region.innerHTML = '';

    nowCities.forEach((city, index) => {
        console.log('city: ', city);
        let cityData = orgData[city];
        // console.log('cityData=>',city,cityData);
        console.log('cityData: ');
        console.log(cityData);
        card_region.innerHTML +=
            `
            <div class="single_card" id="${city}" style= "transition: 0.5s;">
                <p><h1>${city}</h1></p>
                <p><h3>${cityData.wx}</h3></p>
                <hr>
                預測時間：
                <p>${cityData.startTime.substr(0, 16).replaceAll('-', '/')}</p>
                　|
                <p>${cityData.endTime.substr(0, 16).replaceAll('-', '/')}</p>
            </div>
            `
    })
}