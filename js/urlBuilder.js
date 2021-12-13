let hourlyArray = [];
let dailyArray = [];

function citySelect() { //City input field.
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

function hourlyParam(id) { //Hourly parameter checkboxes.
    if(document.getElementById(id).checked){
        hourlyArray.push(document.getElementById(id).id); 
    } else {
        const index = hourlyArray.indexOf(document.getElementById(id).id);
            if (index > -1) {
                hourlyArray.splice(index, 1);
            }
    }
    console.log(hourlyArray);
}

function dailyParam(id) { //Daily parameter checkboxes.
    if(document.getElementById(id).checked){
        dailyArray.push(document.getElementById(id).id); 
    } else {
        const index = dailyArray.indexOf(document.getElementById(id).id);
            if (index > -1) {
                dailyArray.splice(index, 1);
            }
    }
    console.log(dailyArray);
}

function myurl() { //Creates the URL for the API request.
    myUrlWithParams = "https://api.open-meteo.com/v1/forecast";
    myUrlWithParams += '?latitude=' + document.getElementById("location-input__latitude").value;
    myUrlWithParams += '&longitude=' + document.getElementById("location-input__longitude").value;
    if(hourlyArray.length){
        myUrlWithParams += '&hourly=' + hourlyArray.join(',');
    }
    if(dailyArray.length){
        myUrlWithParams += '&daily=' + dailyArray.join(',');
        myUrlWithParams += '&timezone=' + document.getElementById("timezone__select").value;
    }
    return myUrlWithParams;
}