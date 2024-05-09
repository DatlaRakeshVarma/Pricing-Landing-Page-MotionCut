// Define the original prices in USD
const originalPricesUSD = {
    basic: 16,
    weekly: 25,
    monthly: 45
  };
  
  function changeCurrency() {
    const currencySelect = document.getElementById('currency-select');
    const currency = currencySelect.value;
  
    const currencySymbols = {
      USD: '$',
      EUR: '€',
      GBP: '£',
      INR: '₹',
      AUD: 'A$',
      CAD: 'C$',
      JPY: '¥',
      CNY: '¥',
      AED: 'د.إ',
      SAR: '﷼'
      // Add more currencies and their symbols as needed
    };
  
    const exchangeRates = {
      USD: 1,
      EUR: 0.85,  // 1 USD = 0.85 EUR
      GBP: 0.75,  // 1 USD = 0.75 GBP
      INR: 83.50, // 1 USD = 83.50 INR (Updated exchange rate)
      AUD: 1.33,  // 1 USD = 1.33 AUD
      CAD: 1.27,  // 1 USD = 1.27 CAD
      JPY: 112.06,  // 1 USD = 112.06 JPY
      CNY: 6.37,  // 1 USD = 6.37 CNY
      AED: 3.67,  // 1 USD = 3.67 AED
      SAR: 3.75,  // 1 USD = 3.75 SAR
      // Add more currencies and their conversion rates as needed
    };
  
    const priceElements = document.querySelectorAll('.price__card h3');
    priceElements.forEach(element => {
      const originalCurrency = element.getAttribute('data-currency');
      const originalPriceUSD = originalPricesUSD[element.getAttribute('data-plan')];
      
      if (currency === 'USD' || originalCurrency === currency) {
        element.innerText = `${currencySymbols[currency]}${originalPriceUSD.toFixed(2)}`;
      } else {
        let price = originalPriceUSD / exchangeRates[originalCurrency]; // Convert to USD first
        price *= exchangeRates[currency]; // Convert to selected currency
        element.innerText = `${currencySymbols[currency]}${price.toFixed(2)}`;
      }
    });
  }
  