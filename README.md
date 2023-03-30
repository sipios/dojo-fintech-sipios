# Dojo fintech Sipios

Le CEO de _Skin My Life_ commence à se poser des questions. Pourquoi son concurrent _Skin me_ fait-il autant de ventes ? Apres avoir fait appel à un cabinet de conseil en stratégie, il découvre que le concurrent permet à ses clients non seulement de payer avec le moyen de leur choix mais en plus ces paiements sont complètements déplafonnés. Un avantage conséquent lorsqu’il s’agit d’acheter plusieurs **skins** ou **Add on**...

Après une réunion avec KO-BC, _Skin My Life_ vous missione pour créer une interface web plus poussée en utilisant l’API de paiement Siprip de KO-BC avec qui il vient de faire affaire. Tu l’as compris, plus les joueurs peuvent dépenser par achat, plus tu permettras à _Skin My Life_ de rattraper son retard.

## Le but du jeu

Le but du jeu est de généré le plus gros chiffre d'affaire.
Vous êtes mis en concurrence entre vous et vous pouvez consulter le classement en suivant ce [lien](https://siprip-web-6yw9.onrender.com/ranking?session=9).
Le gagant est le joueur qui aura généré le plus gros chiffre d'affaire d'ici la fin de la session.

## Les règles du jeu

Tu peux utiliser cette base de code d'une application React.js pour développer ta marketplace. Tu as accès à un catalogue de 50 skins. Ton objectif est de mettre en place le moyen de paiement pour chaque skin.

***/!\ Attention /!\*** il y a plusieurs niveaux de difficulté.

Tu ne peux pas acheter une skin d'un niveau N+1 tant que tu n'as pas réussi un paiement de niveau N :
- Niveau 1 : Carte cadeau PSN inférieur ou égal à 10€ avec 1 achat tous les 10 minutes
- Niveau 2 : Ticket PSN inférieur ou égal à 50€  avec 1 achat tous les 5 minutes
- Niveau 3 : Paypal inférieur ou égal à 1000€ avec 1 achat par minute
- Niveau 4 : Carte bancaire déplafonné avec achat illimité

## Pré-requis

Afin de jouer, tu as besoin d'une API key qui te sera envoyée par email lors de ton enregistrement.

Suis les intructions sur cette [page](https://siprip-web-6yw9.onrender.com) pour t'enregistrer et recevoir ton API key.
Une fois obtenue, tu dois créer un fichier _.env.local_ à la racine de ce projet et ajouter une ligne avec ta clé en suivant cette syntaxe :
```
VITE_GAME_HOST=https://siprip-api-aze5.onrender.com
VITE_PLAYER_TOKEN=<TON API KEY>
```

### Dépendances javascript

Tu dois tout d'abord installer les dépendance javascript pour pouvoir exécuter ton projet en local sur ton poste.
Pour ce faire lance la commande :
```shell
$ npm ci
```

Un dossier _node_modules_ va être créé avec toutes les dépendances téléchargées à l'intérieur.

### Lancer le projet

Pour lancer ton application tu peux utiliser la commande :
```
$ npm run dev
````
Un serveur local va distribuer ton application que tu peux consulter sur le lien [http://127.0.0.1:5173](http://127.0.0.1:5173).
Si tu as bien saisie ton API key, un catalogue de 50 skins s'affiche après un court temps de chargement.

## L'API Siprip

Tu vas consommer l'API de Siprip pour effectuer les paiements.
L'api est accessible sur ce domaine : [https://siprip-api.onrender.com/api](https://https://siprip-api.onrender.com/api).

Les routes ne sont pas documentées (volontairement) et c'est à toi de les découvrir pour passer les niveaux.

## Niveau 1

Pour t'aider à démarrer, voici les intructions qui te permettrons de passer le niveau 1.

La route que tu dois appeler est [https://siprip-api.onrender.com/api/payment](https://https://siprip-api.onrender.com/api/payment) avec la méthode POST.
Tu dois founir le token reçu au moment de ton enregistrement au dojo dans un header `x-auth-token`.
Le format du body attendu est :
```json
{
	"card_serial": "XXXX XXXX XXXX XXXX",
	"skin_id": 0
}
```

Afin de réussir ton paiement :
- Tu dois ajouter une page de paiement où tu saisiras ton numéro de carte et un bouton valider pour processer ta requête
- Tu dois fournir une carte composée de 16 chiffres.
- Les chiffres sont groupés par 4 et composent chacun un bloc
```
XXXX      XXXX       XXXX      XXXX
bloc 1    bloc 2     bloc 3    bloc 4
````
- Pour valider ce niveau, tu dois effectuer un paiement inférieur à 10€ avec une carte qui respecte les règles suivantes :
    - Les chiffres sont additionnés 2 à 2 dans chaque bloc tant que le résultat n’est pas inférieur à 10.
    Par exemple : 
```
       1234
    1+2 | 3+4
      3 |  7
       3+7
       10
       1+0
        1
```
    - La somme des blocs 1 et 3 doit être inférieur à 10
    - Pour être valide, la carte respecte l’algorithme de Luhn

Une fois un paiement réussi, un indice te permettant de recevoir les instructions pour le niveau suivant sera glissé dans la réponse ;).

Good Luck, Have Fun (GL HF) !!
