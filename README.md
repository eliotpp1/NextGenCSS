<div align="left" style="position: relative;">
<img src="https://img.icons8.com/?size=512&id=55494&format=png" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>NEXTGENCSS</h1>
<p align="left">
	<em>Ce projet à pour but de présenter de manière ludique une fonctionnalitée récente de css en utilisant les web component natif de JavaScript.
  La fonctionnalité présentée est l'API View Transitions qui un moyen révolutionnaire de créer des animations fluides et performantes en natif.</em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/last-commit/eliotpp1/NextGenCSS?style=flat&logo=git&logoColor=white&color=3182ce" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/eliotpp1/NextGenCSS?style=flat&color=3182ce" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/eliotpp1/NextGenCSS?style=flat&color=3182ce" alt="repo-language-count">
</p>
<p align="left">Construit avec les outils et technologies suivantes:</p>
<p align="left">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
</p>
</div>
<br clear="right">

## 🔗 Table des matières

- [📁Structure du projet](#-structure-du-projet)
  - [📂 Index du projet](#-index-du-projet)
- [🚀 Démarrage](#-démarrage)
  - [☑️ Prérequis](#-prérequis)
  - [⚙️ Installation](#-installation)
  - [🤖 Utilisation](#🤖-utilisation)
  - [🧪 Tests](#🧪-tests)
- [🔰 Contribution](#-contribution)
- [🎗 Licence](#-licence)

---

## 📁 Structure du projet

```sh
└── NextGenCSS/
    ├── README.md
    ├── components
    │   ├── show-code.js
    │	├── step-block.js
    │   └── card.js
    ├── index.html
    ├── images
    │   ├── etat_final.PNG
    │	├── etat_initial.PNG
    │	└── prevu.gif
    ├── scripts
    │   ├── script.js
    │   └── switch-theme-code.js
    │   
    └── styles
        ├── a11y-light.css
        ├── reset.css
	├── card.css
        └── style.css
```


### 📂 Project Index
<details open>
	<summary><b><code>NEXTGENCSS/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/eliotpp1/NextGenCSS/blob/master/index.html'>index.html</a></b></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- styles Submodule -->
		<summary><b>styles</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/eliotpp1/NextGenCSS/blob/master/styles/a11y-light.css'>a11y-light.css</a></b></td>
				<td><code>Thème css pour donner un style au code avec Hightlight.js (https://highlightjs.org/)</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/eliotpp1/NextGenCSS/blob/master/styles/style.css'>style.css</a></b></td>
				<td><code>Style global de la page</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/eliotpp1/NextGenCSS/blob/master/styles/reset.css'>reset.css</a></b></td>
				<td><code>Style pour réduire les incohérences entre les navigateurs </code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/eliotpp1/NextGenCSS/blob/master/styles/card.css'>card.css</a></b></td>
				<td><code>Style pour les cartes du component de démonstration </code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- scripts Submodule -->
		<summary><b>scripts</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/eliotpp1/NextGenCSS/blob/master/scripts/script.js'>script.js</a></b></td>
				<td><code>Js pour mettre en place l'API View Transition pour le web componenent de test</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/eliotpp1/NextGenCSS/blob/master/scripts/switch-theme-code.js'>switch-theme-code.js</a></b></td>
				<td><code>Js pour donner un style au code avec Hightlight.js (https://highlightjs.org/)</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- components Submodule -->
		<summary><b>components</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/eliotpp1/NextGenCSS/blob/master/components/show-code.js'>show-code.js</a></b></td>
				<td><code>Component réutilisable qui pour pour but de montrer du code</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/eliotpp1/NextGenCSS/blob/master/components/step-block.js'>step-block.js</a></b></td>
				<td><code>Component réutilisable qui pour pour but de ne pas répéter du code</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/eliotpp1/NextGenCSS/blob/master/components/card.js'>card.js</a></b></td>
				<td><code>Component réutilisable qui créer une carte</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- images Submodule -->
		<summary><b>images</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/eliotpp1/NextGenCSS/blob/master/images/etat_inital.PNG'>etat_inital.PNG</a></b></td>
				<td><code>Image qui illustre l'état initial avant transition</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/eliotpp1/NextGenCSS/blob/master/images/etat_final.PNG'>etat_final.PNG</a></b></td>
				<td><code>Image qui illustre l'état final avant transition</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/eliotpp1/NextGenCSS/blob/master/images/prevu.gif'>prevu.gif</a></b></td>
				<td><code>Gif qui montre une transition</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
## 🚀 Démarrage

### ☑️ Prérequis

Avant de commencer avec NextGenCSS, assurez-vous que votre environnement répond aux exigences suivantes:

- **Langage de Programmation:** JavaScript


### ⚙️ Installation

Installez NextGenCSS en utilisant l'une des méthodes suivantes:

**Construire depuis la source:**

1. Clonez le dépôt NextGenCSS:
```sh
❯ git clone https://github.com/eliotpp1/NextGenCSS
```

2. Naviguez jusqu'au répertoire du projet:
```sh
❯ cd NextGenCSS
```


### 🤖 Utilisation
Ouvrez index.html avec l'extension LiveServer de VSC de préférences.

---

## 🔰 Contribution

- **🐛 [Signaler des Problèmes](https://github.com/eliotpp1/NextGenCSS/issues)** : Soumettez les bogues découverts ou enregistrez des demandes de fonctionnalités pour le projet `NextGenCSS`.
- **💡 [Soumettre des Demandes de Fusion](https://github.com/eliotpp1/NextGenCSS/blob/main/CONTRIBUTING.md)** : Examinez les demandes de fusion ouvertes et soumettez vos propres demandes de fusion.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Forker le Dépôt**: Commencez par forker le dépôt du projet sur votre compte GitHub.
2. **Cloner Localement**: Clonez le dépôt forké sur votre machine locale en utilisant un client Git.
   ```sh
   git clone https://github.com/eliotpp1/NextGenCSS
   ```
3. **Créer une Nouvelle Branche**: Travaillez toujours sur une nouvelle branche avec un nom descriptif.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Apporter Vos Modifications**: Développez et testez vos modifications localement.
5. **Valider Vos Modifications**: Faites un commit avec un message clair décrivant vos mises à jour.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Pousser sur GitHub**: Poussez les modifications sur votre dépôt forké.
   ```sh
   git push origin new-feature-x
   ```
7. **Soumettre une Pull Request**: Créez une PR (Pull Request) sur le dépôt original du projet. Décrivez clairement les modifications et leur motivation.
8. **Review**: Une fois votre PR examinée et approuvée, elle sera fusionnée dans la branche principale. Félicitations pour votre contribution !
</details>

<details closed>
<summary>Contributeurs</summary>
<br>
<p align="left">
   <a href="https://github.com{/eliotpp1/NextGenCSS/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=eliotpp1/NextGenCSS">
   </a>
</p>
</details>

---

## 🎗 Licence

Ce projet est protégé sous la Licence GNU GPLv3. Pour plus de détails, reportez-vous à https://choosealicense.com/licenses/gpl-3.0/

---

## 🙌 Inspirations

- https://www.sitepoint.com/view-transitions-api-introduction/
- https://www.julienpradet.fr/tutoriels/view-transitions/

---
