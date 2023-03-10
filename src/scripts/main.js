"use strict";

document.addEventListener('DOMContentLoaded', function() {
// меню 
    var sidenav = document.querySelectorAll('.sidenav');
    var instances_sidenav = M.Sidenav.init(sidenav);
// иальные окна
    var modal = document.querySelectorAll('.modal');
    var instances_modal = M.Modal.init(modal);
// карусель
    var gallery = document.querySelectorAll('.materialboxed');
    var instances_gallery = M.Materialbox.init(gallery);
});









