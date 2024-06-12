let menu_btns = document.querySelectorAll('#menu_btn');
let drop_menus = document.querySelectorAll('#drop_menu');
let mini_btns = document.querySelectorAll('#mini_btn');
let mini_menus = document.querySelectorAll('#mini_menu');

menu_btns.forEach((menu_btn, index) => {
    menu_btn.addEventListener('click', function (event) {
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
    mini_btn.addEventListener('click', function (event) {
        event.stopPropagation();
        mini_menus.forEach((mini_menu, miniIndex) => {
            if (index !== miniIndex) {
                mini_menu.classList.add('hidden');
            }
        });
        mini_menus[index].classList.toggle('hidden');
    });
});

window.addEventListener('click', function () {
    drop_menus.forEach(drop_menu => {
        drop_menu.classList.add('hidden');
    });
    mini_menus.forEach(mini_menu => {
        mini_menu.classList.add('hidden');
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

document.addEventListener('DOMContentLoaded', function () {
    const menuOpenButton = document.getElementById('menu_open');
    const menuCloseButton = document.getElementById('close_menu');
    const mobileMenu = document.getElementById('mobile_menu');
    const body = document.body;

    menuOpenButton.addEventListener('click', function () {
        mobileMenu.classList.remove('-left-full');
        mobileMenu.classList.add('left-0');
        body.classList.add('overflow-hidden', 'h-screen');
    });

    menuCloseButton.addEventListener('click', function () {
        mobileMenu.classList.remove('left-0');
        mobileMenu.classList.add('-left-full');
        body.classList.remove('overflow-hidden', 'h-screen');
    });

    const toggles = document.querySelectorAll('[data-contact-toggle]');
    const innerToggles = document.querySelectorAll('[data-inner-contact-toggle]');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const container = this.parentNode;
            const info = container.querySelector('[data-contact-info]');
            const icon = this.querySelector('[data-toggle-icon]');

            if (info.classList.contains('scale-y-100')) {
                info.classList.remove('scale-y-100');
                info.classList.add('scale-y-0');
                info.classList.add('hidden');
                icon.classList.remove('rotate-90');
            } else {
                document.querySelectorAll('[data-contact-info].scale-y-100').forEach(openInfo => {
                    openInfo.classList.remove('scale-y-100');
                    openInfo.classList.add('scale-y-0');
                    openInfo.classList.add('hidden');
                    openInfo.parentNode.querySelector('[data-toggle-icon]').classList.remove('rotate-90');
                });

                info.classList.remove('scale-y-0');
                info.classList.add('scale-y-100');
                info.classList.remove('hidden');
                icon.classList.add('rotate-90');
            }
        });
    });

    innerToggles.forEach(innerToggle => {
        innerToggle.addEventListener('click', function () {
            const innerContainer = this.parentNode;
            const innerInfo = innerContainer.querySelector('[data-inner-contact-info]');
            const innerIcon = this.querySelector('[data-inner-toggle-icon]');

            if (innerInfo.classList.contains('scale-y-100')) {
                innerInfo.classList.remove('scale-y-100');
                innerInfo.classList.add('scale-y-0');
                innerInfo.classList.add('hidden');
                innerIcon.classList.remove('rotate-90');
            } else {
                document.querySelectorAll('[data-inner-contact-info].scale-y-100').forEach(openInnerInfo => {
                    openInnerInfo.classList.remove('scale-y-100');
                    openInnerInfo.classList.add('scale-y-0');
                    openInnerInfo.classList.add('hidden');
                    openInnerInfo.parentNode.querySelector('[data-inner-toggle-icon]').classList.remove('rotate-90');
                });

                innerInfo.classList.remove('scale-y-0');
                innerInfo.classList.add('scale-y-100');
                innerInfo.classList.remove('hidden');
                innerIcon.classList.add('rotate-90');
            }
        });
    });
});