




$(document).ready(function() {
   var videoLinks = ["https://www.youtube.com/embed/nGRprT2rHsg?si=L1PC_e0ey2aJaHZw",
                    "https://www.youtube.com/embed/44xEY60Rhqs?si=kqY6pKQ4Bo-IMRDj",
                    "https://www.youtube.com/embed/XyKZjk4Q8V4?si=d4s3P8wigtMYfDKR",
                    "https://www.youtube.com/embed/4nLfyLKeyuE?si=iw9tA3RPoPMFGG5y"];


  var videoNames = [ "L1.1 Review of Basic Java","L1.2 what is OOP","L 1.3 | Exercises program","L1.4 UML Class Diagram"];

  var videoLinks1 = ["https://www.youtube.com/embed/nGRprT2rHsg?si=L1PC_e0ey2aJaHZw",
                    "https://www.youtube.com/embed/44xEY60Rhqs?si=kqY6pKQ4Bo-IMRDj",
                    "https://www.youtube.com/embed/XyKZjk4Q8V4?si=d4s3P8wigtMYfDKR",
                    "https://www.youtube.com/embed/4nLfyLKeyuE?si=iw9tA3RPoPMFGG5y"];


  var videoNames1 = [ "L1.1 Review of Basic Java","L1.2 what is OOP","L 1.3 | Exercises program","L1.4 UML Class Diagram"];


  var videoLinks2 = [];


  var videoNames2 = [];


  var videoLinks3 = [];


  var videoNames3 = [];











//###########################################    A Lectuers   ###########################################
//###########################################    A Lectuers   ###########################################

//###########################################################################################################
//###########################################################################################################

 var AvideoLinks = ["https://www.youtube.com/embed/gYlCQv8b8Dw?si=7B66tGjQBnY5vLql"
];


var AvideoNames = [ 
" شرح عملي | Encapsulation "
];

var AvideoLinks1 = ["https://www.youtube.com/embed/gYlCQv8b8Dw?si=7B66tGjQBnY5vLql"];


var AvideoNames1 = [ " شرح عملي | Encapsulation " ];


var AvideoLinks2 = [];


var AvideoNames2 = [];


var AvideoLinks3 = [];


var AvideoNames3 = [];











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






































//###########################################    Files Lectuers   ###########################################
//###########################################    Files Lectuers   ###########################################

//###########################################################################################################
//###########################################################################################################

 var FileLinks = ["https://drive.google.com/drive/folders/1WCYXJoXEJccJ2AvM1gPiJI4zbExhvIYX?usp=sharing",
"pdf/CSCE102/L1 Basic Java and OOP.pdf"];


var FileNames = [ " جميع الملفات ",
" Lectuer 1 ملخص "];











//###########################################################################################################
//###########################################################################################################



















  M_all = document.querySelector("#M_ALL");
  Files = document.querySelector("#Files");
 
 

  var Files = document.getElementById("#Files");

  M_all.addEventListener("click", function() {
    videoRow.innerHTML = "";
    Files.innerHTML="";
    HomeWork.style.display="block";
    
   
    
  
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
const li2 = document.querySelector("#L2");
const li3 = document.querySelector("#L3");
const li4 = document.querySelector("#L4");
const li5 = document.querySelector("#L5");
const li6 = document.querySelector("#L6");
const li7 = document.querySelector("#L7");
const li8 = document.querySelector("#L8");
const li9 = document.querySelector("#L9");
const li10 = document.querySelector("#L10");
const li11 = document.querySelector("#L11");






li1.addEventListener("click", function() {
  
  HomeWork.style.display="none";   
  videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = videoLinks1;
    videoNames = videoNames1 ;
   
  
  window.onload();
  
  });


  li2.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks2;
    videoNames = videoNames2 ;
  
  window.onload();
  
  });

  li3.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks3;
    videoNames = videoNames3 ;
  
  window.onload();
  
  });
  li4.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks4;
    videoNames = videoNames4 ;
  
  window.onload();
  
  });
  li5.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks5;
    videoNames = videoNames5 ;
  
  window.onload();
  
  });

  li6.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = videoLinks6;
    videoNames = videoNames6 ;
   
  
  window.onload();
  
  });


  li7.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks7;
    videoNames = videoNames7 ;
  
  window.onload();
  
  });

  li8.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks8;
    videoNames = videoNames8 ;
  
  window.onload();
  
  });
  li9.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks9;
    videoNames = videoNames9 ;
  
  window.onload();
  
  });
  li10.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks10;
    videoNames = videoNames10 ;
  
  window.onload();
  
  });
  li11.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks11;
    videoNames = videoNames11 ;
  
  window.onload();
  
  });










//###########################################################################################################
//###########################################################################################################


const Ali1 = document.querySelector("#AL1");
const Ali2 = document.querySelector("#AL2");
const Ali3 = document.querySelector("#AL3");
const Ali4 = document.querySelector("#AL4");
const Ali5 = document.querySelector("#AL5");
const Ali6 = document.querySelector("#AL6");
const Ali7 = document.querySelector("#AL7");
const Ali8 = document.querySelector("#AL8");
const Ali9 = document.querySelector("#AL9");
const Ali10 = document.querySelector("#AL10");
const Ali11 = document.querySelector("#AL11");









  Ali1.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = AvideoLinks1;
    videoNames = AvideoNames1 ;
   
  
  window.onload();
  
  });


  Ali2.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = AvideoLinks2;
    videoNames = AvideoNames2 ;
  
  window.onload();
  
  });

  li3.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks3;
    videoNames = videoNames3 ;
  
  window.onload();
  
  });
  li4.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks4;
    videoNames = videoNames4 ;
  
  window.onload();
  
  });
  li5.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks5;
    videoNames = videoNames5 ;
  
  window.onload();
  
  });

  li6.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = videoLinks6;
    videoNames = videoNames6 ;
   
  
  window.onload();
  
  });


  li7.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks7;
    videoNames = videoNames7 ;
  
  window.onload();
  
  });

  li8.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks8;
    videoNames = videoNames8 ;
  
  window.onload();
  
  });
  li9.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks9;
    videoNames = videoNames9 ;
  
  window.onload();
  
  });
  li10.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks10;
    videoNames = videoNames10 ;
  
  window.onload();
  
  });
  li11.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = videoLinks11;
    videoNames = videoNames11 ;
  
  window.onload();
  
  });







   //###########################################################################################################
//###########################################################################################################     
    
H_ALL = document.querySelector("#H_ALL");
HomeWork = document.querySelector("#HomeWork");
   H_ALL.addEventListener("click", function() {
    HomeWork.style.display="block";
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = HvideoLinks;
    videoNames = HvideoNames ;
   
  
  window.onload();
  
  });




  
  
 











 
  

 


  
});
