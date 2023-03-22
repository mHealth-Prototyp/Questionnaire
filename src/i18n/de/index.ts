export default {
  common: {
    appName: 'mHealth Proto FHIR-Questionnaire',
    error: 'Ups. Da ist leider etwas schiefgegangen!',
    back: 'zurück',
    close: 'schliessen'
  },
  login: {
    welcome1: 'Willkommen zu Ihrem Patientendossier!',
    welcome2: 'Loggen Sie sich mit Ihrer E-Mailadresse ein, um Ihre Gesundheitsdaten abzurufen.',
    emailAddressLabel: 'E-Mailadresse',
    passwordLabel: 'Passwort',
    loginLabel: 'einloggen',
    invalidPassword: 'Die eingegebene E-Mailadresse oder das Passwort ist ungültig.',
    enterCode1: 'Bitte geben Sie den Code ein, der an ',
    enterCode2: ' gesendet wurde.',
    resend: 'Code erneut senden',
    codeLabel: 'Code',
    checkLabel: 'prüfen',
    invalidCode: 'Der eingegebene Code ist nicht korrekt.',
    messageTitle: 'SMS von EPD Playground an ',
    messageText: 'Ihr Code für den EPD Playground Use Case ist: ',
    loginError: 'Für dieses Login konnten keine entsprechenden Daten auf dem EPD Playground gefunden werden.'
  },
  menu: {
    title: 'Menü',
    home: 'Startseite',
    questionnaire101: 'Anleitung: Questionnaire erstellen',
    organDonation: 'Digitale Organspende-Karte',
    advanceDirectives: 'Digitale Hinweiskarte zur Patientenverfügung',
    settings: 'Einstellungen',
    about: 'Über den mHealth Prototyp'
  },
  about: {
    title: 'Über den mHealth Prototypen (FHIR-Questionnaire-Szenario)',
    aboutText:
      'Der mHealth-Prototyp (FHIR-Questionnaire-Szenario) wurde im Rahmen eines Projekts von eHealth Suisse und dem Institut für Medizininformatik I4MI der Berner Fachhochschule erstellt. Er soll demonstrieren, wie FHIR-Questionnaires dynamisch angezeigt, beantwortet und im EPD Playground gespeichert werden können.',
    readMore: 'Unter den folgenden Links erfahren Sie mehr zu den Projektpartnern, zum elektronischen Patientendossier und zum EPD Playground:',
    version: 'Version:'
  },
  settings: {
    languageTitle: 'Sprache',
    languageText: 'Wählen Sie die Sprache der Anwendung aus (derzeit sind nur Deutsch und Französisch verfügbar).'
  },
  questionnaire: {
    save: 'speichern',
    reset: 'zurücksetzen',
    end: 'Ende des Fragebogens',
    error: 'Bei der Validierung ist ein Fehler aufgetreten.',
    saved: 'Ihre Antworten wurden erfolgreich auf Ihrem EPD gespeichert.',
    selector: {
      title: 'Fragebogen auswählen',
      descriptionURL: 'FHIR-Questionnaire von einer Website importieren',
      descriptionUpload: 'FHIR-Questionnaire hochladen',
      descriptionDefault: 'Demo-Questionnaire auswählen'
    }
  }
};
