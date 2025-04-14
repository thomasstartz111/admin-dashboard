import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import patientsData from '../data/patients.json'; // Import the JSON file or fetch from API

const PatientChartPage = () => {
  const { id } = useParams(); // Get the patient ID from the URL
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    // Fetch the patient data based on the ID
    const selectedPatient = patientsData.find((p) => p.id === parseInt(id));
    setPatient(selectedPatient);
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{patient.name}</h2>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Hospital:</strong> {patient.hospital} | <strong>Admission Date:</strong> {patient.admitDate}
        </p>
        <div className="text-sm text-gray-800">
          <strong>Medical History:</strong>
          <p>
            SUBJECTIVE: 58yo M w/ h/o T2DM p/w 5d of worsening SOB, productive cough w/ yellow sputum, fever,
            chills, fatigue. Pts wife states he's been "not himself" for past week. Denies chest pain, HA, N/V,
            diarrhea. +smoker, 1ppd x 30yrs. Allergies: PCN (rash). Meds: metformin, lisinopril. Admits poor
            compliance w/ meds recently. Last A1c 3mo ago 7.8%. Flu shot this year, pneumovax 5yrs ago.
            CC: "Can't catch my breath"
            HPI: Pt began feeling unwell ~1wk ago w/ mild cough, attributed to "usual winter cold." Symptoms
            progressively worsened over past 5d. Today, severe SOB prompted ER visit. Fever at home 101.5F. No
            recent travel or sick contacts.
            ROS: As above, + decreased appetite, +mild LE swelling. Otherwise negative.
            ALLERGIES: PCN (rash) MEDS: metformin 1000mg BID, lisinopril 10mg daily
            PMH: T2DM (dx 10yrs ago), HTN, Hyperlipidemia SH: Smoker 1ppd x 30yrs, occ. ETOH, lives w/ wife FH:
            Father - MI at 62, Mother - T2DM
            VS: BP 142/88 (L arm, supine) - 138/84 (R arm, seated) HR 98-112 irreg T 38.7°C (101.7°F) oral RR 22-
            26 SpO2 92-94% on RA, dropped to 89% w/ exertion I/O: 750mL in / 400mL out (8hr shift)
            Pt diaphoretic, tachypneic. O2 2L NC started. Glucose 178 (fasting). Decreased BS L lung field.
            Gen: 58yo male, appears acutely ill, mildly dyspneic at rest. Alert, oriented x3. NAD. HEENT: NCAT,
            PERRL, EOMI. Oropharynx clear, no erythema. TMs intact b/l. CV: RRR, nl S1/S2, no m/r/g. Pulses 2+ and
            symm. Resp: Tachypneic, RR 24. Diminished BS in R base. Crackles in R mid/lower lung fields. No
            wheezes. Abd: Soft, NT/ND. BS+. No HSM. MS: FROM in all extremities. No edema. Neuro: A&Ox3, CN
            II-XII intact. Strength 5/5 all extremities. DTRs 2+ and symm. Skin: Warm, dry. No rashes or lesions.
            Lymph: No cervical, axillary, or inguinal LAD.
            Lab results: BMP: Na 138, K 4.1, Cl 102, CO2 24, BUN 22, Cr 1.1, Gluc 210 CBC: WBC 15.2, Hgb 13.8, Hct
            41%, Plt 280 LFTs: AST 42, ALT 38, ALP 110, T. Bili 0.8 UA: cloudy, +LE, +nitrites, WBC 20-30/hpf, RBC
            0-2/hpf
            WBC elevated, likely d/t infection. Gluc high - pt w/ known T2DM. LFTs sl. elevated. UA suggestive of
            UTI. K+ wnl but monitor closely w/ abx. Hgb ok for now, watch for trending down w/ effusion. Cr wnl but
            keep eye on renal fxn w/ contrast & meds.
            Hospital Meds: Ceftriaxone 1g IV q24h, Azithromycin 500mg IV q24h Home Meds: Metformin 1000mg
            PO BID, Lisinopril 10mg PO daily Scheduled Medications: Insulin sliding scale, Heparin 5000 units SC
            q8h Continuous infusions: NS @ 100 mL/hr PRN Medications: Acetaminophen 650mg PO/IV q6h PRN
            fever/pain, Albuterol 2.5mg via nebulizer q4h PRN wheezing/SOB STAT Meds: None

            - Pt reports compliance w/ home meds. Verify w/ pharmacy. **Monitor renal function w/ metformin. D/C if
            AKI develops. ***Assess for drug interactions w/ azithromycin and home meds.
            O2 therapy via nasal cannula @ 2-4 L/min, titrate to keep SpO2 {'>'}92% Blood glucose checks QID before
            meals and at bedtime CBC, CMP, CXR daily. Reassess antibiotic regimen in 48-72 hrs.
            Imaging results: CXR PA/LAT: Bilat patchy opacities, R{'>'}L. R lower lobe consolidation. Sm R pleural
            effusion. No pneumothorax. Heart size WNL. No bony abnl.

            CT chest w/o contrast: Multifocal pneumonia, R{'>'}L. R lower lobe consolidation w/ air bronchograms. Sm-
            mod R pleural effusion, est. 200-250cc. No empyema. No cavitation. Mediastinal LAD. No PE.

            US R chest: Loculated R pleural effusion, est vol 225cc. No septations. Minimal debris.
            Impression: Mod pneumonia w/ parapneumonic effusion, R{'>'}L. No evidence of empyema or abscess. F/u
            imaging recommended to assess response to tx.
            A: 58M w/ moderate CAP, admit for IV abx. CXR shows RLL infiltrate. T 102.3F, HR 110, RR 24, O2 sat
            92% RA. WBC 15.2, elevated CRP. Blood gluc 210. Hx T2DM.
            Principal: Moderate community-acquired pneumonia{'}'}
          </p>
      </div>
      </div>
    </div>
  );
};

export default PatientChartPage;