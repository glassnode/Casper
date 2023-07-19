(function (window, document) {
    var localStorageDismissKey = 'hideSignupBanner';
    var hideBanner = localStorage.getItem(localStorageDismissKey) === 'true';

    var banner = document.querySelector('.newsletter-banner');

    if (!hideBanner) {
        banner.classList.remove('d-none');

        var dismissButton = document.querySelector('.newsletter-banner__dismiss button');

        dismissButton.addEventListener('click', () => {
            banner.classList.add('d-none');
            localStorage.setItem(localStorageDismissKey, 'true');
        })
    }
})(window, document);