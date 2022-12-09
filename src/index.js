import { initialPageLoad } from "./initial-page-load.js";
import { menu } from "./menu.js"
import { contact } from "./contact.js"

initialPageLoad();
console.log("Hello Ristorante");

//Tab switching module

let tabSwitchingModule = (function () {
    const homeTab = document.querySelector('.Home');
    homeTab.addEventListener("click",initialPageLoad);

    const menuTab = document.querySelector('.Menu');
    menuTab.addEventListener("click", menu);

    const contactTab = document.querySelector('.Contact');
    contactTab.addEventListener("click", contact);

})();