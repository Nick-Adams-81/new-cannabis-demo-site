// declaring our global variables
const gdp = document.querySelector("#gdp-btn")
const bubba = document.querySelector("#bubba-btn")
const plat = document.querySelector("#platinum-btn")

// Adding simple event listeners to our buttons.
// These are for a demonstration for now, more 
// functionality will be added soon.

// GDP btn functionality.
gdp.addEventListener("click", function() {
    alert("GDP added to cart")
})

// Bubba kush btn functionality.
bubba.addEventListener("click", function() {
    alert("Bubba kush added to cart")
})

// Platinum btn functionality.
plat.addEventListener("click", function() {
    Swal.fire(
        'Platinum OG added to cart!',
        'Weed on the way',
        'success'
      )

      //imageUrl: "https://darkheartnursery.com/wp-content/uploads/2014/07/lf_platinum_OG_9633.jpg",
     
})