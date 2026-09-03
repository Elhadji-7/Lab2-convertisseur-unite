# Remise  Lab3 : Application de conversion d'unités

## Étudiant
Elhadji Abdou Ndir (Elhadji-7)

## Dépôt GitHub
[Lab2-convertisseur-unite](https://github.com/Elhadji-7/Lab2-convertisseur-unite)

## Tag final
`lab3-final`  pointe vers le commit `7f531e1` (docs: corriger les attributions du README)

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
