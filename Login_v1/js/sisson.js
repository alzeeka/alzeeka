




$(document).ready(function() {


  
const ESM = ["70a31025536e28676c7985e40d40badf","cd73502828457d15655bbd7a63fb0bc8","cb8205ec3bd898dcc8c0ada1637ad9b7","11b9e65ecd8eee8c9a545e8ee7f09bdc",
             "4ae3a57b0fb307c3725789e947ecc62c","f7923cb06eb10f2588d597dd4cc35d7c","35b36fe63c9099e8faf3a2cad5384711","4565d3511b7d5f5aca604e430ccaab76",
             "fed2ceeb77c8cc9b959882d2fcb3dc9d","f073de52e3dbe491daaf7b563ef7372f","5b258b1303e6a5bbb0053b4bfb7c46e2","6fae495aa81bb3a944dbbf0f188deac6",
             "a44a3dce8a1794e518dbb49ce6955b28","fc6a10574d4d8038190341018c83553b","f97a63cfa5e098ac2ea3f753a6c47bc2","7c18f98ec3f9c8f7b4c43261f422cbff",
             "aa19c5fb5b1e63c0e00bbd0704c69754","1d6c95ad833913641be6b34a9306f33e","7e4713beae80078a11ce96f11df1ad1c","85ee8d247374a8f7bb5e1f07a3617453",
             "157fcd7808a342b2ec744ce626ef4a2d","94b3466854b33ee389b78b9f4a6e795d","3df1af7feea931e92e4bd8ef891f2a2b","d7373b9740b8b243ee798d1fd3504905",
             "4d605e048b4c5901f554d33029cf4207","c64489c995349b2b26b446e10f6d0796","cbcb799203788abdd1104ff4c79c6766","fa2a413f3fdc791511abbbc542c499c1"];


const KLM = ["CSCE101","CSCE101", "CSCE102","CSCE102","CSCE102","CSCE102","CSCE102","CSCE102",
             "CSCE102","CSCE102","CSCE101","CSCE101","CSCE102","CSCE102","CSCE102","CSCE101",
             "CSCE102","CSCE102","CSCE102","CSCE101","mid102","CSCE101","CSCE101","CSCE101",
            "CSCE102","mid101","mid102","mid101"];



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
