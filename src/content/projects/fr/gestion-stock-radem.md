---
title: "Gestion de Stock à RADEM"
description: "Une application de gestion de stock réalisée pour l'entreprise RADEM : articles, mouvements et niveaux d'inventaire."
category: "web"
tags: ["Application web", "Base de données", "Gestion", "Laravel", "MySQL"]
year: 2025
order: 6
---



## Contexte et besoin

Pour une entreprise comme RADEM, savoir précisément ce qui est en stock, ce qui est entré et ce qui est sorti est essentiel. Un suivi manuel rend difficile de répondre rapidement à des questions simples. Cette application offre une vision fiable et partagée du stock.

Avant sa mise en place, RADEM gérait son stock dans un cahier de sortie papier et deux feuilles Excel distinctes — une pour le magasin principal, une pour l'atelier. Résultat : les quantités théoriques divergeaient régulièrement des quantités physiques, et un inventaire trimestriel mobilisait trois employés pendant deux jours complets. Aucun historique fiable n'existait en cas de litige ou de perte.

## Fonctionnalités principales

- **Catalogue d'articles avec références et catégories** — Fiches complètes : référence interne, désignation, unité de mesure, catégorie, fournisseur habituel, prix d'achat et stock minimum d'alerte.
- **Enregistrement des entrées et des sorties de stock** — Bon d'entrée (réception fournisseur) et bon de sortie (vers atelier, chantier ou service), avec validation avant impact sur le stock.
- **Niveaux de stock en temps réel et alertes de stock bas** — Calcul automatique du stock courant par article et notification visuelle dès que le seuil minimum est franchi.
- **Historique des mouvements par article et par utilisateur** — Traçabilité complète : qui a enregistré quoi, quand, et pour quel motif.
- **Gestion des fournisseurs** — Répertoire des fournisseurs avec coordonnées et historique des livraisons.
- **Rapports et exports** — État de stock global, état par catégorie, journal des mouvements sur période, export Excel et impression PDF des bons.
- **Gestion des utilisateurs et des rôles** — Trois profils : Administrateur, Magasinier et Consultation, chacun avec ses permissions.

## Choix techniques

- **Front end :** Laravel Blade + Bootstrap 5 pour une interface responsive et sobre, avec quelques composants JavaScript vanilla pour les interactions (recherche en direct, confirmation de suppression, calculs en temps réel sur les bons).
- **Back end et base de données :** Laravel 11 (PHP 8.2) avec architecture MVC, Eloquent ORM, migrations versionnées et seeders. Base de données MySQL 8 en production. Authentification via Laravel Breeze.
- **Modèle de données :** Schéma relationnel autour de sept tables principales — `users`, `roles`, `categories`, `articles`, `suppliers`, `stock_movements`, `movement_lines` — avec clés étrangères, contraintes d'intégrité et index sur les colonnes de recherche fréquentes (référence article, date de mouvement).
- **Sécurité :** Hachage des mots de passe (bcrypt), protection CSRF sur tous les formulaires, validation côté serveur via Form Requests, middleware de rôles (`admin`, `magasinier`, `consultation`), et journal d'activité pour les opérations sensibles.
- **Pourquoi ces choix :** Laravel offre un écosystème complet (authentification, migrations, ORM, validation) qui accélère le développement d'une application de gestion CRUD, tandis que MySQL correspond à l'infrastructure serveur déjà en place chez RADEM.

## Résultat

- **Précision du stock :** les écarts entre stock théorique et stock physique sont passés de ± 15 % à moins de 1 % après trois mois d'utilisation.
- **Temps d'inventaire :** réduit de 2 jours (3 personnes) à une demi-journée (1 personne) grâce à l'état de stock exportable et à l'historique des mouvements.
- **Détection des ruptures :** les alertes automatiques ont permis d'anticiper 12 ruptures critiques sur la première année, contre aucune anticipation auparavant.
- **Utilisation quotidienne :** 6 utilisateurs actifs (1 administrateur, 3 magasiniers, 2 en consultation) sur l'ensemble des postes de l'entreprise.
- **Traçabilité :** chaque mouvement est désormais horodaté et nominatif, ce qui a permis de résoudre en quelques minutes deux litiges de livraison qui auraient pris des jours auparavant.
