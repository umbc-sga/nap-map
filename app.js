var NAP_LOCATIONS = {
    "Apartment Community Center": [
        {
            "location": "Rec Room",
            "noiseLevel": "Medium - Quiet",
            "spacesAvailable": "Room full of couches",
            "closingTime": "until 9pm without swipe access"
        }
    ],
    "AOK Library": [
        {
            "location": "RLC",
            "noiseLevel": "Loud - Quiet",
            "spacesAvailable": "30+ Couches",
            "closingTime": "24 hours"
        }
    ],
    "Commons": [
	
    ],
    "ITE": [
	
    ],
    "PAHB": [
	
    ],
    "PUP": [
	
    ],
    "Sherman": [
	
    ]
};

$("area").on("click", function(e) {
    // Prevent anything quirky from happening
    e.preventDefault();
	
    // Add navbar brand
    $(".drawer-menu").html('<li><a class="drawer-brand" href="#">UMBC Nap Map</a></li>');

    // Get building name
    var building = e.target.alt;
  
    // Add building name to drawer
    $(".drawer-menu").append("<h3>" + building + "</h3>");
  
    // Go through every single nap location in bulding
    for (var obj of NAP_LOCATIONS[building]) {
        // Create location list element
        var el = document.createElement("li");
        el.className = "locationItem";
        el.innerHTML = obj.location + "<br>";
        el.innerHTML += obj.noiseLevel + "<br>";
        el.innerHTML += obj.spacesAvailable+ "<br>";
        el.innerHTML += obj.closingTime + "<br>";
	
        // Add location to drawer
        $(".drawer-menu").append(el);
    }
  
    // Open drawer
    $('.drawer').drawer('open');
});

// Activate drawer
$('.drawer').drawer();

// Activate image map highlighting
$('img[usemap]').maphilight();

// Activate image map responsivneness
$(document).ready(function() {
	$('map').imageMapResize();
	
	// Hide the instructions after three seconds
	setTimeout(function() { $(".alert").hide(); }, 3000);
});
