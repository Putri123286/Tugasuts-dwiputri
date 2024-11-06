// Sticky Navbar
window.onscroll = function() {
    if (window.pageYOffset > 100) {
        document.querySelector('.navbar').classList.add('navbar-scrolled');
    } else {
        document.querySelector('.navbar').classList.remove('navbar-scrolled');
    }
};

// Back to Top Button
var backToTopButton = document.getElementById("back-to-top");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
backToTopButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Chat Widget
document.getElementById('send-message').addEventListener('click', function() {
    var message = document.getElementById('chat-input').value;
    if (message) {
        var chatMessages = document.getElementById('chat-messages');
        chatMessages.innerHTML += '<p><strong>You:</strong> ' + message + '</p>';
        document.getElementById('chat-input').value = '';
    }
});

// Unique slide transition for menu changes
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const pageTransition = document.createElement('div');
    pageTransition.classList.add('page-transition');
    document.body.appendChild(pageTransition);

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = this.getAttribute('href');
                pageTransition.classList.add('active');
                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            }
        });
    });
});

// Remove page transition on page load
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        const pageTransition = document.querySelector('.page-transition');
        if (pageTransition) {
            pageTransition.classList.remove('active');
        }
    }
});