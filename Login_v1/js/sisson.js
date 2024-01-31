




$(document).ready(function() {


  
const ESM = ["9193ce3b31332b03f7d8af056c692b84","cb8205ec3bd898dcc8c0ada1637ad9b7","11b9e65ecd8eee8c9a545e8ee7f09bdc",
             "4ae3a57b0fb307c3725789e947ecc62c","f7923cb06eb10f2588d597dd4cc35d7c","35b36fe63c9099e8faf3a2cad5384711"];


const KLM = ["CSCE101", "CSCE102","CSCE102","CSCE102","CSCE102","CSCE102"];



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
