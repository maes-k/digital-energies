# Digital Énergies — Site vitrine

Version complète : Accueil, Nos solutions, À propos et Contact
Technologies : HTML, CSS et JavaScript — aucune installation npm ni base de données
Les photos, les styles et les scripts sont inclus

## Voir le site sur votre ordinateur

Décompressez le ZIP dans un dossier puis ouvrez index.html dans votre navigateur
Vous pouvez également ouvrir le dossier dans VS Code et utiliser Live Server

## Publier sur GitHub Pages et partager le lien

1. Connectez-vous à votre compte GitHub et créez un nouveau dépôt public nommé digital-energies
2. Décompressez ce ZIP puis déposez son CONTENU à la racine du dépôt avec Add file > Upload files
   Le fichier index.html doit être directement visible à la racine, avec les autres pages, style.css, app.js et le dossier assets
   Ne déposez pas le fichier ZIP lui-même
   Validez avec Commit changes
3. Ouvrez Settings > Pages
4. Dans Build and deployment, choisissez Source : Deploy from a branch
5. Choisissez la branche main, le dossier /(root), puis Save
6. Attendez la fin du déploiement puis revenez dans Settings > Pages : GitHub y affiche le lien public du site
7. Ouvrez ce lien pour vérifier les quatre pages, puis partagez-le

Si votre compte est maes-k et que vous nommez exactement le dépôt digital-energies, l’adresse prévue sera :
https://maes-k.github.io/digital-energies/
Cette adresse ne devient utilisable qu’après création du dépôt et publication réussie

Documentation officielle :
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Modifier le site

index.html : accueil
a-propos.html : présentation de l’entreprise
solutions.html : offres et équipements
contact.html : coordonnées et formulaire
style.css : couleurs, disposition et adaptation mobile
app.js : menu, interactions et préparation du message WhatsApp
assets/ : images utilisées par le site

Conservez les noms des fichiers et les chemins relatifs pour que le site fonctionne aussi dans un sous-dossier GitHub Pages
Le fichier .nojekyll est fourni pour servir les fichiers statiques directement

## Fonctionnement du formulaire

Le formulaire prépare un message et ouvre WhatsApp
Le client relit puis envoie lui-même le message dans WhatsApp
Aucun e-mail ni demande n’est envoyé automatiquement depuis le site

## Contenu

Les tarifs publiés et les caractéristiques sont à confirmer par Digital Énergies
Les photos générées sont des illustrations, pas des justificatifs de réalisations réelles
Les polices Google Fonts nécessitent une connexion internet ; une police de remplacement est prévue
