function buildData(){
   var array = [date, totTests, posTests];
    var table = document.createElement("table");
        var trOne = document.createElement("tr"); 
            var thOne = document.createElement("th"); 
                thOne.innerHTML = "Date";
            var thTwo = document.createElement("th"); 
                thTwo.innerHTML = "Total COVID-19 Tests";
            var thThree = document.createElement("th"); 
                thThree.innerHTML = "Positive COVID-19 Tests";
            trOne.appendChild(thOne); trOne.appendChild(thTwo); 
            trOne.appendChild(thThree);
         table.appendChild(trOne);
     //We created header row and now we will create rows from your array
     for(var i = 0; i < array[0].length; i++) 
     {
         var trTwo = document.createElement("tr"); 
             var tdOne = document.createElement("td"); 
                 tdOne.innerHTML = array[0][i]; //date
             var tdTwo = document.createElement("td"); 
                 tdTwo.innerHTML = array[1][i]; //test
             var tdThree = document.createElement("td"); 
                 tdThree.innerHTML = array[2][i]; //postests
             trTwo.appendChild(tdOne); trTwo.appendChild(tdTwo); 
             trTwo.appendChild(tdThree);
          table.appendChild(trTwo);
     }
     document.body.appendChild(table);
}


var tablestatus = "hidden";


function expandtable() {
  
  document.getElementsByTagName("table")[0].setAttribute("id", "covid-table");
  
  document.getElementsByTagName("tr")[lowestCases+1].style.color = "green";
  document.getElementsByTagName("tr")[highestCases+1].style.color = "red";
  
  document.getElementsByTagName("strong")[0].style.color = "red";
  document.getElementsByTagName("strong")[1].style.color = "green";
  
  if(tablestatus == "hidden"){
     document.getElementById('covid-table').style.display = "block";
     document.getElementById('about').style.display = "block";
    tablestatus = "shown";
    document.getElementById('expand').innerHTML = "Click to collapse table";
  }
 
  else{
    document.getElementById('covid-table').style.display = "none";
    document.getElementById('about').style.display = "none";
    tablestatus = "hidden";
    document.getElementById('expand').innerHTML = "Click to expand table";
  }
}
