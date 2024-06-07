function validation(){
    if(document.Form.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username";
        return false;
    }
    else if(document.Form.Username.value.length<6){
        document.getElementById("result").innerHTML=" User name mus be Atleast Six letters";
        return false;
    }
    else if(document.Form.Email.value==""){
        document.getElementById("result").innerHTML="Enter Your Email";
        return false;
    }
    else if(document.Form.password.value==""){
        document.getElementById("result").innerHTML="Enter Your Password";
        return false;
    }
    else if(document.Form.password.value!==document.Form.cpassword.value){
        document.getElementById("result").innerHTML="Password Does not Match";
        return false;
    }
    else if(document.Form.cpassword.value==""){
        document.getElementById("result").innerHTML="Enter Your  confirm Password";
        return false;
    }
    else if(document.Form.password.value<6){
        document.getElementById("result").innerHTML="Password must be 6 digits";
        return false;
    }
    else if(document.Form.password.value==document.Form.cpassword.value){
        popup.classList.add("open-slide");
        return false;
    }
}
var popup =document.getElementById('popup');