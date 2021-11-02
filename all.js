fetch("https://corona.lmao.ninja/v2/countries/india")
// fetch('https://www.covid19india.org/');
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // document.getElementById("flag").src ='11.jpg';
    // document.getElementById("country").innerHTML = data.country;
  document.getElementById("country").innerHTML="INDIA Live Daily Update";

    document.getElementById("Active_Cases").innerHTML = data.active;
    document.getElementById("Total_Cases").innerHTML = data.cases;
    document.getElementById("Critical_Cases").innerHTML = data.critical;
    document.getElementById("Total_Death").innerHTML = data.deaths;
    document.getElementById("Recovered_Cases").innerHTML = data.recovered;
    document.getElementById("Total_Test_Done").innerHTML = data.tests;
  });
