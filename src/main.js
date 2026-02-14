// mobile menu
const menuBTN=document.getElementById("menu");
const MobileMenu=document.getElementById("mobilemenu");
const closeBtn=document.getElementById("closeBTN");
menuBTN.addEventListener("click" , ()=>{
    MobileMenu.classList.remove("-translate-x-full");
});
closeBtn.addEventListener("click",()=>{
    MobileMenu.classList.add("-translate-x-full");
})


document.addEventListener('DOMContentLoaded', function () {
   // Initialize flatpickr
  flatpickr('#jsPickr', {
    allowInput: true,
    monthSelectorType: 'static'
  })
     // Fetch all the forms we want to apply custom validation styles to
  const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission if invalid

Array.from(forms).forEach(form => {

    form.addEventListener(
      'submit',
      event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          // Find the first invalid input field and set focus to it
          const firstInvalidElement = form.querySelector(':invalid')
          if (firstInvalidElement) {
            firstInvalidElement.focus()
          }
        }form.classList.add('validate')
      },
      false
    )})
})

const swiper = new Swiper('.swiper', {
  loop: true,              // slides loop
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const doctorsSwiper = new Swiper(".doctorsSwiper", {
  loop: true,

  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: ".doctors-pagination",
    clickable: true,
  },
});


const accordion =document.querySelectorAll(".accordion-item");
accordion.forEach(item=>{
  const button=item.querySelector(".accordion-toggle");
  const content = item.querySelector(".accordion-content > div");
  content.style.display="none";

  button.addEventListener("click",()=>{
    if(content.style.display=="none"){
      content.style.display="flex";
    }else{
      content.style.display="none";
    }
  })
})


const departments_Description=document.getElementById('departments-description');

const title=document.getElementById('dep-title');
const p1=document.getElementById('dep-p1');
const p2=document.getElementById('dep-p2');

const departments = {

  laboratory: {
    title: "Laboratory Analysis",
    p1: "Our Laboratory Department is dedicated to providing accurate diagnostic testing to support the early detection, diagnosis, and monitoring of various medical conditions. Using advanced medical technology and modern laboratory equipment, we conduct a wide range of investigations including blood tests, biochemical analysis, microbiological testing, and hormonal assessments to ensure precise and reliable results for every patient.",
    p2: "We focus on maintaining the highest standards of quality control and safety throughout all testing procedures. Our specialists work closely with physicians to provide timely reports that assist in treatment planning and disease prevention. Regular screenings and follow-up testing help monitor patient progress and ensure effective long-term healthcare management."
  },

  cardoiology: {
    title: "Cardiology Clinic",
    p1: "Our Cardiology Clinic is dedicated to the diagnosis, treatment, and prevention of heart and blood vessel diseases using advanced medical technology and evidence-based practices. We provide comprehensive care for a wide range of cardiovascular conditions such as hypertension, coronary artery disease, heart rhythm disorders, and heart failure. Our experienced cardiologists perform detailed evaluations including ECG, echocardiography, stress testing, and other non-invasive procedures to accurately assess each patient’s heart health.",
    p2: "We focus not only on treating existing heart conditions but also on reducing future risks through personalized treatment plans and lifestyle guidance. Patients receive support in managing cholesterol levels, blood pressure, and other risk factors through medication, nutrition advice, and regular follow-up visits. Our goal is to improve overall cardiovascular wellness and ensure long-term heart health through continuous monitoring."
  },

  gyneology: {
    title: "Gynecology Clinic",
    p1: "Our Gynecology Clinic provides specialized medical care focused on women's reproductive health and overall well-being. We diagnose and manage a wide range of conditions including hormonal imbalances, menstrual disorders, infections, and reproductive system diseases using modern diagnostic tools and medical practices to ensure effective treatment outcomes.",
    p2: "We emphasize preventive care through routine examinations, prenatal services, and patient education programs. Our team supports women through every stage of life by offering guidance on fertility, pregnancy, and menopause management. Continuous monitoring and personalized care plans help maintain long-term reproductive health."
  },

  pathology: {
    title: "Pathology Clinic",
    p1: "Our Pathology Department plays a vital role in diagnosing diseases through the detailed analysis of tissues, cells, and body fluids. Using advanced laboratory techniques and microscopic examinations, we identify infections, inflammatory conditions, and abnormal cellular changes to support accurate medical diagnosis.",
    p2: "We work collaboratively with other departments to provide comprehensive diagnostic insights that guide treatment decisions. Early detection through pathological testing allows for timely intervention and improved patient outcomes. Regular analysis and reporting ensure effective monitoring of disease progression."
  },

  pedaiatrics: {
    title: "Pediatrics Clinic",
    p1: "Our Pediatrics Clinic is dedicated to providing comprehensive healthcare services for infants, children, and adolescents. We diagnose and treat a wide range of childhood illnesses while monitoring growth, development, and nutritional health to ensure proper physical and mental well-being.",
    p2: "Preventive healthcare services such as vaccinations, routine check-ups, and developmental screenings are provided to support long-term child health. Our pediatric specialists offer guidance to parents on nutrition, safety, and disease prevention to promote healthy development throughout childhood."
  },

  neurology: {
    title: "Neurology Clinic",
    p1: "Our Neurology Clinic specializes in diagnosing and managing disorders related to the brain, spinal cord, and nervous system. We treat conditions such as migraines, epilepsy, nerve injuries, and neurodegenerative diseases using modern diagnostic imaging and neurological assessments.",
    p2: "We develop personalized treatment plans to manage symptoms and improve neurological function through medication, therapy, and lifestyle adjustments. Continuous follow-up care ensures proper monitoring of neurological health and supports long-term patient recovery and stability."
  }

};


const laboratory =document.getElementById('laboratory');
const cardoiology =document.getElementById('cardoiology');
const gyneology =document.getElementById('gyneology');
const pathology =document.getElementById('pathology');
const pedaiatrics =document.getElementById('pedaiatrics');
const neurology =document.getElementById('neurology');

laboratory.addEventListener("click",()=>{
  title.innerText=departments["laboratory"].title;
  p1.innerText=departments["laboratory"].p1;
  p2.innerText=departments["laboratory"].p2;
});

cardoiology.addEventListener("click",()=>{
  title.innerText=departments["cardoiology"].title;
  p1.innerText=departments["cardoiology"].p1;
  p2.innerText=departments["cardoiology"].p2;
});

gyneology.addEventListener("click",()=>{
  title.innerText=departments["gyneology"].title;
  p1.innerText=departments["gyneology"].p1;
  p2.innerText=departments["gyneology"].p2;
});

pathology.addEventListener("click",()=>{
  title.innerText=departments["pathology"].title;
  p1.innerText=departments["pathology"].p1;
  p2.innerText=departments["pathology"].p2;
});

pedaiatrics.addEventListener("click",()=>{
  title.innerText=departments["pedaiatrics"].title;
  p1.innerText=departments["pedaiatrics"].p1;
  p2.innerText=departments["pedaiatrics"].p2;
});

neurology.addEventListener("click",()=>{
  title.innerText=departments["neurology"].title;
  p1.innerText=departments["neurology"].p1;
  p2.innerText=departments["neurology"].p2;
});

const btnDoctors=document.getElementById("gotodoctors");
btnDoctors.addEventListener("click",()=>{
  document.getElementById("doctors").scrollIntoView({behavior:"smooth"});
})

const booknow_header=document.getElementById("booknow-header");
booknow_header.addEventListener("click",()=>{
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
})

const contact_home=document.getElementById("contact-home");
contact_home.addEventListener("click",()=>{
  document.getElementById("contact").scrollIntoView({behavior:"smooth"})
})