function passwordValidate() {
    let password = document.getElementById("password");
    let passwordC = document.getElementById("passwordC");

    if(password.value == passwordC.value){
        document.getElementById("passwordMatch").innerHTML="";
        passwordC.style.backgroundColor = "chartreuse";
        return true;
    }else{
        document.getElementById("passwordMatch").innerHTML="bos pakiayus";
        passwordC.style.backgroundColor = "lightcoral";
        return false;
    }
}


function loginValidate() {
    let login = document.getElementById("login");
    if (login.checkValidity())

    {
        document.getElementById("logincheck").innerHTML = "";  
        return true; 
    }
    else{
        document.getElementById("logincheck").innerHTML = "HALA TANGA";
        return false;

    }

}

function passwordStrength() {
  let password = document.getElementById("password");
  if(password.checkValidity()==true)
  {
      document.getElementById("strength").innerHTML = "pwede na";
      password.style.backgroundColor = "chartreuse";
      return true;
  }
  else
  {
      document.getElementById("strength").innerHTML = "BOBO MALI";
      password.style.backgroundColor = "lightcoral";
      return false;
  }

}

function genderValidate() {
    let gValidate = document.getElementById("gender");
    if (gValidate.value == "invalid")
    {
        alert("HEHEHEHEE ILAGAY MO KAHIT OTHERS KUNG BAKLA KA");
        return false;
    }
    else{
        return true;
    }

}

function emailValidate() {
    let eVal = document.getElementById("email");
    if (eVal.checkValidity())
{
    document.getElementById("emailcheck").innerHTML = "";
    return true;
}
else{
    document.getElementById("emailcheck").innerHTML = "GERS ANO HA BOBO";
    return false;
}

}

function validate() {
    let isPassOK = passwordValidate();
    let isLoginOK = loginValidate();
    let isStrengthOK = passwordStrength();
    let isGenderOK = genderValidate();
    let isEmailOK = emailValidate();

    if (isPassOK && isLoginOK && isStrengthOK && isGenderOK && isEmailOK) {
        document.getElementById("submit").type = "submit";
    }

}