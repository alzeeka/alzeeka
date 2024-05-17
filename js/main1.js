




$(document).ready(function() {
   var videoLinks = ["https://www.youtube.com/embed/Bne2jPhQMrc?si=LdeR80yKfrsRrxDS",
  "https://www.youtube.com/embed/wOMxpwWlf3U?si=rxGtOG5nHCTyZIiy",
  "https://www.youtube.com/embed/79EgaXZ3grc?si=guEWsm6grAOyBWr4",
  "https://www.youtube.com/embed/wB5Qv7fbMmI?si=uz5DKFTRZcwddt4t",
  "https://www.youtube.com/embed/64gWpJ_I_pk?si=hJRLQckwRzpSjXkH",
  "https://www.youtube.com/embed/ydlm0P4yFeQ?si=e2nv5T_00qvUVleU"];


  var videoNames = [ " شرح خطة المقرر ",
  " lectuer 1.1 | Components of a Personal Computer ",
  " lectuer 1.2 | What is programming ",
  " lectuer 1.3 | Java and programming language",
  " lectuer 1.4 | Java program ",
  " كتابة اول برنامج عملي"];

  var videoLinks1 = ["https://www.youtube.com/embed/Bne2jPhQMrc?si=LdeR80yKfrsRrxDS",
  "https://www.youtube.com/embed/wOMxpwWlf3U?si=rxGtOG5nHCTyZIiy",
  "https://www.youtube.com/embed/79EgaXZ3grc?si=guEWsm6grAOyBWr4",
  "https://www.youtube.com/embed/wB5Qv7fbMmI?si=uz5DKFTRZcwddt4t",
  "https://www.youtube.com/embed/64gWpJ_I_pk?si=hJRLQckwRzpSjXkH",
  "https://www.youtube.com/embed/ydlm0P4yFeQ?si=e2nv5T_00qvUVleU"];


  var videoNames1 = [ " شرح خطة المقرر ",
  " lectuer 1.1 | Components of a Personal Computer ",
  " lectuer 1.2 | What is programming ",
  " lectuer 1.3 | Java and programming language",
  " lectuer 1.4 | Java program ",
  " كتابة اول برنامج عملي"];


  var videoLinks2 = ["https://www.youtube.com/embed/b1PBy4rKd3M?si=fEMnRApSPpFF3F7f","https://www.youtube.com/embed/TVvrOF-8tsA?si=morPBJqxu9fZH3f5",
                    "https://www.youtube.com/embed/_PHGldnjzNg?si=8Av55dF3MOBGq8DG","https://www.youtube.com/embed/2uPCMEstGUE?si=jToaP-Ovwyncxw53"];


  var videoNames2 = ["L2.1 java program sturactuer" , "L2.2 Declaretion", "L2.3 Assignment and default value","L2.4 type casting & Arithmetic operators"];


  var videoLinks3 = ["https://www.youtube.com/embed/h7uwtyU4OK0?si=IItFoPIQbc90NvRp","https://www.youtube.com/embed/lW_Ip6l_tr0?si=XBHqk3X5tGnxEhBW",
                     "https://www.youtube.com/embed/LUj9MXITRTE?si=SFwFxb7GuQ9mZ5f1","https://www.youtube.com/embed/tIdKboxUlNM?si=57Y3uIFWGkd5Kcwt",
                    "https://www.youtube.com/embed/y07PBNMvNxE?si=qaAiP0sZwzOLkKtX"];


  var videoNames3 = ["L3.1 declaration and assignment cont...","L3.2 class String","L3.3 class String Examples","L3.4 Escape Sequences and comment and Exercises","L3.5 character sets"];

    var videoLinks4 = ["https://www.youtube.com/embed/wGTVKb3eG5Q?si=C0yQL4V9tqg_Fya1","https://www.youtube.com/embed/5EXe021kBgY?si=dhm1c7pUKzZ_8Pi4","https://www.youtube.com/embed/IK71utrybeU?si=qQ5DoRQoAz55aFFf"];


  var videoNames4 = ["L4.1 output, money format","L4.2 console input","L4.3 Examples and Delimiter"];


 var videoLinks5 = ["https://www.youtube.com/embed/bTGgBLhRBYY?si=YAtUZ5yQ49SlTvdU","https://www.youtube.com/embed/Ir-BT_0dNkk?si=IfNKXTXF9yP7SGEj",
                   "https://www.youtube.com/embed/KuvT5zxuJiU?si=72OJ8NXSbJxj4ETR","https://www.youtube.com/embed/P0015CPLQ_8?si=bC0B2OlBnQGm5Q4X"];


  var videoNames5 = ["L5.1 Flow of Control 1","L5.2 if - if-else - nested if","L5.3 Switch Statement","L5.4 boolean Excepertion"];


 var videoLinks6 = ["https://www.youtube.com/embed/rUC2GksaRyQ?si=HdoDSC7tLh1CR1_L","https://www.youtube.com/embed/l1lpooOb4P8?si=F3qX_qosTNxoNMf9",
                   "https://www.youtube.com/embed/JgL97sjWfHo?si=h6FT1DErSIuXAtLq","https://www.youtube.com/embed/2LzQInPliE0?si=1-1aJjUtDMEO_wtw",
                   "https://www.youtube.com/embed/mREn6pO6e7E?si=Ogqf3i1FLk3UE7NN","https://www.youtube.com/embed/Wt6RmdRBFHE?si=T-dzrWkKK1NCoUAW"];


  var videoNames6 = ["L 6.1 Looping and while loop","L6.2 do-while loop","L6.3 Exercises","L6.4 for Statement","L6.5 Nested loop","L6.6 break and continue and exit"];


var videoLinks7 = ["https://www.youtube.com/embed/B4QtSulWOQ8?si=fXzwqpgENv6Sq3sr","https://www.youtube.com/embed/PaI5qxPoyS8?si=NU_uBkZSBZ2612b9",
                  "https://www.youtube.com/embed/aYnMHanCNis?si=iL8Z8EezdeTCsPD7"];


  var videoNames7 = ["L 7.1 classes and object","L 7.2 constructor","L 7.3 Methods and this"];



var videoLinks8 = ["https://www.youtube.com/embed/AHkJqqzpWrU?si=bTnWS1avO-s_fYJ2","https://www.youtube.com/embed/fOUh2u4VBAg?si=gNZs_uzNyuPeO5Kq",
                  "https://www.youtube.com/embed/V5zlqF6lHTU?si=O7-wTNngOOjUg05r"];


  var videoNames8 = ["L 8.1 private and public","L 8.2 this parameter","L 8.3 constructor"];



  var videoLinks9 = ["","","https://www.youtube.com/embed/E9YAZBZO5KM?si=vi33mGEubhGA5g60"];


  var videoNames9 = ["L 9.1 ","L 9.2 ","L 9.3 Static variable and math methods"];


  var videoLinks10 = ["https://www.youtube.com/embed/zAqcgnDowfY?si=wPKn6ByBbgdPDmpO","https://www.youtube.com/embed/qph3JwIHAn8?si=0yM1CWUFCR-QmAnA",
                      "https://www.youtube.com/embed/TSTE8LIIWpU?si=cx6faPS5n5kO5mvW"];


  var videoNames10 = ["L 10.1 Array","L 10.2 ِ array ","L 10.3 Array operation "];


  
  var videoLinks11 = ["https://www.youtube.com/embed/XtWFkyaxRQk?si=PcDixfW-T9rYFt3a","https://www.youtube.com/embed/FTLShrMiUec?si=i_1UKrDQnYqJoweE"];


  var videoNames11 = ["L 11.1 sorting , enumerated","L 11.2 ِ 2-D arrays "];


//###########################################    A Lectuers   ###########################################
//###########################################    A Lectuers   ###########################################

//###########################################################################################################
//###########################################################################################################

 var AvideoLinks = ["https://www.youtube.com/embed/Bne2jPhQMrc?si=LdeR80yKfrsRrxDS"
];


var AvideoNames = [ 
"  كتابة اول برنامج عملي "
];

var AvideoLinks1 = ["https://www.youtube.com/embed/ydlm0P4yFeQ?si=sY75-mj5CqpHfvaO","https://www.youtube.com/embed/Vl51ryeWZy4?si=GS05q8YHfbwBIVpy"];


var AvideoNames1 = [ "  كتابة اول برنامج عملي " ,  "Lab 1 print"];


var AvideoLinks2 = ["https://www.youtube.com/embed/Y5wvUIW0fy0?si=wY8omdOcTlNH_i3I" ,"https://www.youtube.com/embed/5yCpe074Yz4?si=9C3loe_LjEWMqWtr" ];


var AvideoNames2 = ["Lab 2.1 variables","Lab 2.2 Exercises"];


var AvideoLinks3 = ["https://www.youtube.com/embed/wy4IR3GIpPs?si=Pm7mGItbNkAzvdO_","https://www.youtube.com/embed/dh-nblXPO7A?si=06ikCV0BzqBwmygk"];


var AvideoNames3 = ["Lab 3.1 class String","Lab 3.2 Exercises  الأكواد المستخدمة بوصف الفيديو"];


var AvideoLinks4 = ["https://www.youtube.com/embed/xATOnPwAi20?si=QNB4KFnPKqik2Woc","https://www.youtube.com/embed/Xls_tSzjVUk?si=pbzebcJjFWdr-ZRC",
                   "https://www.youtube.com/embed/YRaCoBjS2z4?si=nXfn3syxxNEPgdkf"];


var AvideoNames4 = ["Lab 4.1 Console input & Output","Lab 4.2 Exercise الأكواد المستخدمة بوصف الفيديو","Lab 4.3 Assignment  الأكواد المستخدمة بوصف الفيديو"];


var AvideoLinks5 = ["https://www.youtube.com/embed/1oG2bQeBNxY?si=TT6qY0pr2zYY7yCU","https://www.youtube.com/embed/nLzE08cYRlU?si=N3mV9T1GYvC-HgsL",
                     "https://www.youtube.com/embed/s85rNlbpgvc?si=jd5rUblA7BLTj6p1"];


var AvideoNames5 = ["Lab 5.1 Simple if & multiway if-else","Lab 5.2 Exerxises","Lab 5.3 Assignment blood"];



  var AvideoLinks6 = ["https://www.youtube.com/embed/KM0MA_JZOAU?si=HsSWR2SC3QMbQHT6","https://www.youtube.com/embed/CbFroM8w22g?si=GQXPZXz3rTzracDc",
                     "https://www.youtube.com/embed/YGbHjFrFoI0?si=4FDzCvpPsg049Y3x"];


var AvideoNames6 = ["Lab 6.1 Switch الأكواد موجودة بوصف الفيديو","Lab 6.2 Exerxises الأكواد موجودة بوصف الفيديو","Lab 6.3 Assignment الأكواد موجودة بوصف الفيديو"];

 var AvideoLinks7 = ["https://www.youtube.com/embed/S_bZ4N01Y44?si=mIlidx7ShKF5__et","https://www.youtube.com/embed/dDLjoSwwB4Y?si=yw4zhOe3eXzJIauq",
                     "https://www.youtube.com/embed/agsMcJQAi7A?si=lKPlCsSlfqJ3p95Q"];


var AvideoNames7 = ["Lab 7.1 for loop ","Lab 7.2 Exerxises الأكواد موجودة بوصف الفيديو","Lab 7.3 Assignment الأكواد موجودة بوصف الفيديو"];


var AvideoLinks8 = ["https://www.youtube.com/embed/d9sT2mnoVxk?si=ndMf8TIx4w9oRVFc","https://www.youtube.com/embed/8UIpd-5DNTo?si=QYfff3z3vPiNvD0o",
                     "https://www.youtube.com/embed/q6wbBUvbByI?si=uJl8yKZGFH-ot-JH"];


var AvideoNames8 = ["Lab 8.1 while loop ","Lab 8.2 Exerxises الأكواد موجودة بوصف الفيديو","Lab 8.3 Assignment الأكواد موجودة بوصف الفيديو"];


var AvideoLinks9 = ["https://www.youtube.com/embed/hqskidXcHS8?si=FjIdIizRzfvGE3AI"];


var AvideoNames9 = ["Lab 9 do while loop "];

var AvideoLinks11 = ["https://www.youtube.com/embed/9bmvVTbPNSg?si=0JP2UVqYen4y3-XP","https://www.youtube.com/embed/f0W82pc3pbM?si=XYKVmOnUPf5b1IDK",
                    "https://www.youtube.com/embed/gG_d4WKWkjQ?si=9c-no-dqGuRCX5kn","https://www.youtube.com/embed/1Xf9f16lQ4g?si=qrGdaBoSY0x4lwoD"];


var AvideoNames11 = ["Lab 11.1 OOP concept ", "Lab 11.2 class student" , "Lab 11.3 Exercises 1 , 2" , "Lab 11.4 Assignement"];


var AvideoLinks12= ["https://www.youtube.com/embed/yirBGR0d8-o?si=t6WCcooCSEbt27Hi","https://www.youtube.com/embed/oVbxlG68FoQ?si=BoZzn7oCbj_O8HDF",
                   "https://www.youtube.com/embed/5Dnm5g-WHrs?si=JwmOOPaSDSnu_rmo"];


var AvideoNames12 = ["Lab 12.1  1D array","Lab 12.2  Exercises 1 , 2 ","Lab 12.3  Assignment"];
//###########################################################################################################
//###########################################################################################################

var OvideoLinks1 = ["https://www.youtube.com/embed/4wmMeX6p8Q8?si=bVBJ2XC6sEHkYBAi","https://www.youtube.com/embed/AAx81hE3B2o?si=yFgsXzMH2_Uxm-1r",
                   "https://www.youtube.com/embed/Ea7VwHERjNU?si=iny5qEM5MdU2RXxn","https://www.youtube.com/embed/mEG6QGvAoTE?si=t5o0vYtI9ae9TlST",
                   "https://www.youtube.com/embed/w4SCTucZapo?si=Undrzw1bNANqLL67","https://www.youtube.com/embed/rKgR69ZLD8Q?si=KD2r5hIKaMuQBEXG",
                   "https://www.youtube.com/embed/1IflU8WaBuY?si=5LcaMXxqh4r6mLFT","https://www.youtube.com/embed/mZ65ZDVxEBc?si=740ZenpyJ5Z4OkUt",
                   "https://www.youtube.com/embed/hbNH176-OUs?si=fuqFCpVOa5tfZa_O","https://www.youtube.com/embed/vDpPNTqaDgs?si=O0VQb1nkgzSlOiCX",
                   "https://www.youtube.com/embed/yDah7ujFdtM?si=TqqeSAbcdanWqwvN"];


var OvideoNames1 = [ "CH1 part 1 java language" ,  "CH 1 part 2 java program and print, الاكواد بوصف الفيديو" ,
                    "CH 1 part 3 programming Level","CH 1 part 4 Syntax and Error messages",
                   "CH 1 part 5 Declaer and assignment","CH 1 part 6 Variables Names Rules and Shorthand",
                   "CH 1 part 7 type cast and Athematic operators","CH 1 part 8 tasks & increment & Decrement",
                   "CH 1 part 9 class String","CH 1 part 10 String methods" ,
                   "CH 1 part 11 Escape Sequences and comment and Exercises"];


var OvideoLinks2 = ["https://www.youtube.com/embed/xv0IvN-ucj0?si=brpkv8lXCSM0IyWv","https://www.youtube.com/embed/QXwhZUoGN0I?si=MRU8rtm5KPfsZ52t",
                   "https://www.youtube.com/embed/dQszhBS_rqM?si=EhB2ReXpp0SaAtxu","https://www.youtube.com/embed/4xI4fRjvMUs?si=C9fdd5d69B3Kxm-4"];


var OvideoNames2 = [ "CH 2 part 1 consol output print println printf","CH 2 part 2 تمرين عملي printf    الكود بالوصف","CH 2 part 3 class Scanner",
                   "CH 2 part 4 Scanner methods"];


  var OvideoLinks3 = ["https://www.youtube.com/embed/tQtYUvQONlI?si=Ou6AnmIBdIx9hhLF","https://www.youtube.com/embed/8peBvZNHhys?si=zxyR7mUJUpmjjycL",
                     "https://www.youtube.com/embed/P33TET0hnlI?si=kHmbCzkIVf1XL8Ep","https://www.youtube.com/embed/0C5Vxdk3u9o?si=aplXKSZn0BAendB6",
                     "https://www.youtube.com/embed/24Iw0YMcP54?si=g6aFHLPgROh5c_Tz","https://www.youtube.com/embed/PTmx3kORxnU?si=BtGfl3HHqe8Ka3AT",
                     "https://www.youtube.com/embed/NaX2ZZzejxI?si=WjXCudSTx6BFNnbV","https://www.youtube.com/embed/-eitsnNzHVY?si=DmNQ0kq67C4-2j7z"];


var OvideoNames3 = [ "CH 3 part 1 flow of control and if else","CH 3 part 2 Nested if and multiway statment",
                    "CH 3 part 3 Switch statment","CH 3 part 4 Condatinal oprator ands Precedence and Associativity Rules",
                    "CH 3 part 5 while and do-while","CH 3 part 6 For loop","CH 3 part 7 infinite loop and nested loop","CH 3 part 8 break and continue and exit"];




  var OvideoLinks4 = ["https://www.youtube.com/embed/aBPHSYvSl1o?si=11QwXWhOv9-gPpJY","https://www.youtube.com/embed/1AzmqkCw5Xw?si=TBUTMNT_LPGJXuWd",
                     "https://www.youtube.com/embed/PUJ_g4C67Cc?si=BwxNgD4-mOKreNqr","https://www.youtube.com/embed/usVuaKmC6WU?si=C46ibvBJb3BZ5CbG",
                     "https://www.youtube.com/embed/c7LvQMBoHYs?si=PK2I9X8IwR1HYOZq"];


var OvideoNames4 = [ "CH 4 part 1 Class and object","CH 4 part 2 void and return type methods","CH 4 part 3 local variables and parameter and  this keyword",
                   "CH 4 part 4 Encapsulation and overloading","CH 4 part 5 equals and toString methods and constructor"];

  var OvideoLinks5 = ["https://www.youtube.com/embed/-xXixQxaSe4?si=ANwKh_Y6SdRZhMuu","https://www.youtube.com/embed/mlRFIxSw2oU?si=KBB8V3r9yPkvjho8",
                     "https://www.youtube.com/embed/VE19YJt8IBo?si=N9CyR2haOLyvTAS_"];


var OvideoNames5 = [ "CH 5 part 1 Static methods","CH 5 part 2 Static variables","CH 5 part 3 Math class" ];

var OvideoLinks6 = ["https://www.youtube.com/embed/5Ztl2sMq8Vs?si=oJTmPNpUjtj8QVvY","https://www.youtube.com/embed/DjM999N2sss?si=eNF9kXrn0Sh0HAfl" ];


var OvideoNames6 = [ "CH 6 part Array","CH 6 part 2 part 2 array and Pitfalls"];

//###########################################    Homework   ###########################################
//###########################################    Homework   ###########################################

//###########################################################################################################
//###########################################################################################################

 var HvideoLinks = ["https://www.youtube.com/embed/N1NUSU0j2Vc?si=nks4jYebApKMbkIK","https://www.youtube.com/embed/_o-gR-uniX4?si=OiCeWyIGW-ku7duj",
                   "https://www.youtube.com/embed/FmvWG88j-B4?si=zUujs_qcvZGM-pIl","https://www.youtube.com/embed/s85rNlbpgvc?si=DO_dS_leDPERCJka",
                   "https://www.youtube.com/embed/YGbHjFrFoI0?si=xKpqoo53YW93zcT0"];


var HvideoNames = ["Assignment1 Q1","Assignment1 Q2 , Q3","Assignment1 Q4 , Q5" , "Assignment 3 برنامج ضغط الدم","Assignment 4 String methods by Switch"];













//###########################################################################################################
//###########################################################################################################


 var RelzLinks = ["https://www.youtube.com/embed/evIx0yv4dwY?si=myYDqCyHczCHao9i","https://www.youtube.com/embed/2ruWBmgnX_0?si=3MNtavaPY3h7fqER","https://www.youtube.com/embed/AMJVuIz7mLM?si=I8nIJgZVe4N_LiV4","https://www.youtube.com/embed/s85rNlbpgvc?si=2OoUjDD-Qf9XQbUS",
                 "https://www.youtube.com/embed/YGbHjFrFoI0?si=yLN3He0mMLj5vMNQ"];


var RelzNames = ["printing","input and output",
 

 
 "برنامج انشاء كلمات السر" , "برنامج ضغط الدم " , "عمل قائمة بالسويتش" 
];




































//###########################################    Files Lectuers   ###########################################
//###########################################    Files Lectuers   ###########################################

//###########################################################################################################
//###########################################################################################################

 var FileLinks = ["https://drive.google.com/drive/folders/1D2xgmTF2xCWB5sVN9YZfZXfg2UFKBfV-?usp=drive_link",
"pdf/CSCE101/L1M.pdf","pdf/CSCE101/‏‏‏‏‏‏lectuer 2 ملخص.pdf","pdf/CSCE101/‏‏‏‏‏‏lectuer 3 ملخص.pdf"];


var FileNames = [ " جميع الملفات ","L1 ملخص","L2 ملخص","L3 ملخص"];











//###########################################################################################################
//###########################################################################################################


 var BankLinks = ["https://www.youtube.com/embed/rZe62YFTzMY?si=yVl5mLuKNOB5Tw7q","https://www.youtube.com/embed/aKJmwAsrIGA?si=0DFgZzQcfkJWA8xQ",
                  "https://www.youtube.com/embed/z3bf6wsKTxw?si=pSSUlM_rPQSe6--e","https://www.youtube.com/embed/Y-5a_o0o6MI?si=lgWFpxVJtITydEMg",
                  "https://www.youtube.com/embed/Xqdu_RiiC2c?si=WdtjNH-5l8CeyCJD"
];


var BankNames = [ 
"Output Quiz ","L1 Quiz" ,"Quiz1 من الترم السابق","if Statement Quiz","كويزات الترم | Quiz 1" 
];
















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
  const Ali12 = document.querySelector("#AL12");









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

  Ali3.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = AvideoLinks3;
    videoNames = AvideoNames3 ;
  
  window.onload();
  
  });

   Ali4.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = AvideoLinks4;
    videoNames = AvideoNames4 ;
  
  window.onload();
  
  }); 


 Ali5.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = AvideoLinks5;
    videoNames = AvideoNames5 ;
  
  window.onload();
  
  });

   Ali6.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = AvideoLinks6;
    videoNames = AvideoNames6 ;
  
  window.onload();
  
  });


 Ali7.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = AvideoLinks7;
    videoNames = AvideoNames7 ;
  
  window.onload();
  
  });


