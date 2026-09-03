# Convertisseur d'unités

## Description de l'application

Cette application web permet de convertir rapidement des valeurs entre plusieurs unités. Elle repose sur une API REST développée avec Node.js et Express, ainsi que sur une interface React construite avec Material UI.

Les conversions sont effectuées automatiquement lorsque l'utilisateur modifie la valeur, la catégorie ou les unités sélectionnées.

## Fonctionnalités principales

- Conversion des longueurs, volumes, masses et températures.
- Sélection des unités de départ et d'arrivée.
- Inversion rapide des unités sélectionnées.
- Mise à jour instantanée du résultat.
- Historique des cinq dernières conversions.
- Copie du résultat dans le presse-papier.
- Modes clair et sombre.
- Interface adaptative réalisée avec Material UI.
- Gestion des erreurs lorsque l'API est indisponible ou qu'une conversion n'est pas prise en charge.

## Fonctionnalité ajoutée par Rassoul

J'ai ajouté une fonctionnalité d'anecdotes contextuelles pour les conversions de longueur :

- Comparaison de la longueur convertie avec une référence concrète, comme une carte bancaire, une porte, un autobus, la tour Eiffel ou le mont Everest.
- Sélection automatique de la référence dont l'échelle est la plus proche du résultat.
- Génération d'un message adapté lorsque la longueur est proche, plus grande ou plus petite que la référence.
- Prise en charge des valeurs négatives, de la valeur zéro et des valeurs non finies.
- Ajout de l'anecdote à la réponse de l'API pour les conversions de longueur.
- Affichage de l'anecdote dans l'interface sous la forme d'un encadré « Le savais-tu ? ».
- Ajout de tests automatisés couvrant la conversion et les principaux cas de comparaison.

Cette contribution correspond au commit `c0500a0` (`feat: add fun facts for length conversions`), créé par `mouhamedpsn03-lab`.

## Fonctionnalité ajoutée par Elhadji-7

J'ai ajouté les fonctionnalités suivantes à l'interface :

- Ajout d'un bouton « Copier » pour copier le résultat de la conversion dans le presse-papier.
- Ajout d'un historique affichant les cinq dernières conversions effectuées, de la plus récente à la plus ancienne.

Ces contributions correspondent aux commits `7f2b4b4` (`feat(frontend): add copy button for conversion results`) et `ab56843` (`feat: add conversion history to interface`), créés par `Elhadji`.

## Prérequis

- Node.js 18 ou une version plus récente.
- npm.
- Git, pour cloner le dépôt.

## Installation

Clonez le dépôt, puis placez-vous dans son dossier :

```bash
git clone https://github.com/Elhadji-7/Lab2-convertisseur-unite.git
cd Lab2-convertisseur-unite
```

Installez les dépendances du backend :

```bash
cd backend
npm install
```

Installez ensuite les dépendances du frontend :

```bash
cd ../frontend
npm install
```

## Démarrage de l'application

Dans un premier terminal, démarrez l'API :

```bash
cd backend
npm run dev
```

L'API est alors accessible à l'adresse `http://localhost:3001`.

Dans un second terminal, démarrez l'interface :

```bash
cd frontend
npm run dev
```

Ouvrez ensuite l'adresse affichée par Vite, habituellement `http://localhost:5173`. Le serveur de développement redirige les requêtes `/api` vers le backend.

## Tests

Pour exécuter les tests automatisés du backend :

```bash
cd backend
npm test
```

## API

### Obtenir les catégories et les unités

```http
GET /api/conversions
```

### Effectuer une conversion

```http
POST /api/convert
Content-Type: application/json
```

Exemple de corps de requête :

```json
{
  "category": "length",
  "from": "foot",
  "to": "meter",
  "value": 10
}
```

La réponse contient la valeur convertie et, dans le cas d'une longueur, une anecdote contextuelle dans le champ `funFact`.
