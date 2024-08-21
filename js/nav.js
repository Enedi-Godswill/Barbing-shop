
// Created Navbar
const createNavbar = () => {
    const navbar = document.querySelector(".navbar");
    navbar.innerHTML = `
            <h1 class="logo">Eddie's Barbering</h1>
            <div class="nav-links">
                <div class="nav-tags">
                    <a href="./index.html">home</a>
                    <a href="./signup.html">Sign-up</a>
                    <a href="#">Requests</a>
                </div>
                <button class="menu-btn">
                    <img class="open" src="./icons/menu.svg" alt="">
                    <img class="close" src="./icons/close.svg" alt="">
                </button>
            </div>
        `;
}
createNavbar();

// navigation buttons
const navTabs = document.querySelector(".nav-tags");
const menuBtn = document.querySelector(".menu-btn");

function toggleBtn(){
    menuBtn.classList.toggle("active");
    navTabs.classList.toggle("active");
}
menuBtn.addEventListener("click", toggleBtn);

