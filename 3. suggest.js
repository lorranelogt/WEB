const form = document.querySelector('form')
const successMessage = document.getElementById('successMessage')
const submitButton = document.getElementById('submitButton')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    setTimeout(() => {
        successMessage.style.display = 'block'
    }, 1000)
    form.reset();

    submitButton.disabled = true;
    submitButton.textContent = `Enviando...`

    setTimeout(() => {
        submitButton.disabled = false;
        submitButton.textContent = `Enviar Sugestão`
    }, 1000)

    setTimeout(() => {
        successMessage.style.display = 'none'
    }, 5000)
})