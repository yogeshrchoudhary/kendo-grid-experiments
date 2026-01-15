/**
 * Healthcare Patient Records Demo Data
 *
 * This file contains comprehensive mock healthcare patient data designed for medical and
 * healthcare management applications. The dataset includes 60 realistic patient records
 * representing diverse medical conditions and scenarios.
 *
 * Data Overview:
 * - 60 sample patient records spanning various age groups (young adults to elderly)
 * - 4 risk levels: Low, Medium, High, Critical for patient prioritization
 * - Diverse medical conditions: diabetes, heart disease, cancer, mental health, chronic conditions
 * - Insurance coverage tracking (insured vs. uninsured patients)
 * - Comprehensive allergy management with detailed allergen lists
 * - Treatment protocols ranging from basic care to complex multi-modal therapies
 * - Financial tracking with total charges from $285 routine visits to $45,680 oncology treatments
 * - Complete vital signs monitoring: heart rate, blood pressure, temperature, weight, height
 * - Clinical notes providing medical context and care recommendations
 * - Appointment scheduling with last visit dates and next appointment tracking
 * - Emergency scenarios with critical vital signs requiring immediate intervention
 * - Realistic age calculation based on birth dates for accurate demographic representation
 */

export interface Patient {
  patientId: number;
  fullName: string;
  dateOfBirth: Date;
  age?: number;
  phoneNumber: string;
  emailAddress: string;
  hasInsurance: boolean;
  hasAllergies: boolean;
  treatments: string[];
  allergies: string[] | null;
  primaryDiagnosis: string;
  lastVisitDate: Date;
  nextAppointmentDate: Date | null;
  riskLevel: RiskLevel;
  totalCharges: number;
  clinicalNotes?: string; // Provider observations and medical context
  vitalSigns: {
    heartRate: number;
    temperature: number; // Celsius
    weight: number; // kg
    height: number; // cm
    systolicBP: number; // mmHg
    diastolicBP: number; // mmHg
  };
}

export enum RiskLevel {
  Low = "Low",
  Medium = "Medium",
  High = "High",
  Critical = "Critical",
}

function calculateAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

const currentYear = new Date().getFullYear();

