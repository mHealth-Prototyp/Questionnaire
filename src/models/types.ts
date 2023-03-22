import {EpdPlaygroundUtils, FhirUtils, SystemCode} from '@i4mi/mhealth-proto-components';
import {MessageLanguages} from 'src/boot/i18n';

export type User = {
  emailAddress: string;
  password: string;
  firstName: string;
  lastName: string;
  mobilePhoneNumber: string;
};

export type Settings = {
  language: MessageLanguages;
  facilityType: SystemCode;
  practiceSetting: SystemCode;
  OIDs: {
    eprSpid: string;
    mpiId: string;
    local: string;
    ahv: string;
    app: string;
  };
};

export type Utils = {
  epdUtils: EpdPlaygroundUtils;
  fhirUtils: FhirUtils;
};
