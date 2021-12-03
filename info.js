function validateUserName() {
     var error_count = 0;
     var r1 = false;
     var cap1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var str1 = document.forms["signup"]["entry01"].value.trim();
     var alphString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

     var first = str1[0];
     for (var i = 0; i < alphString.length; i++) {
          var re = new RegExp("([A-Z]{1})([a-zA-Z]+)");
          if (cap1[i] == first && str1.match(re)) {
               r1 = true;
          }
     }
     if (!r1) {
          if (error_count < 4) {
               document.querySelector("#errors").innerHTML += " ! First Name should have first character in capital,followed by other characters and consist of ONLY alphabets";
               error_count++;
          }
     }


     var r2 = false;
     var str2 = document.forms["signup"]["entry03"].value.trim();
     //console.log(str2);
     var j = 0;
     var first = str2[0];
     for (var i = 0; i < alphString.length; i++) {
          if (alphString[i] == first && str2.length >= 6) {
               r2 = true;
          }
     }

     if (!r2) {
          if (error_count <4) {
               document.querySelector("#errors").innerHTML += "<br><br>! User Name should begin with alphabet and minimum 6 charcaters long";
               error_count++;
          }
     }


     var r3 = false;
     var str3 = document.forms["signup"]["entry02"].value.trim();

     var first = str3[0];
     for (var i = 0; i < alphString.length; i++) {
          var re = new RegExp("([A-Z]{1})([a-zA-Z]+)");
          if (cap1[i] == first && str3.match(re)) {
               r3 = true;
          }
     }
     if (!r3) {
          if (error_count < 4) {
               document.querySelector("#errors").innerHTML += "<br><br> ! Last Name should have first character in capital,followed by other characters and consist of ONLY alphabets";
               error_count++;
          }
     }

     var r4 = false;
     var str4 = document.forms["signup"]["entry04"].value.trim(); //abcdefg
     var first = str4[0];
     var re1 = new RegExp("(^[A-Za-z]{1})");

     var re = /\d/;

     var count = 0;
     for (var i = 0; i < alphString.length; i++) {

          if (str4.match(re1) && str4.length >= 6 && str4.match(re))   //must have one digit one upper case more than 6 starts with alphabet
          {
               console.log(str4);
               for (var j = 0; j < str4.length; j++) {
                    if (str4[j] == cap1[j]) {
                         count++;
                    }
               }
               if (count > 0) {
                    r4 = true;
               }
          }
     }
     if (!r4) {
          if (error_count < 4) {
               document.querySelector("#errors").innerHTML += "<br><br> ! Password should begin with alphabet and have one uppercase and one digit with minimum 6 characters long";
               error_count++;
          }
     }



     var r6 = false;
     for (var i = 0; i < 3; i++) {
          if (document.signup.r1[i].checked) {
               r6 = true;
          }
     }
     if (!r6) {
          document.querySelector("#errors").innerHTML += "<br><br> ! Please select your Educational status!!";
     }
     var r5 = false;
     var str5 = document.forms["signup"]["entry11"].value.trim();
     if (str5 != str4) {
          if (error_count < 4) {

               document.querySelector("#errors").innerHTML += "<br><br> ! Re-Enter Password ,Password colums are mis-matching ";
               error_count++;
          }
     }
     else { r5 = true; }
     var r7 = false;
     var age = document.forms["signup"]["entry06"].value.trim();
     if (age > 18 && age < 60) {

          r7 = true;
          console.log(r7);
     }
     if (!r7) {
          if (error_count < 4) {
               document.querySelector("#errors").innerHTML += "<br><br>! Please enter a valid age between 18 and 60";
               error_count++;
               console.log(error_count);
          }
     }

     if (r3 == true && r2 == true && r1 == true && r4 == true && r5 == true && r6 == true && r7 == true) {
          alert("Form is filled accurately Click ok to submit");
          return r5;
     }
     else {
          return false;
     }
}
