---
title: "Image Classification: BoVW vs CNN (Final-Year Project)"
description: "A comparative evaluation of classic computer vision (BoVW) and modern deep learning (ResNet-50) for natural scene image classification."
category: "ai"
tags: ["Python", "Computer Vision", "Deep Learning", "CNN","SIFT","ORB","ResNet-50"]
year: 2025
order: 3
---


## Context 

For our Master’s final project, my team and I pitted classic computer vision against deep learning. We used the Intel Image Classification dataset to sort about 25,000 low-resolution images into categories like forests, mountains, and glaciers.

We started with the old-school standard: Bag of Visual Words (BoVW). We built extraction pipelines using SIFT and ORB descriptors, clustered millions of features with K-Means (switching to a mini-batch approach so we wouldn’t fry our RAM), and fed the results into an SVM.

SIFT topped out at 71.8% accuracy. It did fine on highly textured classes like forests, but it completely failed to tell a mountain from a glacier. Because BoVW just looks at raw feature counts and ignores spatial layout, it couldn’t tell if snow was on a peak or spread across a valley. ORB was incredibly fast, but the accuracy plummeted to around 50%.

Then we fine-tuned a pre-trained ResNet-50. It wasn’t even close. The CNN hit 91.6% accuracy and actually learned spatial relationships instead of just counting patterns.

Building both pipelines from scratch was the best way to understand exactly why the industry moved to deep learning. ResNet is the obvious choice if you have a GPU, but working with ORB reminded me that classic methods still win if you need to run inference on a cheap CPU.


