---
title: "Application de Gestion de Laboratoire"
description: "Une application web pour organiser et suivre l'activité quotidienne d'un laboratoire."
category: "web"
tags: ["Application web", "Base de données", "Gestion", "WinDev", "API REST"]
year: 2025
order: 4
---

## Contexte et besoin

Un laboratoire gère beaucoup de choses à la fois : équipements, consommables, utilisateurs et dossiers. Les suivre dans des tableurs ou sur papier provoque des erreurs et des pertes de temps. Cette application centralise ces informations au même endroit.

Le laboratoire concerné traitait auparavant ses demandes d'analyse, ses stocks de réactifs et ses réservations d'équipements via trois fichiers Excel séparés, partagés par email. Résultat : des versions obsolètes circulaient, les ruptures de stock n'étaient détectées qu'à la dernière minute, et aucun historique fiable n'existait pour les audits.

## Fonctionnalités principales

- **Comptes utilisateurs avec rôles et droits d'accès** — Trois profils : Administrateur, Technicien et Consultation, chacun avec des permissions distinctes sur les modules sensibles.
- **Gestion des équipements et des consommables** — Fiches complètes avec référence, fournisseur, date d'achat, seuil d'alerte et historique des mouvements.
- **Suivi des échantillons et des analyses** — Enregistrement des échantillons reçus, affectation aux techniciens, saisie des résultats et statut d'avancement en temps réel.
- **Réservations d'équipements** — Planning partagé évitant les conflits d'utilisation sur les appareils critiques (centrifugeuses, spectromètres).
- **Recherche, filtres et exports** — Filtrage multi-critères (date, technicien, statut, type d'analyse) et export vers Excel / PDF.
- **Tableau de bord** — Vue synthétique : nombre d'analyses en cours, consommables sous seuil, équipements immobilisés, activité par technicien.

## Choix techniques

- **Front end :** Application WinDev (WLangage) compilée, exécutable sous Windows pour le poste client, avec interface native et impression directe des rapports.
- **Back end et base de données :** API REST développée en WLangage côté serveur WinDev, exposant des endpoints JSON (`/api/equipements`, `/api/echantillons`, `/api/utilisateurs`, etc.). Base de données HFSQL côté serveur, avec migrations versionnées et journalisation des accès.
- **Modèle de données :** Schéma relationnel autour de six tables principales — `Utilisateur`, `Role`, `Equipement`, `Consommable`, `Echantillon`, `Analyse` — reliées par des clés étrangères avec contraintes d'intégrité.
- **Sécurité :** Authentification par jeton JWT émis par l'API, hachage des mots de passe (bcrypt côté serveur), HTTPS obligatoire, et journal d'audit pour chaque modification sensible.
- **Pourquoi ces choix :** WinDev offrait au laboratoire une intégration native avec son environnement Windows existant et une courbe d'apprentissage minimale pour l'équipe, tandis que l'API REST garantit la séparation front/back et permet d'ajouter plus tard un client web ou mobile sans réécrire la logique métier.

## Résultat

- **Temps de saisie d'un échantillon :** passé de 4 minutes (fichier Excel + email) à environ 40 secondes.
- **Ruptures de stock non anticipées :** réduites à zéro grâce aux alertes automatiques sur seuil.
- **Traçabilité :** chaque analyse et chaque mouvement de consommable est désormais horodaté et attribué à un utilisateur, ce qui a permis de réussir un audit qualité sans préparation particulière.
- **Utilisation quotidienne :** 8 utilisateurs actifs (2 administrateurs, 5 techniciens, 1 consultation externe) sur l'ensemble des postes du laboratoire.
- **Fiabilité :** aucune version divergente de fichier depuis la mise en production, contre 3 à 4 conflits par mois auparavant.