// Smooth scroll to map section (optional)
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    const mapContainer = document.querySelector('.map-container');
    mapContainer.scrollIntoView({ behavior: 'smooth' });
  });
  
  document.getElementById('dropbtn').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    
    // Toggle visibility of the nav links when the button is clicked
    if (navLinks.style.display === 'block' || navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
       
        console.log(navLinks.style.display)

        console.log('hello')

    } else {
        navLinks.style.display = 'flex';
        console.log(navLinks.style.display)
        navLinks.style.bakgroundColor='yellow';
        navLinks.style.position='absolute';
        navLinks.style.top='50px';
        navLinks.style.right='0';
        navLinks.style.gap='20px';
        navLinks.style.padding='10px';
        navLinks.style.backgroundColor='white';
        navLinks.style.borderBottom='2PX solid black';
        navLinks.style.flexDirection='column';
        console.log('bye')

    }
});