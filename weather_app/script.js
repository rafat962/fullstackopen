const apiKey = "SB7LKV3MHA6BBAS7YGX6JMAV5";
const form = document.getElementById("searchForm");
const weatherDisplay = document.getElementById("weatherDisplay");
const loading = document.getElementById("loading");

let currentData = null;
let isCelsius = true;

// 1. Fetch data from API
async function getWeatherData(city) {
    loading.classList.remove("hidden");
    weatherDisplay.classList.add("hidden");

    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`,
        );
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        processData(data);
    } catch (error) {
        alert(error.message);
    } finally {
        loading.classList.add("hidden");
    }
}

// 2. Process JSON to get only needed info
function processData(data) {
    currentData = {
        city: data.resolvedAddress,
        tempC: data.currentConditions.temp,
        tempF: (data.currentConditions.temp * 9) / 5 + 32,
        condition: data.currentConditions.conditions,
    };
    displayWeather();
}

// 3. Display info on UI
function displayWeather() {
    weatherDisplay.classList.remove("hidden");
    document.getElementById("cityName").textContent = currentData.city;
    document.getElementById("description").textContent = currentData.condition;

    updateTempDisplay();
    changeBackground(currentData.condition);
}

function updateTempDisplay() {
    const tempElement = document.getElementById("tempValue");
    const btn = document.getElementById("unitToggle");

    if (isCelsius) {
        tempElement.textContent = `${currentData.tempC.toFixed(1)} °C`;
        btn.textContent = "Switch to °F";
    } else {
        tempElement.textContent = `${currentData.tempF.toFixed(1)} °F`;
        btn.textContent = "Switch to °C";
    }
}

// Change background based on weather
function changeBackground(condition) {
    const cond = condition.toLowerCase();
    if (cond.includes("rain")) {
        document.body.style.backgroundColor = "#4b6584";
    } else if (cond.includes("cloud")) {
        document.body.style.backgroundColor = "#a5b1c2";
    } else {
        document.body.style.backgroundColor = "#f7b731";
    }
}

// Event Listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = document.getElementById("cityInput").value;
    getWeatherData(city);
});

document.getElementById("unitToggle").addEventListener("click", () => {
    isCelsius = !isCelsius;
    updateTempDisplay();
});
