// wacht dat alles van de pagina is ingeladen voordat je de onderstaande code runt.
window.addEventListener('load',  ()  => {

    //Deze methode laat de naam van de stad zien in de H2 tekst boven het formulier als het input veld Plaats wordt ingevuld.
    document.querySelector("#CityName").addEventListener("change", event => {
        document.querySelectorAll(".name")[0].innerHTML = event.target.value;
        document.querySelectorAll(".name")[1].innerHTML = event.target.value;
    });

    //event change fot the temperature
    document.querySelector("#CityTemp").addEventListener("change", event => {
        document.querySelector("#temp").innerHTML = event.target.value + " graden";
    });

    //event changer for the img of the weather
    document.querySelector("#WeatherType").addEventListener("change", event => {
        switch (event.target.value){
            case "sun":
                document.querySelector("#WeatherTypes").src = "assets/img/sun_weather_icon.png";
                document.querySelector("main")[0].style.cssText = "background-color: cornsilk; color: black;";
                break;
            case "cloud":
                document.querySelector("#WeatherTypes").src = "assets/img/cloud_weather_icon.png";
                document.querySelector("main")[0].style.cssText = "background-color: lightgray; color: black;";
                break;
            case "rain":
                document.querySelector("#WeatherTypes").src = "assets/img/rain_weather_icon.png";
                document.querySelector("main")[0].style.cssText = "background-color: lightblue; color: black;";
                break;
            case "snow":
                document.querySelector("#WeatherTypes").src = "assets/img/snowy_weather_icon.png";
                document.querySelector("main")[0].style.cssText = "background-color: darkgray; color: white;";
                break;
        }
    });
})



/**
 * Deze JavaScript methode maakt een verbinding met een externe weer server (api) om actuele informatie op te halen
 * De informatie die terugkomt is in json formaat en wordt in regel 18 in een variabele weer gestopt.
 */
function haalWeerOp() {

    if (document.getElementsByClassName("name")[0].innerHTML === "") {
        const url = "https://data.meteoserver.nl/api/liveweer.php?locatie=Amsterdam&key=ae99dc2ffd";
        fetch(url)
            .then((response) => response.json())
            //Doe onderstaande als alle informatie binnen is. De opgehaalde informatie wordt in een variabele data gezet.
            .then(function (data) {
                console.log(data);
                // Als alle data is binnengehaald kan deze worden gebruikt in de website.
                // Lees data uit en stop de informatie (als array) in de variabele weer
                let weer = data.liveweer;
                // Lees van de array positie 0 de plaats uit
                let stad = weer[0]['plaats'];
                // Lees van de array positie 0 de temperatuur uit
                let temp = weer[0]['temp'];
                let verw = weer[0]['verw'];
                // er is nog meer, bekijk de data om er achter te komen welke gegevens er nog meer zijn

                document.querySelectorAll(".name")[0].innerHTML = stad;
                document.querySelectorAll(".name")[1].innerHTML = stad;
                document.querySelector("#temp").innerHTML = temp + " graden";
                document.querySelector("#verw").innerHTML = verw;
            })
            .catch(function (error) {
                console.log(error);
            });
    }else{
        const url = "https://data.meteoserver.nl/api/liveweer.php?locatie="
            + document.getElementsByClassName("name")[0].innerHTML + "&key=ae99dc2ffd";
        fetch(url)
            .then((response) => response.json())
            //Doe onderstaande als alle informatie binnen is. De opgehaalde informatie wordt in een variabele data gezet.
            .then(function (data) {
                console.log(data);
                // Als alle data is binnengehaald kan deze worden gebruikt in de website.
                // Lees data uit en stop de informatie (als array) in de variabele weer
                let weer = data.liveweer;
                // Lees van de array positie 0 de plaats uit
                let stad = weer[0]['plaats'];
                // Lees van de array positie 0 de temperatuur uit
                let temp = weer[0]['temp'];
                let verw = weer[0]['verw'];
                // er is nog meer, bekijk de data om er achter te komen welke gegevens er nog meer zijn

                document.querySelectorAll(".name")[0].innerHTML = stad;
                document.querySelectorAll(".name")[1].innerHTML = stad;
                document.querySelector("#temp").innerHTML = temp + " graden";
                document.querySelector("#verw").innerHTML = verw;

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
