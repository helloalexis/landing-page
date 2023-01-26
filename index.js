const container_one = document.getElementsByClassName("container-one");
const section_one_img = document.getElementById("section-one-img");
const header_link = document.getElementsByClassName("link");
const flex_container_two = document.getElementsByClassName("flex-container-two");
const container_three = document.getElementsByClassName("container-three");
const ham_container = document.getElementsByClassName("ham-container");
const ham_menu_icon = document.getElementsByClassName("ham-menu-icon");

var menuIsOpen = false;

initial_check();

function initial_check(){
    if (window.innerWidth < 966){
        container_one[0].style.float = "none";
        container_one[0].style.width = "100%"
        ham_menu_icon[0].style.display = "inline";

        for(var i = 0; i < header_link.length; i++){
            header_link[i].style.display = "none";
        }

        flex_container_two[0].style.flexDirection = "column";
        container_three[0].style.flexDirection = "column";
        section_one_img.style.clear = "left";
        section_one_img.style.width = "100%";

    }else{
        container_one[0].style.float = "left";
        container_one[0].style.width = "50%"
        ham_menu_icon[0].style.display = "none";
        ham_container[0].style.display = "none";

        for(var i = 0; i < header_link.length; i++){
            header_link[i].style.display = "inline";
        }

        flex_container_two[0].style.flexDirection = "row";
        container_three[0].style.flexDirection = "row";
        section_one_img.style.width = "50%";
    }
}

window.addEventListener("resize", function(){
    if (window.innerWidth < 966){
        container_one[0].style.float = "none";
        container_one[0].style.width = "100%"
        ham_menu_icon[0].style.display = "inline";

        for(var i = 0; i < header_link.length; i++){
            header_link[i].style.display = "none";
        }

        flex_container_two[0].style.flexDirection = "column";
        container_three[0].style.flexDirection = "column";
        section_one_img.style.clear = "left";
        section_one_img.style.width = "100%";

    }else{
        container_one[0].style.float = "left";
        container_one[0].style.width = "50%"
        ham_menu_icon[0].style.display = "none";

        for(var i = 0; i < header_link.length; i++){
            header_link[i].style.display = "inline";
        }

        flex_container_two[0].style.flexDirection = "row";
        container_three[0].style.flexDirection = "row";
        section_one_img.style.width = "50%";
        ham_container[0].style.display = "none";

    }
});

function showMenu(){
    if (!menuIsOpen){
        ham_container[0].style.display = "flex";
        menuIsOpen = true;
    }else{
        ham_container[0].style.display = "none";
        menuIsOpen = false;
    }
    
}