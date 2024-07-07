
document.addEventListener('DOMContentLoaded', function() {
    const usdInput = document.getElementById('currency-usd');
    const eurInput = document.getElementById('currency-eur');
    const brpInput = document.getElementById('currency-brp');
    const inrInput = document.getElementById('currency-inr');
    const jpyInput = document.getElementById('currency-jpy');
    const btkInput = document.getElementById('currency-btk');
    const cyrInput = document.getElementById('currency-cyr');
    
  
    // Conversion rates
    const rates = {
      usd: 1,
      eur: 0.923393,
      brp: 0.782461,
      inr: 83.491784,
      jpy: 160.736987,
      btk: 117.35,
      cyr: 7.267130
    };
  
    function convertCurrency(value, fromCurrency) {
      const usdValue = value / rates[fromCurrency];
      return {
        usd: (usdValue * rates.usd).toFixed(2),
        eur: (usdValue * rates.eur).toFixed(2),
        brp: (usdValue * rates.brp).toFixed(2),
        inr: (usdValue * rates.inr).toFixed(2),
        jpy: (usdValue * rates.jpy).toFixed(2),
        btk: (usdValue * rates.btk).toFixed(2),
        cyr: (usdValue * rates.cyr).toFixed(2)
      };
    }
  
    function updateValues(fromInput) {
      const value = parseFloat(fromInput.value);
      if (isNaN(value)) return;
  
      const currency = fromInput.id.split('-')[1];
      const convertedValues = convertCurrency(value, currency);
  
      usdInput.value = convertedValues.usd;
      eurInput.value = convertedValues.eur;
      brpInput.value = convertedValues.brp;
      inrInput.value = convertedValues.inr;
      jpyInput.value = convertedValues.jpy;
      btkInput.value = convertedValues.btk;
      cyrInput.value = convertedValues.cyr;
    }
  
    usdInput.addEventListener('input', () => updateValues(usdInput));
    eurInput.addEventListener('input', () => updateValues(eurInput));
    brpInput.addEventListener('input', () => updateValues(brpInput));
    inrInput.addEventListener('input', () => updateValues(inrInput));
    jpyInput.addEventListener('input', () => updateValues(jpyInput));
    btkInput.addEventListener('input', () => updateValues(btkInput));
    cyrInput.addEventListener('input', () => updateValues(cyrInput));
  });
  