(function (window, document) {
    const forms = [
        'newsletter-post-card',
        'newsletter-banner',
    ]

    forms.map(form => {
        addFormEventListener(document, form, createAfterSuccess(form), createAfterError(form));
    })
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
                console.error(err);
            });
        });
    }
}

function createAfterSuccess(formName) {
    return () => {
        const mainElement = document.getElementById(formName + '-main');
        const successElement = document.getElementById(formName + '-success');

        mainElement.classList.add('d-none');
        successElement.classList.remove('d-none');
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
