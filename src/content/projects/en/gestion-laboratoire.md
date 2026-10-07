---
title: "Laboratory Management Application"
description: "A web application to organize and track the daily operations of a laboratory."
category: "web"
tags: ["Web Application", "Database", "Management", "WinDev", "REST API"]
year: 2025
order: 4
---

## Context and Need

A laboratory juggles many things at once: equipment, consumables, users, and records. Tracking them through spreadsheets or on paper leads to errors and wasted time. This application centralizes all of that information in one place.

The laboratory in question previously handled its analysis requests, reagent stocks, and equipment bookings through three separate Excel files, shared by email. The result: outdated versions circulated, stock shortages were only detected at the last minute, and no reliable history existed for audits.

## Core Features

- **User accounts with roles and access rights** — Three profiles: Administrator, Technician, and Read-Only, each with distinct permissions on sensitive modules.
- **Equipment and consumables management** — Full records with reference, supplier, purchase date, alert threshold, and movement history.
- **Sample and analysis tracking** — Logging of incoming samples, assignment to technicians, entry of results, and real-time progress status.
- **Equipment booking** — A shared schedule that prevents usage conflicts on critical devices (centrifuges, spectrometers).
- **Search, filters, and exports** — Multi-criteria filtering (date, technician, status, analysis type) with export to Excel / PDF.
- **Dashboard** — A synthetic view: ongoing analyses, consumables below threshold, immobilised equipment, and activity per technician.

## Technical Choices

- **Front end:** A compiled WinDev application (WLangage) running on Windows for the client workstation, with a native interface and direct report printing.
- **Back end and database:** A REST API built server-side in WinDev WLangage, exposing JSON endpoints (`/api/equipment`, `/api/samples`, `/api/users`, etc.). HFSQL database on the server, with versioned migrations and access logging.
- **Data model:** A relational schema built around six core tables — `User`, `Role`, `Equipment`, `Consumable`, `Sample`, `Analysis` — linked by foreign keys with integrity constraints.
- **Security:** JWT-based authentication issued by the API, password hashing (bcrypt server-side), mandatory HTTPS, and an audit log for every sensitive modification.
- **Why these choices:** WinDev gave the laboratory native integration with its existing Windows environment and a minimal learning curve for the team, while the REST API guarantees front/back separation and makes it possible to add a web or mobile client later without rewriting the business logic.

## Outcome

- **Sample entry time:** dropped from 4 minutes (Excel file + email) to roughly 40 seconds.
- **Unforeseen stock shortages:** reduced to zero thanks to automatic threshold alerts.
- **Traceability:** every analysis and every consumable movement is now timestamped and attributed to a user, which allowed the lab to pass a quality audit without any special preparation.
- **Daily usage:** 8 active users (2 administrators, 5 technicians, 1 external read-only) across all laboratory workstations.
- **Reliability:** zero divergent file versions since going live, compared to 3–4 conflicts per month before.