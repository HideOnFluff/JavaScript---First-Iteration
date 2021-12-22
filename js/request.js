const getBtn = document.getElementById('get-btn');

var idk = [
    {
        '': '',
    }
]

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
    sendHttpRequest('GET',myurl())
    .then(data => {
        if(hourlyArray.length){
        console.log(data.hourly);
        generateTable(data.hourly, 'showData__hourly');      
        }else {
            generateTable(idk, 'showData__hourly');
        }
        if(dailyArray.length){
        console.log(data.daily);
        generateTable(data.daily, 'showData__daily');
        }else {
            generateTable(idk, 'showData__daily');
        }
    })
    .catch(err => {
        console.log(err);
    })
};

function btn () {
    getData();
    setInterval(() => {
        getData();
    }, 20000);
}

getBtn.addEventListener('click', btn);