import {Bundle, Patient, Resource} from '@i4mi/fhir_r4';
import {Iti65Metadata} from '@i4mi/mhealth-proto-components';
import {Utils} from 'src/models/types';

export async function uploadToEPDPlayground(resource: Resource, patient: Patient, metadata: Iti65Metadata, utils: Utils): Promise<Bundle> {
  const iti65Bundle = await utils.fhirUtils.createIti65Bundle(
    patient,
    new File([JSON.stringify(resource)], metadata.title + '.json', {
      type: 'application/fhir+json'
    }),
    metadata
  );
  return await utils.epdUtils.useITI65(iti65Bundle);
}
