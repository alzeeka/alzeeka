




$(document).ready(function() {


  
const ESM = ["70a31025536e28676c7985e40d40badf","cd73502828457d15655bbd7a63fb0bc8","cb8205ec3bd898dcc8c0ada1637ad9b7","11b9e65ecd8eee8c9a545e8ee7f09bdc",
             "4ae3a57b0fb307c3725789e947ecc62c","f7923cb06eb10f2588d597dd4cc35d7c","35b36fe63c9099e8faf3a2cad5384711",
            "4565d3511b7d5f5aca604e430ccaab76","fed2ceeb77c8cc9b959882d2fcb3dc9d","f073de52e3dbe491daaf7b563ef7372f","5b258b1303e6a5bbb0053b4bfb7c46e2",
"6fae495aa81bb3a944dbbf0f188deac6","a44a3dce8a1794e518dbb49ce6955b28","fc6a10574d4d8038190341018c83553b"];


const KLM = ["CSCE101","CSCE101", "CSCE102","CSCE102","CSCE102","CSCE102","CSCE102","CSCE102","CSCE102","CSCE102","CSCE101","CSCE101","CSCE102","CSCE102"];



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
