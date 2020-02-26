const url = require("url");

let address = "http://localhost:8000/demo.html?year=2019&month=october";

let parsedAddress = url.parse(address, true);
console.log(parsedAddress);