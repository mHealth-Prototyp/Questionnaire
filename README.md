# mHealth Proto FHIR-Questionnaire (mhealth-proto-fhir-questionnaire)

Prototype app for demonstrating mHealth use cases on EPD Playground with FHIR Questionnaire centered examples using the [FHIR Questionnaire Resource](https://hl7.org/fhir/r4b/questionnaire.html).

Try out the latest version of this webapp: https://mhealth-prototyp.github.io/Questionnaire/.
Use `matteo@mail.li` with passwort `test` for mock login. Or log in with one of the test users from [chapter 1.1](#1.1-example-users).

You might also be interested in the [health-professional oriented prototype app](https://github.com/mHealth-Prototyp/Basic-Prototyp) and the [patient and allergy oriented prototype app](https://github.com/mHealth-Prototyp/Allergy).

## Content Table

- [1 About this prototype webapp](#1-about-this-prototype-webapp)
  - [1.1 Example users](#1.1-example-users)
  - [1.2 EPD Playground](#1.3-epd-playground)
  - [1.3 Mobile Access Gateway](#1.4-mobile-access-gateway)
- [2 Pages](#2-pages)
  - [2.1 Home](#21-home)
  - [2.2 Documentation: How to build a Questionnaire](#22-documentation-how-to-build-a-questionnaire)
  - [2.3 Digital Organ Donation Card](#23-digital-organ-donation-card)
  - [2.4 Advance Directives](#24-advance-directives)
  - [2.5 About](#25-about)
- [3 Install and run the app](#3-install-and-run-the-app)
- [4 Submit issues](#4-submit-issues)
- [5 Changelog](#5-changelog)

## 1 About this prototype webapp

This webapp is intended to serve as a prototype around an use case with FHIR Questionnaires. It is able to connect to the [EPD Playground](#1.3-epd-playground) and load a patient's health record. It also includes a FHIR Questionnaire renderer, that allows to render a FHIR Questionnaire for the user to answer and save the QuestionnaireResponse to the [EPD Playground](#1.3-epd-playground).

### 1.1 Example users

Since the EPD Playground does not support user roles and authentification, the login is mocked in this prototype. You can use one of the following example users for playing around with the prototype:

<!-- prettier-ignore -->
|  Name                |  Login             |  Password  |  Personas  |
| -------------------- | ------------------ | ---------- | ---------- |
| Patricia Laurent     | pat67@approches.ch | laur3nt    | Is taking care of her 80 year old mother that had a stroke. |
| Elisabeth Brönnimann | elisabeth@broennimann.today | 19kurt69 | Elisabeth Brönnimann is the example persona from the Bern University of Applied Sciences Institute for Medical Informatics, so of course she also has a patient record on the EPD Playground.                                                                                                                                                                          |
| Matteo Lagrande      | matteo@mail.li  | test | Matteo Lagrande is another account used for testing resources.|

### 1.2 EPD Playground

The EPD Playground is a low-threshold "test and play" implementation of a Swiss electronic health record for demonstrating key use cases of mHealth. It is a source of inspiration for developers, managers and healthcare personal in Switzerland. For easier testing, no authentication is needed on the EPD Playground. Learn more on the [project page of the EPD Playground.](https://epdplayground.ch/index.php?title=Main_Page).

### 1.3 Mobile Access Gateway

The Mobile Access Gateway is a FHIR endpoint that allows us to communicate with the EPD Playground using mHealth Profiles.

## 2 Pages

### 2.1 Home

The home page allows the user to choose a FHIR Questionnaire to answer and will display it. The rendering is different wether the user are on a mobile or desktop brower.

#### 2.1.1 Questionnaire Selector

The Questionnaire Selector card allows you to enter a link to a Questionnaire, to upload your own, or to choose between the two demo Questionnaires.

#### 2.1.2 Questionnaire Renderer

The Questionnaire Renderer will renderer the selected Questionnaire. The user can answer it, reset it and save it. If there are errors, the questionnaire items associated with them will be red.

### 2.2 Documentation: How to build a Questionnaire

This page displays the documentation about "How to build a Questionnaire".

### 2.3 Digital Organ Donation Card

This page shows the "Digital Organ Donation Card" Questionnaire. inspired by the [SwissTransplant organ donation card](https://www.leben-ist-teilen.ch/spendekarte-ausfullen/). This Questionnaire is also available on the home page, but on this page, it has a special style to demonstrate the possibilities of this project. This Questionnaire is available in German, French and Italian.

### 2.4 Advance Directives

This page shows the "Advance Directives" Questionnaire inspired from [the "FMH Patientenverfügung"](https://www.fmh.ch/files/pdf27/fmh-patientenverfuegung-detailliert-de.pdf). This Questionnaire is also available on the home page. This Questionnaire is only available in German.

### 2.5 About

The About page shows information about the project, links to the project partners and the number of the app version currently running.

## 3 Install and run the app

### 3.1 Install dependencies

Before you can run the app, you need to install the dependencies using the node package manager. Make sure you're in the root folder of the project (that contains `package.json`) and run the following command:

```bash
npm i
```

### 3.2 Start the app in development mode (hot-code reloading, error reporting, etc.)

After installing the dependencies, the following command will build the app and start a development server.

```bash
npm start
```

When the server is up and running, you can point your favorite browser to the displayed address to see the app (usually [localhost:9000](http://localhost:9000), but this may differ when you're already running other servers).

### 3.3 Build the app for production

If you want to deploy the app to a web server, you can run the following command and then just publish the content of the newly created `dist` folder.

```bash
npm run build
```

## 4 Submit issues

Go to the issue site of the repository to submit an issue: [on github.com](https://github.com/mHealth-Prototyp/Questionnaire/issues)

## 5 Changelog

| Version | Date       | Changes                                     |
| ------- | ---------- | ------------------------------------------- |
| 1.0.0   | 2023-03-22 | Initial version uploaded to this repository |
