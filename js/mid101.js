




$(document).ready(function() {
   var videoLinks = ["https://www.youtube.com/embed/zzRxBEmetIw?si=3rrPxqNT_DTu-3Es","https://www.youtube.com/embed/rZe62YFTzMY?si=yVl5mLuKNOB5Tw7q","https://www.youtube.com/embed/aKJmwAsrIGA?si=0DFgZzQcfkJWA8xQ",
                    "https://www.youtube.com/embed/Y-5a_o0o6MI?si=lgWFpxVJtITydEMg"
                    ];


  var videoNames = [ "CH 1.1 Quiz ","Output Quiz ","L1 Quiz" , "if Statement Quiz"];

   var videoLinks1 = ["https://www.youtube.com/embed/zzRxBEmetIw?si=3rrPxqNT_DTu-3Es","https://www.youtube.com/embed/rZe62YFTzMY?si=yVl5mLuKNOB5Tw7q","https://www.youtube.com/embed/aKJmwAsrIGA?si=0DFgZzQcfkJWA8xQ",
                    "https://www.youtube.com/embed/Y-5a_o0o6MI?si=lgWFpxVJtITydEMg"
                    ];


  var videoNames1 = [ "CH 1.1 Quiz ","Output Quiz ","L1 Quiz" , "if Statement Quiz"];













//###########################################    A Lectuers   ###########################################
//###########################################    A Lectuers   ###########################################

//###########################################################################################################
//###########################################################################################################

 var AvideoLinks = ["https://www.youtube.com/embed/z3bf6wsKTxw?si=pSSUlM_rPQSe6--e", "https://www.youtube.com/embed/Xqdu_RiiC2c?si=WdtjNH-5l8CeyCJD"
];


var AvideoNames = [ 
  "Quiz 1 | كويزات الترم" ,  "Quiz 2 | كويزات الترم"
];

 var AvideoLinks1 = ["https://www.youtube.com/embed/z3bf6wsKTxw?si=pSSUlM_rPQSe6--e", "https://www.youtube.com/embed/Xqdu_RiiC2c?si=WdtjNH-5l8CeyCJD"
];


var AvideoNames1 = [ 
  "Quiz 1 | كويزات الترم" ,  "Quiz 2 | كويزات الترم"
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


 var RelzLinks = ["https://www.youtube.com/embed/C35aCG3_n9k?si=kIrxAIb9-bNiY8AX","https://www.youtube.com/embed/pM0L8ceyAmY?si=fj-xA_jhAXYBgDg9",
                 "https://www.youtube.com/embed/yiCEbw4iB5s?si=YnMS44cyp2b_eQIb"];


var RelzNames = [ "تجميعات | part 1" ,  "تجميعات | part 2" ,  "مراجعة الدكتور | Reviw"];



 var AssLinks = ["https://www.youtube.com/embed/Vl51ryeWZy4?si=8SWp2P0PxNgmq4b7","https://www.youtube.com/embed/5yCpe074Yz4?si=lr13zqxPPOUAsNXw",
                "https://www.youtube.com/embed/dh-nblXPO7A?si=AFXgghuvHiV6Z9P-","https://www.youtube.com/embed/Xls_tSzjVUk?si=L-3Gge5Xo1jbnJFv",
                "https://www.youtube.com/embed/YRaCoBjS2z4?si=AdVzhxpO6VxucPc9"];


var AssNames = [ "Lab 1" ,  "Assignment Lab 2" ,"Assignment Lab 3" , "Exercise Lab 4","Assignment Lab 4"];




  
 var BankLinks = [""];


var BankNames = [ ""];
































//###########################################    Files Lectuers   ###########################################
//###########################################    Files Lectuers   ###########################################

//###########################################################################################################
//###########################################################################################################

 var FileLinks = ["https://drive.google.com/drive/folders/17dlYRYobJz_-IA9lFRK0jaRR6hhCNsPk?usp=sharing"];


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
