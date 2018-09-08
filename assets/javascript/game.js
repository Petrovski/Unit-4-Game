    // Mineral Collectors Game
    
    var targetNumber = Math.floor(Math.random() * 101) + 19;

    $("#number-to-guess").text(targetNumber);

    var counter = 0;
    var wins = 0;
    var losses = 0;

    // We begin by expanding our array to include four options.
    var numberOptions = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1,];

    // Make an array to attach id's to each image to allow for different images
    var mineralId = ["id=\"sunset\"", "id=\"opal\"", "id=\"ocean\"", "id=\"bismuth\""];

    // Next we create a for loop to create crystals for every numberOption.
        for (var i = 0; i < numberOptions.length; i++) {

            // For each iteration, we will create a mineralButton

       var mineralButton = $("#crytals").add("<img " + mineralId[i] + ">").addClass("crystal-image");


    // Add data values to each mineralButton
    mineralButton.attr("data-crystalvalue", numberOptions[i]);

    // Add (append) each mineralButton to the page to create the images
    $("#crystals").append(mineralButton)
}

    // This time, our click event applies to every single crystal on the page. Not just one.
        $(".crystal-image").on("click", function () {

            // Determining the crystal's value requires us to extract the value from the data attribute.
            // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
            // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
            // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        
        // We then add the crystalValue to the user's "counter" which is a global variable.

        // Every click, from every crystal adds to the global counter.
        counter += crystalValue;

        // Get the Logic running so the game actually works
        $("#score").text(counter);

            if (counter === targetNumber) {
            alert("You win!");
            gameReset();
            wins++;
            $("#wins").text(wins);
        }

            else if (counter >= targetNumber) {
            alert("You lose!!");
            gameReset();
            losses++;
            $("#losses").text(losses);
        }

    });


    function gameReset() {
        counter = 0;
        $("#score").text("0");
    }