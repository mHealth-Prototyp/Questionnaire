import{d as T,u as A,r as f,U as n,V as v,W as u,a5 as e,$ as _,ag as b,j as l,X as D,Y as I,ac as h,ad as k,aa as c,ai as R,aj as P,ah as q}from"./index.b0611a79.js";import{Q as x}from"./QPage.b2a287d8.js";import{APP_LANGUAGES as E}from"./i18n.7878345a.js";import{A as N}from"./Patientenverfuegung.38954060.js";import{d as V,u as w,x as S}from"./fhir-questionnaire-renderer.8539b579.js";import{u as j}from"./use-quasar.47119d47.js";import{u as U}from"./composables.60f0a31a.js";import{u as B}from"./vue-i18n.runtime.16caee72.js";const L={key:0,class:"col-12 col-lg-8"},O={key:1,class:"col-12"},J=T({__name:"AdvanceDirectivesPage",setup($){const r=j(),{t,locale:o}=B(),s=A(),C=U(),i=f(!1),g=f(-1),a=f();a.value=new V.QuestionnaireData(N,E);function y(){var p,m;a.value&&a.value.isResponseComplete(!0,!0)&&w(a.value.getQuestionnaireResponse(o.value,{reset:!1,includeID:!0,patient:{reference:"https://test.ahdis.ch/mag-bfh/fhir/"+s.userResource.resourceType+"/"+s.userResource.id,display:s.userResource.name?q.getFullName(q.selectName(s.userResource.name)):""}}),s.userResource,{title:(p=a.value.getQuestionnaireTitle(o.value))!=null?p:R(),isFhir:!0,description:(m=a.value.getQuestionnaireTitle(o.value))!=null?m:R(),contentLanguage:o.value,sourceIdentifier:s.userSettings.OIDs.app,categoryCoding:{system:"http://snomed.info/sct",code:"184216000",display:"Patient record type"},typeCoding:{system:"http://snomed.info/sct",code:"419891008",display:"Record artifact (record artifact)"},facilityCoding:s.userSettings.facilityType,practiceSettingCoding:s.userSettings.practiceSetting,authorRole:P.PAT},C).then(()=>{r.notify({message:t("questionnaire.saved"),position:"top-right"}),d(),i.value=!1,g.value*=-1}).catch(Q=>{r.notify({message:t("common.error"),type:"negative",position:"top-right"}),console.error(Q),i.value=!1})}function d(){a.value&&(a.value.resetResponse(),a.value.populateAnswers([s.userResource]))}return(p,m)=>(n(),v(x,{class:"full-width row justify-center content-start"},{default:u(()=>[e(r).platform.is.desktop?(n(),_("div",L,[a.value?(n(),v(b,{key:0,class:"q-pb-xs",flat:"",bordered:""},{default:u(()=>[l(h,{class:"card-title"},{default:u(()=>[D(I(a.value.getQuestionnaireTitle(e(o))),1)]),_:1}),l(k),l(h,{class:"q-pa-none"},{default:u(()=>[l(e(S),{"questionnaire-data":a.value,language:e(o),"translation-strings":{save:e(t)("questionnaire.save"),reset:e(t)("questionnaire.reset"),end:e(t)("questionnaire.end"),close:e(t)("common.close")},"disable-save":i.value,onSave:y,onReset:d},null,8,["questionnaire-data","language","translation-strings","disable-save"])]),_:1})]),_:1})):c("",!0)])):c("",!0),e(r).platform.is.mobile?(n(),_("div",O,[a.value?(n(),v(e(S),{key:g.value,"questionnaire-data":a.value,language:e(o),"translation-strings":{save:e(t)("questionnaire.save"),reset:e(t)("questionnaire.reset"),end:e(t)("questionnaire.end"),close:e(t)("common.close")},"disable-save":i.value,onSave:y,onReset:d},null,8,["questionnaire-data","language","translation-strings","disable-save"])):c("",!0)])):c("",!0)]),_:1}))}});export{J as default};
