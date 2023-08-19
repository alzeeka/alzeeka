function getCookie(name) {
    var cookieName = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookies = decodedCookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  }

  // التحقق من حالة تسجيل الدخول
  var isLoggedIn = (getCookie('username') !== null);
  if (!isLoggedIn) {
    window.location.href = 'index.html'; // توجيه المستخدم إلى صفحة تسجيل الدخول إذا لم يكن مسجل الدخول
  }