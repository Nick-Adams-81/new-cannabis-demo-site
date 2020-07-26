// declaring our global variables
const gdp = document.querySelector("#gdp-btn")
const bubba = document.querySelector("#bubba-btn")
const plat = document.querySelector("#platinum-btn")

// Adding simple event listeners to our buttons
// These are for a demonstration for now, more 
// functionality will be added soon.

// GDP btn functionality.
gdp.addEventListener("click", function() {
    alert("just ordered some fire ass GDP!")
})

// Bubba kush btn functionality.
bubba.addEventListener("click", function() {
    alert("some of dat bubba comin your way!")
})

// Platinum btn functionality.
plat.addEventListener("click", function() {
    alert("Our finest Platinum is en route")
})