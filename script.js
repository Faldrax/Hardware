// On attend que la page soit prête pour que le JS trouve les boutons
document.addEventListener("DOMContentLoaded", function() {

    // --- PARTIE COMPTEUR ---
    
    // On récupère les éléments par leur ID
    const bouton = document.getElementById("btnCompteur");
    const affichage = document.getElementById("chiffre");
    
    // On part de zéro (cpt=compteur)(inialisation compteur=0)
    let cpt = 0;

    // On vérifie que le bouton existe bien sur la page avant de cliquer
    if (bouton) {
        bouton.addEventListener("click", function() {
            cpt = cpt + 1; // On ajoute 1
            affichage.textContent = cpt; // On change le chiffre sur la page
        });
    }

    // --- PARTIE FORMULAIRE ---
    
    const monFormulaire = document.getElementById("formContact");
    const zoneErreur = document.getElementById("erreur");

    if (monFormulaire) {
        monFormulaire.addEventListener("submit", function(event) {
            
            // On récupère ce que l'utilisateur a tapé
            const nom = document.getElementById("nom").value;
            const prenom = document.getElementById("prenom").value;
            const emailValeur = document.getElementById("email").value;

            // Les filtres pour vérifier le texte (lettres et format email)
            const filtreLettres = /^[a-zA-ZÀ-ÿ\s-]+$/;
            const filtreEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Vérification du nom et du prénom
            if (!filtreLettres.test(nom) || !filtreLettres.test(prenom)) {
                event.preventDefault(); // Empêche l'envoi du formulaire
                zoneErreur.textContent = "Pas de chiffres dans le nom ou le prénom !";
                return; // On arrête là
            }

            // Vérification de l'email
            if (!filtreEmail.test(emailValeur)) {
                event.preventDefault(); // Empêche l'envoi
                zoneErreur.textContent = "L'adresse email n'est pas bonne.";
                return;
            }

            // Si on arrive ici, tout est ok
            alert("Message envoyé ! Merci " + prenom);
        });
    }
});