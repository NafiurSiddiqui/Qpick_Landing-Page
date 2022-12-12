const menubarContainer = document.querySelector('.header__menu-container');
const menuContainer = document.querySelector('.header__menu__li-container');
const menubarTop = document.querySelector('.header__menubars_top');
const menubarMiddle = document.querySelector('.header__menubars_middle');
const menubarBottom = document.querySelector('.header__menubars_bottom');
const header = document.querySelector('.header');

let openMenu = window.innerWidth < 680 ? true : false;

let mobileMenuActive = false;

let windowSize = window.addEventListener('resize', () => {
	openMenu = window.innerWidth < 680 ? true : false;

	mobileMenuActive && !openMenu
		? header.classList.contains('open')
			? header.classList.remove('open')
			: (mobileMenuActive = false)
		: null;
});

menubarContainer.addEventListener('click', () => {
	if (openMenu && !mobileMenuActive) {
		header.classList.add('open');
		mobileMenuActive = true;
	} else {
		header.classList.remove('open');
		mobileMenuActive = false;
	}
});
