(function (window, document) {
    const forms = [
        {
            name: 'newsletter-hero',
            afterSuccess: null,
            afterError: null,
        },
        {
            name: 'newsletter-post-card',
            afterSuccess: null,
            afterError: (warningElement) => {
                warningElement.classList.remove('d-none');
            }
        },
        {
            name: 'newsletter-banner',
            afterSuccess: null,
            afterError: null,
        },
    ]
    forms.map(form => {
        addFormEventListener(document, form.name, form.afterSuccess, form.afterError);
    })
})(window, document);

function addFormEventListener(document, formName, afterSuccess = null, afterError = null) {
    console.log(formName + '-form');
    let form = document.getElementById(formName + '-form');
    let emailField = document.getElementById(formName + '-email');
    let button = document.getElementById(formName + '-submit');
    let warning = document.getElementById(formName + '-warning');

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
            }).then(res => {
                console.log(res);
                if (afterSuccess) {
                    afterSuccess();
                }
                button.disabled = false;
            }).then(err => {
                console.error(err);
                if (afterError) {
                    afterError(warning);
                }
            });
        });
    }
}
