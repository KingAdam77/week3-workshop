$(document).ready(function() {
    $('#login-form').on('submit', function(event) {
      event.preventDefault();
  
      var email = $('#email').val();
      var password = $('#password').val();
  
      $.post('/login', { email: email, password: password }, function(data) {
        if (data.valid) {
          window.location.href = '/account';
        } else {
          $('#errormsg').removeClass('hidemessage').addClass('showmessage');
        }
      });
    });
  });
  