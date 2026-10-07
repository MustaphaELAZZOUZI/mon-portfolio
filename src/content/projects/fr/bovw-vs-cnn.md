---
title: "Classification d'Images : BoVW vs CNN (PFE)"
description: "Étude comparative approfondie entre approches classiques de vision par ordinateur (SIFT, ORB, Bag of Visual Words) et Deep Learning (CNNs, ResNet, Transfer Learning)."
category: "ai"
tags: ["Python", "Computer Vision", "Deep Learning", "CNN","SIFT","ORB","ResNet-50"]
year: 2025
order: 3
---


## Contexte 

Dans le cadre de notre projet de fin d’études de Master (PFE), mon équipe et moi-même avons mené une évaluation comparative rigoureuse entre la vision par ordinateur classique et les architectures modernes de Deep Learning. Nous avons exploité le jeu de données Intel Image Classification pour catégoriser environ 25 000 images basse résolution réparties en scènes naturelles (forêts, montagnes, glaciers, mers, etc.).

Nous avons d’abord implémenté l’approche historique de référence : le modèle **Bag of Visual Words (BoVW)**. Nous avons construit des pipelines d’extraction s’appuyant sur les descripteurs SIFT et ORB, regroupé des millions de points d’intérêt par clustering K-Means (avec une variante mini-batch pour préserver la mémoire vive), puis entraîné un classifieur SVM.

L’approche SIFT a plafonné à 71,8% de précision. Si les performances étaient satisfaisantes sur les textures complexes comme les forêts, le modèle peinait à distinguer une montagne d’un glacier. N’agrégeant que des fréquences de motifs visuels sans préserver la géométrie spatiale, BoVW ne pouvait déterminer si la neige recouvrait un sommet ou s’étendait au creux d’une vallée. L’extraction par ORB s’est révélée extrêmement rapide, mais la précision est descendue autour de 50%.

Nous avons ensuite appliqué le transfert d’apprentissage sur une architecture ResNet-50 pré-entraînée. L’écart s’est avéré déterminant : le réseau convolutif a atteint 91,6% de précision, ayant appris à interpréter les relations spatiales et la composition globale de l’image.

Implémenter ces deux paradigmes de bout en bout a constitué un exercice formateur exceptionnel pour comprendre concrètement les raisons de la transition de l’industrie vers les réseaux profonds, tout en rappelant la pertinence des méthodes classiques pour l’inférence ultra-légère sur processeurs standards
