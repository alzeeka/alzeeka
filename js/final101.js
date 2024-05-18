




$(document).ready(function() {
   var videoLinks = ["https://www.youtube.com/embed/8xBY6UMP7qs?si=NJ2xCwWlfWPVB8I5" ,"https://www.youtube.com/embed/8HJZ70S7orE?si=UO3v6kONXUlnTYL5", 
                     "https://www.youtube.com/embed/HOVIUuDhpAs?si=EzgvB8BKIG57PieO","https://www.youtube.com/embed/TRfCDM7QOZw?si=Nzry8kR5a4vDSw7f"];


  var videoNames = [ "CH 3 Quiz Branching ","CH 3 Quiz Looping " ,  "CH 4 quiz 1","CH 6 Quiz Array "];

   var videoLinks1 = ["https://www.youtube.com/embed/8xBY6UMP7qs?si=NJ2xCwWlfWPVB8I5" ,"https://www.youtube.com/embed/8HJZ70S7orE?si=UO3v6kONXUlnTYL5", 
                     "https://www.youtube.com/embed/HOVIUuDhpAs?si=EzgvB8BKIG57PieO","https://www.youtube.com/embed/TRfCDM7QOZw?si=Nzry8kR5a4vDSw7f"];


  var videoNames1 = [ "CH 3 Quiz Branching ","CH 3 Quiz Looping " ,  "CH 4 quiz 1","CH 6 Quiz Array "];













//###########################################    A Lectuers   ###########################################
//###########################################    A Lectuers   ###########################################

//###########################################################################################################
//###########################################################################################################

 var AvideoLinks = ["https://www.youtube.com/embed/mFwTJadO8WA?si=gr4Ue-FSDYDjLKyF"
];


var AvideoNames = [ 
  " جميع كويزات الترم" 
];



 var AvideoLinks1 = ["https://www.youtube.com/embed/mFwTJadO8WA?si=gr4Ue-FSDYDjLKyF"
];


var AvideoNames1 = [ 
  " جميع كويزات الترم" 
];





//###########################################################################################################
//###########################################################################################################












//###########################################    Homework   ###########################################
//###########################################    Homework   ###########################################

//###########################################################################################################
//###########################################################################################################

 var HvideoLinks = [""];


var HvideoNames = [""];













//###########################################################################################################
//###########################################################################################################


 var RelzLinks = ["https://www.youtube.com/embed/5GXMdkOOLr8?si=D_c0cs68HjU_jsSs","https://www.youtube.com/embed/_G6e4conEvI?si=1vn2R29IAncnwBcZ",
                 "https://www.youtube.com/embed/-NNSO54j8yg?si=BomtT29eBFbMBLqH"];


var RelzNames = [ "حل تمارين | Array 1" , "void VS return type methods", "شرح سريع CH 4" ];



 var AssLinks = [""];


var AssNames = [ "Assignment 1" ];




  
 var BankLinks = ["https://www.youtube.com/embed/TraeYWjfXhU?si=dqCByGpl9Sg9LXmb","https://www.youtube.com/embed/k2m0_k2DrGQ?si=L6WGm_-Nrfn0akUN",
                 "https://www.youtube.com/embed/sPtZoO3D8_A?si=6houJ290YB8vFLTP","https://www.youtube.com/embed/OFDa_ZcFPw8?si=uSvJGNt9xxY3JhBs",
                "https://www.youtube.com/embed/xCTQpq9c0rI?si=dnHzYvdWZxaYokWf","https://www.youtube.com/embed/bbQQ5XvwZB4?si=0U_1I-H6e7CfOI8x",
                 "https://www.youtube.com/embed/mT5jBU3sixg?si=vL6xBhqN1JLrMLJs"];


var BankNames = ["حل فاينال 2024 CSCE101","شرح نماذج سابقة" , "شرح بعض الميد مع سؤال فاينال المصفوفات" ,"final 2023 part 1","final 2023 part 2","final ICS part 1","final ICS part 2" ];
































//###########################################    Files Lectuers   ###########################################
//###########################################    Files Lectuers   ###########################################

//###########################################################################################################
//###########################################################################################################

 var FileLinks = ["https://drive.google.com/drive/folders/1jN9i-0YPtsupu2LoMCwVxNd4M74ZUWAF?usp=sharing"];


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
     
      Quiz.style.display="block";
      
    }
    
  });


  
 
var videoRow = document.getElementById("videoRow");


















































  


Files = document.getElementById("Files");























window.onload = function() {
  
  Quiz.style.display="none";
 
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


  const Ass = document.querySelector("#Ass");

  Ass.addEventListener("click", function() {
    
  videoRow.innerHTML = "";
  Files.innerHTML="";
  videoLinks = AssLinks;
  videoNames = AssNames ;
 

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
