(function (window, document) {
    const forms = [
        'newsletter-post-card',
        'newsletter-banner',
    ]

    const formsMeta = {
        'newsletter-post-card': {
            localStorageDismissKey: 'newsletterPostBlockHidden',
            init: (localStorageDismissKey) => {
                let bannerHidden = localStorage.getItem(localStorageDismissKey) === 'true';
                let postCardCta = document.querySelector('.newsletter-post-card');

                if (!bannerHidden && postCardCta) {
                    postCardCta.classList.remove('d-none');
                }
            },
       },
        'newsletter-banner': {
            localStorageDismissKey: 'newsletterFloatBannerHidden',
            init: (localStorageDismissKey) => {
                let bannerHidden = localStorage.getItem(localStorageDismissKey) === 'true';

                let banner = document.querySelector('.newsletter-banner');

                if (!bannerHidden && banner) {
                    banner.classList.remove('d-none');

                    if (localStorage.getItem('newsletterFloatBannerAnimation') !== 'false') {
                        banner.classList.add('newsletter-banner--hidden')
                        setTimeout(() => {
                            banner.classList.remove('newsletter-banner--hidden');
                            localStorage.setItem('newsletterFloatBannerAnimation', 'false');
                        }, 2500);
                    }

                    let dismissButton = document.querySelector('.newsletter-banner__dismiss button');
                    dismissButton.addEventListener('click', () => {
                        banner.classList.add('d-none');
                        localStorage.setItem(localStorageDismissKey, 'true');
                    })
                }
            },
        },
    };

    forms.map(formName => {
        const formElement = document.getElementById(formName + '-form');
        if (formElement) {
            const form = formsMeta[formName];
            form.init(form.localStorageDismissKey);
            addFormEventListener(
                document,
                formName,
                createAfterSuccess(formName, form.localStorageDismissKey),
                createAfterError(formName)
            );
        }
    });
})(window, document);

function addFormEventListener(document, formName, afterSuccess = null, afterError = null) {
    const form = document.getElementById(formName + '-form');
    const emailField = document.getElementById(formName + '-email');
    const button = document.getElementById(formName + '-submit');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let email = emailField.value;
            button.disabled = true;

            fetch('http://localhost:3000/api/subscribe', {
                body: JSON.stringify({ email: email, type: 'newsletter' }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            }).then(response => {
                button.disabled = false;
                if (response.ok && afterSuccess) {
                    afterSuccess();
                }
                return response.json();
            }).then(result => {
                if (!result.ok && afterError) {
                    afterError(result.error);
                }
            }).then(err => {
                if (err) {
                    console.error(err);
                }
            });
        });
    }
}

function createAfterSuccess(formName, formKey) {
    return () => {
        const mainElement = document.getElementById(formName + '-main');
        const successElement = document.getElementById(formName + '-success');

        mainElement.classList.add('d-none');
        successElement.classList.remove('d-none');

        localStorage.setItem(formKey, 'true');
    }
}

function createAfterError(formName) {
    return (msg) => {
        const warningElement = document.getElementById(formName + '-warning');
        const warningMessage = document.getElementById(formName + '-warning-msg');

        warningMessage.innerText = msg;
        warningElement.classList.remove('d-none');
    }
}
