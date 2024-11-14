const startButton = document.getElementById('startButton')
const hiddenMessage = document.getElementById('hiddenMessage')

startButton.addEventListener('mouseout', () => {
    if(hiddenMessage.style.display = 'none') {
        hiddenMessage.style.display = 'flex'
        
        setTimeout(() => {
            hiddenMessage.style.display = 'none'
        }, 1500)
    }
})