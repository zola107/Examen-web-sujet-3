console.log("Le script est chargé !");


//--------------------------------------------------------- affiche le bouton en vert si on clique dessus 
const themeButton1 = document.querySelector('#bouton1');


if (themeButton1) {  
    themeButton1.addEventListener('click', () => {
        themeButton1.classList.toggle('vert');
    });
}






//---------------------------------------------------------affiche le bouton en rouge si on clique dessus 

const themeButton2 = document.querySelector('#bouton2');

if (themeButton2) {  
    themeButton2.addEventListener('click', () => {
        themeButton2.classList.toggle('rouge');
    });
}






//---------------------------------------------------------affiche le bouton en rouge si on clique dessus 

const themeButton3 = document.querySelector('#bouton3');

if (themeButton3) {  
    themeButton3.addEventListener('click', () => {
        themeButton3.classList.toggle('rouge');
    });
}





//---------------------------------------------------------affiche le bouton en rouge si on clique dessus 

const themeButton4 = document.querySelector('#bouton4');

if (themeButton4) {  
    themeButton4.addEventListener('click', () => {
        themeButton4.classList.toggle('rouge');
    });
}






//---------------------------------------------------------affiche le bouton en rouge si on clique dessus 

const themeButton5 = document.querySelector('#bouton5');

if (themeButton5) {  
    themeButton5.addEventListener('click', () => {
        themeButton5.classList.toggle('vert');
    });
}






//---------------------------------------------------------affiche le bouton en rouge si on clique dessus 


const themeButton6 = document.querySelector('#bouton6');

if (themeButton6) {  
    themeButton6.addEventListener('click', () => {
        themeButton6.classList.toggle('rouge');
    });
}






//---------------------------------------------------------affiche le bouton en rouge si on clique dessus 

const themeButton7 = document.querySelector('#bouton7');

if (themeButton7) {  
    themeButton7.addEventListener('click', () => {
        themeButton7.classList.toggle('rouge');
    });
}





//---------------------------------------------------------affiche le bouton en rouge si on clique dessus 

const themeButton8 = document.querySelector('#bouton8');

if (themeButton8) {  
    themeButton8.addEventListener('click', () => {
        themeButton8.classList.toggle('rouge');
    });
}





//---------------------------------------------------------affiche le bouton en vert si on clique dessus 


const themeButton9 = document.querySelector('#bouton9');

if (themeButton9) {  
    themeButton9.addEventListener('click', () => {
        themeButton9.classList.toggle('vert');
    });
}



//---------------------------------------------------------//---------------------------------------------------------affiche les liens quand on clique sur un bouton de type vert


const bouton1 = document.querySelector('#bouton1');
const lienSuivant = document.querySelector('#lien-suivant');

if (bouton1) {
    bouton1.addEventListener('click', () => {

        if (bouton1.classList.contains('vert')) {
            lienSuivant.classList.remove('cache');
        } 
        
        else {
            lienSuivant.classList.add('cache');
        }
    });
}





//---------------------------------------------------------//---------------------------------------------------------affiche les liens quand on clique sur un bouton de type vert

const bouton5 = document.querySelector('#bouton5');
const lienSuivant2 = document.querySelector('#lien-suivant2');

if (bouton5) {
    bouton5.addEventListener('click', () => {

        if (bouton5.classList.contains('vert')) {
            lienSuivant2.classList.remove('cache');
        } 
        
        else {
            lienSuivant2.classList.add('cache');
        }
    });
}




//---------------------------------------------------------//---------------------------------------------------------affiche le messages de fin quand on clique sur le dernier bouton


const bouton9 = document.querySelector('#bouton9');
const lienSuivant3 = document.querySelector('#lien-suivant3');

if (bouton9) {
    bouton9.addEventListener('click', () => {

        if (bouton9.classList.contains('vert')) {
            lienSuivant3.classList.remove('cache');
        } 
        
        else {
            lienSuivant3.classList.add('cache');
        }
    });
}




//---------------------------------------------------------//---------------------------------------------------------affiche l'image de fin quand on clique sur le dernier bouton juste 
const bouton10 = document.querySelector('#bouton9');
const lienSuivant4 = document.querySelector('#lien-suivant4');

if (bouton9) {
    bouton9.addEventListener('click', () => {

        if (bouton9.classList.contains('vert')) {
            lienSuivant4.classList.remove('cache');
        } 
        
        else {
            lienSuivant4.classList.add('cache');
        }
    });
}

//---------------------------------------------------------//---------------------------------------------------------affiche l'image de fin quand on clique sur le second bouton juste 

const bouton11 = document.querySelector('#bouton5');
const lienSuivant5 = document.querySelector('#lien-suivant5');

if (bouton5) {
    bouton5.addEventListener('click', () => {

        if (bouton5.classList.contains('vert')) {
            lienSuivant5.classList.remove('cache');
        } 
        
        else {
            lienSuivant5.classList.add('cache');
        }
    });
}

//---------------------------------------------------------//---------------------------------------------------------affiche l'image de fin quand on clique sur le premier bouton juste 


const bouton12 = document.querySelector('#bouton1');
const lienSuivant6 = document.querySelector('#lien-suivant6');

if (bouton1) {
    bouton1.addEventListener('click', () => {

        if (bouton1.classList.contains('vert')) {
            lienSuivant6.classList.remove('cache');
        } 
        
        else {
            lienSuivant6.classList.add('cache');
        }
    });
}
