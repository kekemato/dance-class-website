$(document).ready(function () {
    $('a.animated').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 800);
    })
});