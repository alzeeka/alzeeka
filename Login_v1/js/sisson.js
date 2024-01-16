




$(document).ready(function() {


  
const ESM = ["cf0091cea7c8ee7327dc3a3d2845f94b","11b9e65ecd8eee8c9a545e8ee7f09bdc",  "735f33abd0d7909db1c7164370712266","735f33abd0d7909db1c7164370712266"];


const KLM = ["CSCE101", "CSCE102", "intro", "CPluse"];



$('#loginButton').click(function() {
  var user = $('#username').val();
  const hashValue = CryptoJS.MD5(user).toString();
  var password = $('#password').val();
  var errorMessage = $('#error-message');
  const usernameIndex = ESM.indexOf(hashValue);

 
      if(usernameIndex === -1) {
    errorMessage.text('اسم المستخدم أو كلمة المرور غير صحيحة');
   }


  for (let i = 0; i < ESM.length; i++) {
    if (hashValue === ESM[i] && password === KLM[i]) {
      document.cookie = 'username=' + ESM[i] + '; expires=30; path=/';
      window.location.href = `../${KLM[i]}VIP.html`;
     } 
    
  }
  

 
  
 });



  
});
