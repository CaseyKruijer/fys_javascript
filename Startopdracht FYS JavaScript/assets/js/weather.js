// wacht dat alles van de pagina is ingeladen voordat je de onderstaande code runt.
window.addEventListener('load',  ()  => {

    //Deze methode laat de naam van de stad zien in de H2 tekst boven het formulier als het input veld Plaats wordt ingevuld.
    document.querySelector("#CityName").addEventListener("change", event => {
        document.querySelector(".name").innerHTML = event.target.value;
        document.querySelector(".nameHeader").innerHTML = event.target.value;
    });

    //event change fot the temperature
    document.querySelector("#CityTemp").addEventListener("change", event => {
        document.querySelector("#temp").innerHTML = event.target.value + " graden";
    });

    //event changer for the img of the weather
    document.querySelector("#WeatherType").addEventListener("change", event => {
        if (document.querySelector("#type").classList[0] === "sun"){
            document.querySelector("#type").classList.remove("sun");
            document.querySelector("main").classList.remove("sun_bg");
        }else if (document.querySelector("#type").classList[0] === "cloud"){
            document.querySelector("#type").classList.remove("cloud");
            document.querySelector("main").classList.remove("cloud_bg");
        }else if (document.querySelector("#type").classList[0] === "rain"){
            document.querySelector("#type").classList.remove("rain");
            document.querySelector("main").classList.remove("rain_bg");
        }else if (document.querySelector("#type").classList[0] === "snow"){
            document.querySelector("#type").classList.remove("snow");
            document.querySelector("main").classList.remove("snow_bg");
        }
        document.querySelector("#type").classList.add(event.target.value);
        document.querySelector("main").classList.add(event.target.value + "_bg");
    });

    /**
     * Deze JavaScript methode maakt een verbinding met een externe weer server (api) om actuele informatie op te halen
     * De informatie die terugkomt is in json formaat en wordt in regel 18 in een variabele weer gestopt.
     */
    function haalWeerOp() {

        // url is de link naar de externe weer server
        const url = "http://weerlive.nl/api/json-data-10min.php?key=ebe68ec15e&locatie=Amsterdam";

        //Maak verbinding met de server en haal alle informatie op (fetch)
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
                // er is nog meer, bekijk de data om er achter te komen welke gegevens er nog meer zijn.


            })
            .catch(function (error) {
                console.log(error);
            });
    }
})
