let container = document.querySelector(".container")
let qrCodeBtn = document.getElementById("qr-btn")
let qrCodeInput = document.querySelector('#qr-form input')
let qrCodeImg = document.querySelector('#qr-code img')


// Gera o QR Code
function generateQrCode() {
    let qrCodeInputValue = qrCodeInput.value
    
    if(!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = "Gerando código..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", ()=> {
        container.classList.add("active")
        qrCodeBtn.innerText = "Código criado!"
    })
}
qrCodeBtn.addEventListener("click", () => {
    generateQrCode()
})

// Gera o QR Code clicando no enter
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        generateQrCode()
    }
})

// Limpa o QR Code
qrCodeInput.addEventListener("keyup", (e) => {
    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerHTML = 'Gerar QR Code'
    }
})