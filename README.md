# ![Mou icon](http://cdn-img.easyicon.net/png/11685/1168513.gif)ngular

# Formation JS 2015 

### Github
<https://github.com/pebie/avengers>

### Mes coordonéees
<bouchezm@gmail.com> 

[@Pebie10](https://twitter.com/pebie10)

### Support de cours
[PDF](https://drive.google.com/file/d/0B3OJkiSDoQPlWkhrZ2FYSnBuNHM/view?usp=sharing)

## Installation
Tout d'abord veillez à bien avoir installer [node](https://nodejs.org/) sur votre machine pour pouvoir utiliser npm.

Utiliser de préférence la console (Teminal sous mac ou [GitBash](http://git-scm.com/downloads) sous Windows)

##### 1. Lancer une console à l'intérieur d'un dossier vide	
##### 2. Récupérer les sources sur github

	git clone https://github.com/pebie/avengers.git  

##### 3. Aller dans le dossier avengers

	cd avengers
	
##### 4. Faire un npm install 
Manipulation a faire une seule fois.

Node doit être installer sur votre machine.

`npm`doit faire partie de vos variable d'environnment (ce fait automatiquement à l'installation de node)

Aller sur le site de node en cas de problème et/ou contactez mois par mail.

	npm install

##### 5. Lancer le server

	npm start
	
##### 6. Vérifications
Si tout c'est bien déroulé, vous devriez voir apparaître : 

	> avengers@1.0.0 start /Users/Pebie/ekino/formation/avengers
	> ws

	serving at http://localhost:8000
	
Ce qui signifie que vous pouvez commencer à travailler sur cette url 

	http://localhost:8000
	
Pour arrêter le server : 
	
	Ctrl + C
	
Je vous conseil d'ouvrir une fenêtre de console spéciale pour lancer le server.
	
	

## Objectifs

L'objectif de ce TP sera de dynamiser un template HTML/CSS statique à l'aide d'AngularJS.

Une vidéo explicative est disponible dans le dossier `videos`.

Le rendu attendu est un zip de l'ensemble du dossier `avengers`.

Pour mener à bien cette mission, vous devrez utiliser par vous même ce que nous avons vu en formation à savoir :

1. Les controllers
2. Les services (customs et natifs)
3. Les directives (customs et natives)
3. Le scope
4. Les routes (ngRoute)
5. Les filtres 
6. Le data binding
7. Les promesses

L'exercice peut être réaliser en 6 grandes steps que je détaillerais dans la partie **Step by step**.

Il est évident qu'il n'est pas obligatoire d'en respecter l'ordre mais c'est un conseil !

Lors de la correction j'évalurais l'état global de votre application, la qualité du code, de l'organisation du dossier `src` et des commentaires !

N'hésitez a tricher* si vous êtes bloquer ou a me contacter dans le temps qu'il vous sera imparti.

***tricher = prendre des raccourcis**


## Step by step

La base du projet est un template html `index.html` mis en page à l'aide [bootstrap](http://getbootstrap.com/). 

Les fichiers concernant les frameworks externe ne doivent en aucun cas être modifié. Ils se trouvent dans le dossier `vendors` et sont déjà pret à l'emplois dans le projet.

En voici la liste :

###### Pour le JS

	<script src="vendors/js/angular.min.js"></script>
	<script src="vendors/js/angular-route.min.js"></script>

###### Pour le CSS

	<link rel="stylesheet" href="vendors/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="vendors/css/custom.css"/>

Vous travaillerez dans le dossier `src` et organiserez votre projet comme bon vous semble !
	

#### Step 0 : Prendre connaissance du projet

>Ne partez pas trop vite. Etudiez les différentes partie du template. Organisez vous. N'hésitez pas à prendre un papier et une feuille avant de commencer à vous lancer dans le code !

Si vous êtes impatient de coder c'est une bonne étape pour **initialiser Angular** dans votre application.

#### Step 1 : Découpage (ngRoute, controller)

Le but de cet étape et d'isoler des gros fragments de `html` dans des templates.
Deux choix s'offre à vous :

1. Création d'un **routing** à l'aide du module `ngRoute` avec une route http://localhost:8000/#!**/list** et une autre http://localhost:8000/#!**/detail/:id** par exemple.


2. Pour les moins témeraires ou dans le cas ou `ngRoute` vous donnerait du fil à retordre, l'isolation du markup à l'aide d'une directive bien connue conviendra très bien 

Cet aussi ici que vous devriez **créer vos controllers** et **vos templates html** principaux.

###### Tips

Lisez bien la documentation de `ngRoute` et de `ngView`, les exemples sont parfait !
Cet étape est certainement l'une des plus compliquées. C'est mieux de commencer par celle-ci mais encore une fois ce n'est pas obligatoire !
    
#### Step 2: Factoriser la liste des héros (directive native)

Cette liste est trop longue et le markup semble **repetitif** vous ne trouvez pas ?
Trouvez un moyen de factoriser encore plus le markup.

#### Step 3 : Création d'un service (service, $http, promesse, $scope, databinding)

Créer un service que vous pourez ensuite injecter dans votre code. 
Fonctionnalités du service :

1. Fournir la liste complète des super héros
2. Fournir un seul héro à la fois
3. Exposer la donné aux controllers et dynamiser le template à l'aide du **scope**

###### Tips

A la fin de cette étape *Monsieur Trololo* devrait avoir disparu et les donnés front devrait correspondre a celle du `mocks/heroes.json` 


#### Step 4: Création d'une directive

Créer une **directive** vous permettant de dynamiser le status d'un super héros en lui passant un paramètre. Elle sera utilisé au moins 2 fois dans votre application.

#### Step 5 : Ordonnancement (filtres)

La liste des super héro doit pouvoir s'ordonnancer en fonction de trois critères :

1. Age
2. Nom
3. Status

**Utiliser les filtres** de la manière de votre choix !


#### Step 6 : Navigation page détails ($location)

Si vous avez choisis la solution `ngRoute` lors de l'étape 1, vous devrez faire en sorte que le **bouton** modifier de chaque héro vous **dirige sur la fiche détail** correspondant à l'identité du héro.

Si ce n'est pas déja fait, profitez-en pour dynamiser cette page toute moche !

Cette page doit contenir un **bouton de retour** à la list.
 

#### Step 7: Modifier une fiche détail (directive native et custom, fine tuning)

Le status est afficher a côté de la photo sur la fiche détail d'un héro.

Dans la dropdown de la fiche détail vous devez donner la possibilité à l'utilisateur de **changer le status du héros**. Le status courant ne doit pas pouvoir être sélectionner mais doit apparaïtre dans la liste.

Le status doit se mettre à jour visuellement.

Quand le status est à jour un bloc `success` apparaît.


#### Step 8 : Enjoy :)

Si vous voulez allez plus loins faites-le ! N'oubliez pas de commenter et de préciser votre but dans un fichier texte.


Bon courage à tous !
 









