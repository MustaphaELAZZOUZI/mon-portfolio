---
title: "Technology Watch & Trend Detection"
description: "A Python scraping and NLP pipeline that tracks how new technologies move from academic papers to commercial products."
category: "ai"
tags: ["Python", "NLP", "BeautifulSoup", "Selenium","LDA"]
year: 2025
order: 2
---

**Role:** [Your role in the project]

## Context 

Trying to keep up with the tech industry manually is a losing game. There is simply too much information across too many platforms. For this project, my team and I decided to automate our tech watch.

We wanted to see if we could track a technology’s lifespan: from its first mention as a mathematical concept on arXiv, to early code implementations on GitHub, and finally to mainstream startup coverage on TechCrunch.

## Collecting the Data

Getting data from three entirely different platforms meant writing three different types of scrapers. TechCrunch and arXiv were relatively straightforward—we used BeautifulSoup to parse the static HTML. GitHub, however, renders heavily with JavaScript, so we had to bring in Selenium to handle the dynamic content.

We set the scrapers to loop through pagination automatically, pulling in hundreds of articles and repositories. From there, we stripped out the ads, navigation bars, and CTAs, saving only the raw text, authors, and timestamps.

## Processing and Topic Modeling

Text data is incredibly messy. Before running any models, we ran the corpus through standard NLP cleanup: stripping URLs with regex, dropping stop words, tokenizing, and lemmatizing the text down to its base roots.

Instead of deciding what topics to look for ahead of time, we let the data speak for itself. We used Latent Dirichlet Allocation (LDA) to find natural groupings of words. The model ran unsupervised, automatically identifying clusters of terms that frequently appeared together.

## What We Found

Once we linked these latent topics back to their publication dates, clear patterns emerged. We could literally watch topics like “Machine Learning” or “DevOps” start as dense academic clusters, spike in developer repositories, and eventually dominate the news cycle.

It proved that you don’t need a massive language model to get value out of text data. Sometimes, basic web scraping paired with solid NLP fundamentals is enough to cut through the noise and see where the industry is actually heading.


