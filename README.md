# 🖥️ Projet Hardware PC - Plateforme E-commerce Gaming

## 📝 Présentation du Projet
Ce projet consiste à créer un site web vitrine et e-commerce spécialisé dans la vente de PC Gaming haut gamme. L'objectif était de concevoir une interface moderne, intuitive et "ultra haut de gamme", s'inspirant des codes visuels de plateformes majeures comme YouTube (charte graphique Rouge, Blanc).

**Sujet :** CIW-projet-01, Site personnel simple

---

## 🚀 Fonctionnalités Principales

### 1. Page d'Accueil (Index)
- **Grille de Produits Dynamique** : Présentation des configurations sous forme de cartes (Cards).
- **Interactivité CSS** : Implémentation d'un effet de zoom au survol des images pour une expérience utilisateur immersive.
- **Navigation Intuitive** : Header fixe avec barre de recherche intégrée.

### 2. Pages Produits (Fiches Techniques)
- **Rendu Visuel Optimisé** : Utilisation de Flexbox pour un centrage parfait des visuels produits.
- **Design Premium** : Application d'ombres portées (`box-shadow`) et de bordures arrondies pour un aspect professionnel.
- **Fiches Détaillées** : Liste des composants (CPU, GPU, RAM, etc.) pour chaque pc.

### 3. Page À Propos
- **Structure en Sections** : Présentation des valeurs de l'entreprise (Excellence, Passion).
- **Mise en page Responsive** : Utilisation de conteneurs flexibles pour s'adapter à la lecture.

### 4. Page Contact & Formulaire
- **Validation JavaScript** : Script de contrôle des entrées utilisateur (interdiction de chiffres dans les champs noms, vérification du format).
- **Interactivité JS** : Compteur de clics intégré pour analyser l'engagement sur la page.

---

## 👥 Rôle des Membres du Binôme
Ce projet a été réalisé en collaboration avec une répartition claire des tâches pour garantir l'efficacité :

- **GRISON Clément** :
    - Intégration CSS (Charte graphique, Responsivité).
    - Structure HTML des pages produits et de la page d'accueil.
    - Gestion de l'arborescence des fichiers et du déploiement GitHub.
    - Correction des programmes html et CSS avec W3C et JS avec JSHint.
    - Annotation des programmes.

- **Poultier Damien** :
    - Développement JavaScript (Validation formulaire, compteur de clics).
    - Rédaction du contenu technique et optimisation des images.
    - Débogage des liens relatifs.

---

## 🛠️ Installation et Utilisation

### Prérequis
Aucun serveur n'est requis. Le projet utilise exclusivement les technologies **HTML5**, **CSS3** et **JavaScript**.

### Étapes pour lancer le projet localement :
1. **Télécharger** le dépôt (ou cloner via GitHub).
2. **Extraire** le fichier ZIP si nécessaire.
3. **Ouvrir** le fichier `index.html` dans n'importe quel navigateur moderne (Brave, Chrome, Firefox, Safari).
4. Naviguer via le menu du Header pour explorer les différentes sections.

---

## 📂 Structure du Répertoire

├── index.html           # Page d'accueil (Grille de produits et lien vers Contact et A propos)
├── Contact.html         # Formulaire de contact avec JS
├── APropos.html         # Présentation de l'entreprise et valeurs
├── styles.css           # Design global, Flexbox et animations
├── script.js            # Logique du compteur et validation formulaire
├── README.md            # Documentation technique du projet (ce fichier)
└── Page_pc/             # Dossier regroupant les fiches produits
    ├── page_pc_1.html   # Fiche détaillée : Le PS5 Pro Killer
    ├── page_pc_2.html   # Fiche détaillée : Aquarius
    ├── page_pc_3.html   # Fiche détaillée : ORCUS
    ├── pc_1.png         # Visuel PC 1
    ├── pc_2.png         # Visuel PC 2
    └── pc_3.png         # Visuel PC 3