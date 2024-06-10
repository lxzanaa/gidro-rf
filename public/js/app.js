let menu_btns = document.querySelectorAll('#menu_btn');
let drop_menus = document.querySelectorAll('#drop_menu');
let mini_btns = document.querySelectorAll('#mini_btn');
let mini_menus = document.querySelectorAll('#mini_menu');

menu_btns.forEach((menu_btn, index) => {
    menu_btn.addEventListener('click', function(event) {
        event.stopPropagation();
        drop_menus.forEach((drop_menu, dropIndex) => {
            if (index !== dropIndex) {
                drop_menu.classList.add('hidden');
            }
        });
        drop_menus[index].classList.toggle('hidden');
    });
});

mini_btns.forEach((mini_btn, index) => {
    mini_btn.addEventListener('click', function(event) {
        event.stopPropagation();
        mini_menus.forEach((mini_menu, miniIndex) => {
            if (index !== miniIndex) {
                mini_menu.classList.add('hidden');
            }
        });
        mini_menus[index].classList.toggle('hidden');
    });
});

window.addEventListener('click', function() {
    drop_menus.forEach(drop_menu => {
        drop_menu.classList.add('hidden');
    });
    mini_menus.forEach(mini_menu => {
        mini_menu.classList.add('hidden');
    });
});
