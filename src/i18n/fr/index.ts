export default {
  common: {
    appName: 'mHealth Proto FHIR-Questionnaire',
    error: "Oups ! Quelque chose s'est mal passé !",
    back: 'retour',
    close: 'fermer'
  },
  login: {
    welcome1: 'Bienvenue sur votre dossier patient !',
    welcome2: 'Connectez-vous avec votre adresse e-mail pour consulter vos données de santé.',
    emailAddressLabel: 'Adresse e-mail',
    passwordLabel: 'Mot de passe',
    loginLabel: 'Se connecter',
    invalidPassword: "L'adresse e-mail ou le mot de passe saisi n'est pas valide.",
    enterCode1: 'Veuillez saisir le code envoyé à ',
    enterCode2: ' a été envoyé',
    resend: 'Renvoyer le code',
    codeLabel: 'code',
    checkLabel: 'vérifier',
    invalidCode: "le code saisi n'est pas correct.",
    messageTitle: "SMS de l'EPD Playground à ",
    messageText: 'Votre code pour le use case EPD Playground est : ',
    loginError: "Aucune donnée correspondante n'a pu être trouvée pour ce login / mot de passe sur l'EPD Playground."
  },
  menu: {
    title: 'Menu',
    home: 'Accueil',
    questionnaire101: 'Construire un questionnaire',
    organDonation: "Carte numérique de don d'organes",
    advanceDirectives: "Carte d'information numérique sur les directives anticipées",
    settings: 'Paramètres',
    about: 'À propos du prototype mHealth'
  },
  about: {
    title: 'À propos du prototype mHealth (scénario FHIR-Questionnaire)',
    aboutText:
      "Le prototype mHealth (scénario FHIR-Questionnaire) a été créé dans le cadre d'un projet d'eHealth Suisse et de l'Institut d'informatique médicale I4MI de la Haute école spécialisée bernoise. Il doit servir de démonstrateur pour un cas d'utilisation de questionnaires FHIR.",
    readMore:
      "Les liens suivants vous permettront d'en savoir plus sur les partenaires du projet, sur le dossier électronique du patient et sur l'EPD Playground :",
    version: 'version:'
  },
  settings: {
    languageTitle: 'Langue',
    languageText: "Choisissez la langue de l'application (actuellement, seuls le français et l'allemand sont disponibles)."
  },
  questionnaire: {
    save: 'enregistrer',
    reset: 'réinitialiser',
    end: 'Fin du questionnaire',
    error: 'Une erreur est survenue lors de la validation.',
    saved: 'Vos réponses ont bien été enregistrées sur votre DEP.',
    selector: {
      title: 'Séléctionner un questionnaire',
      descriptionURL: 'Importer un Questionnaire FHIR depuis une site web',
      descriptionUpload: 'Téléverser un Questionnaire FHIR',
      descriptionDefault: 'Choisir un Questionnaire FHIR de démonstration'
    }
  }
};