export const patients: Patient[] = [
  {
    patientId: 1001,
    fullName: "Emily Johnson",
    dateOfBirth: new Date("1985-03-15"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-0123",
    emailAddress: "emily.johnson@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Physical Therapy", "Pain Management"],
    allergies: ["Penicillin", "Shellfish"],
    primaryDiagnosis: "Chronic Lower Back Pain",
    lastVisitDate: new Date("2024-03-15"),
    nextAppointmentDate: new Date("2024-06-15"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 2850.75,
    clinicalNotes:
      "Patient presents with elevated vital signs due to pain exacerbation. Tachycardia and hypertension noted during acute episode. Recommend close monitoring and pain management adjustment.",
    vitalSigns: {
      heartRate: 110,
      temperature: 38.2,
      weight: 68.5,
      height: 165,
      systolicBP: 165,
      diastolicBP: 98,
    },
  },
  {
    patientId: 1002,
    fullName: "Michael Chen",
    dateOfBirth: new Date("1978-11-22"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-0234",
    emailAddress: "michael.chen@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Insulin Therapy", "Dietary Counseling"],
    allergies: null,
    primaryDiagnosis: "Type 2 Diabetes Mellitus",
    lastVisitDate: new Date("2023-11-08"),
    nextAppointmentDate: new Date("2024-02-08"),
    riskLevel: RiskLevel.High,
    totalCharges: 4250.0,
    clinicalNotes:
      "Diabetic patient presenting with signs of infection. Severely obese with uncontrolled diabetes. Immediate insulin adjustment required. Consider hospitalization if symptoms worsen.",
    vitalSigns: {
      heartRate: 115,
      temperature: 39.1,
      weight: 125.8,
      height: 178,
      systolicBP: 180,
      diastolicBP: 105,
    },
  },
  {
    patientId: 1003,
    fullName: "Sarah Williams",
    dateOfBirth: new Date("1992-07-03"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-0345",
    emailAddress: "sarah.williams@email.com",
    hasInsurance: false,
    hasAllergies: true,
    treatments: ["Prenatal Care", "Nutrition Counseling"],
    allergies: ["Latex"],
    primaryDiagnosis: "Pregnancy - 28 weeks",
    lastVisitDate: new Date("2024-01-22"),
    nextAppointmentDate: new Date("2024-02-05"),
    riskLevel: RiskLevel.Low,
    totalCharges: 1890.5,
    clinicalNotes:
      "Normal prenatal visit. Weight gain appropriate for gestational age. Fetal movement active. Continue current prenatal vitamin regimen.",
    vitalSigns: {
      heartRate: 90,
      temperature: 36.9,
      weight: 78.2,
      height: 160,
      systolicBP: 118,
      diastolicBP: 75,
    },
  },
  {
    patientId: 1004,
    fullName: "Robert Davis",
    dateOfBirth: new Date("1945-12-10"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-0456",
    emailAddress: "robert.davis@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: [
      "Cardiac Rehabilitation",
      "Medication Management",
      "Oxygen Therapy",
    ],
    allergies: ["Aspirin", "Iodine"],
    primaryDiagnosis: "Congestive Heart Failure",
    lastVisitDate: new Date("2024-04-25"),
    nextAppointmentDate: new Date("2024-05-10"),
    riskLevel: RiskLevel.Critical,
    totalCharges: 12750.25,
    clinicalNotes:
      "Critical cardiac condition with severe bradycardia and hypotension. Fluid retention evident. Immediate cardiology consultation required. Consider pacemaker evaluation.",
    vitalSigns: {
      heartRate: 45,
      temperature: 35.8,
      weight: 115.8,
      height: 175,
      systolicBP: 85,
      diastolicBP: 50,
    },
  },
  {
    patientId: 1005,
    fullName: "Ashley Martinez",
    dateOfBirth: new Date("1988-09-14"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-0567",
    emailAddress: "ashley.martinez@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Cognitive Behavioral Therapy", "Medication Management"],
    allergies: null,
    primaryDiagnosis: "Major Depressive Disorder",
    lastVisitDate: new Date("2023-09-18"),
    nextAppointmentDate: new Date("2023-11-15"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 3240.0,
    clinicalNotes:
      "Significant weight loss noted since last visit. Patient reports decreased appetite and energy. Medication compliance good. Consider nutritional counseling referral.",
    vitalSigns: {
      heartRate: 68,
      temperature: 36.6,
      weight: 45.9,
      height: 158,
      systolicBP: 115,
      diastolicBP: 70,
    },
  },
  {
    patientId: 1006,
    fullName: "David Thompson",
    dateOfBirth: new Date("1965-04-28"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-0678",
    emailAddress: "david.thompson@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Chemotherapy", "Radiation Therapy", "Pain Management"],
    allergies: ["Morphine", "Codeine"],
    primaryDiagnosis: "Non-Hodgkin Lymphoma",
    lastVisitDate: new Date("2024-01-20"),
    nextAppointmentDate: new Date("2024-01-27"),
    riskLevel: RiskLevel.Critical,
    totalCharges: 28950.75,
    clinicalNotes:
      "Oncology patient with severe weight loss and cachexia. Dangerously high fever requires immediate attention. Possible sepsis. Consider hospitalization and IV antibiotics.",
    vitalSigns: {
      heartRate: 125,
      temperature: 40.1,
      weight: 52.1,
      height: 180,
      systolicBP: 75,
      diastolicBP: 45,
    },
  },
  {
    patientId: 1007,
    fullName: "Jessica Brown",
    dateOfBirth: new Date("1995-01-19"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-0789",
    emailAddress: "jessica.brown@email.com",
    hasInsurance: false,
    hasAllergies: false,
    treatments: ["Physical Therapy"],
    allergies: null,
    primaryDiagnosis: "Anterior Cruciate Ligament Tear",
    lastVisitDate: new Date("2023-08-12"),
    nextAppointmentDate: new Date("2023-10-12"),
    riskLevel: RiskLevel.Low,
    totalCharges: 1650.0,
    clinicalNotes:
      "Athletic patient recovering well from ACL injury. Lower weight consistent with training regimen. Physical therapy progress excellent. Cleared for gradual activity increase.",
    vitalSigns: {
      heartRate: 65,
      temperature: 36.7,
      weight: 49.4,
      height: 170,
      systolicBP: 110,
      diastolicBP: 68,
    },
  },
  {
    patientId: 1008,
    fullName: "James Wilson",
    dateOfBirth: new Date("1955-08-07"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-0890",
    emailAddress: "james.wilson@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: [
      "Dialysis",
      "Dietary Restrictions",
      "Blood Pressure Management",
    ],
    allergies: ["Contrast Dye", "NSAIDs"],
    primaryDiagnosis: "Chronic Kidney Disease Stage 4",
    lastVisitDate: new Date("2024-02-24"),
    nextAppointmentDate: new Date("2024-03-03"),
    riskLevel: RiskLevel.High,
    totalCharges: 8450.5,
    clinicalNotes:
      "CKD patient with severe hypertension and fluid retention. Dialysis schedule may need adjustment. Weight gain concerning - restrict fluid intake. Monitor electrolytes closely.",
    vitalSigns: {
      heartRate: 52,
      temperature: 35.9,
      weight: 108.6,
      height: 172,
      systolicBP: 195,
      diastolicBP: 110,
    },
  },
  {
    patientId: 1009,
    fullName: "Maria Garcia",
    dateOfBirth: new Date("1983-05-25"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-0901",
    emailAddress: "maria.garcia@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Bronchodilator Therapy", "Pulmonary Rehabilitation"],
    allergies: null,
    primaryDiagnosis: "Asthma",
    lastVisitDate: new Date("2023-12-16"),
    nextAppointmentDate: new Date("2024-03-16"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 2180.25,
    clinicalNotes:
      "Mild persistent asthma. Nocturnal symptoms reported. Consider step-up therapy if symptoms worsen. Educate patient on asthma action plan.",
    vitalSigns: {
      heartRate: 76,
      temperature: 36.5,
      weight: 65.3,
      height: 163,
      systolicBP: 120,
      diastolicBP: 78,
    },
  },
  {
    patientId: 1010,
    fullName: "Christopher Lee",
    dateOfBirth: new Date("2001-10-12"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1012",
    emailAddress: "christopher.lee@email.com",
    hasInsurance: false,
    hasAllergies: true,
    treatments: ["Topical Medications", "Phototherapy"],
    allergies: ["Fragrances", "Nickel"],
    primaryDiagnosis: "Atopic Dermatitis",
    lastVisitDate: new Date("2023-07-10"),
    nextAppointmentDate: null,
    riskLevel: RiskLevel.Low,
    totalCharges: 850.0,
    clinicalNotes:
      "Young adult with persistent dermatitis and concerning weight loss. Possible eating disorder concerns. Refer to nutrition counseling and consider psychological evaluation.",
    vitalSigns: {
      heartRate: 70,
      temperature: 36.8,
      weight: 55.0,
      height: 185,
      systolicBP: 112,
      diastolicBP: 72,
    },
  },
  {
    patientId: 1011,
    fullName: "Olivia Clark",
    dateOfBirth: new Date("1990-06-21"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1111",
    emailAddress: "olivia.clark@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Physical Therapy"],
    allergies: null,
    primaryDiagnosis: "Knee Osteoarthritis",
    lastVisitDate: new Date("2023-10-14"),
    nextAppointmentDate: new Date("2024-01-14"),
    riskLevel: RiskLevel.Low,
    totalCharges: 1750.0,
    clinicalNotes:
      "Stable condition. Continue current treatment plan. Encourage weight loss and low-impact exercises to reduce knee strain.",
    vitalSigns: {
      heartRate: 72,
      temperature: 36.7,
      weight: 64.2,
      height: 168,
      systolicBP: 120,
      diastolicBP: 80,
    },
  },
  {
    patientId: 1012,
    fullName: "William Evans",
    dateOfBirth: new Date("1982-02-11"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1212",
    emailAddress: "william.evans@email.com",
    hasInsurance: false,
    hasAllergies: true,
    treatments: ["Medication Management"],
    allergies: ["Sulfa Drugs"],
    primaryDiagnosis: "Hypertension",
    lastVisitDate: new Date("2023-11-19"),
    nextAppointmentDate: new Date("2024-02-19"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 2100.0,
    clinicalNotes:
      "Blood pressure well-controlled. No new symptoms reported. Continue monitoring and lifestyle modifications.",
    vitalSigns: {
      heartRate: 80,
      temperature: 36.9,
      weight: 85.0,
      height: 180,
      systolicBP: 135,
      diastolicBP: 88,
    },
  },
  {
    patientId: 1013,
    fullName: "Sophia Moore",
    dateOfBirth: new Date("1975-09-30"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1313",
    emailAddress: "sophia.moore@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Chemotherapy"],
    allergies: null,
    primaryDiagnosis: "Breast Cancer",
    lastVisitDate: new Date("2024-01-17"),
    nextAppointmentDate: new Date("2024-02-17"),
    riskLevel: RiskLevel.High,
    totalCharges: 18500.0,
    clinicalNotes:
      "Breast cancer treatment ongoing. Monitor for side effects. Encourage support group participation.",
    vitalSigns: {
      heartRate: 88,
      temperature: 37.2,
      weight: 70.5,
      height: 162,
      systolicBP: 128,
      diastolicBP: 84,
    },
  },
  {
    patientId: 1014,
    fullName: "Benjamin Hall",
    dateOfBirth: new Date("1960-04-05"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1414",
    emailAddress: "benjamin.hall@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Dialysis"],
    allergies: ["Penicillin"],
    primaryDiagnosis: "Chronic Kidney Disease",
    lastVisitDate: new Date("2024-01-30"),
    nextAppointmentDate: new Date("2024-02-06"),
    riskLevel: RiskLevel.Critical,
    totalCharges: 9500.0,
    clinicalNotes:
      "Critical condition with severe tachycardia and shock-level hypotension. Possible dialysis-related complications. Immediate emergency intervention required.",
    vitalSigns: {
      heartRate: 135,
      temperature: 39.8,
      weight: 110.0,
      height: 170,
      systolicBP: 70,
      diastolicBP: 40,
    },
  },
  {
    patientId: 1015,
    fullName: "Ava Lewis",
    dateOfBirth: new Date("2002-12-18"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1515",
    emailAddress: "ava.lewis@email.com",
    hasInsurance: false,
    hasAllergies: false,
    treatments: ["Topical Medications"],
    allergies: null,
    primaryDiagnosis: "Psoriasis",
    lastVisitDate: new Date("2023-10-11"),
    nextAppointmentDate: null,
    riskLevel: RiskLevel.Low,
    totalCharges: 950.0,
    clinicalNotes:
      "Young patient with severe underweight condition. Psoriasis controlled with current regimen. Urgent nutritional assessment needed. Consider endocrine evaluation.",
    vitalSigns: {
      heartRate: 75,
      temperature: 36.6,
      weight: 42.0,
      height: 165,
      systolicBP: 115,
      diastolicBP: 75,
    },
  },
  {
    patientId: 1016,
    fullName: "Lucas King",
    dateOfBirth: new Date("1955-01-15"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1016",
    emailAddress: "lucas.king@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Physical Therapy", "Medication Management"],
    allergies: null,
    primaryDiagnosis: "Hypertension",
    lastVisitDate: new Date("2022-06-01"),
    nextAppointmentDate: new Date("2022-09-01"),
    riskLevel: RiskLevel.Low,
    totalCharges: 1000,
    clinicalNotes:
      "Stable hypertension. No medication side effects reported. Continue lifestyle modifications and regular monitoring.",
    vitalSigns: {
      heartRate: 60,
      temperature: 36.5,
      weight: 42,
      height: 150,
      systolicBP: 110,
      diastolicBP: 70,
    },
  },
  {
    patientId: 1017,
    fullName: "Mia Scott",
    dateOfBirth: new Date("1988-02-20"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1017",
    emailAddress: "mia.scott@email.com",
    hasInsurance: false,
    hasAllergies: true,
    treatments: ["Dietary Counseling"],
    allergies: ["Peanuts"],
    primaryDiagnosis: "Type 2 Diabetes Mellitus",
    lastVisitDate: new Date("2024-01-02"),
    nextAppointmentDate: new Date("2024-03-02"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 1200,
    clinicalNotes:
      "Diet-controlled diabetes. Educate patient on carbohydrate counting and glycemic index. Refer to dietitian for meal planning.",
    vitalSigns: {
      heartRate: 62,
      temperature: 36.6,
      weight: 38,
      height: 155,
      systolicBP: 112,
      diastolicBP: 72,
    },
  },
  {
    patientId: 1018,
    fullName: "Henry Young",
    dateOfBirth: new Date("1970-03-10"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1018",
    emailAddress: "henry.young@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Cardiac Rehabilitation"],
    allergies: null,
    primaryDiagnosis: "Congestive Heart Failure",
    lastVisitDate: new Date("2024-01-03"),
    nextAppointmentDate: new Date("2024-02-03"),
    riskLevel: RiskLevel.High,
    totalCharges: 15000,
    clinicalNotes:
      "Cardiac rehab patient. Monitor for signs of fluid overload. Encourage adherence to low-sodium diet. Assess need for medication adjustment.",
    vitalSigns: {
      heartRate: 48,
      temperature: 35.5,
      weight: 80,
      height: 160,
      systolicBP: 82,
      diastolicBP: 55,
    },
  },
  {
    patientId: 1019,
    fullName: "Ella Green",
    dateOfBirth: new Date("2000-04-25"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1019",
    emailAddress: "ella.green@email.com",
    hasInsurance: false,
    hasAllergies: true,
    treatments: ["Topical Medications"],
    allergies: ["Fragrances"],
    primaryDiagnosis: "Atopic Dermatitis",
    lastVisitDate: new Date("2024-01-04"),
    nextAppointmentDate: null,
    riskLevel: RiskLevel.Low,
    totalCharges: 800,
    clinicalNotes:
      "Mild atopic dermatitis. Educate patient on trigger avoidance and proper skin care. Consider referral to dermatologist for persistent cases.",
    vitalSigns: {
      heartRate: 68,
      temperature: 36.7,
      weight: 65,
      height: 165,
      systolicBP: 118,
      diastolicBP: 75,
    },
  },
  {
    patientId: 1020,
    fullName: "Jack Baker",
    dateOfBirth: new Date("1995-05-30"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1020",
    emailAddress: "jack.baker@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Physical Therapy", "Pain Management"],
    allergies: null,
    primaryDiagnosis: "Chronic Lower Back Pain",
    lastVisitDate: new Date("2024-01-05"),
    nextAppointmentDate: new Date("2024-02-05"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 2500,
    clinicalNotes:
      "Stable condition. Continue current treatment plan. Educate patient on body mechanics and ergonomic principles.",
    vitalSigns: {
      heartRate: 70,
      temperature: 36.6,
      weight: 70,
      height: 175,
      systolicBP: 120,
      diastolicBP: 80,
    },
  },
  {
    patientId: 1021,
    fullName: "Grace Adams",
    dateOfBirth: new Date("1980-06-15"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1021",
    emailAddress: "grace.adams@email.com",
    hasInsurance: false,
    hasAllergies: true,
    treatments: ["Medication Management"],
    allergies: ["Aspirin"],
    primaryDiagnosis: "Hypertension",
    lastVisitDate: new Date("2024-01-06"),
    nextAppointmentDate: new Date("2024-03-06"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 2200,
    clinicalNotes:
      "Blood pressure well-controlled. No new symptoms reported. Continue monitoring and lifestyle modifications.",
    vitalSigns: {
      heartRate: 78,
      temperature: 36.9,
      weight: 115,
      height: 180,
      systolicBP: 135,
      diastolicBP: 90,
    },
  },
  {
    patientId: 1022,
    fullName: "Alexander Nelson",
    dateOfBirth: new Date("1965-07-20"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1022",
    emailAddress: "alexander.nelson@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Cardiac Rehabilitation", "Medication Management"],
    allergies: null,
    primaryDiagnosis: "Coronary Artery Disease",
    lastVisitDate: new Date("2024-01-07"),
    nextAppointmentDate: new Date("2024-02-07"),
    riskLevel: RiskLevel.High,
    totalCharges: 18000,
    clinicalNotes:
      "Cardiac rehab patient. Monitor for signs of fluid overload. Encourage adherence to low-sodium diet. Assess need for medication adjustment.",
    vitalSigns: {
      heartRate: 130,
      temperature: 38.9,
      weight: 128,
      height: 175,
      systolicBP: 88,
      diastolicBP: 58,
    },
  },
  {
    patientId: 1023,
    fullName: "Chloe Carter",
    dateOfBirth: new Date("1992-08-25"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1023",
    emailAddress: "chloe.carter@email.com",
    hasInsurance: false,
    hasAllergies: true,
    treatments: ["Dietary Counseling"],
    allergies: ["Shellfish"],
    primaryDiagnosis: "Hyperlipidemia",
    lastVisitDate: new Date("2024-01-08"),
    nextAppointmentDate: new Date("2024-04-08"),
    riskLevel: RiskLevel.Low,
    totalCharges: 900,
    clinicalNotes:
      "Lipid levels approaching target range. Continue dietary modifications and regular exercise. Recheck lipid panel in 3 months.",
    vitalSigns: {
      heartRate: 70,
      temperature: 36.8,
      weight: 60,
      height: 160,
      systolicBP: 110,
      diastolicBP: 70,
    },
  },
  {
    patientId: 1024,
    fullName: "Daniel Mitchell",
    dateOfBirth: new Date("1983-09-10"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1024",
    emailAddress: "daniel.mitchell@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Physical Therapy", "Pain Management"],
    allergies: null,
    primaryDiagnosis: "Shoulder Impingement Syndrome",
    lastVisitDate: new Date("2024-01-09"),
    nextAppointmentDate: new Date("2024-02-09"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 2800,
    clinicalNotes:
      "Shoulder mobility improving. Pain control adequate with current regimen. Continue physical therapy and home exercise program.",
    vitalSigns: {
      heartRate: 75,
      temperature: 36.7,
      weight: 75,
      height: 170,
      systolicBP: 125,
      diastolicBP: 80,
    },
  },
  {
    patientId: 1025,
    fullName: "Zoe Perez",
    dateOfBirth: new Date("1998-10-05"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1025",
    emailAddress: "zoe.perez@email.com",
    hasInsurance: false,
    hasAllergies: true,
    treatments: ["Topical Medications"],
    allergies: ["Nickel"],
    primaryDiagnosis: "Contact Dermatitis",
    lastVisitDate: new Date("2024-01-10"),
    nextAppointmentDate: null,
    riskLevel: RiskLevel.Low,
    totalCharges: 850,
    clinicalNotes:
      "Contact dermatitis improving with treatment. Educate patient on avoidance of known allergens. Consider referral to dermatologist for persistent cases.",
    vitalSigns: {
      heartRate: 70,
      temperature: 36.8,
      weight: 65,
      height: 165,
      systolicBP: 115,
      diastolicBP: 75,
    },
  },
  {
    patientId: 1026,
    fullName: "Samuel Rodriguez",
    dateOfBirth: new Date("1943-08-12"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1026",
    emailAddress: "samuel.rodriguez@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Physical Therapy", "Joint Replacement Surgery"],
    allergies: ["Latex", "Iodine"],
    primaryDiagnosis: "Severe Osteoarthritis",
    lastVisitDate: new Date("2024-01-26"),
    nextAppointmentDate: new Date("2024-02-26"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 15750.0,
    clinicalNotes:
      "Joint replacement surgery successful. Monitor for signs of infection. Continue physical therapy and pain management.",
    vitalSigns: {
      heartRate: 78,
      temperature: 36.9,
      weight: 72.4,
      height: 172,
      systolicBP: 138,
      diastolicBP: 86,
    },
  },
  {
    patientId: 1027,
    fullName: "Isabella Turner",
    dateOfBirth: new Date("1996-11-08"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1027",
    emailAddress: "isabella.turner@email.com",
    hasInsurance: false,
    hasAllergies: false,
    treatments: ["Cognitive Behavioral Therapy", "Group Therapy"],
    allergies: null,
    primaryDiagnosis: "Generalized Anxiety Disorder",
    lastVisitDate: new Date("2024-01-21"),
    nextAppointmentDate: new Date("2024-02-04"),
    riskLevel: RiskLevel.Low,
    totalCharges: 1680.0,
    clinicalNotes:
      "Patient reports decreased anxiety symptoms. Engaged well in therapy. Continue current treatment plan. Consider gradual exposure exercises.",
    vitalSigns: {
      heartRate: 82,
      temperature: 36.7,
      weight: 63.2,
      height: 162,
      systolicBP: 122,
      diastolicBP: 78,
    },
  },
  {
    patientId: 1028,
    fullName: "Thomas Phillips",
    dateOfBirth: new Date("1967-04-22"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1028",
    emailAddress: "thomas.phillips@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Immunotherapy", "Bronchodilator Therapy"],
    allergies: ["Dust Mites", "Pet Dander"],
    primaryDiagnosis: "Chronic Obstructive Pulmonary Disease",
    lastVisitDate: new Date("2024-01-29"),
    nextAppointmentDate: new Date("2024-02-12"),
    riskLevel: RiskLevel.High,
    totalCharges: 6840.25,
    clinicalNotes:
      "COPD patient with recent exacerbation. High risk for respiratory infections. Educate on inhaler technique and infection prevention.",
    vitalSigns: {
      heartRate: 118,
      temperature: 39.5,
      weight: 88.1,
      height: 178,
      systolicBP: 175,
      diastolicBP: 102,
    },
  },
  {
    patientId: 1029,
    fullName: "Natalie Cooper",
    dateOfBirth: new Date("2003-01-17"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1029",
    emailAddress: "natalie.cooper@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Dermatological Care", "Light Therapy"],
    allergies: ["Sulfa Drugs", "Fragrances"],
    primaryDiagnosis: "Severe Acne",
    lastVisitDate: new Date("2024-01-13"),
    nextAppointmentDate: new Date("2024-02-13"),
    riskLevel: RiskLevel.Low,
    totalCharges: 890.0,
    clinicalNotes:
      "Acne severity decreased. Educate on proper skin care and medication adherence. Consider referral to dermatologist for persistent cases.",
    vitalSigns: {
      heartRate: 74,
      temperature: 36.8,
      weight: 41.7,
      height: 164,
      systolicBP: 108,
      diastolicBP: 68,
    },
  },
  {
    patientId: 1030,
    fullName: "Richard Bell",
    dateOfBirth: new Date("1952-09-30"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1030",
    emailAddress: "richard.bell@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Radiation Therapy", "Hormone Therapy"],
    allergies: null,
    primaryDiagnosis: "Prostate Cancer",
    lastVisitDate: new Date("2024-01-28"),
    nextAppointmentDate: new Date("2024-02-04"),
    riskLevel: RiskLevel.Critical,
    totalCharges: 22350.0,
    clinicalNotes:
      "Prostate cancer treatment ongoing. Monitor for side effects. Discuss advanced care planning with patient and family.",
    vitalSigns: {
      heartRate: 42,
      temperature: 35.2,
      weight: 79.5,
      height: 175,
      systolicBP: 78,
      diastolicBP: 48,
    },
  },
  {
    patientId: 1031,
    fullName: "Victoria Murphy",
    dateOfBirth: new Date("1987-12-03"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1031",
    emailAddress: "victoria.murphy@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Prenatal Vitamins", "Nutrition Counseling"],
    allergies: null,
    primaryDiagnosis: "Pregnancy - 32 weeks",
    lastVisitDate: new Date("2024-01-30"),
    nextAppointmentDate: new Date("2024-02-13"),
    riskLevel: RiskLevel.Low,
    totalCharges: 2150.0,
    clinicalNotes:
      "Routine prenatal visit. Fetal heart tones normal. Fundal height consistent with gestational age. Continue prenatal vitamins and regular check-ups.",
    vitalSigns: {
      heartRate: 88,
      temperature: 36.8,
      weight: 74.8,
      height: 167,
      systolicBP: 124,
      diastolicBP: 79,
    },
  },
  {
    patientId: 1032,
    fullName: "Marcus Foster",
    dateOfBirth: new Date("1959-06-18"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1032",
    emailAddress: "marcus.foster@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Insulin Therapy", "Wound Care", "Podiatry"],
    allergies: ["Adhesive Tape", "Iodine"],
    primaryDiagnosis: "Diabetic Foot Ulcer",
    lastVisitDate: new Date("2024-01-27"),
    nextAppointmentDate: new Date("2024-02-03"),
    riskLevel: RiskLevel.High,
    totalCharges: 7320.0,
    clinicalNotes:
      "Diabetic patient with infected foot ulcer and severe obesity. Extremely high fever indicates serious infection. Consider amputation consultation. Immediate antibiotic therapy required.",
    vitalSigns: {
      heartRate: 108,
      temperature: 40.3,
      weight: 142.1,
      height: 174,
      systolicBP: 192,
      diastolicBP: 108,
    },
  },
  {
    patientId: 1033,
    fullName: "Amanda Wright",
    dateOfBirth: new Date("1994-03-27"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1033",
    emailAddress: "amanda.wright@email.com",
    hasInsurance: false,
    hasAllergies: true,
    treatments: ["Antihistamines", "Allergy Testing"],
    allergies: ["Tree Pollen", "Grass Pollen", "Ragweed"],
    primaryDiagnosis: "Seasonal Allergic Rhinitis",
    lastVisitDate: new Date("2024-01-19"),
    nextAppointmentDate: new Date("2024-04-19"),
    riskLevel: RiskLevel.Low,
    totalCharges: 625.0,
    clinicalNotes:
      "Allergy testing positive for multiple aeroallergens. Educate on avoidance measures and medication adherence. Consider referral to allergist for immunotherapy evaluation.",
    vitalSigns: {
      heartRate: 73,
      temperature: 36.6,
      weight: 61.4,
      height: 163,
      systolicBP: 116,
      diastolicBP: 74,
    },
  },
  {
    patientId: 1034,
    fullName: "Kevin Barnes",
    dateOfBirth: new Date("1971-09-15"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1034",
    emailAddress: "kevin.barnes@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Surgery Recovery", "Physical Therapy"],
    allergies: null,
    primaryDiagnosis: "Post-Surgical Knee Recovery",
    lastVisitDate: new Date("2024-01-25"),
    nextAppointmentDate: new Date("2024-02-08"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 18750.0,
    clinicalNotes:
      "Surgical site healing well. Pain controlled with current regimen. Physical therapy essential for optimal recovery. Follow-up in 2 weeks.",
    vitalSigns: {
      heartRate: 76,
      temperature: 36.9,
      weight: 83.7,
      height: 181,
      systolicBP: 132,
      diastolicBP: 84,
    },
  },
  {
    patientId: 1035,
    fullName: "Rachel Coleman",
    dateOfBirth: new Date("1986-01-09"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1035",
    emailAddress: "rachel.coleman@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Thyroid Medication", "Regular Monitoring"],
    allergies: ["Shellfish", "Sulfa Drugs"],
    primaryDiagnosis: "Hypothyroidism",
    lastVisitDate: new Date("2024-01-22"),
    nextAppointmentDate: new Date("2024-04-22"),
    riskLevel: RiskLevel.Low,
    totalCharges: 1340.0,
    clinicalNotes:
      "Thyroid levels stable on current medication. No new symptoms reported. Continue regular monitoring and medication adherence.",
    vitalSigns: {
      heartRate: 69,
      temperature: 36.4,
      weight: 67.2,
      height: 159,
      systolicBP: 118,
      diastolicBP: 76,
    },
  },
  {
    patientId: 1036,
    fullName: "Brian Henderson",
    dateOfBirth: new Date("1963-11-12"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1036",
    emailAddress: "brian.henderson@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Chemotherapy", "Radiation Therapy", "Immunotherapy"],
    allergies: null,
    primaryDiagnosis: "Lung Cancer Stage IIIA",
    lastVisitDate: new Date("2024-01-31"),
    nextAppointmentDate: new Date("2024-02-07"),
    riskLevel: RiskLevel.Critical,
    totalCharges: 45680.0,
    clinicalNotes:
      "Terminal cancer patient in critical condition. Extremely high fever and shock-level hypotension. Consider hospice care discussion with family. Comfort measures priority.",
    vitalSigns: {
      heartRate: 140,
      temperature: 40.8,
      weight: 71.3,
      height: 176,
      systolicBP: 68,
      diastolicBP: 38,
    },
  },
  {
    patientId: 1037,
    fullName: "Jennifer Powell",
    dateOfBirth: new Date("1999-07-24"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1037",
    emailAddress: "jennifer.powell@email.com",
    hasInsurance: false,
    hasAllergies: false,
    treatments: ["Pain Management", "Heat Therapy"],
    allergies: null,
    primaryDiagnosis: "Menstrual Cramps",
    lastVisitDate: new Date("2024-01-12"),
    nextAppointmentDate: null,
    riskLevel: RiskLevel.Low,
    totalCharges: 285.0,
    clinicalNotes:
      "Menstrual cramps managed with current treatment. Educate on lifestyle modifications and self-care measures. Follow-up as needed.",
    vitalSigns: {
      heartRate: 79,
      temperature: 36.7,
      weight: 59.1,
      height: 161,
      systolicBP: 112,
      diastolicBP: 71,
    },
  },
  {
    patientId: 1038,
    fullName: "Gregory Russell",
    dateOfBirth: new Date("1948-05-06"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1038",
    emailAddress: "gregory.russell@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Eye Drops", "Laser Treatment"],
    allergies: ["Preservatives", "Benzalkonium Chloride"],
    primaryDiagnosis: "Glaucoma",
    lastVisitDate: new Date("2024-01-16"),
    nextAppointmentDate: new Date("2024-03-16"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 3450.0,
    clinicalNotes:
      "Glaucoma stable with current treatment. Educate patient on adherence to prescribed therapy. Monitor for any changes in vision or eye discomfort.",
    vitalSigns: {
      heartRate: 71,
      temperature: 36.8,
      weight: 76.8,
      height: 169,
      systolicBP: 141,
      diastolicBP: 87,
    },
  },
  {
    patientId: 1039,
    fullName: "Michelle Hughes",
    dateOfBirth: new Date("1977-10-21"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1039",
    emailAddress: "michelle.hughes@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Iron Supplements", "Dietary Changes"],
    allergies: null,
    primaryDiagnosis: "Iron Deficiency Anemia",
    lastVisitDate: new Date("2024-01-23"),
    nextAppointmentDate: new Date("2024-03-23"),
    riskLevel: RiskLevel.Low,
    totalCharges: 890.0,
    clinicalNotes:
      "Anemia improving with treatment. Educate on iron-rich foods and adherence to supplements. Follow-up in 3 months for re-evaluation.",
    vitalSigns: {
      heartRate: 89,
      temperature: 36.5,
      weight: 64.6,
      height: 165,
      systolicBP: 107,
      diastolicBP: 67,
    },
  },
  {
    patientId: 1040,
    fullName: "Steven Price",
    dateOfBirth: new Date("1956-02-14"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1040",
    emailAddress: "steven.price@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Statin Therapy", "Lifestyle Counseling"],
    allergies: ["Grapefruit", "Red Yeast Rice"],
    primaryDiagnosis: "High Cholesterol",
    lastVisitDate: new Date("2024-01-18"),
    nextAppointmentDate: new Date("2024-04-18"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 1275.0,
    clinicalNotes:
      "Cholesterol levels at target. Continue statin therapy and lifestyle modifications. Recheck lipid panel in 6 months.",
    vitalSigns: {
      heartRate: 74,
      temperature: 36.9,
      weight: 119.2,
      height: 177,
      systolicBP: 136,
      diastolicBP: 88,
    },
  },
  {
    patientId: 1041,
    fullName: "Emma Watson",
    dateOfBirth: new Date("1991-08-14"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1041",
    emailAddress: "emma.watson@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Occupational Therapy", "Speech Therapy"],
    allergies: null,
    primaryDiagnosis: "Post-Stroke Recovery",
    lastVisitDate: new Date("2024-01-01"),
    nextAppointmentDate: new Date("2024-01-15"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 4750.0,
    clinicalNotes:
      "Stroke recovery progressing. Speech and occupational therapy essential for continued improvement. Monitor for any new neurological symptoms.",
    vitalSigns: {
      heartRate: 77,
      temperature: 36.8,
      weight: 66.3,
      height: 164,
      systolicBP: 128,
      diastolicBP: 82,
    },
  },
  {
    patientId: 1042,
    fullName: "Ryan Campbell",
    dateOfBirth: new Date("1985-04-03"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1042",
    emailAddress: "ryan.campbell@email.com",
    hasInsurance: false,
    hasAllergies: true,
    treatments: ["Behavioral Therapy", "Medication Management"],
    allergies: ["Caffeine", "Food Additives"],
    primaryDiagnosis: "Attention Deficit Hyperactivity Disorder",
    lastVisitDate: new Date("2024-01-29"),
    nextAppointmentDate: new Date("2024-03-26"),
    riskLevel: RiskLevel.Low,
    totalCharges: 1985.0,
    clinicalNotes:
      "ADHD symptoms well-managed with current treatment. No significant side effects reported. Continue regular follow-up and medication adherence.",
    vitalSigns: {
      heartRate: 84,
      temperature: 36.7,
      weight: 78.9,
      height: 179,
      systolicBP: 119,
      diastolicBP: 76,
    },
  },
  {
    patientId: 1043,
    fullName: "Lauren Edwards",
    dateOfBirth: new Date("1968-12-08"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1043",
    emailAddress: "lauren.edwards@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Hormone Replacement Therapy", "Calcium Supplements"],
    allergies: ["Soy", "Estrogen Patches"],
    primaryDiagnosis: "Osteoporosis",
    lastVisitDate: new Date("2024-01-26"),
    nextAppointmentDate: new Date("2024-04-26"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 2890.0,
    clinicalNotes:
      "Osteoporosis management ongoing. Monitor bone density and adjust treatment as needed. Encourage weight-bearing exercises and fall prevention strategies.",
    vitalSigns: {
      heartRate: 72,
      temperature: 36.6,
      weight: 62.8,
      height: 157,
      systolicBP: 134,
      diastolicBP: 85,
    },
  },
  {
    patientId: 1044,
    fullName: "Nathan Morris",
    dateOfBirth: new Date("2005-06-19"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1044",
    emailAddress: "nathan.morris@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Insulin Therapy", "Continuous Glucose Monitoring"],
    allergies: null,
    primaryDiagnosis: "Type 1 Diabetes Mellitus",
    lastVisitDate: new Date("2024-01-02"),
    nextAppointmentDate: new Date("2024-01-16"),
    riskLevel: RiskLevel.High,
    totalCharges: 3650.0,
    clinicalNotes:
      "Type 1 diabetes management. Educate on insulin administration and blood glucose monitoring. Refer to diabetes educator for comprehensive management.",
    vitalSigns: {
      heartRate: 145,
      temperature: 38.7,
      weight: 72.1,
      height: 175,
      systolicBP: 85,
      diastolicBP: 52,
    },
  },
  {
    patientId: 1045,
    fullName: "Hannah Rivera",
    dateOfBirth: new Date("1979-03-25"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1045",
    emailAddress: "hannah.rivera@email.com",
    hasInsurance: false,
    hasAllergies: true,
    treatments: ["Anti-seizure Medication", "Neurological Monitoring"],
    allergies: ["Phenytoin", "Carbamazepine"],
    primaryDiagnosis: "Epilepsy",
    lastVisitDate: new Date("2024-01-31"),
    nextAppointmentDate: new Date("2024-03-31"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 4120.0,
    clinicalNotes:
      "Epilepsy well-controlled with current medication. No seizures reported. Educate patient on medication adherence and seizure precautions.",
    vitalSigns: {
      heartRate: 75,
      temperature: 36.7,
      weight: 69.4,
      height: 166,
      systolicBP: 122,
      diastolicBP: 79,
    },
  },
  {
    patientId: 1046,
    fullName: "Jonathan Reed",
    dateOfBirth: new Date("1962-09-11"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1046",
    emailAddress: "jonathan.reed@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Proton Pump Inhibitors", "Dietary Modifications"],
    allergies: null,
    primaryDiagnosis: "Gastroesophageal Reflux Disease",
    lastVisitDate: new Date("2024-01-24"),
    nextAppointmentDate: new Date("2024-04-24"),
    riskLevel: RiskLevel.Low,
    totalCharges: 1450.0,
    clinicalNotes:
      "GERD symptoms well-controlled with current treatment. Educate patient on lifestyle modifications and medication adherence. Follow-up as needed.",
    vitalSigns: {
      heartRate: 70,
      temperature: 36.8,
      weight: 87.6,
      height: 174,
      systolicBP: 129,
      diastolicBP: 83,
    },
  },
  {
    patientId: 1047,
    fullName: "Samantha Collins",
    dateOfBirth: new Date("1996-01-30"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1047",
    emailAddress: "samantha.collins@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Immunosuppressive Therapy", "Joint Protection"],
    allergies: ["Methotrexate", "Sulfasalazine"],
    primaryDiagnosis: "Rheumatoid Arthritis",
    lastVisitDate: new Date("2024-01-03"),
    nextAppointmentDate: new Date("2024-01-17"),
    riskLevel: RiskLevel.High,
    totalCharges: 6890.0,
    clinicalNotes:
      "Rheumatoid arthritis well-controlled with current treatment. Monitor for any new joint symptoms or medication side effects.",
    vitalSigns: {
      heartRate: 55,
      temperature: 35.7,
      weight: 61.7,
      height: 162,
      systolicBP: 185,
      diastolicBP: 105,
    },
  },
  {
    patientId: 1048,
    fullName: "Charles Stewart",
    dateOfBirth: new Date("1951-07-16"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1048",
    emailAddress: "charles.stewart@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Cataract Surgery Recovery", "Eye Drops"],
    allergies: ["Fluoroquinolones", "Steroid Eye Drops"],
    primaryDiagnosis: "Post-Cataract Surgery",
    lastVisitDate: new Date("2024-01-28"),
    nextAppointmentDate: new Date("2024-02-11"),
    riskLevel: RiskLevel.Low,
    totalCharges: 8950.0,
    clinicalNotes:
      "Cataract surgery recovery on track. Educate patient on eye drop administration and activity restrictions. Follow-up in 1 week.",
    vitalSigns: {
      heartRate: 69,
      temperature: 36.6,
      weight: 81.3,
      height: 171,
      systolicBP: 143,
      diastolicBP: 89,
    },
  },
  {
    patientId: 1049,
    fullName: "Kimberly Sanchez",
    dateOfBirth: new Date("1989-11-05"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1049",
    emailAddress: "kimberly.sanchez@email.com",
    hasInsurance: false,
    hasAllergies: false,
    treatments: ["Antifungal Medication", "Topical Treatments"],
    allergies: null,
    primaryDiagnosis: "Candidiasis",
    lastVisitDate: new Date("2024-01-27"),
    nextAppointmentDate: new Date("2024-02-10"),
    riskLevel: RiskLevel.Low,
    totalCharges: 675.0,
    clinicalNotes:
      "Fungal infection responding to treatment. Educate patient on proper hygiene and skin care. Advise on weight management to reduce skinfold infections.",
    vitalSigns: {
      heartRate: 73,
      temperature: 36.8,
      weight: 64.2,
      height: 168,
      systolicBP: 117,
      diastolicBP: 74,
    },
  },
  {
    patientId: 1050,
    fullName: "Eric Morgan",
    dateOfBirth: new Date("1973-05-12"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1050",
    emailAddress: "eric.morgan@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Sleep Study", "CPAP Therapy"],
    allergies: ["Latex", "Silicone"],
    primaryDiagnosis: "Obstructive Sleep Apnea",
    lastVisitDate: new Date("2024-01-01"),
    nextAppointmentDate: new Date("2024-04-01"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 3240.0,
    clinicalNotes:
      "Obstructive sleep apnea diagnosed. CPAP therapy initiated. Educate patient on proper CPAP use and maintenance. Follow-up in 1 month.",
    vitalSigns: {
      heartRate: 79,
      temperature: 36.9,
      weight: 135.8,
      height: 182,
      systolicBP: 138,
      diastolicBP: 87,
    },
  },
  {
    patientId: 1051,
    fullName: "Crystal Torres",
    dateOfBirth: new Date("1981-10-22"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1051",
    emailAddress: "crystal.torres@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Antidepressants", "Psychotherapy"],
    allergies: null,
    primaryDiagnosis: "Bipolar Disorder",
    lastVisitDate: new Date("2024-01-30"),
    nextAppointmentDate: new Date("2024-02-13"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 2750.0,
    clinicalNotes:
      "Bipolar disorder well-managed with current treatment. Patient reports stable mood and good medication adherence. Continue regular follow-up.",
    vitalSigns: {
      heartRate: 85,
      temperature: 36.7,
      weight: 68.9,
      height: 161,
      systolicBP: 123,
      diastolicBP: 80,
    },
  },
  {
    patientId: 1052,
    fullName: "Timothy Peterson",
    dateOfBirth: new Date("1959-02-28"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1052",
    emailAddress: "timothy.peterson@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Immunosuppressive Drugs", "Regular Monitoring"],
    allergies: ["Cyclosporine", "Tacrolimus"],
    primaryDiagnosis: "Kidney Transplant Follow-up",
    lastVisitDate: new Date("2024-01-02"),
    nextAppointmentDate: new Date("2024-01-09"),
    riskLevel: RiskLevel.Critical,
    totalCharges: 12450.0,
    clinicalNotes:
      "Post-transplant patient in critical condition. Severe hypothermia and bradycardia with hypertensive crisis. Possible organ rejection. Immediate transplant team consultation required.",
    vitalSigns: {
      heartRate: 38,
      temperature: 34.8,
      weight: 54.2,
      height: 176,
      systolicBP: 210,
      diastolicBP: 120,
    },
  },
  {
    patientId: 1053,
    fullName: "Angela Gray",
    dateOfBirth: new Date("1993-08-07"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1053",
    emailAddress: "angela.gray@email.com",
    hasInsurance: false,
    hasAllergies: true,
    treatments: ["Antihistamines", "Corticosteroids"],
    allergies: ["Bee Stings", "Wasp Stings"],
    primaryDiagnosis: "Severe Allergic Reactions",
    lastVisitDate: new Date("2024-01-25"),
    nextAppointmentDate: new Date("2024-04-25"),
    riskLevel: RiskLevel.High,
    totalCharges: 1890.0,
    clinicalNotes:
      "Severe allergic reactions to insect stings. Educate patient on avoidance of triggers and emergency action plan. Consider referral to allergist for immunotherapy evaluation.",
    vitalSigns: {
      heartRate: 92,
      temperature: 36.8,
      weight: 59.6,
      height: 159,
      systolicBP: 114,
      diastolicBP: 72,
    },
  },
  {
    patientId: 1054,
    fullName: "Patrick Ward",
    dateOfBirth: new Date("1987-04-15"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1054",
    emailAddress: "patrick.ward@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Antiviral Medication", "Pain Management"],
    allergies: null,
    primaryDiagnosis: "Herpes Zoster (Shingles)",
    lastVisitDate: new Date("2024-01-26"),
    nextAppointmentDate: new Date("2024-02-23"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 1650.0,
    clinicalNotes:
      "Shingles outbreak localized. Pain management effective. Educate patient on infection control and medication adherence.",
    vitalSigns: {
      heartRate: 76,
      temperature: 37.2,
      weight: 80.4,
      height: 178,
      systolicBP: 126,
      diastolicBP: 81,
    },
  },
  {
    patientId: 1055,
    fullName: "Stephanie Cox",
    dateOfBirth: new Date("1976-12-01"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1055",
    emailAddress: "stephanie.cox@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Biologics", "Topical Therapies"],
    allergies: ["Adalimumab", "Etanercept"],
    primaryDiagnosis: "Moderate to Severe Psoriasis",
    lastVisitDate: new Date("2024-01-03"),
    nextAppointmentDate: new Date("2024-01-17"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 8750.0,
    clinicalNotes:
      "Psoriasis symptoms well-controlled with current biologic therapy. Monitor for any new skin lesions or medication side effects.",
    vitalSigns: {
      heartRate: 74,
      temperature: 36.7,
      weight: 71.8,
      height: 163,
      systolicBP: 131,
      diastolicBP: 84,
    },
  },
  {
    patientId: 1056,
    fullName: "Carl Jenkins",
    dateOfBirth: new Date("1944-09-18"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1056",
    emailAddress: "carl.jenkins@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Cholinesterase Inhibitors", "Cognitive Therapy"],
    allergies: null,
    primaryDiagnosis: "Early Stage Alzheimer Disease",
    lastVisitDate: new Date("2024-01-29"),
    nextAppointmentDate: new Date("2024-02-26"),
    riskLevel: RiskLevel.High,
    totalCharges: 5620.0,
    clinicalNotes:
      "Cognitive decline stable. Caregiver reports no new concerns. Continue current treatment and regular follow-up.",
    vitalSigns: {
      heartRate: 68,
      temperature: 36.6,
      weight: 73.9,
      height: 167,
      systolicBP: 139,
      diastolicBP: 86,
    },
  },
  {
    patientId: 1057,
    fullName: "Monica Flores",
    dateOfBirth: new Date("1984-06-13"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1057",
    emailAddress: "monica.flores@email.com",
    hasInsurance: false,
    hasAllergies: true,
    treatments: ["Migraine Preventatives", "Trigger Avoidance"],
    allergies: ["Triptans", "Ergotamines"],
    primaryDiagnosis: "Chronic Migraine",
    lastVisitDate: new Date("2024-01-28"),
    nextAppointmentDate: new Date("2024-03-28"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 2340.0,
    clinicalNotes:
      "Migraines partially controlled with current regimen. Identify and avoid triggers. Consider referral to headache specialist if no improvement.",
    vitalSigns: {
      heartRate: 83,
      temperature: 36.8,
      weight: 66.1,
      height: 165,
      systolicBP: 118,
      diastolicBP: 75,
    },
  },
  {
    patientId: 1058,
    fullName: "Jeremy Butler",
    dateOfBirth: new Date("1997-03-09"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1058",
    emailAddress: "jeremy.butler@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Antipsychotic Medication", "Social Skills Training"],
    allergies: null,
    primaryDiagnosis: "Schizophrenia",
    lastVisitDate: new Date("2024-01-01"),
    nextAppointmentDate: new Date("2024-01-15"),
    riskLevel: RiskLevel.High,
    totalCharges: 4890.0,
    clinicalNotes:
      "Psychiatric patient in medical crisis. Extremely high fever and severe hypotension. Possible neuroleptic malignant syndrome. Emergency psychiatric consultation and medical stabilization needed.",
    vitalSigns: {
      heartRate: 155,
      temperature: 41.2,
      weight: 77.3,
      height: 181,
      systolicBP: 72,
      diastolicBP: 42,
    },
  },
  {
    patientId: 1059,
    fullName: "Lisa Washington",
    dateOfBirth: new Date("1969-11-26"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1059",
    emailAddress: "lisa.washington@email.com",
    hasInsurance: true,
    hasAllergies: true,
    treatments: ["Anti-inflammatory Drugs", "Physical Therapy"],
    allergies: ["NSAIDs", "Corticosteroid Injections"],
    primaryDiagnosis: "Fibromyalgia",
    lastVisitDate: new Date("2024-01-31"),
    nextAppointmentDate: new Date("2024-03-28"),
    riskLevel: RiskLevel.Medium,
    totalCharges: 3180.0,
    clinicalNotes:
      "Fibromyalgia symptoms stable. Pain management effective. Educate patient on energy conservation techniques and regular exercise.",
    vitalSigns: {
      heartRate: 78,
      temperature: 36.7,
      weight: 70.2,
      height: 160,
      systolicBP: 127,
      diastolicBP: 82,
    },
  },
  {
    patientId: 1060,
    fullName: "Anthony Parker",
    dateOfBirth: new Date("1958-01-04"),
    get age() {
      return calculateAge(this.dateOfBirth);
    },
    phoneNumber: "+1-555-1060",
    emailAddress: "anthony.parker@email.com",
    hasInsurance: true,
    hasAllergies: false,
    treatments: ["Anticoagulants", "Compression Therapy"],
    allergies: null,
    primaryDiagnosis: "Deep Vein Thrombosis",
    lastVisitDate: new Date("2024-01-02"),
    nextAppointmentDate: new Date("2024-01-16"),
    riskLevel: RiskLevel.High,
    totalCharges: 7320.0,
    clinicalNotes:
      "DVT treatment ongoing. Monitor for signs of bleeding or thrombosis. Educate patient on leg elevation and compression garment use.",
    vitalSigns: {
      heartRate: 58,
      temperature: 38.6,
      weight: 121.5,
      height: 179,
      systolicBP: 170,
      diastolicBP: 100,
    },
  },
];

export const samplePatients: Patient[] = patients.slice(0, 10);
