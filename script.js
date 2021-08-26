async function data() {
    let input = document.getElementById("myText").value;
    let newInput = input.toString().toLowerCase().replaceAll(" ", "-");

    let temperature = document.querySelector(".span1");
    let city = document.querySelector(".span2");
    let wind = document.querySelector(".span3");
    let card1Temp = document.querySelector(".span4");
    let card1Wind = document.querySelector(".span5");
    let card2Temp = document.querySelector(".span6");
    let card2Wind = document.querySelector(".span7");
    let card3Temp = document.querySelector(".span8");
    let card3Wind = document.querySelector(".span9");

    const data = await fetch(`https://goweather.herokuapp.com/weather/${newInput}`);
    const newData = await data.json();

    temperature.innerHTML = `${newData.temperature}`;
    city.innerHTML = `${input}`;
    wind.innerHTML = `${newData.wind}`;
    card1Temp.innerHTML = `${newData.forecast[0].temperature}`;
    card1Wind.innerHTML = `${newData.forecast[0].wind}`;
    card2Temp.innerHTML = `${newData.forecast[1].temperature}`;
    card2Wind.innerHTML = `${newData.forecast[1].wind}`;
    card3Temp.innerHTML = `${newData.forecast[2].temperature}`;
    card3Wind.innerHTML = `${newData.forecast[2].wind}`;
};

