// user name validation  

function namevalidation(){
    var valid = true;
     var name=document.getElementById('username').value ;
    var nameinput= document.getElementById('username');


    let pattern = /^[A-Z][a-z]*[!@#$%^&*]?(\d{1,4}|[a-z]*)$/;
    if(name==''){
        valid=false;
         errors= document.getElementById('name');
        errors.innerHTML="*please enter the name";
        nameinput.classList.add('is-invalid');
        nameinput.classList.remove('is-valid');
    

    } else if (name.length < 3){
        valid=false;
      errors= document.getElementById('name');
        errors.innerHTML="*please enter more than 3 characters";
        nameinput.classList.add('is-invalid');
        nameinput.classList.remove('is-valid');        
    }
    
    else if (!pattern.test(name)){
        valid=false;
        errors= document.getElementById('name');
        errors.innerHTML="*Name should start with capital letter";
        nameinput.classList.add('is-invalid');
        nameinput.classList.remove('is-valid');        
        
    }else{
        
        nameinput.classList.remove('is-invalid');
        nameinput.classList.add('is-valid');
        document.getElementById('name').innerHTML="";
       valid = true;
    }
    return valid; 
}



// email validation

function emailvalidation(){
    var valid = true;
    var email=document.getElementById('mailid').value ;
    var emailinput = document.getElementById('mailid');


    let emailPattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+(\.com|\.in)$/

    if(email==''){
        valid=false;
        var com= document.getElementById('email');
        com.innerHTML="*please enter the mailid";
        emailinput.classList.add('is-invalid');
    }else if(!emailPattern.test(email)){
        valid=false;
        var com= document.getElementById('email');
        com.innerHTML="*please enter the valid mail";
        emailinput.classList.add('is-invalid');    
    }    
    else{
        valid=true;
        document.getElementById('email').innerHTML="";
        emailinput.classList.remove('is-invalid');
        emailinput.classList.add('is-valid');    
    }
    return valid;
}


// dob validation

function dobvalidation(){
     
    var valid = true;

    var date = document.getElementById("dateOfBirth").value;
    var dateinput= document.getElementById("dateOfBirth");
  
  
  if(date == null || date== ''){ 
      valid = false;
      var com= document.getElementById('dateOfBirthrErr');
      com.innerHTML="*please enter the date of birth"
      dateinput.classList.add('is-invalid');
      
  }
  else { 
    valid=true;
      document.getElementById('dateOfBirthrErr').innerHTML='';
    
      dateinput.classList.remove('is-invalid');
      dateinput.classList.add('is-valid');
      
  }
  
  return valid;
}




function phonevalidation(){
    var valid = true;
    var phone = document.getElementById('pnum').value;
    var phoneinput = document.getElementById('pnum');

    let pattern1=/^[6-9]\d{9}$/

    if(phone== ''){
        valid=false;
        var com = document.getElementById('phone');
        com.innerHTML="*please enter the digits";
        phoneinput.classList.add('is-invalid');

    
    }else if(phone.length > 10){
        valid=false;
        var com = document.getElementById('phone');
        com.innerHTML="*please enter the 10 digits";
        phoneinput.classList.add('is-invalid');

    }else if (phone.length < 10){
        valid=false;
        var com = document.getElementById('phone');
        com.innerHTML="*please enter the 10 digits";
        phoneinput.classList.add('is-invalid');
       
      
     }
     else if(!pattern1.test(phone)){
        valid=false;
        var com = document.getElementById('phone');
        com.innerHTML="*First Number should be 6,7,8,9";
        phoneinput.classList.add('is-invalid');
       
      
    }        
    else{
        valid=true;
         phoneinput.classList.remove('is-invalid');
         phoneinput.classList.add('is-valid');

    document.getElementById('phone').innerHTML="";
    
    }
    return valid;
}

// gender validation

function genvalidation(){

var valid = true;
var male = document.getElementById('gridRadios1');
var female = document.getElementById('gridRadios2');
var other = document.getElementById('gridRadios3');
var inputmale = document.getElementById('gridRadios1')
var inputfemale = document.getElementById('gridRadios2');
var inputother = document.getElementById('gridRadios3');



if(male.checked == false && female.checked== false && other.checked==false){
    valid= false;
     var com = document.getElementById('genderError');
     com.innerHTML="*please select the gender";
     inputmale.classList.add('is-invalid');
     inputfemale.classList.add('is-invalid');
     inputother.classList.add('is-invalid');
}else if(male.checked == true && female.checked== false && other.checked==false){
    document.getElementById('genderError').innerHTML="";
    inputmale.classList.remove('is-invalid');
     inputfemale.classList.remove('is-invalid');
     inputother.classList.remove('is-invalid');
     valid=true;
     

}else if(male.checked == false && female.checked== true && other.checked==false){
    document.getElementById('genderError').innerHTML="";
    valid=true;
    inputmale.classList.remove('is-invalid');
     inputfemale.classList.remove('is-invalid');
     inputother.classList.remove('is-invalid');
      
}else if(male.checked == false && female.checked== false && other.checked==true){
    document.getElementById('genderError').innerHTML="";
    valid=true;
    inputmale.classList.remove('is-invalid');
     inputfemale.classList.remove('is-invalid');
     inputother.classList.remove('is-invalid');

}else if(male.checked == true && female.checked== true && other.checked==true){
    document.getElementById('genderError').innerHTML="";
    valid=true;
    inputmale.classList.remove('is-invalid');
     inputfemale.classList.remove('is-invalid');
     inputother.classList.remove('is-invalid');
}else{
    valid=true;
    document.getElementById('genderError').innerHTML="";
}
return valid;
}

// place validation

function placevalidation(){
var valid = true;   
var drop= document.getElementById('inlineFormSelectPref').value;
var inputdrop =document.getElementById('inlineFormSelectPref');

if(drop == "Choose your place"){

    valid=false;
    var com = document.getElementById('droperror');
    com.innerHTML="*please choose your the place";
    inputdrop.classList.add('is-invalid');
}else{
    valid=true;
    document.getElementById('droperror').innerHTML="";
   
    inputdrop.classList.remove('is-invalid')
    inputdrop.classList.add('is-valid')
}
return valid;
}

// check validation

function checkvalidation(){
    var valid = true;
    const check= document.getElementById('defaultCheck1');

if(check.checked == false){
    console.log(check.checked,"jbcjbsjcbs")
    valid=false;
    var com = document.getElementById('checkerror');
    com.innerHTML="*Please Tick The Box To Agree The Policy ";

}if(check.checked == true){
    console.log(check.checked,"jbcjbsjcbs")
    valid=true;
    document.getElementById('checkerror').innerHTML="";
    
}
return valid;
}

// success validation

function update(){
    
    var nameinput= document.getElementById('username');
    var emailinput = document.getElementById('mailid');
    var dateinput= document.getElementById("dateOfBirth");
    var phoneinput = document.getElementById('pnum');   
    var inputdrop =document.getElementById('inlineFormSelectPref');
    if(namevalidation()){

    if(emailvalidation()){
    
        if(dobvalidation()){
    
            if(phonevalidation()){
            
                if(genvalidation()){
                    
                    if(placevalidation()){
                    
                        if(checkvalidation()){
                               
                            }}}}}}}
                            if(!namevalidation() || !emailvalidation() || !dobvalidation() || !phonevalidation() || !genvalidation() || !placevalidation() || !checkvalidation()){
        
                                        var error = document.getElementById('checkerror1');
                                        error.innerHTML="please fix";
                                        error.style.display = 'block';
                                        setTimeout(function(){error.style.display = 'none';}, 3000)                                        
                                        return false;  
                                    }else {
                                    var modal = new bootstrap.Modal(document.getElementById("exampleModal"));
                                    modal.show();
                                   
                                    document.getElementById('username').value = ""
                                    var nameinput= document.getElementById('username');
                                    nameinput.classList.remove('is-invalid');
                                    nameinput.classList.remove('is-valid');
                                    
                                    document.getElementById('dateOfBirth').value = ""
                                    var dateinput= document.getElementById("dateOfBirth");
                                    dateinput.classList.remove('is-invalid');
                                    dateinput.classList.remove('is-valid');
                                    
                                    document.getElementById('pnum').value = ""
                                    var phoneinput = document.getElementById('pnum');
                                    phoneinput.classList.remove('is-invalid');
                                    phoneinput.classList.remove('is-valid');
                                    
                                    document.getElementById('mailid').value = ""
                                    var emailinput = document.getElementById('mailid');
                                    emailinput.classList.remove('is-invalid');
                                    emailinput.classList.remove('is-valid');
                                    
                                    document.getElementById('inlineFormSelectPref').value = "Choose your place"
                                    var inputdrop =document.getElementById('inlineFormSelectPref');
                                    inputdrop.classList.remove('is-invalid');
                                    inputdrop.classList.remove('is-valid');
                                
                                    document.getElementById("defaultCheck1").checked = false;
                                    document.getElementById("gridRadios1").checked = false
                                    document.getElementById("gridRadios2").checked = false
                                    document.getElementById("gridRadios3").checked = false
                                    
                                    }
                                    return true;                                   
                                }


  
    










  





  

  



  
  






  