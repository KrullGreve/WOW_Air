
// Inspired by https://www.w3schools.com/howto/howto_css_modals.asp
        
        // Get Mallorca modal
        var modal_up = document.getElementById("myModal_mallorca");

        // Button that opens the modal
        var btn = document.getElementById("viewModal_mallorca");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("modalContent_mallorca_close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
        modal_mallorca.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal_mallorca.style.display = "none";
        }

        
        // Get New York modal
        var modal_in = document.getElementById("myModal_newYork");

        // Button that opens the modal
        var btn = document.getElementById("viewModal_newYork");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("modalContent_newYork_close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
        modal_newYork.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal_newYork.style.display = "none";
        }

        // Get the venice modal
        var modal_up = document.getElementById("myModal_venice");

        // Button that opens the modal
        var btn = document.getElementById("viewModal_venice");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("modalContent_venice_close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
        modal_venice.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal_venice.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal_mallorca || event.target == modal_venice || event.target == modal_newYork) {
                modal_mallorca.style.display = "none";
                modal_newYork.style.display = "none";
                modal_venice.style.display = "none";
                }
            }