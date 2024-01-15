
//fixed scrollbar
let navbar = document.querySelector(" .navigation-wrap");

window.onscroll = () =>{
    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add("scroll-on");
    }else{
        navbar.classList.remove("scroll-on");
    }
}

//hide navlinks

let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLink.forEach((a)=>{
    a.addEventListener("click", ()=>{
        navCollapse.classList.remove("show");
    })
})