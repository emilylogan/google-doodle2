console.log('OK');

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.0/gsap.min.js"></script>

gsap.fromTo('#eve', 
            { x: 0, y: 0, opacity: 0 }, 
            { x: 200, y: -200, opacity: 1 }
           );