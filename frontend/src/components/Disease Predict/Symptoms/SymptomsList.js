const quesarr = [
  { name: 'itching?', q: 'Do you have itching?' },
  { name: 'skin_rash?', q: 'Do you have skin rash?' },
  {
    name: 'nodal_skin_eruptions?',
    q: 'Do you have nodal skin eruptions?'
  },
  { name: 'continuous_sneezing?', q: 'Do you have continuous sneezing?' },
  { name: 'shivering?', q: 'Do you have shivering?' },
  { name: 'chills?', q: 'Do you have chills?' },
  { name: 'joint_pain?', q: 'Do you have joint pain?' },
  { name: 'stomach_pain?', q: 'Do you have stomach pain?' },
  { name: 'acidity?', q: 'Do you have acidity?' },
  { name: 'ulcers_on_tongue?', q: 'Do you have ulcers on tongue?' },
  { name: 'muscle_wasting?', q: 'Do you have muscle wasting?' },
  { name: 'vomiting?', q: 'Do you have vomiting?' },
  { name: 'burning_micturition?', q: 'Do you have burning micturition?' },
  { name: 'spotting_ urination?', q: 'Do you have spotting urination?' },
  { name: 'fatigue?', q: 'Do you have fatigue?' },
  { name: 'weight_gain?', q: 'Do you have weight gain?' },
  { name: 'anxiety?', q: 'Do you have anxiety?' },
  {
    name: 'cold_hands_and_feets?',
    q: 'Do you have cold hands and feets?'
  },
  { name: 'mood_swings?', q: 'Do you have mood swings?' },
  { name: 'weight_loss?', q: 'Do you have weight loss?' },
  { name: 'restlessness?', q: 'Do you have restlessness?' },
  { name: 'lethargy?', q: 'Do you have lethargy?' },
  { name: 'patches_in_throat?', q: 'Do you have patches in throat?' },
  {
    name: 'irregular_sugar_level?',
    q: 'Do you have irregular sugar level?'
  },
  { name: 'cough?', q: 'Do you have cough?' },
  { name: 'high_fever?', q: 'Do you have high fever?' },
  { name: 'sunken_eyes?', q: 'Do you have sunken eyes?' },
  { name: 'breathlessness?', q: 'Do you have breathlessness?' },
  { name: 'sweating?', q: 'Do you have sweating?' },
  { name: 'dehydration?', q: 'Do you have dehydration?' },
  { name: 'indigestion?', q: 'Do you have indigestion?' },
  { name: 'headache?', q: 'Do you have headache?' },
  { name: 'yellowish_skin?', q: 'Do you have yellowish skin?' },
  { name: 'dark_urine?', q: 'Do you have dark urine?' },
  { name: 'nausea?', q: 'Do you have nausea?' },
  { name: 'loss_of_appetite?', q: 'Do you have loss of appetite?' },
  {
    name: 'pain_behind_the_eyes?',
    q: 'Do you have pain behind the eyes?'
  },
  { name: 'back_pain?', q: 'Do you have back pain?' },
  { name: 'constipation?', q: 'Do you have constipation?' },
  { name: 'abdominal_pain?', q: 'Do you have abdominal pain?' },
  { name: 'diarrhoea?', q: 'Do you have diarrhoea?' },
  { name: 'mild_fever?', q: 'Do you have mild fever?' },
  { name: 'yellow_urine?', q: 'Do you have yellow urine?' },
  { name: 'yellowing_of_eyes?', q: 'Do you have yellowing of eyes?' },
  { name: 'acute_liver_failure?', q: 'Do you have acute liver failure?' },
  { name: 'fluid_overload?', q: 'Do you have fluid overload?' },
  { name: 'swelling_of_stomach?', q: 'Do you have swelling of stomach?' },
  { name: 'swelled_lymph_nodes?', q: 'Do you have swelled lymph nodes?' },
  { name: 'malaise?', q: 'Do you have malaise?' },
  {
    name: 'blurred_and_distorted_vision?',
    q: 'Do you have blurred and distorted vision?'
  },
  { name: 'phlegm?', q: 'Do you have phlegm?' },
  { name: 'throat_irritation?', q: 'Do you have throat irritation?' },
  { name: 'redness_of_eyes?', q: 'Do you have redness of eyes?' },
  { name: 'sinus_pressure?', q: 'Do you have sinus pressure?' },
  { name: 'runny_nose?', q: 'Do you have runny nose?' },
  { name: 'congestion?', q: 'Do you have congestion?' },
  { name: 'chest_pain?', q: 'Do you have chest pain?' },
  { name: 'weakness_in_limbs?', q: 'Do you have weakness in limbs?' },
  { name: 'fast_heart_rate?', q: 'Do you have fast heart rate?' },
  {
    name: 'pain_during_bowel_movements?',
    q: 'Do you have pain during bowel movements?'
  },
  { name: 'pain_in_anal_region?', q: 'Do you have pain in anal region?' },
  { name: 'bloody_stool?', q: 'Do you have bloody stool?' },
  { name: 'irritation_in_anus?', q: 'Do you have irritation in anus?' },
  { name: 'neck_pain?', q: 'Do you have neck pain?' },
  { name: 'dizziness?', q: 'Do you have dizziness?' },
  { name: 'cramps?', q: 'Do you have cramps?' },
  { name: 'bruising?', q: 'Do you have bruising?' },
  { name: 'obesity?', q: 'Do you have obesity?' },
  { name: 'swollen_legs?', q: 'Do you have swollen legs?' },
  {
    name: 'swollen_blood_vessels?',
    q: 'Do you have swollen blood vessels?'
  },
  { name: 'puffy_face_and_eyes?', q: 'Do you have puffy face and eyes?' },
  { name: 'enlarged_thyroid?', q: 'Do you have enlarged thyroid?' },
  { name: 'brittle_nails?', q: 'Do you have brittle nails?' },
  { name: 'swollen_extremeties?', q: 'Do you have swollen extremeties?' },
  { name: 'excessive_hunger?', q: 'Do you have excessive hunger?' },
  {
    name: 'extra_marital_contacts?',
    q: 'Do you have extra marital contacts?'
  },
  {
    name: 'drying_and_tingling_lips?',
    q: 'Do you have drying and tingling lips?'
  },
  { name: 'slurred_speech?', q: 'Do you have slurred speech?' },
  { name: 'knee_pain?', q: 'Do you have knee pain?' },
  { name: 'hip_joint_pain?', q: 'Do you have hip joint pain?' },
  { name: 'muscle_weakness?', q: 'Do you have muscle weakness?' },
  { name: 'stiff_neck?', q: 'Do you have stiff neck?' },
  { name: 'swelling_joints?', q: 'Do you have swelling joints?' },
  { name: 'movement_stiffness?', q: 'Do you have movement stiffness?' },
  { name: 'spinning_movements?', q: 'Do you have spinning movements?' },
  { name: 'loss_of_balance?', q: 'Do you have loss of balance?' },
  { name: 'unsteadiness?', q: 'Do you have unsteadiness?' },
  {
    name: 'weakness_of_one_body_side?',
    q: 'Do you have weakness of one body side?'
  },
  { name: 'loss_of_smell?', q: 'Do you have loss of smell?' },
  { name: 'bladder_discomfort?', q: 'Do you have bladder discomfort?' },
  { name: 'foul_smell_of urine?', q: 'Do you have foul smell of urine?' },
  {
    name: 'continuous_feel_of_urine?',
    q: 'Do you have continuous feel of urine?'
  },
  { name: 'passage_of_gases?', q: 'Do you have passage of gases?' },
  { name: 'internal_itching?', q: 'Do you have internal itching?' },
  { name: 'toxic_look_(typhos)?', q: 'Do you have toxic look (typhos)?' },
  { name: 'depression?', q: 'Do you have depression?' },
  { name: 'irritability?', q: 'Do you have irritability?' },
  { name: 'muscle_pain?', q: 'Do you have muscle pain?' },
  { name: 'altered_sensorium?', q: 'Do you have altered sensorium?' },
  { name: 'red_spots_over_body?', q: 'Do you have red spots over body?' },
  { name: 'belly_pain?', q: 'Do you have belly pain?' },
  {
    name: 'abnormal_menstruation?',
    q: 'Do you have abnormal menstruation?'
  },
  { name: 'dischromic _patches?', q: 'Do you have dischromic  patches?' },
  { name: 'watering_from_eyes?', q: 'Do you have watering from eyes?' },
  { name: 'increased_appetite?', q: 'Do you have increased appetite?' },
  { name: 'polyuria?', q: 'Do you have polyuria?' },
  { name: 'family_history?', q: 'Do you have family history?' },
  { name: 'mucoid_sputum?', q: 'Do you have mucoid sputum?' },
  { name: 'rusty_sputum?', q: 'Do you have rusty sputum?' },
  {
    name: 'lack_of_concentration?',
    q: 'Do you have lack of concentration?'
  },
  { name: 'visual_disturbances?', q: 'Do you have visual disturbances?' },
  {
    name: 'receiving_blood_transfusion?',
    q: 'Do you have receiving blood transfusion?'
  },
  {
    name: 'receiving_unsterile_injections?',
    q: 'Do you have receiving unsterile injections?'
  },
  { name: 'coma?', q: 'Do you have coma?' },
  { name: 'stomach_bleeding?', q: 'Do you have stomach bleeding?' },
  {
    name: 'distention_of_abdomen?',
    q: 'Do you have distention of abdomen?'
  },
  {
    name: 'history_of_alcohol_consumption?',
    q: 'Do you have history of alcohol consumption?'
  },
  { name: 'fluid_overload.1?', q: 'Do you have fluid overload.1?' },
  { name: 'blood_in_sputum?', q: 'Do you have blood in sputum?' },
  {
    name: 'prominent_veins_on_calf?',
    q: 'Do you have prominent veins on calf?'
  },
  { name: 'palpitations?', q: 'Do you have palpitations?' },
  { name: 'painful_walking?', q: 'Do you have painful walking?' },
  { name: 'pus_filled_pimples?', q: 'Do you have pus filled pimples?' },
  { name: 'blackheads?', q: 'Do you have blackheads?' },
  { name: 'scurring?', q: 'Do you have scurring?' },
  { name: 'skin_peeling?', q: 'Do you have skin peeling?' },
  { name: 'silver_like_dusting?', q: 'Do you have silver like dusting?' },
  {
    name: 'small_dents_in_nails?',
    q: 'Do you have small dents in nails?'
  },
  { name: 'inflammatory_nails?', q: 'Do you have inflammatory nails?' },
  { name: 'blister?', q: 'Do you have blister?' },
  {
    name: 'red_sore_around_nose?',
    q: 'Do you have red sore around nose?'
  },
  { name: 'yellow_crust_ooze?', q: 'Do you have yellow crust ooze?' },
  ];
  
// Map the array to add a new "name" key
// const modifiedQuesArr = quesarr.map((obj) => {
//   const question = obj.q;
//   const name = question.replace("Do you have ", "").replace(/ /g,"_");
//  // const finalName = name.replace(" ","_");
//   return { name, ...obj },;
// },);

// modifiedQuesArr.map((obj)=>{
//   console.log(obj);
// },)

const features = quesarr.map((obj)=>{
  return obj.name.replace("?","");
})

export {features , quesarr};