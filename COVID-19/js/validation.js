function validation() {
  var fullname = document.getElementById('fullName').value;
  var loginId = document.getElementById('loginId').value;
  var password = document.getElementById('password').value;
  if (fullname == '') {
    var message = document.getElementById('msgFullname');
    message.hidden = false;
    return false;
  } else if (loginId == '') {
    var message = document.getElementById('msgLoginId');
    message.hidden = false;
    return false;
  } else if (password == '') {
    var message = document.getElementById('msgPassword');
    message.hidden = false;
    return false;
  }
}

function clearErrMsg() {
  var fullname = document.getElementById('fullName').value;
  var loginId = document.getElementById('loginId').value;
  var password = document.getElementById('password').value;

  if (fullname) {
    var message = document.getElementById('msgFullname');
    message.hidden = true;
  }

  if (loginId) {
    var message = document.getElementById('msgLoginId');
    message.hidden = true;
  }

  if (password) {
    var message = document.getElementById('msgPassword');
    message.hidden = true;
  }
}

function clearFields() {
  var fullname = (document.getElementById('fullName').value = '');
  document.getElementById('loginId').value = '';
  document.getElementById('password').value = '';

  // var message = document.getElementById('msgFullname');

  // if (fullname == '') {
  //   message.hidden = true;
  // }

  return false;
}

function showDetailField() {
  if (document.getElementById('inlineRadioYes').checked) {
    document.getElementById('infoDtl').style.display = 'block';
  } else {
    document.getElementById('infoDtl').style.display = 'none';
  }
}
