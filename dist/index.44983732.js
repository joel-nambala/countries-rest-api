"use strict";
const getCountryData = async function(country) {
    try {
        const response = await fetch(`http://restcountries.com/v3.1/name/${country}`);
        if (!response.ok) throw new Error("Something went wrong. Please try again");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err.message);
    }
};
//getCountryData();
document.querySelector(".input").addEventListener("keyup", function() {
    const query = document.querySelector(".input").value;
    if (query == null) return;
    getCountryData(query);
});

//# sourceMappingURL=index.44983732.js.map
