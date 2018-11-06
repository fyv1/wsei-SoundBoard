document.body.addEventListener('keypress', (e)=> {

    switch(e.key){

        case 'w' :
            playSound("c");
            break;

        case '1' :
            playSound("cS");
            break;


    }



})

// tablica w kotrej łapiemy czas odpalenia przycisku oraz id dzwieku
// settimeout( czas odpalenia dzwieku )

// Date.now() 

function playSound(id) {
    let idS = "#" + id;

    KeySound = document.querySelector(idS);

    KeySound.currentTime = 0;
    KeySound.play();
}