---
title: "Veille Technologique & Détection de Tendances"
description: "Un pipeline de scraping Python et de NLP qui suit l'évolution des technologies émergentes, depuis les articles scientifiques arXiv jusqu'aux produits commerciaux et dépôts GitHub."
category: "ai"
tags: ["Python", "NLP", "BeautifulSoup", "Selenium","LDA"]
year: 2025
order: 2
---



## Contexte 

Suivre manuellement l’évolution effrénée de l’industrie technologique est un défi quasi impossible : le volume d’informations dispersées entre plateformes académiques, dépôts open-source et médias spécialisés est colossal. Pour ce projet, nous avons entrepris d’automatiser notre veille technologique.

Notre objectif était d’analyser le cycle de vie complet d’une innovation : de son émergence en tant que concept mathématique sur arXiv, à ses premières implémentations de code sur GitHub, jusqu’à sa médiatisation commerciale sur TechCrunch.t.

## Collecte Multi-Sources des Données

Interroger trois plateformes aux architectures radicalement différentes a nécessité la conception de trois extracteurs sur mesure. TechCrunch et arXiv présentaient un balisage HTML statique facilement exploité avec BeautifulSoup. En revanche, GitHub s’appuyant massivement sur le rendu dynamique côté client, nous avons déployé Selenium pour piloter la navigation et l’extraction.

Les scrapers ont été configurés pour gérer la pagination de manière autonome, rassemblant des centaines d’articles et de dépôts de code. Nous avons ensuite extrait et nettoyé les données brutes : métadonnées temporelles, auteurs, résumés et corps textuels

## Traitement Textuel & Modélisation Thématique (Topic Modeling)

Les données textuelles brutes comportent de nombreux artefacts. Avant d’entraîner tout modèle, nous avons appliqué une chaîne de prétraitement NLP rigoureuse : élimination des URL par expressions régulières, suppression des mots vides (stop words), tokenisation et lemmatisation jusqu’aux racines lexicales.

Au lieu d’imposer des catégories a priori, nous avons laissé émerger la structure intrinsèque des données à l’aide de **l’Allocation de Dirichlet Latente (LDA)**. Ce modèle non-supervisé a identifié spontanément des groupes cohérents de termes cooccurrents.

## Résultats & Enseignements

En corrélant ces thématiques latentes avec leurs dates de publication, des dynamiques temporelles nettes sont apparues. Nous avons pu observer des sujets tels que le « Machine Learning » ou « DevOps » émerger d’abord sous forme de clusters académiques denses, exploser ensuite dans les dépôts des développeurs, avant d’occuper le devant de la scène médiatique.

Ce projet démontre qu’il n’est pas toujours nécessaire de déployer de gigantesques modèles de langage pour extraire de la valeur de données textuelles. Parfois, un scraping bien maîtrisé associé aux fondamentaux du NLP suffit à dissiper le bruit ambiant et à anticiper les grandes trajectoires technologiques.
