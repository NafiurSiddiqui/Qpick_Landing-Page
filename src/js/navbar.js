const menubarContainer = document.querySelector('.header__menu-container');
const menuContainer = document.querySelector('.header__menu__li-container');
const menubarTop = document.querySelector('.header__menubars_top');
const menubarMiddle = document.querySelector('.header__menubars_middle');
const menubarBottom = document.querySelector('.header__menubars_bottom');
const header = document.querySelector('.header');

let openMenu = false;
let windowSize = window.innerWidth < 680;

menubarContainer.addEventListener('click', () => {
	if (!openMenu && windowSize) {
		header.classList.add('open');
		openMenu = true;
	} else {
		header.classList.remove('open');
		openMenu = false;
	}
});
