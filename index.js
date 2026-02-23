const url = "https://api.nysmesonet.org/data/index.php/geojson/etec/latest";
const response = await fetch(url);
const json = await response.json();
const properties = json.features[0].properties;

const [date, time] = properties.PROD_TIME.split("T");

let output = "";
output += `Date: ${date}\n`;
output += `Time: ${time}\n`;
output += `Station Pressure: ${properties.PRES}mb\n`;
output += `Dry Buld Temperature: ${properties.TAIR}°C\n`;
output += `Relative Humidity: ${properties.RELH}%\n`;
output += `Wind Direction: ${properties.WDIR}°\n`;
output += `Wind Speed: ${properties.WSPD} m/s \n`;

const outputText = document.getElementById("output-text");
outputText.textContent = output;
