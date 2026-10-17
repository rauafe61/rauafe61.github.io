const mobileMenu = document.querySelector(".mobile-menu")
const menuUl = document.querySelector(".menu ul")
const navLinks = document.querySelectorAll(".menu ul li")

mobileMenu.addEventListener("click", function() {
    menuUl.classList.toggle("active");
    
    for (var i = 0; i < navLinks.length; i++) {
        var link = navLinks[i];

        if (link.style.animation) {
            link.style.animation = "";
        } else {
            var delay = i / 7 + 0.3;
            link.style.animation = "navLinkFade 0.5s ease forwards " + delay + "s";
        }
    }
})