import heartimg from "../../images/heart.jpg"
import FolicAcid from "../../images/FolicAcid.jpg"
import fallRisk from "../../images/fallRisk.jpg"
import Chlamydia from "../../images/Chlamydia.jpg"
import babydr from "../../images/babydr.jpg"
import babydr2yrs from "../../images/babydr2yrs.jpeg"
import breastCancer from "../../images/breastCancer.jpeg"
import childdr5yr from "../../images/childr5yr.jpeg"
import childsr14 from "../../images/childsr14jpg.jpg"
import teen17 from "../../images/teen17.jpeg"
import childteeth from "../../images/childteeth.jpeg"
import getScr from "../../images/getScr.jpeg"
import abdominal from "../../images/abdominal-aneurysm.jpg"
import bp from "../../images/bp.jpg"
import bonedensity from "../../images/bonedensity.jpg"
import cervicl from "../../images/cervicl.jpg"
import Cholesterol from "../../images/Cholesterol.jpg"
import colcan from "../../images/colcan.jpg"
import Teendepress from "../../images/Teendepress.jpg"
import talkingdepression from "../../images/talkingdepression.jpg"
import childvis from "../../images/childvis.jpg"
import oldVac from "../../images/oldVac.jpg"
import vac40 from "../../images/vac40.jpg"
import HPVshot from "../../images/HPVshot.jpg"
import secChil from "../../images/secChil.jpg"
import OYH_womenshealth from "../../images/OYH_womenshealth.jpg"
import covid from "../../images/covid.jpg"
import seasflu from "../../images/seasflu.jpg"
import chrgrg from "../../images/chrgrg.jpg"
import askdr from "../../images/askdr.jpg"
import clacium from "../../images/clacium.jpg"
import habits from "../../images/healthy-habits.jpg"
import skincan from "../../images/skincan.jpg"
import sleep from "../../images/sleep.jpg"
import care from "../../images/care.jpg"
import nasha from "../../images/nasha.jpg"
import diab from "../../images/diab.jpg"
import domvi from "../../images/domvi.jpg"
import birth from "../../images/birth.jpg"
import welwo from "../../images/welwo.jpg"
import menht from "../../images/menht.jpg"
import sext from "../../images/sex-talk.jpg"
import bacpain from "../../images/bacpain.jpg"
import asprin from "../../images/asprin.jpg"






