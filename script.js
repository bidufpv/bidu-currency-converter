import { convertCurrency } from "bidu-currency-converter";
convertCurrency("USD", "INR", 5).then(res=>console.log(res));