Ali8.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = AvideoLinks8;
    videoNames = AvideoNames8 ;
  
  window.onload();
  
  });


Ali9.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = AvideoLinks9;
    videoNames = AvideoNames9 ;
  
  window.onload();
  
  });


Ali11.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = AvideoLinks11;
    videoNames = AvideoNames11 ;
  
  window.onload();
  
  });

  Ali12.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    
    videoLinks = AvideoLinks12;
    videoNames = AvideoNames12 ;
  
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




   const relz = document.querySelector("#relz");
    relz.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = RelzLinks;
    videoNames = RelzNames ;
   
  
  window.onload();
  
  });

  


   const bank = document.querySelector("#bank");
    bank.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = BankLinks;
    videoNames = BankNames ;
   
  
  window.onload();
  
  });
  
 




const CH1 = document.querySelector("#CH1");
const CH2 = document.querySelector("#CH2");
const CH3 = document.querySelector("#CH3");
const CH4 = document.querySelector("#CH4");
const CH5 = document.querySelector("#CH5");
const CH6 = document.querySelector("#CH6");


  CH1.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = OvideoLinks1;
    videoNames = OvideoNames1 ;
   
  
  window.onload();
  
  });


  CH2.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = OvideoLinks2;
    videoNames = OvideoNames2 ;
   
  
  window.onload();
  
  });
 
    CH3.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = OvideoLinks3;
    videoNames = OvideoNames3 ;
   
  
  window.onload();
  
  });

 
    CH4.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = OvideoLinks4;
    videoNames = OvideoNames4 ;
   
  
  window.onload();
  
  });





 CH5.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = OvideoLinks5;
    videoNames = OvideoNames5 ;
   
  
  window.onload();
  
  });
});


 CH6.addEventListener("click", function() {
    HomeWork.style.display="none"; 
    videoRow.innerHTML = "";
    Files.innerHTML="";
    videoLinks = OvideoLinks6;
    videoNames = OvideoNames6 ;
   
  
  window.onload();
  
  });
});
