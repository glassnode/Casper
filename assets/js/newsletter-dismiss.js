(function (window, document) {
    let localStorageDismissKey = 'newsletterFloatBannerHidden';
    let bannerHidden = localStorage.getItem(localStorageDismissKey) === 'true';

    let banner = document.querySelector('.newsletter-banner');

    if (!bannerHidden && banner) {
        banner.classList.remove('d-none');

        let dismissButton = document.querySelector('.newsletter-banner__dismiss button');

        dismissButton.addEventListener('click', () => {
            banner.classList.add('d-none');
            localStorage.setItem(localStorageDismissKey, 'true');
        })
    }
})(window, document);