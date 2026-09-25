import { Patient } from '../types';

export const initialPatients: Patient[] = [
  {
    id: 'p-01',
    tokenNo: 1,
    name: 'Ramesh Kumar Patel',
    abhaId: '91-2049-1830-4921',
    mobile: '9876543210',
    age: 54,
    gender: 'Male',
    address: 'House 42, Ward 3, Rampur Village, Block Shivgarh, Dist. Sitapur, UP',
    villageBlock: 'Rampur (Shivgarh Block)',
    chronicDiseases: ['Type 2 Diabetes', 'Hypertension'],
    condition: 'Moderate',
    conditionDescription: 'Elevated Post-Prandial Blood Sugar with mild chest tightness on exertion',
    queueStatus: 'In Consultation',
    arrivalTime: '09:15 AM',
    vitals: {
      bp: '148/92 mmHg',
      pulse: 84,
      spo2: 97,
      temp: 98.4,
      bloodSugar: 218,
      bmi: 26.2,
      recordedAt: 'Today 09:20 AM',
      isBpAbnormal: true,
      isSugarAbnormal: true,
    },
    symptoms: [
      { name: 'Chest Tightness', duration: '3 days', severity: 'Moderate' },
      { name: 'Occasional Dizziness', duration: '1 week', severity: 'Mild' },
      { name: 'Polyuria (Frequent Urination)', duration: '2 weeks', severity: 'Moderate' }
    ],
    probableDisorder: {
      title: 'Uncontrolled Diabetes with Hypertensive Strain',
      confidence: 89,
      icdCode: 'E11.9 / I10',
      description: 'High fasting and post-prandial glycemic levels combined with Grade 1 HTN. ECG shows sinus rhythm with early LVH markers.',
      suggestedAction: 'Adjust oral hypoglycemics (Metformin + Glimepiride), initiate ACE inhibitor, recommend 12-lead ECG review via Telecardiology.'
    },
    testsConducted: [
      { id: 't-1', testName: 'Random Blood Glucose (RBG)', result: '218 mg/dL', date: 'Today 09:25 AM', status: 'Abnormal', range: '70-140 mg/dL' },
      { id: 't-2', testName: 'Urine Dipstick (Protein/Sugar)', result: 'Sugar ++, Protein Trace', date: 'Today 09:28 AM', status: 'Abnormal' },
      { id: 't-3', testName: 'Rapid HbA1c Cartridge', result: '8.6 %', date: 'Today 09:32 AM', status: 'Abnormal', range: '< 6.5%' },
      { id: 't-4', testName: 'Pulse Oximetry Check', result: '97% on Room Air', date: 'Today 09:20 AM', status: 'Normal', range: '95-100%' }
    ],
    pastReports: [
      { id: 'r-1', title: '12-Lead Electrocardiogram (ECG)', category: 'ECG', date: '14 Aug 2026', doctor: 'Dr. S. Verma', fileSize: '1.8 MB' },
      { id: 'r-2', title: 'Chest X-Ray (PA View)', category: 'X-Ray', date: '02 Jun 2026', doctor: 'Dr. Priya Mehta', fileSize: '3.4 MB' },
      { id: 'r-3', title: 'Complete Blood Count (CBC) + Lipid Panel', category: 'Blood Test', date: '18 Jan 2026', doctor: 'District Lab', fileSize: '850 KB' }
    ],
    referral: {
      referredToHospital: 'Sitapur District Hospital - Cardiology Dept',
      specialty: 'Cardiology / Diabetology',
      priority: 'Urgent',
      reason: 'Rule out ischemic heart disease given exertional tightness & high HbA1c',
      date: '2026-09-21',
      status: 'Draft'
    },
    followUp: {
      scheduledDate: '2026-09-28',
      prescriptions: [
        { medicine: 'Tab. Metformin 500mg', dosage: '1 Tab', frequency: 'Twice daily after meals (BD)', duration: '14 Days' },
        { medicine: 'Tab. Telmisartan 40mg', dosage: '1 Tab', frequency: 'Once daily morning (OD)', duration: '14 Days' },
        { medicine: 'Tab. Atorvastatin 10mg', dosage: '1 Tab', frequency: 'Once daily bedtime (HS)', duration: '30 Days' }
      ],
      doctorNotes: 'Maintain low-salt, low-sugar diet. Daily 30 min brisk walk. Return immediately if chest pain radiates to left arm or jaw.',
      status: 'Active'
    }
  },
  {
    id: 'p-02',
    tokenNo: 2,
    name: 'Sunita Devi Sharma',
    abhaId: '91-3820-9182-1104',
    mobile: '9765432109',
    age: 38,
    gender: 'Female',
    address: 'Near Panchayat Bhavan, Belghat, Gorakhpur, UP',
    villageBlock: 'Belghat (Gorakhpur)',
    chronicDiseases: ['Severe Iron Deficiency Anemia'],
    condition: 'Stable',
    conditionDescription: 'Chronic fatigue, pallor, mild shortness of breath upon stair climbing',
    queueStatus: 'Waiting',
    arrivalTime: '09:22 AM',
    vitals: {
      bp: '112/74 mmHg',
      pulse: 92,
      spo2: 98,
      temp: 98.6,
      bloodSugar: 98,
      bmi: 21.0,
      recordedAt: 'Today 09:25 AM',
      isBpAbnormal: false,
      isSugarAbnormal: false
    },
    symptoms: [
      { name: 'Extreme Fatigue & Lethargy', duration: '3 weeks', severity: 'Moderate' },
      { name: 'Palpitations on exertion', duration: '10 days', severity: 'Mild' },
      { name: 'Brittle nails & pale conjunctiva', duration: '1 month', severity: 'Moderate' }
    ],
    probableDisorder: {
      title: 'Microcytic Hypochromic Anemia (Nutritional)',
      confidence: 94,
      icdCode: 'D50.9',
      description: 'Severe hemoglobin deficit. Peripheral smear indicates microcytic hypochromic red blood cells consistent with dietary iron deficiency.',
      suggestedAction: 'Oral iron & folic acid supplementation (IFA tab), nutritional counseling for iron-rich local vegetables, recheck Hb in 3 weeks.'
    },
    testsConducted: [
      { id: 't-21', testName: 'Hemoglobin (HemoCue Strip)', result: '7.8 g/dL', date: 'Today 09:30 AM', status: 'Abnormal', range: '12.0 - 15.5 g/dL' },
      { id: 't-22', testName: 'Malaria Antigen Rapid Test', result: 'Negative (Pf/Pv)', date: 'Today 09:33 AM', status: 'Normal' }
    ],
    pastReports: [
      { id: 'r-21', title: 'Complete Blood Count (CBC)', category: 'Blood Test', date: '10 Jul 2026', doctor: 'CHC Belghat', fileSize: '620 KB' }
    ]
  },
  {
    id: 'p-03',
    tokenNo: 3,
    name: 'Mohd. Aslam Ansari',
    abhaId: '91-5510-4029-7719',
    mobile: '9456781230',
    age: 62,
    gender: 'Male',
    address: 'Bunkar Mohalla, Mau Aima, Prayagraj, UP',
    villageBlock: 'Mau Aima (Prayagraj)',
    chronicDiseases: ['COPD (Chronic Bronchitis)', 'Former Smoker'],
    condition: 'Critical',
    conditionDescription: 'Acute exacerbation of COPD with wheezing and low oxygen saturation',
    queueStatus: 'Waiting',
    arrivalTime: '09:35 AM',
    vitals: {
      bp: '154/98 mmHg',
      pulse: 108,
      spo2: 89,
      temp: 99.8,
      bloodSugar: 135,
      bmi: 19.8,
      recordedAt: 'Today 09:38 AM',
      isBpAbnormal: true,
      isSugarAbnormal: false
    },
    symptoms: [
      { name: 'Severe Productive Cough with Yellow Sputum', duration: '5 days', severity: 'Severe' },
      { name: 'Resting Dyspnea (Shortness of Breath)', duration: '2 days', severity: 'Severe' },
      { name: 'Bilateral Wheezing', duration: '2 days', severity: 'Severe' }
    ],
    probableDisorder: {
      title: 'Acute Exacerbation of COPD (Grade III/IV)',
      confidence: 96,
      icdCode: 'J44.1',
      description: 'Critically reduced SpO2 (89%) with tachypnea and rhonchi across bilateral lung fields. Risk of respiratory acidosis.',
      suggestedAction: 'Immediate nebulization with Salbutamol + Ipratropium Bromide, low-flow oxygen therapy (2L/min via nasal cannula), urgent pulmonology referral.'
    },
    testsConducted: [
      { id: 't-31', testName: 'Pulse Oximetry Continuous', result: '89% (Room Air)', date: 'Today 09:38 AM', status: 'Abnormal', range: '95-100%' },
      { id: 't-32', testName: 'Peak Expiratory Flow Rate (PEFR)', result: '180 L/min', date: 'Today 09:42 AM', status: 'Abnormal', range: '> 400 L/min' }
    ],
    pastReports: [
      { id: 'r-31', title: 'Chest X-Ray Digital', category: 'X-Ray', date: '11 May 2026', doctor: 'Dr. K. N. Rao', fileSize: '4.2 MB' }
    ]
  },
  {
    id: 'p-04',
    tokenNo: 4,
    name: 'Ananya Singhania',
    abhaId: '91-1029-7744-8821',
    mobile: '9811223344',
    age: 26,
    gender: 'Female',
    address: 'Plot 18, Kisan Colony, Chomu, Jaipur, Rajasthan',
    villageBlock: 'Chomu (Jaipur)',
    chronicDiseases: ['None'],
    condition: 'Observation',
    conditionDescription: 'High fever, body chills, joint pain following mosquito bites',
    queueStatus: 'Waiting',
    arrivalTime: '09:48 AM',
    vitals: {
      bp: '108/70 mmHg',
      pulse: 98,
      spo2: 99,
      temp: 102.4,
      bloodSugar: 104,
      bmi: 22.5,
      recordedAt: 'Today 09:50 AM',
      isBpAbnormal: false,
      isSugarAbnormal: false
    },
    symptoms: [
      { name: 'High-grade fever with rigors', duration: '4 days', severity: 'Severe' },
      { name: 'Retro-orbital eye pain & severe myalgia', duration: '3 days', severity: 'Moderate' },
      { name: 'Nausea and loss of appetite', duration: '2 days', severity: 'Moderate' }
    ],
    probableDisorder: {
      title: 'Dengue Fever / Acute Viral Arthralgia',
      confidence: 88,
      icdCode: 'A90',
      description: 'Acute febrile presentation with characteristic breakbone joint pain. Platelet count monitoring essential.',
      suggestedAction: 'Rapid NS1 Antigen test, oral hydration therapy with ORS, Paracetamol 650mg SOS. Avoid NSAIDs/Aspirin.'
    },
    testsConducted: [
      { id: 't-41', testName: 'Dengue NS1 Antigen Card', result: 'Positive (+)', date: 'Today 09:55 AM', status: 'Abnormal' },
      { id: 't-42', testName: 'Platelet Count Spot Check', result: '145,000 /uL', date: 'Today 09:58 AM', status: 'Abnormal', range: '150,000-450,000' }
    ],
    pastReports: []
  },
  {
    id: 'p-05',
    tokenNo: 5,
    name: 'Baburam Yadav',
    abhaId: '91-8899-3344-5511',
    mobile: '9654123980',
    age: 47,
    gender: 'Male',
    address: 'Kisan Gali, Village Chandanpur, Rewa, MP',
    villageBlock: 'Chandanpur (Rewa)',
    chronicDiseases: ['Osteoarthritis (Right Knee)'],
    condition: 'Stable',
    conditionDescription: 'Follow up consultation for joint inflammation and mobility check',
    queueStatus: 'Completed',
    arrivalTime: '08:50 AM',
    vitals: {
      bp: '124/80 mmHg',
      pulse: 72,
      spo2: 99,
      temp: 98.2,
      bloodSugar: 110,
      bmi: 25.4,
      recordedAt: 'Today 08:55 AM',
      isBpAbnormal: false,
      isSugarAbnormal: false
    },
    symptoms: [
      { name: 'Right knee stiffness morning', duration: '6 months', severity: 'Moderate' },
      { name: 'Pain upon squatting or climbing', duration: '6 months', severity: 'Moderate' }
    ],
    probableDisorder: {
      title: 'Primary Osteoarthritis Knee Joint',
      confidence: 95,
      icdCode: 'M17.9',
      description: 'Degenerative cartilage wear on medial compartment of right knee.',
      suggestedAction: 'Physical therapy quadriceps strengthening, topical analgesic gel, joint supplements.'
    },
    testsConducted: [],
    pastReports: [
      { id: 'r-51', title: 'X-Ray Right Knee AP/Lateral', category: 'X-Ray', date: '04 Mar 2026', doctor: 'Dr. O. P. Gupta', fileSize: '2.9 MB' }
    ]
  },
  {
    id: 'p-06',
    tokenNo: 6,
    name: 'Kavita Kumari Verma',
    abhaId: '91-4455-8899-2233',
    mobile: '9788112233',
    age: 31,
    gender: 'Female',
    address: 'Near Primary Health Center, Bakhira, Sant Kabir Nagar, UP',
    villageBlock: 'Bakhira (Sant Kabir Nagar)',
    chronicDiseases: ['Hypothyroidism'],
    condition: 'Stable',
    conditionDescription: 'Routine antenatal trimester-2 checkup and thyroid profile review',
    queueStatus: 'Waiting',
    arrivalTime: '09:55 AM',
    vitals: {
      bp: '118/76 mmHg',
      pulse: 78,
      spo2: 99,
      temp: 98.4,
      bloodSugar: 92,
      bmi: 23.8,
      recordedAt: 'Today 10:00 AM',
      isBpAbnormal: false,
      isSugarAbnormal: false
    },
    symptoms: [
      { name: 'Mild morning nausea', duration: '2 weeks', severity: 'Mild' },
      { name: 'Lower back ache on prolonged standing', duration: '1 week', severity: 'Mild' }
    ],
    probableDisorder: {
      title: 'Antenatal Care (Trimester 2) with Controlled Hypothyroidism',
      confidence: 97,
      icdCode: 'Z34.8 / E03.9',
      description: 'Second trimester maternal progress normal. Fetal heart rate audible and regular.',
      suggestedAction: 'Continue Tab. Thyroxine 50mcg, Calcium + Vit D3 daily, IFA tablets.'
    },
    testsConducted: [
      { id: 't-61', testName: 'Hemoglobin Spot Check', result: '11.4 g/dL', date: 'Today 10:02 AM', status: 'Normal', range: '11.0 - 15.0 g/dL' },
      { id: 't-62', testName: 'Urine Albumin/Sugar Dipstick', result: 'Nil / Normal', date: 'Today 10:05 AM', status: 'Normal' }
    ],
    pastReports: [
      { id: 'r-61', title: 'Obstetric Ultrasound (Level II Scan)', category: 'Pathology', date: '12 Aug 2026', doctor: 'Dr. Rekha Joshi', fileSize: '5.1 MB' }
    ]
  },
  {
    id: 'p-07',
    tokenNo: 7,
    name: 'Harish Chandra Rawat',
    abhaId: '91-7711-2299-4466',
    mobile: '9833445566',
    age: 58,
    gender: 'Male',
    address: 'Ward 5, Khairabad, Sitapur, UP',
    villageBlock: 'Khairabad (Sitapur)',
    chronicDiseases: ['Hypertension', 'Dyslipidemia'],
    condition: 'Moderate',
    conditionDescription: 'Occasional morning occipital headache and borderline elevated diastolic BP',
    queueStatus: 'Waiting',
    arrivalTime: '10:05 AM',
    vitals: {
      bp: '146/94 mmHg',
      pulse: 82,
      spo2: 98,
      temp: 98.6,
      bloodSugar: 130,
      bmi: 27.1,
      recordedAt: 'Today 10:10 AM',
      isBpAbnormal: true,
      isSugarAbnormal: false
    },
    symptoms: [
      { name: 'Occipital throbbing headache in mornings', duration: '5 days', severity: 'Moderate' },
      { name: 'Neck muscle stiffness', duration: '3 days', severity: 'Mild' }
    ],
    probableDisorder: {
      title: 'Essential Hypertension (Stage 1) with Sub-optimal Control',
      confidence: 91,
      icdCode: 'I10',
      description: 'Elevated systolic and diastolic pressures with mild ocular strain.',
      suggestedAction: 'Dose optimization of Amlodipine 5mg to 10mg, lifestyle salt restriction counseling.'
    },
    testsConducted: [
      { id: 't-71', testName: 'Spot Lipid Profile', result: 'Total Chol: 215 mg/dL', date: 'Today 10:12 AM', status: 'Abnormal', range: '< 200 mg/dL' }
    ],
    pastReports: []
  },
  {
    id: 'p-08',
    tokenNo: 8,
    name: 'Shanti Devi Kushwaha',
    abhaId: '91-6633-8811-0022',
    mobile: '9844556677',
    age: 67,
    gender: 'Female',
    address: 'Near Old Water Tank, Mohanlalganj, Lucknow Rural, UP',
    villageBlock: 'Mohanlalganj (Lucknow)',
    chronicDiseases: ['Cataract (Left Eye)', 'Mild Osteopenia'],
    condition: 'Observation',
    conditionDescription: 'Gradual progressive painless dimness of vision in left eye',
    queueStatus: 'Waiting',
    arrivalTime: '10:15 AM',
    vitals: {
      bp: '128/82 mmHg',
      pulse: 74,
      spo2: 98,
      temp: 98.0,
      bloodSugar: 114,
      bmi: 22.1,
      recordedAt: 'Today 10:20 AM',
      isBpAbnormal: false,
      isSugarAbnormal: false
    },
    symptoms: [
      { name: 'Blurry hazy vision in left eye', duration: '4 months', severity: 'Moderate' },
      { name: 'Glare sensitivity in sunlight', duration: '2 months', severity: 'Mild' }
    ],
    probableDisorder: {
      title: 'Senile Nuclear Cataract (Immature, Left Eye)',
      confidence: 96,
      icdCode: 'H25.1',
      description: 'Opacification of crystalline lens nucleus in left eye. Vision 6/36 in LE.',
      suggestedAction: 'Schedule ophthalmic teleconsultation for Phacoemulsification surgery evaluation.'
    },
    testsConducted: [
      { id: 't-81', testName: 'Snellen Visual Acuity Test', result: 'RE 6/9, LE 6/36', date: 'Today 10:22 AM', status: 'Abnormal' },
      { id: 't-82', testName: 'Intraocular Pressure (IOP Non-contact)', result: '16 mmHg both eyes', date: 'Today 10:25 AM', status: 'Normal', range: '10-21 mmHg' }
    ],
    pastReports: []
  },
  {
    id: 'p-09',
    tokenNo: 9,
    name: 'Dharmendra Kumar Soni',
    abhaId: '91-3322-1199-8877',
    mobile: '9877001122',
    age: 42,
    gender: 'Male',
    address: 'Sonar Gali, Mahoba Town, Mahoba, UP',
    villageBlock: 'Mahoba Rural (Mahoba)',
    chronicDiseases: ['Gastroesophageal Reflux Disease (GERD)'],
    condition: 'Stable',
    conditionDescription: 'Epigastric burning and acid regurgitation after meals',
    queueStatus: 'Waiting',
    arrivalTime: '10:28 AM',
    vitals: {
      bp: '122/78 mmHg',
      pulse: 76,
      spo2: 99,
      temp: 98.5,
      bloodSugar: 102,
      bmi: 24.9,
      recordedAt: 'Today 10:30 AM',
      isBpAbnormal: false,
      isSugarAbnormal: false
    },
    symptoms: [
      { name: 'Retrosternal heartburn post meals', duration: '2 weeks', severity: 'Moderate' },
      { name: 'Sour belching and epigastric fullness', duration: '1 week', severity: 'Mild' }
    ],
    probableDisorder: {
      title: 'Dyspepsia / Non-Erosive GERD',
      confidence: 92,
      icdCode: 'K21.9',
      description: 'Symptomatic acid reflux with no alarming red flag symptoms (no dysphagia/weight loss).',
      suggestedAction: 'Tab. Pantoprazole 40mg before breakfast, dietary avoidance of spicy/fried foods.'
    },
    testsConducted: [
      { id: 't-91', testName: 'H. pylori Rapid Stool Antigen', result: 'Negative', date: 'Today 10:32 AM', status: 'Normal' }
    ],
    pastReports: []
  },
  {
    id: 'p-10',
    tokenNo: 10,
    name: 'Pooja Rani Vishwakarma',
    abhaId: '91-5588-4422-9911',
    mobile: '9866114477',
    age: 19,
    gender: 'Female',
    address: 'Post Office Road, Block Koraon, Prayagraj, UP',
    villageBlock: 'Koraon (Prayagraj)',
    chronicDiseases: ['None'],
    condition: 'Observation',
    conditionDescription: 'Acute allergic rhinitis with sneezing fits and watery rhinorrhea',
    queueStatus: 'Waiting',
    arrivalTime: '10:35 AM',
    vitals: {
      bp: '110/72 mmHg',
      pulse: 80,
      spo2: 99,
      temp: 98.4,
      bloodSugar: 90,
      bmi: 20.2,
      recordedAt: 'Today 10:38 AM',
      isBpAbnormal: false,
      isSugarAbnormal: false
    },
    symptoms: [
      { name: 'Continuous sneezing bouts & clear nasal discharge', duration: '3 days', severity: 'Moderate' },
      { name: 'Itchy watery eyes', duration: '2 days', severity: 'Mild' }
    ],
    probableDisorder: {
      title: 'Seasonal Allergic Rhinitis with Conjunctivitis',
      confidence: 94,
      icdCode: 'J30.2',
      description: 'Nasal mucosa boggy and pale. Bilateral conjunctival injection.',
      suggestedAction: 'Tab. Levocetirizine 5mg at bedtime for 5 days, Saline nasal spray.'
    },
    testsConducted: [],
    pastReports: []
  }
];

