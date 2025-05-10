// Header Toggle Buttton
let toggle_btn = document.getElementById('toggle_btn');
let nav_list = document.getElementById('nav_menu');
let nav_link = document.getElementById('nav_link');

// nav_list.style.marginTop = "-268px";
toggle_btn.addEventListener('click', ()=>{
    if(nav_list.style.marginTop == "-268px"){
        nav_list.style.marginTop = "268px";
        nav_list.style.transition = "all ease-in .3s";
    } else {
        nav_list.style.marginTop = "-268px";
    }
});

function close_navlinks(){
        // document.getElementById('nav_menu').style.marginTop = "-268px";
        // document.getElementById('nav_menu').style.display = "none";
}
// nav_link.addEventListener('click', ()=>{
//     document.getElementById('nav_menu').style.marginTop = "-268px";
//     // nav_list.style.marginTop = "-268px";
// });


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".subtitle", {
    ...scrollRevealOption,
    origin: "bottom",
});

ScrollReveal().reveal(".title", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 500,
});

ScrollReveal().reveal(".title_desc", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 1000,
});

ScrollReveal().reveal(".btn", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 1200,
});

ScrollReveal().reveal(".home_img", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1200,
});


ScrollReveal().reveal(".about .section_title", {
    ...scrollRevealOption,
    origin: "bottom",
});

ScrollReveal().reveal(".about_content p", {
    ...scrollRevealOption,
    interval: 400, 
});


ScrollReveal().reveal(".education_container .edu_card", {
    ...scrollRevealOption,
    interval: 400, 
    origin: "top",
});

ScrollReveal().reveal(".skills_container .skill_card", {
    ...scrollRevealOption,
    interval: 300, 
    origin: "left",
});

ScrollReveal().reveal(".project_wrapper .outer", {
    ...scrollRevealOption,
    interval: 300, 
    origin: "top",
});

ScrollReveal().reveal(".contact_wrapper .contact_content .contact_item", {
    ...scrollRevealOption,
    interval: 300, 
    origin: "top",
});