function myScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('#main-nav').classList.add('main-nav--fixed')
    document.querySelector('.main-menu__link').className = 'main-menu__link--fixed'
  } else {
    document.querySelector('#main-nav').classList.remove('main-nav--fixed')
    document.querySelector('.main-menu__link--fixed').className = 'main-menu__link'
  }
}

window.addEventListener('scroll', myScroll)