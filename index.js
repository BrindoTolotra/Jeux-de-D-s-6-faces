/* 
jeux de Dés, chaque joueurs va lancer un dés à 6 faces.
et un joueurs qui a le chiffre maximum gagne
*/
let jeuxDés = () => {
    let joueurs = createJoueur();

    /* laisser au joueur de faire leurs choix, 
        tand que le 1 et taper, le jeux vas toujours se recommencer et leurs montre la liste des joueurs le nombre que chaqu'un a
        et s'il tape 0; le jeux s'arrête et montre le resultat
        à l'éxception d'un mal saisi, on l'averti
    */
    let i = 1;
    while(true){
        let lancer = +prompt("Taper 1 pour lancer ou 0 pour arrêter : ");
        if(lancer == 1){
            for(let ligne=0;ligne<joueurs.length;ligne++){
                joueurs[ligne][1] = Math.floor(Math.random()*6)+1;
            }
            console.table(joueurs);
            i++;
        }else if(lancer == 0){
            joueurs.sort((a,b) => a[1]-b[1]);
            break;
        }else{
            console.log("Mauvaise choix ! Taper le bon choix !");
            i++;
        }
    }
    return `${joueurs[joueurs.length-1][0]} a gangné avec le chiffre ${joueurs[joueurs.length-1][1]}`;
}

// createJoueur : fonction pour créer les joueurs dans un tableau
let createJoueur = ()=>{
    // Demander le nombre de participantn, et les socker dans le variable jouers, et dans le variable nom leurs nom
    let nombreDeJoueurs = +prompt("Entrer le nombre de joueur qui va jouer: "), joueurs = [], nom = "";
    
    // On crée une ligne pour chaque joueur
    for(let ligne = 0; ligne<nombreDeJoueurs; ligne++){
        joueurs[ligne] = [];
        // On demande leur nom et on le met au premier cologne
        nom = prompt("Entrer le nom du jour "+(ligne+1)+" : ");
        joueurs[ligne][0] = nom;
    }
    return joueurs;
}