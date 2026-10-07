---
title: "Application de Gestion de Café et Restaurant"
description: "Une application desktop complète pour gérer les commandes, le menu, les tables et la facturation d'un café-restaurant."
category: "web"
tags: ["Application desktop", "Java", "Base de données", "Gestion", "Spring Boot"]
year: 2025
order: 7
---

## Contexte et besoin

Un café-restaurant gère au quotidien des commandes simultanées, un menu qui change, des tables à occuper et des additions à produire rapidement. Un suivi manuel sur carnet ou sur caisse basique provoque des erreurs de commande, des oublis de tables et des pertes de temps en heures de pointe. Cette application centralise la prise de commande, la préparation en cuisine et la facturation dans un seul outil.

Avant sa mise en place, le restaurant utilisait un carnet papier par serveur et une caisse enregistreuse séparée. Résultat : des commandes perdues entre la salle et la cuisine, des additions erronées en fin de service, et aucune visibilité sur les plats les plus vendus ou sur les heures de forte affluence.

## Fonctionnalités principales

- **Gestion du menu et des catégories** — Fiches plats avec nom, description, prix, catégorie (entrée, plat, dessert, boisson) et disponibilité (actif / épuisé).
- **Prise de commande par table** — Sélection des plats par table, ajout de notes (sans sel, bien cuit…), envoi direct en cuisine et modification tant que la commande n'est pas validée.
- **Suivi des tables** — Plan de salle avec statut en temps réel : libre, occupée, en attente de paiement, réservée.
- **Gestion de la cuisine (KDS)** — Écran dédié à la cuisine affichant les commandes en attente, en préparation et prêtes, avec mise à jour automatique.
- **Facturation et encaissement** — Génération de l'addition par table, calcul automatique de la TVA et du service, impression du ticket et enregistrement du mode de paiement (espèces, carte, ticket restaurant).
- **Gestion des utilisateurs et des rôles** — Trois profils : Administrateur, Serveur et Cuisinier, chacun avec des permissions distinctes.
- **Rapports et statistiques** — Chiffre d'affaires journalier / hebdomadaire, plats les plus vendus, heures de pointe, et export PDF / CSV.
- **Gestion du personnel et des shifts** — Enregistrement des employés, de leurs horaires et de leurs performances (nombre de commandes servies).

## Choix techniques

- **Front end :** JavaFX 21 pour l'interface desktop, avec FXML pour la séparation vue/contrôleur et CSS pour le style. Impression des tickets via la bibliothèque JasperReports.
- **Back end et base de données :** Java 17 + Spring Boot 3 pour la logique métier et l'accès aux données, exposant une API REST interne (utilisable plus tard par une version web ou mobile). Base de données MySQL 8 avec JPA / Hibernate, migrations versionnées via Flyway.
- **Modèle de données :** Schéma relationnel autour de neuf tables principales — `users`, `roles`, `categories`, `menu_items`, `tables`, `orders`, `order_lines`, `payments`, `staff_shifts` — avec clés étrangères, contraintes d'intégrité et index sur les colonnes de recherche fréquentes (statut de table, date de commande).
- **Architecture :** Séparation en couches (controller / service / repository), utilisation du pattern DTO pour les échanges entre l'interface et la logique métier, et gestion centralisée des exceptions.
- **Sécurité :** Authentification des utilisateurs, hachage des mots de passe (BCrypt), contrôle des rôles côté serveur, et journal d'activité pour les opérations sensibles (annulation de commande, remise, clôture de caisse).
- **Pourquoi ces choix :** Java + Spring Boot offre un écosystème mature et typé pour la logique métier d'un système de caisse, tandis que JavaFX permet de créer une interface desktop fluide et professionnelle, adaptée à un usage intensif en salle. MySQL correspond à l'infrastructure serveur standard et reste facile à héberger localement sur le poste du restaurant.

## Résultat

- **Temps de prise de commande :** réduit d'environ 40 % en heure de pointe grâce à la sélection tactile des plats et à l'envoi direct en cuisine.
- **Erreurs de commande :** passées de 5 à 6 par service à moins d'une par jour après deux semaines d'utilisation.
- **Temps d'encaissement :** addition générée et imprimée en moins de 10 secondes, contre 1 à 2 minutes auparavant.
- **Visibilité business :** le gérant dispose désormais d'un rapport quotidien automatique sur le chiffre d'affaires et les plats les plus vendus, ce qui a permis d'ajuster le menu après le premier mois.
- **Utilisation quotidienne :** 10 utilisateurs actifs (1 administrateur, 6 serveurs, 3 cuisiniers) sur les 3 postes de caisse du restaurant.
- **Fiabilité :** aucune commande perdue entre la salle et la cuisine depuis la mise en production.

