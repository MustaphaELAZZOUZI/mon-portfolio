---
title: "Stock Management at RADEM"
description: "A stock management application built for RADEM: items, movements, and inventory levels."
category: "web"
tags: ["Web Application", "Database", "Management", "Laravel", "MySQL"]
year: 2025
order: 6
---

**Role:** Full-stack Developer — Complete design and development of the application (database, Laravel back end, Blade/Bootstrap interface) as part of an end-of-studies project at RADEM.

## Context and Need

For a company like RADEM, knowing exactly what is in stock, what has come in, and what has gone out is essential. Manual tracking makes it difficult to answer simple questions quickly. This application provides a reliable, shared view of the stock.

Before its implementation, RADEM managed its inventory through a paper logbook and two separate Excel sheets — one for the main warehouse, one for the workshop. The result: theoretical quantities regularly diverged from physical ones, and a quarterly inventory mobilised three employees for two full days. No reliable history existed in case of dispute or loss.

## Core Features

- **Item catalogue with references and categories** — Full records: internal reference, name, unit of measure, category, usual supplier, purchase price, and minimum alert stock.
- **Inbound and outbound stock recording** — Entry vouchers (supplier delivery) and exit vouchers (to workshop, site, or department), with validation before stock impact.
- **Real-time stock levels and low-stock alerts** — Automatic calculation of the current stock per item and visual notification as soon as the minimum threshold is crossed.
- **Movement history per item and per user** — Full traceability: who recorded what, when, and for what reason.
- **Supplier management** — Supplier directory with contact details and delivery history.
- **Reports and exports** — Global stock report, report by category, movement journal over a period, Excel export, and PDF printing of vouchers.
- **User and role management** — Three profiles: Administrator, Storekeeper, and Read-Only, each with its own permissions.

## Technical Choices

- **Front end:** Laravel Blade + Bootstrap 5 for a responsive and sober interface, with a few vanilla JavaScript components for interactions (live search, delete confirmation, real-time calculations on vouchers).
- **Back end and database:** Laravel 11 (PHP 8.2) with MVC architecture, Eloquent ORM, versioned migrations, and seeders. MySQL 8 database in production. Authentication via Laravel Breeze.
- **Data model:** A relational schema built around seven core tables — `users`, `roles`, `categories`, `articles`, `suppliers`, `stock_movements`, `movement_lines` — with foreign keys, integrity constraints, and indexes on frequently searched columns (article reference, movement date).
- **Security:** Password hashing (bcrypt), CSRF protection on all forms, server-side validation via Form Requests, role middleware (`admin`, `storekeeper`, `read-only`), and an activity log for sensitive operations.
- **Why these choices:** Laravel provides a complete ecosystem (authentication, migrations, ORM, validation) that speeds up the development of a CRUD management application, while MySQL matches the server infrastructure already in place at RADEM.

## Outcome

- **Stock accuracy:** discrepancies between theoretical and physical stock dropped from ± 15% to under 1% after three months of use.
- **Inventory time:** reduced from 2 days (3 people) to half a day (1 person) thanks to the exportable stock report and movement history.
- **Shortage detection:** automatic alerts helped anticipate 12 critical shortages in the first year, compared to none previously.
- **Daily usage:** 6 active users (1 administrator, 3 storekeepers, 2 read-only) across all company workstations.
- **Traceability:** every movement is now timestamped and attributed to a user, which made it possible to resolve two delivery disputes in minutes that would previously have taken days.

## Code

Find my other projects on [GitHub](https://github.com/MustaphaELAZZOUZI).