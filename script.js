// Inspired by https://www.w3schools.com/howto/howto_css_modals.asp

        // Get the sign up modal (the only one that works with let (or const))
        let modal_mallorca = document.getElementById("my_modal_mallorca");

        // Sign up button that opens the modal
        var btn = document.getElementById("modal_mallorca_open");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("modal_mallorca_close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
        modal_mallorca.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal_mallorca.style.display = "none";
        }



        // Get the sign up modal (the only one that works with let (or const))
        let modal_newYork = document.getElementById("my_modal_newYork");

        // Sign up button that opens the modal
        var btn = document.getElementById("modal_newYork_open");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("modal_newYork_close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
        modal_newYork.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal_newYork.style.display = "none";
        }


        // Get the sign up modal (the only one that works with let (or const))
        let modal_venice = document.getElementById("my_modal_venice");

        // Sign up button that opens the modal 
        var btn = document.getElementById("modal_venice_open");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("modal_venice_close")[0];

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
        if (event.target == modal_mallorca || event.target == modal_newYork || event.target == modal_venice) {
            modal_mallorca.style.display = "none";
            modal_newYork.style.display = "none";
            modal_venice.style.display = "none";
            }
        }