// Evento de Clique na Tela inteira
document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});

// Evento de Clique para o Input de Composição
document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
});

// Toca o audio de acordo com a tecla
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active'); 
        }, 300)
    }
}

// Executa a composição criada no input
function playComposition(songArray) {
    let wait = 0

    for (const songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}