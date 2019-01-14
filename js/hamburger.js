const mainNavToggle = document.querySelector('.main-nav__toggle');
const navigation = document.querySelector('.main-nav__navigation');
const mainNav = document.querySelector('.main-nav')

navigation.classList.add('main-nav__navigation--collapsed')

mainNavToggle.addEventListener(
    'click',
    (event) => {
        event.preventDefault();
        if (navigation.classList.contains('main-nav__navigation--collapsed')) {
            navigation.classList.remove('main-nav__navigation--collapsed');
            mainNav.classList.add('main-nav--top');
        } else {
            mainNav.classList.remove('main-nav--top');
            navigation.classList.add('main-nav__navigation--collapsed');
        }
    }
)
