var dummyTestObject = [ // Dummy object for testing.
    {
    "ID": "1",
    "Name": "Snep",
    "Idk": "mom",
    "Num": "187.4",
    "lol": "mommy"
    },
    {
    "Name": "Bnuuy",
    "Idk": "bnuy",
    },
    {
    "ID": "3",
    "Name": "deer",
    "Idk": "bleat",
    "Num": "125.60",
    "leeeeeeeel": "sup"
    }
]

function generateTable(dataTable){
 // EXTRACT VALUE FOR HTML HEADER. 
        var col = [];
        for (var i = 0; i < dataTable.length; i++) {
            for (var key in dataTable[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");


        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        for (var i = 0; i < dataTable.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = dataTable[i][col[j]];
            }
        }

        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        console.log("Table Generated");
    }