const topicArr = [
    {
      "id": "25",
      "title": "Keep Your Heart Healthy",
      "img":heartimg
    },
    {
      "id": "327",
      "title": "Get Enough Folic Acid",
      "img":FolicAcid
    },
    {
      "id": "329",
      "title": "Lower Your Risk of Falling",
      "img":fallRisk
    },
    {
      "id": "350",
      "title": "Get Tested for Chlamydia and Gonorrhea",
      "img":Chlamydia
    },
    {
      "id": "510",
      "title": "Make the Most of Your Baby\u2019s Visit to the Doctor (Ages 0 to 11 Months)",
      "img":babydr
    },
    {
      "id": "512",
      "title": "Make the Most of Your Child\u2019s Visit to the Doctor (Ages 1 to 4)",
      "img":babydr2yrs
    },
    {
      "id": "514",
      "title": "Get Tested for Breast Cancer",
      "img":breastCancer
    },
    {
      "id": "527",
      "title": "Make the Most of Your Child\u2019s Visit to the Doctor (Ages 5 to 10 Years)",
      "img":childdr5yr
    },
    {
      "id": "528",
      "title": "Make the Most of Your Child\u2019s Visit to the Doctor (Ages 11 to 14 Years)",
      "img":childsr14
    },
    {
      "id": "529",
      "title": "Make the Most of Your Teen\u2019s Visit to the Doctor (Ages 15 to 17 Years)",
      "img":teen17
    },
    {
      "id": "530",
      "title": "Take Care of Your Child's Teeth",
      "img":childteeth
    },
    {
      "id": "531",
      "title": "Get Screened",
      "img":getScr
      
    },
    {
      "id": "532",
      "title": "Talk to Your Doctor About Abdominal Aortic Aneurysm",
      "img":abdominal
    },
    {
      "id": "533",
      "title": "Get Your Blood Pressure Checked",
      "img":bp
    },
    {
      "id": "534",
      "title": "Get a Bone Density Test",
      "img":bonedensity
    },
    {
      "id": "536",
      "title": "Get Screened for Cervical Cancer",
      "img":cervicl
    },
    {
      "id": "537",
      "title": "Get Your Cholesterol Checked",
      "img":Cholesterol
    },
    {
      "id": "538",
      "title": "Get Screened for Colorectal Cancer",
      "img":colcan
    },
    {
      "id": "539",
      "title": "Get Your Teen Screened for Depression",
      "img":Teendepress
    },
    {
      "id": "540",
      "title": "Talk with Your Doctor About Depression",
      "img":talkingdepression
    },
    {
      "id": "541",
      "title": "Get Your Child\u2019s Vision Checked",
      "img":childvis
    },
    {
      "id": "542",
      "title": "Get Vaccines to Protect Your Health (Adults Age 50 or Older)",
      "img":oldVac
    },
    {
      "id": "543",
      "title": "Get Vaccines to Protect Your Health (Adults Ages 19 to 49)",
      "img":vac40
    },
    {
      "id": "544",
      "title": "Get Your Child the HPV Vaccine",
      "img":HPVshot
    },
    {
      "id": "546",
      "title": "Get Your Child\u2019s Vaccines on Schedule",
      "img":secChil
    },
    {
      "id": "547",
      "title": "Talk with a Doctor if Breast or Ovarian Cancer Runs in Your Family",
      "img":OYH_womenshealth
    },
    {
      "id": "549",
      "title": "Get Your Pre\u2011teen\u2019s Vaccines on Schedule",
      "img":covid
    },
    {
      "id": "551",
      "title": "Protect Yourself from Seasonal Flu",
      "img":seasflu
    },
    {
      "id": "552",
      "title": "Take Charge of Your Health Care",
      "img":chrgrg
    },
    {
      "id": "553",
      "title": "Colorectal Cancer Screening: Questions for the Doctor",
      "img":askdr
    },
    {
      "id": "30530",
      "title": "Get Enough Calcium",
      "img":clacium
    },
    {
      "id": "30531",
      "title": "Protect Your Health as You Grow Older",
      "img":habits
    },
    {
      "id": "30532",
      "title": "Take Steps to Prevent Skin Cancer",
      "img":skincan
    },
    {
      "id": "30533",
      "title": "Get Enough Sleep",
      "img":sleep
    },
    {
      "id": "30534",
      "title": "Get Support If You're a Caregiver",
      "img":care
    },
    {
      "id": "30535",
      "title": "Talk to Your Kids About Tobacco, Alcohol, and Drugs",
      "img":nasha
    },
    {
      "id": "30536",
      "title": "Take Steps to Prevent Type 2 Diabetes",
      "img":diab
    },
    {
      "id": "30537",
      "title": "Watch for Warning Signs of Relationship Violence",
      "img":domvi
    },
    {
      "id": "30538",
      "title": "Choose the Right Birth Control",
      "img":birth
    },
    {
      "id": "30539",
      "title": "Eat Healthy",
      "img":FolicAcid
    },
    {
      "id": "30540",
      "title": "Get Your Well-Woman Visit Every Year",
      "img":welwo
    },
    {
      "id": "30541",
      "title": "Men: Take Charge of Your Health",
      "img":menht
    },
    {
      "id": "30542",
      "title": "Talk to Your Kids About Sex and Healthy Relationships",
      "img":sext
    },
    {
      "id": "30543",
      "title": "Prevent Back Pain",
      "img":bacpain
    },
    {
      "id": "30544",
      "title": "Talk with Your Doctor About Taking Aspirin to Prevent Disease",
      "img":asprin
    },
    {
      "id": "30545",
      "title": "Prevent Infections When You Get Medical Care"
    },
    {
      "id": "30546",
      "title": "Use Medicines Safely"
    },
    {
      "id": "30547",
      "title": "Get Active"
    },
    {
      "id": "30548",
      "title": "Have a Healthy Pregnancy"
    },
    {
      "id": "30549",
      "title": "Talk with Your Doctor About Newborn Screening"
    },
    {
      "id": "30550",
      "title": "Breastfeed Your Baby"
    },
    {
      "id": "30551",
      "title": "Aim for a Healthy Weight"
    },
    {
      "id": "30558",
      "title": "Drink Alcohol Only in Moderation"
    },
    {
      "id": "30559",
      "title": "Eat Less Sodium: Quick Tips"
    },
    {
      "id": "30560",
      "title": "Manage Stress"
    },
    {
      "id": "30561",
      "title": "Reduce Your Risk of Stroke"
    },
    {
      "id": "30562",
      "title": "Talk with Your Teen About Preventing STDs"
    },
    {
      "id": "30564",
      "title": "Get Tested for HIV"
    },
    {
      "id": "30565",
      "title": "Protect Yourself from Hepatitis B"
    },
    {
      "id": "30566",
      "title": "Help Your Child Stay at a Healthy Weight"
    },
    {
      "id": "30567",
      "title": "Get Your Medicare Wellness Visit Every Year"
    },
    {
      "id": "30574",
      "title": "Gestational Diabetes Screening: Questions for the Doctor"
    },
    {
      "id": "30575",
      "title": "Hepatitis C Screening: Questions for the Doctor"
    },
    {
      "id": "30582",
      "title": "Eat Healthy While Breastfeeding: Quick Tips"
    },
    {
      "id": "30583",
      "title": "Eat Healthy During Pregnancy: Quick Tips"
    },
    {
      "id": "30584",
      "title": "Genetic Testing to Learn About Your Risk of Breast and Ovarian Cancer: Questions for the Doctor"
    },
    {
      "id": "30586",
      "title": "Colorectal Cancer Screening: Conversation Starters"
    },
    {
      "id": "30588",
      "title": "Quitting Smoking: Conversation Starters"
    },
    {
      "id": "30589",
      "title": "Choosing a Doctor: Quick Tips"
    },
    {
      "id": "30590",
      "title": "Prostate Cancer Screening: Questions for the Doctor"
    },
    {
      "id": "30591",
      "title": "Oral Health for Older Adults: Quick Tips"
    },
    {
      "id": "30592",
      "title": "Lung Cancer Screening: Questions for the Doctor"
    },
    {
      "id": "30593",
      "title": "Mammograms: Questions for the Doctor"
    },
    {
      "id": "30594",
      "title": "Medicines to Prevent Heart Attack and Stroke: Questions for the Doctor"
    },
    {
      "id": "30595",
      "title": "Preventing Osteoporosis: Questions for the Doctor"
    },
    {
      "id": "30596",
      "title": "Healthy Eating: Conversation Starters"
    },
    {
      "id": "30597",
      "title": "Help a Loved One Get More Active: Quick Tips"
    },
    {
      "id": "30598",
      "title": "Losing Weight: Conversation Starters"
    },
    {
      "id": "30599",
      "title": "Lower-Sodium Foods: Shopping List"
    },
    {
      "id": "30600",
      "title": "Preventing Preeclampsia: Questions for the Doctor"
    },
    {
      "id": "30601",
      "title": "Preventing Type 2 Diabetes: Questions for the Doctor"
    },
    {
      "id": "30602",
      "title": "Heart-Healthy Foods: Shopping List"
    },
    {
      "id": "30604",
      "title": "Depression: Conversation Starters"
    },
    {
      "id": "30605",
      "title": "Heart Health: Conversation Starters"
    },
    {
      "id": "30606",
      "title": "Alcohol Use: Conversation Starters"
    },
    {
      "id": "30607",
      "title": "Calcium: Shopping List"
    },
    {
      "id": "30608",
      "title": "Healthy Snacks: Quick Tips for Parents"
    },
    {
      "id": "30609",
      "title": "Testing for Latent Tuberculosis: Questions for the Doctor"
    },
    {
      "id": "30610",
      "title": "Quit Smoking"
    },
    {
      "id": "30612",
      "title": "Testing for Syphilis: Questions for the Doctor"
    },
    {
      "id": "30613",
      "title": "HIV Testing: Questions for the Doctor"
    },
    {
      "id": "30614",
      "title": "STI Testing: Conversation Starters"
    },
    {
      "id": "30615",
      "title": "Losing Weight: Questions for the Doctor"
    },
    {
      "id": "30616",
      "title": "Stay Active as You Get Older: Quick Tips"
    },
    {
      "id": "30617",
      "title": "Stay Active During Pregnancy: Quick Tips"
    },
    {
      "id": "30618",
      "title": "Stay Active with a Disability: Quick Tips"
    },
    {
      "id": "30759",
      "title": "Preventing Falls: Conversation Starters"
    },
    {
      "id": "30760",
      "title": "Support a Loved One at the Doctor: Quick Tips"
    },
    {
      "id": "33303",
      "title": "Talk with Your Doctor About Drug Misuse"
    },
    {
      "id": "33304",
      "title": "Drug Misuse: Conversation Starters"
    },
    {
      "id": "34321",
      "title": "Get Your Child Screened for Anxiety"
    },
    {
      "id": "34691",
      "title": "Anxiety: Conversation Starters"
    },
    {
      "id": "34692",
      "title": "Talk with Your Doctor About Anxiety"
    }
  ]

export default topicArr