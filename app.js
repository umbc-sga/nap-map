var NAP_LOCATIONS = {
    "Admin": [
       
    ],
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
    "Biological Sciences": [
       
    ],
    "Commons": [
	    {
	        "location": "OCSS",
	        "noiseLevel": "Loud",
	        "spacesAvailable": "24 Couches",
	        "closingTime": "Midnight"
	    }
    ],
    "DHall": [
       
    ],
    "Engineering": [
       
    ],
    "Fine Arts": [
       
    ],
    "ITE": [
	    {
	        "location": "2nd Floor",
	        "directions": "across from stairwell",
	        "noiseLevel": "Medium - Quiet",
	        "spacesAvailable": "8 Comfortable Chairs",
	        "closingTime": "Midnight"
	    }
    ],
    "Math & Psychology": [
       
    ],
    "Meyerhoff": [
       
    ],
    "PAHB": [
	    {
	        "location": "Lobby",
	        "noiseLevel": "Loud - Quiet",
	        "spacesAvailale": "8 Benches",
	        "closingTime": "24 hours"
	    }
    ],
    "Physics": [
       
    ],
    "PUP": [
	    {
	        "location": "2nd Floor Couches",
	        "noiseLevel": "Medium - Quiet",
	        "spacesAvailable": "5 Couches",
	        "closingTime": "Midnight"
	    }
    ],
    "RAC": [
       
    ],
    "Sherman": [
	    {
	        "location": "International Media Center",
	        "directions": "B-Wing, across from Room 219",
	        "noiseLevel": "Quiet",
	        "spacesAvailable": "5 Couches",
	        "closingTime": "Midnight"
	    }
    ],
    "Sondheim": [
       
    ],
    "University Center": [
       
    ],
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

    if (NAP_LOCATIONS[building].length === 0)  {
        $(".drawer-menu").append("<li class='locationItem'>No spots have been noted...yet.</li>");
        $(".drawer-menu").append("<li class='locationItem'>Email <a href='mailto:sga@umbc.edu'>sga@umbc.edu</a> if you know of a good spot.</li>");
    }
        
    // Go through every single nap location in bulding
    for (var obj of NAP_LOCATIONS[building]) {
        // Create location list element
        var el = document.createElement("li");
        el.className = "locationItem";
        el.innerHTML = "<b>Location: </b>" +obj.location + "<br>";
        el.innerHTML += "<b>Noise: </b>" + obj.noiseLevel + "<br>";
        el.innerHTML += "<b>Spaces: </b>" +obj.spacesAvailable+ "<br>";
        el.innerHTML += "<b>Open Until: </b>" + obj.closingTime + "<br>";
	
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
	setTimeout(function() { $(".alert").hide(); }, 2000);
});
