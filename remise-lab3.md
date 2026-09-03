# Remise  Lab3 : Application de conversion d'unités

## Étudiant
Elhadji Abdou Ndir (Elhadji-7)

## Dépôt GitHub
[Lab2-convertisseur-unite](https://github.com/Elhadji-7/Lab2-convertisseur-unite)

## Tag final
`lab3-final`

## Ma contribution

### Branche créée
`feature/ajout-historique`

### Pull request
PR #2  Ajout de l'historique des conversions : https://github.com/Elhadji-7/Lab2-convertisseur-unite/pull/2

### Description de la contribution
Ajout de deux fonctionnalités à l'interface :
- Bouton « Copier » : copie instantanée du résultat dans le presse-papier, avec confirmation visuelle « Copié ! ».
- Historique des conversions : affichage des cinq dernières conversions effectuées, mis à jour automatiquement, avec des composants Material UI.

### Commits principaux
| Commit | Message |
|---|---|
| 916c5e1 | Initial commit: unit converter application |
| 7f2b4b4 | feat(frontend): add copy button for conversion results |
| ab56843 | feat: add conversion history to interface |
| 85d8310 | docs: mettre à jour le README |
| 7f531e1 | docs: corriger les attributions du README |

### Tests effectués
- Après le bouton copier : test manuel confirmant la copie et l'affichage de « Copié ! ».
- Après l'historique : test manuel avec plusieurs conversions successives confirmant la mise à jour de la liste.
- Après la fusion (PR #2 vers main) : vérification que le backend et le frontend démarrent correctement et que les deux fonctionnalités restent fonctionnelles.

### Conflits rencontrés
Aucun conflit lors de la fusion de la PR #2. Une correction du README a été nécessaire après la fusion des deux contributions (attribution erronée d'une section), corrigée dans le commit 7f531e1, sans conflit Git.

---

## Remise de mouhamedpsn03-lab

### Nom
`mouhamedpsn03-lab`

### Dépôt GitHub
[Lab2-convertisseur-unite](https://github.com/mouhamedpsn03-lab/Lab2-convertisseur-unite)

### Pull request
[PR #1 — feat: add fun facts for length conversions](https://github.com/Elhadji-7/Lab2-convertisseur-unite/pull/1)

La PR #1 a été fusionnée dans `main` le 2 septembre 2026.

### Branche créée
`feature/nouvelle-fonctionnalité`

### Messages de commit principaux

| Commit | Message |
|---|---|
| `c0500a0` | `feat: add fun facts for length conversions` |
| `7dbe0e8` | `docs: enrich README with project details` |
| Document de remise | `docs: ajouter les informations de remise du lab3` |

### Courte description de ma contribution

J'ai ajouté des anecdotes contextuelles aux conversions de longueur. Le backend compare la longueur convertie à des références concrètes, comme une carte bancaire, un autobus, la tour Eiffel ou le mont Everest, puis retourne un champ `funFact` dans la réponse de l'API. Le frontend affiche ce message dans un encadré « Le savais-tu ? ». J'ai aussi ajouté des tests automatisés pour les longueurs ordinaires, négatives, nulles et non finies.

### Tests effectués

- Après l'ajout de la logique backend : exécution de `npm test` dans `backend`; les 5 tests ont réussi.
- Après l'intégration dans l'interface : exécution de `npm run build` dans `frontend`; la compilation Vite a réussi.
- Après la fusion dans `main` : nouvelle exécution de `npm test` avec 5 tests réussis, puis de `npm run build` avec 926 modules compilés sans erreur.
- Après la documentation : vérification de la syntaxe Markdown et exécution de `git diff --check`.

### Conflits rencontrés

La PR #1 a été fusionnée sans conflit. Un conflit est survenu plus tard dans `frontend/src/App.jsx` lors de la combinaison de l'historique des conversions avec les anecdotes déjà présentes sur `main`. Il concernait l'état React, le traitement de la réponse de l'API et l'ordre d'affichage. Il a été résolu en conservant les deux fonctionnalités : l'historique des cinq dernières conversions et l'encadré « Le savais-tu ? ».
