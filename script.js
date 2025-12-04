console.log("Le script est chargé !")


const themeButton1 = document.querySelector('#bouton1');


if (themeButton1) {  
    themeButton1.addEventListener('click', () => {
        themeButton1.classList.toggle('vert');
    });
}

