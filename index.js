var buttons = document.querySelectorAll('.button');
var contents = document.querySelectorAll('.content');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', toggleContent.bind(null, i));
}

function toggleContent(index) {
    for (var i = 0; i < contents.length; i++) {
        if (i === index) {
            contents[i].classList.toggle('open');
        } else {
            contents[i].classList.remove('open');
        }
    }
}