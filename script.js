const checkbox = document.querySelector('#ham__input')
const sidebar = document.querySelector('.sidebar')

checkbox.checked = true

checkbox.addEventListener('change', function () {
    checkbox.checked 
        ? (sidebar.classList.add('hide'))
        : (sidebar.classList.remove('hide'));
})

const navLinks = document.querySelectorAll('.nav__links ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
        
        this.classList.add('active');
    });
});
