const ele = document.getElementById("menu-img");
ele.addEventListener('click', () => {
    const menuEle = document.querySelector(".menu-items-container");
    const isMenuCollapse = ele.src.includes("menu") ? false : true;
    ele.src = isMenuCollapse ? "./assets/images/icon-menu.svg" : "./assets/images/icon-close.svg";
    menuEle.hidden = isMenuCollapse ? true : false;
})