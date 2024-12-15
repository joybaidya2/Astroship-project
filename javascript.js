//Here is the dynamic work navbar.
fetch('./navbar.html')
.then((response) => response.text())
.then((data) => {
    document.getElementById('navbar').innerHTML = data;
    initializeNavbarEvents();
})
.catch((error) => console.error('Error loading navbar:', error));

//here is the main work is moblie responsive section
function initializeNavbarEvents(){
    const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        menuButton.addEventListener('click', () => {
            if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
                mobileMenu.style.display = 'block';
            } else {
                mobileMenu.style.display = 'none';
            }
        });
}
