// Pegando os elementos do HTML 
const hour = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

// Funções 
setInterval(() => {
    let dateToday = new Date()

    // Pegando as horas 
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()
    // Adicionando o 0 na frente 

    if(hr < 10) {
        hr = `0${hr}`
    }

    if(min < 10) {
        min = `0${min}`
    }

    if(sec < 10) {
        sec = `0${sec}`
    }



    // Definindo o novo conteúdo no HTML
    hour.textContent = hr
    minutes.textContent = min
    seconds.textContent = sec
})