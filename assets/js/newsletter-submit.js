(function (window, document) {
    addFormEventListener(document, 'newsletter-hero');
    addFormEventListener(document, 'newsletter-post-card');
    addFormEventListener(document, 'newsletter-banner');
})(window, document);

function addFormEventListener(document, formName, afterSuccess = null, afterError = null) {
    let form = document.getElementById(formName + '-form');
    let emailField = document.getElementById(formName + '-email');
    let button = document.getElementById(formName + '-submit');

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

            });
        });
    }
}
