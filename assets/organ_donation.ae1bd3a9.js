const e="Questionnaire",t=[{resourceType:"ValueSet",id:"ORGAN-DONATION-RESPONSE-ValueSet",url:"https://github.com/mHealth-Prototyp/Questionnaires/blob/main/resources/ValueSet/organ-donation-response.json",version:"0.0.1",name:"Organdonationresponse",title:'Responses for "Completing the Digital Organ Donation Card"',status:"draft",experimental:!0,date:"2023-01-16",publisher:"eHealth Suisse",contact:[{telecom:[{system:"email",value:"info@e-health-suisse.ch"}]}],jurisdiction:[{coding:[{system:"urn:iso:std:iso:3166",code:"CH",display:"Switzerland"}],text:"Switzerland's Jurisdiction"}],immutable:!0,compose:{include:[{system:"https://github.com/mHealth-Prototyp/Questionnaires/blob/main/resources/ValueSet/organ-donation-response.json",concept:[{code:"yes_all",display:"I CONSENT to the removal of any organs, tissues or cells, and to the associated preparatory medical measures.",designation:[{language:"de",value:"Ich sage JA zur Entnahme jeglicher Organe, Gewebe und Zellen und zu den damit verbundenen vorbereitenden medizinischen Massnahmen."},{language:"fr",value:"Je dis OUI \xE0 tout pr\xE9l\xE8vement d\u2019organes, de tissus ou de cellules et aux mesures m\xE9dicales pr\xE9liminaires qui y sont li\xE9es."},{language:"it",value:"S\xCC, acconsento al prelievo di tutti gli organi, tessuti o cellule e alle relative misure mediche preparatorie."}]},{code:"yes_following",display:"I CONSENT to the removal of the following organs, tissues or cells, and to the associated preparatory medical measures:",designation:[{language:"de",value:"Ich sage JA zur Entnahme folgender Organe, Gewebe und Zellen und zu den damit verbundenen vorbereitenden medizinischen Massnahmen:"},{language:"fr",value:"Je dis OUI au pr\xE9l\xE8vement des organes, tissus ou cellules ci-apr\xE8s et aux mesures m\xE9dicales pr\xE9liminaires qui y sont li\xE9es :"},{language:"it",value:"S\xCC, acconsento al prelievo dei seguenti organi, tessuti o cellule e alle relative misure mediche preparatorie:"}]},{code:"no",display:"I DO NOT CONSENT to the removal of any organs, tissues or cells.",designation:[{language:"de",value:"Ich sage NEIN zur Entnahme von Organen, Geweben und Zellen."},{language:"fr",value:"Je dis NON au pr\xE9l\xE8vement d\u2019organes, de tissus ou de cellules."},{language:"it",value:"NO, non acconsento al prelievo di organi, tessuti o cellule."}]},{code:"leave_decision_following",display:"I leave the decision to the following TRUSTED PERSON:",designation:[{language:"de",value:"Ich \xFCberlasse den Entscheid folgender VERTRAUENSPERSON:"},{language:"fr",value:"La PERSONNE DE CONFIANCE ci-apr\xE8s prendra la d\xE9cision quant au pr\xE9l\xE8vement :"},{language:"it",value:"delego la decisione alla seguente PERSONA DI FIDUCIA:"}]}]}]}},{resourceType:"ValueSet",id:"ORGAN-DONATION-LIST-ValueSet",url:"https://github.com/mHealth-Prototyp/Questionnaires/blob/main/resources/ValueSet/organ-donation-list.json",version:"0.0.1",name:"Organdonationlist",title:'List of Organs, Cells and Tissues for "Completing the Digital Organ Donation Card"',status:"draft",experimental:!0,date:"2023-01-16",publisher:"eHealth Suisse",contact:[{telecom:[{system:"email",value:"info@e-health-suisse.ch"}]}],jurisdiction:[{coding:[{system:"urn:iso:std:iso:3166",code:"CH",display:"Switzerland"}],text:"Switzerland's Jurisdiction"}],immutable:!0,compose:{include:[{system:"http://snomed.info/sct",concept:[{code:"80891009",display:"Heart structure (body structure)",designation:[{language:"de",value:"Herz"},{language:"fr",value:"c\u0153ur"},{language:"it",value:"cuore"}]},{code:"39607008",display:"Lung structure (body structure)",designation:[{language:"de",value:"Lungen"},{language:"fr",value:"poumons"},{language:"it",value:"polmoni"}]},{code:"10200004",display:"Liver structure (body structure)",designation:[{language:"de",value:"Leber"},{language:"fr",value:"foie"},{language:"it",value:"fegato"}]},{code:"64033007",display:"Kidney structure (body structure)",designation:[{language:"de",value:"Nieren"},{language:"fr",value:"reins"},{language:"it",value:"reni"}]},{code:"30315005",display:"Structure of small intestine (body structure)",designation:[{language:"de",value:"D\xFCnndarm"},{language:"fr",value:"intestin gr\xEAle"},{language:"it",value:"intestino tenue"}]},{code:"15776009",display:"Pancreatic structure (body structure)",designation:[{language:"de",value:"Bauchspeicheldr\xFCse (Pankreas)"},{language:"fr",value:"pancr\xE9as (\xEElots)"},{language:"it",value:"pancreas"}]},{code:"28726007",display:"Corneal structure (body structure)",designation:[{language:"de",value:"Augenhornhaut (Cornea)"},{language:"fr",value:"corn\xE9e"},{language:"it",value:"cornea"}]},{code:"181285005",display:"Entire heart valve (body structure)",designation:[{language:"de",value:"Herzklappen und Blutgef\xE4sse"},{language:"fr",value:"valves cardiaques et vaisseaux sanguins"},{language:"it",value:"valvole cardiache e vasi sanguigni"}]},{code:"85756007",display:"Body tissue structure (body structure)",designation:[{language:"de",value:"weitere Gewebe oder Zellen"},{language:"fr",value:"autres tissus et cellules"},{language:"it",value:"altri tessuti o cellule"}]}]}]}}],n="https://github.com/mHealth-Prototyp/Questionnaires/blob/main/resources/Questionnaire/organ-donation.json",i="0.0.1",r="Organdonation",o="Digital Organ Donation Card",a={extension:[{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"de"},{url:"content",valueString:"Digitale Organspende-Karte"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"fr"},{url:"content",valueString:"Carte num\xE9rique de don d'organes"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"it"},{url:"content",valueString:"Carta digitale per la donazione di organi"}]}]},l="draft",u=!0,s=["Patient"],d="2023-01-13",c="eHealth Suisse",g=[{telecom:[{system:"email",value:"info@e-health-suisse.ch"}]}],h=`**Here's how it works**  
1. Fill in the online form completely.  
2. Register it in your EPR.  
3. Inform your relatives of your wishes and inform them of the presence of this form on your EPD. If you change your mind, fill in the form again, and inform your relatives of this new decision.`,p={extension:[{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"de"},{url:"content",valueString:`**So funktioniert\u2019s**  
1. Online-Formular vollst\xE4ndig ausf\xFCllen.  
2. Speichern Sie es in Ihrem EPD.  
3. Die Angeh\xF6rigen \xFCber Ihren Willen und ihnen die Pr\xE4senz des Formulars auf Ihrem EPD informieren.`}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"fr"},{url:"content",valueString:`Voici comment \xE7a fonctionne  
1. Remplissez int\xE9gralement le formulaire en ligne.  
2. Enregistrez-le dans votre DEP.  
3. Informez vos proches de votre volont\xE9 et informez-les de la pr\xE9sence de ce formulaire sur votre DEP. Si vous changez d\u2019avis, remplissez de nouveau le formulaire, et informez vos proches de cette nouvelle d\xE9cision.`}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"it"},{url:"content",valueString:`**Ecco come funziona**  
1. Compilate completamente il modulo online.  
2. Salvatelo nella vostra CIP.  
3. Informate i vostri parenti della vostra volont\xE0 e informateli della presenza di questo modulo sulla vostra CIP. Se cambiate idea, compilate nuovamente il modulo e informate i vostri familiari della nuova decisione.`}]}]},v=[{coding:[{system:"urn:iso:std:iso:3166",code:"CH",display:"Switzerland"}],text:"Switzerland's Jurisdiction"}],f=[{system:"urn:prototype-4-codes",code:"organ-donation",display:"Organ Donation"}],m=[{linkId:"Dgroup",type:"group",item:[{linkId:"D1",text:"First and familiy name",_text:{extension:[{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"de"},{url:"content",valueString:"Vor- und Nachname"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"fr"},{url:"content",valueString:"Pr\xE9nom et nom"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"it"},{url:"content",valueString:"Nome e cognome"}]}]},type:"string",required:"true",repeats:!1,readOnly:!0,extension:[{url:"http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression",valueExpression:{language:"text/fhirpath",expression:"%patient.name.given.first() + ' ' + %patient.name.family.first()"}}]},{linkId:"D2",text:"Birthdate",_text:{extension:[{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"de"},{url:"content",valueString:"Geburtsdatum"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"fr"},{url:"content",valueString:"Date de naissance"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"it"},{url:"content",valueString:"Data di nascita"}]}]},type:"date",required:"true",repeats:!1,readOnly:!0,extension:[{url:"http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression",valueExpression:{language:"text/fhirpath",expression:"%patient.birthDate"}}]}]},{extension:[{url:"http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",valueCodeableConcept:{coding:[{system:"http://hl7.org/fhir/questionnaire-item-control",code:"radio-button",display:"Radio Button"}],text:"Radio Button"}}],linkId:"Q1",text:"In the event that removal of organs, tissues or cells is possible after my death, my wishes are as follows:",_text:{extension:[{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"de"},{url:"content",valueString:"Ich \xE4ussere meinen Willen f\xFCr den Fall, dass nach meinem Tod eine Entnahme von Organen, Geweben oder Zellen infrage kommt:"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"fr"},{url:"content",valueString:"Si, \xE0 mon d\xE9c\xE8s, le pr\xE9l\xE8vement d\u2019organes, de tissus ou de cellules \xE0 des fins de transplantation entre en ligne de compte :"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"it"},{url:"content",valueString:"Esprimo la mia volont\xE0 per il caso in cui, dopo la mia morte, sia possibile eseguire un prelievo di organi, tessuti o cellule:"}]}]},type:"choice",required:!0,repeats:!1,answerValueSet:"#ORGAN-DONATION-RESPONSE-ValueSet",item:[{extension:[{url:"http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",valueCodeableConcept:{coding:[{system:"http://hl7.org/fhir/questionnaire-item-control",code:"check-box",display:"Check-box"}],text:"Check-box"}}],linkId:"Q1-SQ1",type:"choice",required:!0,repeats:!0,text:"I CONSENT to the removal of the following organs, tissues or cells, and to the associated preparatory medical measures:",_text:{extension:[{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"de"},{url:"content",valueString:"Ich sage JA zur Entnahme folgender Organe, Gewebe und Zellen und zu den damit verbundenen vorbereitenden medizinischen Massnahmen:"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"fr"},{url:"content",valueString:"Je dis OUI au pr\xE9l\xE8vement des organes, tissus ou cellules ci-apr\xE8s et aux mesures m\xE9dicales pr\xE9liminaires qui y sont li\xE9es :"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"it"},{url:"content",valueString:"S\xCC, acconsento al prelievo dei seguenti organi, tessuti o cellule e alle relative misure mediche preparatorie:"}]}]},enableWhen:[{question:"Q1",operator:"=",answerCoding:{system:"https://github.com/mHealth-Prototyp/Questionnaires/blob/main/resources/ValueSet/organ-donation-response.json",code:"yes_following"}}],answerValueSet:"#ORGAN-DONATION-LIST-ValueSet"},{linkId:"Q1-SG1",type:"group",required:!0,text:"Contact details of the trusted support person:",_text:{extension:[{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"de"},{url:"content",valueString:"Angaben zur Vertrauensperson:"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"fr"},{url:"content",valueString:"Coordonn\xE9es de la personne de confiance :"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"it"},{url:"content",valueString:"Dati di contatto della persona di fiducia:"}]}]},repeats:!1,enableWhen:[{question:"Q1",operator:"=",answerCoding:{system:"https://github.com/mHealth-Prototyp/Questionnaires/blob/main/resources/ValueSet/organ-donation-response.json",code:"leave_decision_following"}}],item:[{linkId:"Q1-SG1-Q1",type:"string",required:!0,text:"First name and surname of the trusted person",_text:{extension:[{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"de"},{url:"content",valueString:"Vor- und Nachname der Vertrauensperson"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"fr"},{url:"content",valueString:"Pr\xE9nom et nom de la personne de confiance"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"it"},{url:"content",valueString:"Nome e cognome della persona di fiducia"}]}]}},{linkId:"Q1-SG1-Q2",type:"string",required:!0,text:"Address",_text:{extension:[{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"de"},{url:"content",valueString:"Adresse"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"fr"},{url:"content",valueString:"Adresse"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"it"},{url:"content",valueString:"Indirizzo"}]}]}},{linkId:"Q1-SG1-Q3",type:"string",required:!0,text:"Postcode/Place",_text:{extension:[{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"de"},{url:"content",valueString:"PLZ/Ort"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"fr"},{url:"content",valueString:"Code postal / Ville"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"it"},{url:"content",valueString:"CAP / Citt\xE0"}]}]}},{linkId:"Q1-SG1-Q4",type:"string",required:!0,text:"Telephone",_text:{extension:[{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"de"},{url:"content",valueString:"Telefon"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"fr"},{url:"content",valueString:"T\xE9l\xE9phone"}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"it"},{url:"content",valueString:"Telefono"}]}]}}]}]},{linkId:"I1",text:"The information you provide here is only recorded on your EPR.",_text:{extension:[{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"de"},{url:"content",valueString:"Die Angaben, die Sie hier machen, werden nur auf Ihrem EPD gespeichert."}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"fr"},{url:"content",valueString:"Les informations que vous fournissez ici ne sont enregistr\xE9es que sur votre DEP."}]},{url:"http://hl7.org/fhir/StructureDefinition/translation",extension:[{url:"lang",valueCode:"it"},{url:"content",valueString:"Le informazioni fornite qui vengono registrate solo sulla vostra CIP."}]}]},type:"display"}];var S={resourceType:e,contained:t,url:n,version:i,name:r,title:o,_title:a,status:l,experimental:u,subjectType:s,date:d,publisher:c,contact:g,description:h,_description:p,jurisdiction:v,code:f,item:m};export{S as O};
