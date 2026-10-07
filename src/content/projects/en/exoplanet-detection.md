---
title: "Exoplanet Detection with Machine Learning"
description: "An automated detection pipeline that isolates exoplanet transits from stellar background noise. By combining 1D CNNs with physical feature extraction, we cut manual analysis by 95% to generate a priority target catalog for the JWST."
category: "ai"
tags: ["Python", "Machine Learning", "Time series", "scikit-learn", "Keras"]
year: 2026
order: 1
---


## Context and problem

Finding exoplanets usually involves staring at thousands of time-series light curves, hoping to catch a tiny, periodic dip in brightness. For this project, we analyzed [5,087 stars from the Kepler mission](https://www.kaggle.com/datasets/keplersmachines/kepler-labelled-time-series-data) (each observed continuously over 65 days) to automate that search.

The dataset itself was remarkably clean—under 0.1% of the data was missing, mostly just brief satellite transmission gaps that we easily handled with linear interpolation. The real problem was the signal itself. Exoplanet transits barely register compared to the massive, natural brightness variations of the stars. On top of that, we faced a brutal 136:1 class imbalance, with only 37 confirmed planets in the entire training set.

## Feature Engineering

Instead of just throwing raw time-series data at a neural network, we approached the problem like astronomers. We used a Gaussian high-pass filter to strip away the low-frequency stellar background. Then, using Fast Fourier Transform (FFT) and Box Least Squares (BLS), we compressed 3,198 data points per star into just 15 physical features—isolating exactly what matters: orbital period, transit duration, and depth.

## Model Architecture

We built a two-pronged system. A Random Forest trained on our 15 physical features provided a strong, explainable baseline. In parallel, a deep 1D Convolutional Neural Network (CNN) processed the full, raw sequential data to catch subtle patterns the manual feature extraction might have missed.

An ensemble of both models gave us the best results, hitting an AUC of 0.981 and a recall of 93.1%.

## Explainability & Impact

Astronomers don’t trust black boxes. We used SHAP and LIME to verify exactly what our models were looking at. The explainers confirmed the ensemble was making decisions based on transit depth and periodicity—the exact same physics human researchers use to confirm planets.

By automating the initial sweep, this pipeline reduces the manual workload by 95%. It outputs a ranked catalog of candidate stars, identifying exactly which systems are worth expensive follow-up time on instruments like the James Webb Space Telescope (JWST).


