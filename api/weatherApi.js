const longitude = 36.76797051534118;

const latitude = -1.379394005815643;

const weatherConditionCodes = {
  0: "Sunny",
  1: "Mostly Sunny",
  2: "Partly Cloudy",
  3: "Mostly Cloudy",
  45: "Foggy",
  51: "Drizzle",
  57: "Drizzle",
  61: "Rainy",
  63: "Rainy",
  65: "Rainy",
};
const weatherConditionIcons = {
  0: "Sunny",
  1: "partly-sunny",
  2: "partly-sunny",
  3: "cloudy",
  45: "cloudy",
  51: "rain",
  57: "rain",
  61: "rain",
  63: "rain",
  65: "rain",
};

const days = [
  "Monday",
  "Teusday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,wind_speed_10m_max&timezone=Africa%2FCairo`;

export async function fetchWeather() {
  try {
    const response = await fetch(weatherURL);

    const data = await response.json();
    const today = new Date();
    const currentDate = today.toLocaleDateString("en-us", {
      month: "long",
      day: "numeric",
    });
    const weekday = today.toLocaleDateString("en-Us", { weekday: "long" });
    const todayIndex = today.getDay();

    const weatherCode = data.daily.weather_code[todayIndex];

    const generalWeatherCondition = weatherConditionCodes[weatherCode];
    const generalWeatherConditionIcon = weatherConditionIcons[weatherCode];
    const rainfallSum = data.daily.precipitation_sum[todayIndex];
    const windSpeedMax = data.daily.wind_speed_10m_max[todayIndex];

    const weatherData = {
      weekday,
      currentDate,
      generalWeatherCondition,
      generalWeatherConditionIcon,
      rainfallSum,
      windSpeedMax,
    };

    return weatherData;
  } catch (err) {
    console.log(err);
  }
}
