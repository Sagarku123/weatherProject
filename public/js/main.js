const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const dataHide = document.querySelector('.middle_layer');

const getinfo = async(event) =>{
    event.preventDefault();

    let cityVal = cityName.value;   
    // let url = `https://api.openweathermap.org/data/2.5/weather?q={cityName}&{apiKey}&units=metric`;
    
    if(cityVal === ""){
        alert('working14');
        city_name.innerText = "please enter City name";
        dataHide.classList.add('data_hide');
    }else{

        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=a1476bff46ad45eaf0f4db74e467cf5e&units=metric`;
            // https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=a1476bff46ad45eaf0f4db74e467cf5e&units=metric
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            dataHide.classList.remove('data_hide');
            const tempMod = arrData[0].weather[0].main;
            temp.innerText = arrData[0].main.temp;
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            console.log(tempMod);
            
            if(tempMod == "Clear"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color:#eccc68'></i>"
            }else if(tempMod == "Clouds"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color:#f1f2f6'></i>"
            }else if(tempMod == "Rain"){
                console.log(tempMod);
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>"
            }else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#f1f2f6'></i>"
            }
        }catch{
            city_name.innerText = "Something Went Wrong";
            dataHide.classList.add('data_hide');

        }
        
    }
}

submitBtn.addEventListener('click', getinfo);
