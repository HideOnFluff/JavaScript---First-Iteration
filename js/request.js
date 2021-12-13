const getBtn = document.getElementById('get-btn');

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




const getData = () => { //Get button, sends the request to the API and fetches the data as JSON, then prints it and tries to create the table.
    console.log(myurl());
    sendHttpRequest('GET',myurl())
    .then(data => {
        console.log(data);
        console.log(typeof data);
        console.log(data.hourly); //if you don't choose any hourly parameter, it will return undefined
        console.log(typeof data.hourly);
        generateTable(data.hourly); 
        //generateTable(dummyTestObject); works perfectly, but I don't understand why it doesn't work with the API data when I can still console.log it.
    })
    .catch(err => {
        console.log(err);
    })
};

getBtn.addEventListener('click', getData);