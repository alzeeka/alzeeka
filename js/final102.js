



$(document).ready(function() {
   var videoLinks = ["https://www.youtube.com/embed/6pggef8Y0q0?si=08LDGEoZIwkITBwH","https://www.youtube.com/embed/BPBAzuDP54M?si=-7eawr6-m_CFn3uY",
                    "https://www.youtube.com/embed/xUc2HuFYvVc?si=PT8FjE4In7a6UvJU","https://www.youtube.com/embed/ffIEYhjuSkQ?si=PWFVmtfBbzVZaqu3"];


  var videoNames = [ "L6 Quiz ","Quiz 8 Exception handling","Quiz 9 File handling","Quiz 10 wrapper class and arrayList"];

   var videoLinks1 = ["https://www.youtube.com/embed/6pggef8Y0q0?si=08LDGEoZIwkITBwH","https://www.youtube.com/embed/BPBAzuDP54M?si=-7eawr6-m_CFn3uY",
                     "https://www.youtube.com/embed/xUc2HuFYvVc?si=PT8FjE4In7a6UvJU","https://www.youtube.com/embed/ffIEYhjuSkQ?si=PWFVmtfBbzVZaqu3"];


  var videoNames1 = [ "L6 Quiz ","Quiz 8 Exception handling","Quiz 9 File handling","Quiz 10 wrapper class and arrayList"];









//###########################################    A Lectuers   ###########################################
//###########################################    A Lectuers   ###########################################

//###########################################################################################################
//###########################################################################################################

 var AvideoLinks = ["https://www.youtube.com/embed/y2IbnL3XlFU?si=eUiW0bwF6-78NPyf"
];


var AvideoNames = [ 
  " كويز الترم4 " 
];



 var AvideoLinks1 = ["https://www.youtube.com/embed/y2IbnL3XlFU?si=eUiW0bwF6-78NPyf"
];


var AvideoNames1 = [ 
  " كويز الترم4 " 
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


 var RelzLinks = ["https://www.youtube.com/embed/41mdoTZZEs4?si=-beVE99Lw6j-ZnwF","https://www.youtube.com/embed/LAYnwsXTbOQ?si=LWwSx_45skg_pMvX",
                 "https://www.youtube.com/embed/an2MSoJ-tQ4?si=SBrdO55R9lNKC5Ck","https://www.youtube.com/embed/bvCvjqOhTcQ?si=YOJaL98Jta8q4H8y",
                 "https://www.youtube.com/embed/-MkS1-_XcIg?si=5HzErxKj4HcpL7MS"];


var RelzNames = [ "L6 convert UML to java code" , "L8 rivew exception handling", "L9 rivew File handling","throw and throws","Final exercises"];



 var AssLinks = ["https://www.youtube.com/embed/bvCvjqOhTcQ?si=rQ1M86SBxYMvM_Q0"];


var AssNames = [ "throw and throws" ];




  
 var BankLinks = ["https://www.youtube.com/embed/uOMXzY4d3vA?si=uutYL1HEArH4n2hP"];


var BankNames = ["final 1"];
































//###########################################    Files Lectuers   ###########################################
//###########################################    Files Lectuers   ###########################################

//###########################################################################################################
//###########################################################################################################

 var FileLinks = ["https://drive.google.com/drive/folders/1Cxw1drP-sZrx2x4ggkT4HfO0Y9VK9WGI?usp=sharing"];


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
