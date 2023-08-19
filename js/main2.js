$(document).ready(function() {
    $('.open-btn').click(function() {
      $('#loginModal').modal('show');
    });
  
    $('.closeButton').click(function() {
      $('#loginModal').modal('hide');
    });
  
  
    $('#loginButton').click(function() {
      var username = $('#username').val();
      var password = $('#password').val();
      var errorMessage = $('#error-message');
  
      if (username === 'alzeeka' && password === 'java') {
        // إنشاء ملف تعريف الارتباط
        document.cookie = 'username=' + username + '; expires=30; path=/';
        window.location.href = 'java.html';
      } 
      else if (username === 'zak' && password === 'cplus') {
        // إنشاء ملف تعريف الارتباط
        document.cookie = 'username=' + username + '; expires=30; path=/';
        window.location.href = 'c.html';
      }
      else if (username === 'intro' && password === 'intro002') {
        // إنشاء ملف تعريف الارتباط
        document.cookie = 'username=' + username + '; expires=30; path=/';
        window.location.href = 'intro.html';
      }
      else if (username === 'logic' && password === 'logic02') {
        // إنشاء ملف تعريف الارتباط
        document.cookie = 'username=' + username + '; expires=30; path=/';
        window.location.href = 'logic.html';
      }
      else {
        errorMessage.text('اسم المستخدم أو كلمة المرور غير صحيحة');
      }
    });




    
  });