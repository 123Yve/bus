

        document.addEventListener("DOMContentLoaded", function () {
       // Get the bus element
         var bus = document.getElementById("bus");

       // Set initial position and speed
         var position = 0;
         var speed = 5;

       // Move the bus function
         function moveBus() {
         position += speed;
         bus.style.left = position + "px";

       // Reset position when the bus reaches the end of the page
         if (position > window.innerWidth) {
         position = -50;
       }

      // Repeat the moveBUS function
         requestAnimationFrame(moveBus);
      }

      // Start the animation
         moveBus();
      });
