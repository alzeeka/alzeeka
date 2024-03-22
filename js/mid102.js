




$(document).ready(function() {
   var videoLinks = ["https://www.youtube.com/embed/G52Z3i206Ro?si=aVppF2gJo7DOe8JH","https://www.youtube.com/embed/9eVZB0MSObE?si=kW8qDX2RnuXdlYyw",
                      "https://www.youtube.com/embed/VEyIhXs-1aw?si=HkMcK1Cfzeyjskij","https://www.youtube.com/embed/uX-lEmw_6o4?si=Mp1MdJR0skBigzNf",
                      "https://www.youtube.com/embed/5nEITATrnZE?si=hwR6tK6RLdzTr2xE"];


  var videoNames = [ "L1 oop Quiz ","L2 inhertince Quiz" ,"L3 polymorphism Quiz" ,"L4 Abstraction Quiz","L5 Encapsulastion Quiz"];

  var videoLinks1 = ["https://www.youtube.com/embed/G52Z3i206Ro?si=aVppF2gJo7DOe8JH","https://www.youtube.com/embed/9eVZB0MSObE?si=kW8qDX2RnuXdlYyw",
  "https://www.youtube.com/embed/VEyIhXs-1aw?si=HkMcK1Cfzeyjskij","https://www.youtube.com/embed/uX-lEmw_6o4?si=Mp1MdJR0skBigzNf",
  "https://www.youtube.com/embed/5nEITATrnZE?si=hwR6tK6RLdzTr2xE"];


  var videoNames1 = [ "L1 oop Quiz ","L2 inhertince Quiz" ,"L3 polymorphism Quiz" ,"L4 Abstraction Quiz","L5 Encapsulastion Quiz"];













//###########################################    A Lectuers   ###########################################
//###########################################    A Lectuers   ###########################################

//###########################################################################################################
//###########################################################################################################

 var AvideoLinks = ["https://www.youtube.com/embed/KPEmZbow98E?si=ulyLPoLCMN_ACSBi", "https://www.youtube.com/embed/8WS2_6wtaK0?si=lHe936SEJa-WGxQa"
];


var AvideoNames = [ 
  "Quiz 1 | كويزات الترم" ,  "Quiz 2 | كويزات الترم"
];

 var AvideoLinks1 = ["https://www.youtube.com/embed/KPEmZbow98E?si=ulyLPoLCMN_ACSBi", "https://www.youtube.com/embed/8WS2_6wtaK0?si=lHe936SEJa-WGxQa",
                     "https://www.youtube.com/embed/dKd_6oAJe8A?si=O3GFOd7dY1nw4-Ry"
];


var AvideoNames1 = [ 
  "Quiz 1 | كويزات الترم" ,  "Quiz 2 | كويزات الترم" ,  "Quiz 3 | كويزات الترم"
];







//###########################################################################################################
//###########################################################################################################












//###########################################    Homework   ###########################################
//###########################################    Homework   ###########################################

//###########################################################################################################
//###########################################################################################################

 var HvideoLinks = [];


var HvideoNames = [];













//###########################################################################################################
//###########################################################################################################


 var RelzLinks = ["https://www.youtube.com/embed/rqeGNWDCbKo?si=jKF0cJfbPCeKrJEz","https://www.youtube.com/embed/8qnBlnsWpVg?si=DL13mndVe87CGozu",
                 "https://www.youtube.com/embed/PzQmaWo1hzU?si=_2POxVKlJDp76juh"];


var RelzNames = [ "مراجعة Lectuer 1","مراجعة Lectuer 2","مراجعة Lectuer 3"];








  
 var BankLinks = ["https://www.youtube.com/embed/BZRP8qxEeRk?si=8FCi5CtAB22tPLWr"];


var BankNames = [ "شرح نموذج سابق 1"];
































//###########################################    Files Lectuers   ###########################################
//###########################################    Files Lectuers   ###########################################

//###########################################################################################################
//###########################################################################################################

 var FileLinks = ["https://drive.google.com/drive/folders/1-v-GcgGeD-8iXHBVpzAwZuh-A1OxL7C1?usp=drive_link"];


var FileNames = [ " جميع الملفات "];











//###########################################################################################################
//###########################################################################################################



















  M_all = document.querySelector("#M_ALL");
  Files = document.querySelector("#Files");
 
 

  var Files = document.getElementById("#Files");

  M_all.addEventListener("click", function() {
    videoRow.innerHTML = "";
    Files.innerHTML="";
    
    
    
   
    
  
    for (var i = 0; i < FileLinks.length; i++) {
      var div = document.createElement("div");
      div.className = "col-xl-3 col-xxl-3 col-sm-6";
      
      div.innerHTML = `
        <div class="widget-stat card">
          <div class="card-body">
            <div class="media ai-icon">
              <span class="mr-3">
                <svg id="icon-orders" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </span>
              <div class="media-body">
                <h4 class="mb-0"> ${FileNames[i]} </h4>
                <a href="${FileLinks[i]}"><span class="badge badge-warning"> تحميل </span></a>
              </div>
            </div>
          </div>
        </div>
      `;
  
      Files.appendChild(div);
      file_download.style.display="block";
      Quiz.style.display="block";
      
    }
    
  });


  
 
var videoRow = document.getElementById("videoRow");


















































  


Files = document.getElementById("Files");























window.onload = function() {
  
  Quiz.style.display="none";
  file_download.style.display="none";
  var videoRow = document.getElementById("videoRow");
  
  
  for (var i = 0; i < videoLinks.length; i++) {
    var link = videoLinks[i];

    var colDiv = document.createElement("div");
    colDiv.className = "col-xl-4 col-xxl-4 col-lg-6 col-md-6 text-center";

    var cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.boxShadow="    #6a1b9a63 9px 9px 14px 2px";

    var iframe = document.createElement("iframe");
    iframe.style.aspectRatio = 16/9;
    
    iframe.src = link;
    iframe.title = "YouTube video player";
    iframe.frameborder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen";
    iframe.allowfullscreen = true; // تم تفعيل ملء الشاشة هنا

    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    var heading = document.createElement("h5");
    heading.textContent = videoNames[i];
    cardBodyDiv.appendChild(heading);
    cardDiv.appendChild(iframe);
    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);
    videoRow.appendChild(colDiv);
  }
};















const li1 = document.querySelector("#L1");







li1.addEventListener("click", function() {
  
  
  videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = videoLinks1;
    videoNames = videoNames1 ;
   
  
  window.onload();
  
  });













//###########################################################################################################
//###########################################################################################################


const Ali1 = document.querySelector("#AL1");










  Ali1.addEventListener("click", function() {
    
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = AvideoLinks1;
    videoNames = AvideoNames1 ;
   
  
  window.onload();
  
  });









   //###########################################################################################################
//###########################################################################################################     
    





  
  
 const relz = document.querySelector("#relz");

    relz.addEventListener("click", function() {
      
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = RelzLinks;
    videoNames = RelzNames ;
   
  
  window.onload();
  
  });




 const bank = document.querySelector("#bank");
    bank.addEventListener("click", function() {
    
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = BankLinks;
    videoNames = BankNames ;
   
  
  window.onload();
  
  });






 
  

 


  
});
