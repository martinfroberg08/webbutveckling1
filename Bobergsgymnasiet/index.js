const closeMenu = () => {
    const nav = document.querySelector("nav")
    nav.classList.add("hidden")
}


const menuCloseBtn = document.querySelector(".menu-close-btn")
menuCloseBtn.addEventListener("click", closeMenu)

