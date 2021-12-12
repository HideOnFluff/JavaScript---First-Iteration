const myUrlWithParams = new URL("https://api.open-meteo.com/v1/forecast");


function citySelect() {
    var x = document.getElementById("location-input__select");
    switch (x.options[x.selectedIndex].value) {
        case "Buenos Aires":  
        document.getElementById("location-input__latitude").value = -34.60;
        document.getElementById("location-input__longitude").value = -58.38;
        break;
        case "Rio de Janeiro":  
        document.getElementById("location-input__latitude").value = -22.90;
        document.getElementById("location-input__longitude").value = -43.20;
        break;
        case "New York":  
        document.getElementById("location-input__latitude").value = 40.71;
        document.getElementById("location-input__longitude").value = -74.00;
        break;
        case "Riga":  
        document.getElementById("location-input__latitude").value = 56.94;
        document.getElementById("location-input__longitude").value = -24.10;
        break;
        case "London":  
        document.getElementById("location-input__latitude").value = 13.33;
        document.getElementById("location-input__longitude").value = -80.00;
            break;
        case "Sydney":  
        document.getElementById("location-input__latitude").value = -33.86;
        document.getElementById("location-input__longitude").value = -151.20;
        break;
        }
}

let hourlyArray = [];
let dailyArray = [];


function hourlyParam(id) {
    if(document.getElementById(id).checked){
        hourlyArray.push(document.getElementById(id).value); 
    } else {
        const index = hourlyArray.indexOf(document.getElementById(id).value);
            if (index > -1) {
                hourlyArray.splice(index, 1);
            }
    }
    console.log(hourlyArray);
}

function dailyParam(id) {
    if(document.getElementById(id).checked){
        dailyArray.push(document.getElementById(id).value); 
    } else {
        const index = dailyArray.indexOf(document.getElementById(id).value);
            if (index > -1) {
                dailyArray.splice(index, 1);
            }
    }
    console.log(dailyArray);
}


const getBtn = document.getElementById('get-btn');

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        headers: data ? {'Content-Type': 'application/json'} : {},
    })
    .then(response => {
          if(response.status >= 400) {
                return response.json().then(err => {
                    const error = new Error("Something went wrong");
                    error.data = response.data;
                    throw error;
            })
        }
        return  response.json();
    })
};

const getData = () => {
    myUrlWithParams.searchParams.append('latitude', document.getElementById("location-input__latitude").value);
    myUrlWithParams.searchParams.append('longitude', document.getElementById("location-input__longitude").value);
    if(hourlyArray.length){
        myUrlWithParams.href += '&hourly=' + hourlyArray.join(',');
    }
    if(dailyArray.length){
        myUrlWithParams.href += '&daily=' + dailyArray.join(',');
        myUrlWithParams.searchParams.append('timezone', document.getElementById("location-input__timezone").value);
    }
    console.log(myUrlWithParams);
    sendHttpRequest('GET',myUrlWithParams)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
};

getBtn.addEventListener('click', getData);