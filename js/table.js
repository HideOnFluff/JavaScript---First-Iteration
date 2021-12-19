function generateTable(dataTable, tableID) { //Generates the table with the data from the API.
 // EXTRACT VALUE FOR HTML HEADER. 
        let objKeys = Object.keys(dataTable);
        console.log(objKeys);
        //generate table headers from object keys
        let tableHeaders = "";
        for (let i = 0; i < objKeys.length; i++) {
            tableHeaders += "<th>" + objKeys[i] + "</th>";
        }
        //create table
        let table = "<table><tr>" + tableHeaders + "</tr>";
        //generate table rows
        for (let i = 0; i < dataTable[objKeys[0]].length; i++) { //Since all the arrays have the same length, I only use the first array to get the length.
            table += "<tr>";
            for (let j = 0; j < objKeys.length; j++) {
                table += "<td>" + dataTable[objKeys[j]][i] + "</td>";
            }
            table += "</tr>";
        }
        table += "</table>";
        //insert table into html
        let divContainer = document.getElementById(tableID);
        divContainer.innerHTML = "";
        divContainer.innerHTML = table;
        console.log("Table Generated");
    }
