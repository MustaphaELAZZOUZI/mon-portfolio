---
title: "Détection d'Exoplanètes par Machine Learning"
description: "Un pipeline de détection automatisée qui isole les transits d'exoplanètes du bruit stellaire de fond. En combinant CNN 1D et extraction de caractéristiques physiques, l'analyse manuelle est réduite de 95% pour générer un catalogue prioritaire destiné au JWST."
category: "ai"
tags: ["Python", "Machine Learning", "Séries temporelles", "scikit-learn", "Keras"]
year: 2026
order: 1
---


## Contexte 

La recherche d’exoplanètes implique traditionnellement d’examiner des milliers de courbes de luminosité temporelles, dans l’espoir de repérer une infime baisse périodique de luminosité. Pour ce projet, nous avons analysé [5 087 étoiles issues de la mission Kepler](https://www.kaggle.com/datasets/keplersmachines/kepler-labelled-time-series-data) (chacune observée en continu pendant 65 jours) afin d’automatiser cette détection.

Le jeu de données était remarquablement propre — moins de 0,1% de valeurs manquantes, principalement de courtes interruptions de transmission satellite traitées par interpolation linéaire. Le véritable défi résidait dans le signal lui-même : les transits d’exoplanètes sont minimes face aux variations naturelles d’activité stellaire. De surcroît, nous faisions face à un déséquilibre de classes sévère de 136:1, avec seulement 37 planètes confirmées dans tout le jeu d’entraînement.

## Ingénierie des Caractéristiques (Feature Engineering)

Plutôt que d’injecter directement des séries temporelles brutes dans un réseau de neurones, nous avons abordé le problème avec la rigueur des astronomes. Nous avons appliqué un filtre passe-haut gaussien pour éliminer le bruit basse fréquence d’origine stellaire. Ensuite, grâce à la Transformée de Fourier Rapide (FFT) et à l’algorithme Box Least Squares (BLS), nous avons compressé 3 198 points de données par étoile en 15 descripteurs physiques clés : période orbitale, durée et profondeur du transit.

## Architecture des Modèles

Nous avons développé une approche à double composante :

1. Un modèle Random Forest entraîné sur nos 15 descripteurs physiques, fournissant une base solide et explicable.
2. Un réseau de neurones convolutif 1D profond (1D CNN) traitant la séquence temporelle complète pour détecter des motifs subtils non capturés par les caractéristiques manuelles.
L’ensemble des deux modèles a produit les performances les plus élevées, atteignant un **AUC de 0,981** et un **rappel de 93,1%**.

## Explicabilité & Impact Scientifique

Dans le domaine astronomique, les modèles boîte noire ne suffisent pas. Nous avons utilisé **SHAP** et **LIME** pour vérifier précisément les critères de décision de nos réseaux. Les analyses ont confirmé que le modèle se basait sur la profondeur et la périodicité du transit — exactement les mêmes grandeurs physiques que les astrophysiciens emploient pour valider une candidate exoplanétaire.

En automatisant le tri initial, ce pipeline réduit la charge d’analyse manuelle de 95%. Il génère un catalogue hiérarchisé d’étoiles cibles, identifiant avec précision les systèmes nécessitant un temps d’observation prioritaire sur des télescopes de pointe comme le James Webb Space Telescope (JWST).


