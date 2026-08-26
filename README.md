# Convertisseur d'unités

Application web de conversion d'unités avec une API Node.js/Express et une interface React utilisant Material UI.

## Prérequis

- Node.js 18 ou supérieur
- npm

## Démarrer le backend

```bash
cd backend
npm install
npm run dev
```

L'API est alors disponible sur `http://localhost:3001`.

## Démarrer le frontend

Dans un autre terminal :

```bash
cd frontend
npm install
npm run dev
```

Ouvrez l'adresse affichée par Vite (habituellement `http://localhost:5173`). Le serveur de développement redirige les appels `/api` vers le backend.

## API

`GET /api/conversions` retourne les catégories et unités disponibles.

`POST /api/convert` accepte le corps JSON suivant :

```json
{ "category": "length", "from": "foot", "to": "meter", "value": 10 }
```

et renvoie la valeur convertie.

Les catégories proposées sont les longueurs, volumes, masses et températures.
