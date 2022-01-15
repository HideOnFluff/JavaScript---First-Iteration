const getBtn = document.getElementById('get-btn');
let interval;
let intervalCheck = "";


const sendHttpRequest = (method, url, data) => { //Sends the request to the API and fetches the data as JSON.
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
        console.log("Data received");
        return  response.json();
    })
};


const getData = () => { //sends the request to the API and fetches the data as JSON, then prints it and tries to create the table.
    console.log(myurl());
    if(myurl() != intervalCheck) {
        clearInterval(interval);
        return;
    }
    sendHttpRequest('GET',myurl())
    .then(data => {
        //Generates the hourly table with the selected data, if nothing is selected, it will hide the table.
        if(hourlyArray.length){
        console.log(data.hourly);
        generateTable(data.hourly, 'showData__hourly');
        document.getElementById("showData__hourly").style.display = "block";      
        }else  document.getElementById("showData__hourly").style.display = "none";

        //Generates the daily table with the selected data, if nothing is selected, it will hide the table.
        if(dailyArray.length){
        console.log(data.daily);
        generateTable(data.daily, 'showData__daily');
        document.getElementById("showData__daily").style.display = "block";  
        }else document.getElementById("showData__daily").style.display = "none"
    })
    .catch(err => {
        console.log(err);
    })
};

function btn () {
    intervalCheck = myurl();
    if(!hourlyArray.length && !dailyArray.length){
        alert("Please select a parameter to get data");
    }else {
    getData();
    interval = setInterval(getData, 2000);
    }
}

getBtn.addEventListener('click', btn);