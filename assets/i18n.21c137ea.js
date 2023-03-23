import{b as r}from"./index.f62f8501.js";import{c as s}from"./vue-i18n.runtime.esm-bundler.b7226252.js";var i={common:{appName:"mHealth Proto FHIR-Questionnaire",error:"Ups. Da ist leider etwas schiefgegangen!",back:"zur\xFCck",close:"schliessen"},login:{welcome1:"Willkommen zu Ihrem Patientendossier!",welcome2:"Loggen Sie sich mit Ihrer E-Mailadresse ein, um Ihre Gesundheitsdaten abzurufen.",emailAddressLabel:"E-Mailadresse",passwordLabel:"Passwort",loginLabel:"einloggen",invalidPassword:"Die eingegebene E-Mailadresse oder das Passwort ist ung\xFCltig.",enterCode1:"Bitte geben Sie den Code ein, der an ",enterCode2:" gesendet wurde.",resend:"Code erneut senden",codeLabel:"Code",checkLabel:"pr\xFCfen",invalidCode:"Der eingegebene Code ist nicht korrekt.",messageTitle:"SMS von EPD Playground an ",messageText:"Ihr Code f\xFCr den EPD Playground Use Case ist: ",loginError:"F\xFCr dieses Login konnten keine entsprechenden Daten auf dem EPD Playground gefunden werden."},menu:{title:"Men\xFC",home:"Startseite",questionnaire101:"Anleitung: Questionnaire erstellen",organDonation:"Digitale Organspende-Karte",advanceDirectives:"Digitale Hinweiskarte zur Patientenverf\xFCgung",settings:"Einstellungen",about:"\xDCber den mHealth Prototyp"},about:{title:"\xDCber den mHealth Prototypen (FHIR-Questionnaire-Szenario)",aboutText:"Der mHealth-Prototyp (FHIR-Questionnaire-Szenario) wurde im Rahmen eines Projekts von eHealth Suisse und dem Institut f\xFCr Medizininformatik I4MI der Berner Fachhochschule erstellt. Er soll demonstrieren, wie FHIR-Questionnaires dynamisch angezeigt, beantwortet und im EPD Playground gespeichert werden k\xF6nnen.",readMore:"Unter den folgenden Links erfahren Sie mehr zu den Projektpartnern, zum elektronischen Patientendossier und zum EPD Playground:",version:"Version:"},settings:{languageTitle:"Sprache",languageText:"W\xE4hlen Sie die Sprache der Anwendung aus (derzeit sind nur Deutsch und Franz\xF6sisch verf\xFCgbar)."},questionnaire:{save:"speichern",reset:"zur\xFCcksetzen",end:"Ende des Fragebogens",error:"Bei der Validierung ist ein Fehler aufgetreten.",saved:"Ihre Antworten wurden erfolgreich auf Ihrem EPD gespeichert.",selector:{title:"Fragebogen ausw\xE4hlen",descriptionURL:"FHIR-Questionnaire von einer Website importieren",descriptionUpload:"FHIR-Questionnaire hochladen",descriptionDefault:"Demo-Questionnaire ausw\xE4hlen"}}},e={common:{appName:"mHealth Proto FHIR-Questionnaire",error:"Oups ! Quelque chose s'est mal pass\xE9 !",back:"retour",close:"fermer"},login:{welcome1:"Bienvenue sur votre dossier patient !",welcome2:"Connectez-vous avec votre adresse e-mail pour consulter vos donn\xE9es de sant\xE9.",emailAddressLabel:"Adresse e-mail",passwordLabel:"Mot de passe",loginLabel:"Se connecter",invalidPassword:"L'adresse e-mail ou le mot de passe saisi n'est pas valide.",enterCode1:"Veuillez saisir le code envoy\xE9 \xE0 ",enterCode2:" a \xE9t\xE9 envoy\xE9",resend:"Renvoyer le code",codeLabel:"code",checkLabel:"v\xE9rifier",invalidCode:"le code saisi n'est pas correct.",messageTitle:"SMS de l'EPD Playground \xE0 ",messageText:"Votre code pour le use case EPD Playground est : ",loginError:"Aucune donn\xE9e correspondante n'a pu \xEAtre trouv\xE9e pour ce login / mot de passe sur l'EPD Playground."},menu:{title:"Menu",home:"Accueil",questionnaire101:"Construire un questionnaire",organDonation:"Carte num\xE9rique de don d'organes",advanceDirectives:"Carte d'information num\xE9rique sur les directives anticip\xE9es",settings:"Param\xE8tres",about:"\xC0 propos du prototype mHealth"},about:{title:"\xC0 propos du prototype mHealth (sc\xE9nario FHIR-Questionnaire)",aboutText:"Le prototype mHealth (sc\xE9nario FHIR-Questionnaire) a \xE9t\xE9 cr\xE9\xE9 dans le cadre d'un projet d'eHealth Suisse et de l'Institut d'informatique m\xE9dicale I4MI de la Haute \xE9cole sp\xE9cialis\xE9e bernoise. Il doit servir de d\xE9monstrateur pour un cas d'utilisation de questionnaires FHIR.",readMore:"Les liens suivants vous permettront d'en savoir plus sur les partenaires du projet, sur le dossier \xE9lectronique du patient et sur l'EPD Playground :",version:"version:"},settings:{languageTitle:"Langue",languageText:"Choisissez la langue de l'application (actuellement, seuls le fran\xE7ais et l'allemand sont disponibles)."},questionnaire:{save:"enregistrer",reset:"r\xE9initialiser",end:"Fin du questionnaire",error:"Une erreur est survenue lors de la validation.",saved:"Vos r\xE9ponses ont bien \xE9t\xE9 enregistr\xE9es sur votre DEP.",selector:{title:"S\xE9l\xE9ctionner un questionnaire",descriptionURL:"Importer un Questionnaire FHIR depuis une site web",descriptionUpload:"T\xE9l\xE9verser un Questionnaire FHIR",descriptionDefault:"Choisir un Questionnaire FHIR de d\xE9monstration"}}},t={de:i,fr:e,it:e};const o=["de","fr","it"],a=s({locale:o[0],legacy:!1,messages:t});var u=r(({app:n})=>{n.use(a)});export{o as APP_LANGUAGES,u as default,a as i18n};