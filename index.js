document.body.addEventListener('keypress', (e)=> {
    console.log(e);

    let sC = document.querySelector('#sC');

    sC.currentTime = 0;
    sC.play();
})

// tablica w kotrej łapiemy czas odpalenia przycisku oraz id dzwieku
// settimeout( czas odpalenia dzwieku )

// Date.now() 