# Convertisseur d'unités

Application web de conversion d'unités permettant de convertir rapidement des longueurs, volumes, masses et températures. Elle associe une API Node.js/Express à une interface React construite avec Material UI.

## Installation et démarrage

### Prérequis

- Node.js 18 ou supérieur
- npm

### Backend

```bash
cd backend
npm install
npm run dev
```

L'API est alors disponible sur `http://localhost:3001`.

### Frontend

Dans un autre terminal :

```bash
cd frontend
npm install
npm run dev
```

Ouvrez l'adresse affichée par Vite (habituellement `http://localhost:5173`). Le serveur de développement redirige les appels `/api` vers le backend.

## Fonctionnalités ajoutées

- Ajout d'un historique des dernières conversions effectuées.
- Ajout d'un bouton permettant de copier le résultat d'une conversion.

## API

`GET /api/conversions` retourne les catégories et unités disponibles.

`POST /api/convert` accepte le corps JSON suivant :

```json
{ "category": "length", "from": "foot", "to": "meter", "value": 10 }
```

et renvoie la valeur convertie.

Les catégories proposées sont les longueurs, volumes, masses et températures.
