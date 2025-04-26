// card flipper
var cards = document.querySelectorAll('.flip-card');

[...cards].forEach(function(card) {
    card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
    });
});