const config = require("./config.js");
var fetchedRates = [];

const fetchRates = async () => {
  let response = await fetch(config.url + 'app-rate');
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('Failed to fetch rates. Status: ' + response.status);
  }
};

exports.convert = async (amount, from = 'USD') => {
  try {
    if (fetchedRates.length === 0) {
      fetchedRates = await fetchRates();
    }
    const requiredRate = fetchedRates.find((item) => item.iso3 === from);
    if (requiredRate) {
      const conversionRate = requiredRate.buy / requiredRate.unit;
      console.log(conversionRate * amount);
    } else {
      console.error('Rate not found for', from);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

