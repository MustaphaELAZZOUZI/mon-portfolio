---
title: "Café and Restaurant Management Application"
description: "A complete desktop application to manage orders, menu, tables, and billing for a café-restaurant."
category: "web"
tags: ["Desktop Application", "Java", "Database", "Management", "Spring Boot"]
year: 2025
order: 7
---



## Context and Need

A café-restaurant handles simultaneous orders, a changing menu, tables to occupy, and bills to produce quickly every day. Manual tracking on a notepad or a basic cash register leads to order mistakes, forgotten tables, and wasted time during peak hours. This application centralises order taking, kitchen preparation, and billing into a single tool.

Before its implementation, the restaurant used a paper notepad per waiter and a separate cash register. The result: orders lost between the dining room and the kitchen, erroneous bills at the end of service, and no visibility into the best-selling dishes or peak hours.

## Core Features

- **Menu and category management** — Dish records with name, description, price, category (starter, main, dessert, drink), and availability (active / out of stock).
- **Table-by-table order taking** — Dish selection per table, addition of notes (no salt, well done…), direct send to the kitchen, and modification allowed until the order is confirmed.
- **Table tracking** — Dining room floor plan with real-time status: free, occupied, awaiting payment, reserved.
- **Kitchen Display System (KDS)** — A dedicated kitchen screen showing pending, in-preparation, and ready orders, with automatic refresh.
- **Billing and checkout** — Bill generation per table, automatic calculation of VAT and service charge, ticket printing, and recording of the payment method (cash, card, meal voucher).
- **User and role management** — Three profiles: Administrator, Waiter, and Cook, each with distinct permissions.
- **Reports and statistics** — Daily / weekly revenue, best-selling dishes, peak hours, and PDF / CSV export.
- **Staff and shift management** — Employee records, their schedules, and their performance (number of orders served).

## Technical Choices

- **Front end:** JavaFX 21 for the desktop interface, with FXML for view/controller separation and CSS for styling. Ticket printing via the JasperReports library.
- **Back end and database:** Java 17 + Spring Boot 3 for business logic and data access, exposing an internal REST API (reusable later by a web or mobile version). MySQL 8 database with JPA / Hibernate, and versioned migrations via Flyway.
- **Data model:** A relational schema built around nine core tables — `users`, `roles`, `categories`, `menu_items`, `tables`, `orders`, `order_lines`, `payments`, `staff_shifts` — with foreign keys, integrity constraints, and indexes on frequently searched columns (table status, order date).
- **Architecture:** Layered separation (controller / service / repository), use of the DTO pattern for exchanges between the interface and business logic, and centralised exception handling.
- **Security:** User authentication, password hashing (BCrypt), server-side role control, and an activity log for sensitive operations (order cancellation, discount, cash register closing).
- **Why these choices:** Java + Spring Boot provides a mature and typed ecosystem for the business logic of a point-of-sale system, while JavaFX allows building a smooth, professional desktop interface suited to intensive dining room use. MySQL matches the standard server infrastructure and remains easy to host locally on the restaurant's workstation.

## Outcome

- **Order-taking time:** reduced by approximately 40% during peak hours thanks to touch-based dish selection and direct kitchen dispatch.
- **Order errors:** dropped from 5–6 per service to fewer than one per day after two weeks of use.
- **Checkout time:** bill generated and printed in under 10 seconds, compared to 1–2 minutes before.
- **Business visibility:** the manager now has an automatic daily report on revenue and best-selling dishes, which made it possible to adjust the menu after the first month.
- **Daily usage:** 10 active users (1 administrator, 6 waiters, 3 cooks) across the restaurant's 3 cashier workstations.
- **Reliability:** zero orders lost between the dining room and the kitchen since going live.
