



function openRegistration(){
    //create event
}





function initialSetup(){

    //create birth day 
    for(let i=1;i<=31;i++){
        let elementId = document.getElementById("birthDay");
        let dayNode= document.createElement("option");
        dayNode.setAttribute("value",i);
        let txtNode = document.createTextNode(i);
        dayNode.appendChild(txtNode);
        elementId.appendChild(dayNode);
    }
    //create list for month
    var monthNames= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month;
    let i=1;
    monthNames.forEach(month =>{
        let elementId= document.getElementById("birthMonth");
        let optionElement= document.createElement("option");
        let textNode = document.createTextNode(month);
        if(i<10)
           optionElement.setAttribute("value","0"+i);
        else 
           optionElement.setAttribute("value",i);
        optionElement.appendChild(textNode);
        elementId.appendChild(optionElement);
        i++;
     });
      
    //create list for year
    let startYear=1930;
    let currentDate = new Date();
    let lastYear = (currentDate.getFullYear()) - 15;
    for(let i=startYear; i<=lastYear ; i++){
        let elementId=document.getElementById("birthYear");
        let optionElement = document.createElement("option");
        let textNode = document.createTextNode(i);
        optionElement.setAttribute("value",i);
        optionElement.appendChild(textNode);
        elementId.appendChild(optionElement);

    }

    let screenWidth = screen.width +"px";
    let classElements=document.getElementsByClassName("fullScreenWidth");
    for(let i=0;i<classElements.length;i++){
        classElements[i].style.width = screenWidth;
    }
   
    //make registerbutton blur 
    document.getElementById("regSubmit").disabled=true;

}

function enableRegistration(){
     let chech=document.getElementById("termsCheck").checked;
     if(chech === true)
       document.getElementById("regSubmit").disabled=false;
    else 
       document.getElementById("regSubmit").disabled=true;
}


function termsAndCondition(){
    let termsNCond = "specify the terms and conditions\
                      policies " ;
    alert(termsNCond);
}

function createUser(){
    let firstName=document.getElementById("regFirstName").value;
    let surname=document.getElementById("regSurname").value;
    let emailId=document.getElementById("regEmail").value;
    let passWord=document.getElementById("rPassword").value;
    let confPassWord=document.getElementById("confirmPassword").value;
    let eBirthday=document.getElementById("birthDay");
    let birthDay=eBirthday.options[eBirthday.selectedIndex].value;
    let ebirthMonth=document.getElementById("birthMonth");
    let birthMonth=ebirthMonth.options[ebirthMonth.selectedIndex].value;
    let ebirthYear=document.getElementById("birthYear");
    let birthYear=ebirthYear.options[ebirthYear.selectedIndex].value;
    let egender=document.getElementsByName("gender");
    let dob=birthYear+"-" +birthMonth +"-"+birthDay;
    let gender;
    egender.forEach(gen =>{
        if(gen.checked === true){
            gender=gen.value;
        }
    });
    let allCheck =0;
    switch(1){
     case 1: if(firstName !== null && firstName !== undefined && firstName.length>2){
                 allCheck++;
             }
             else
               break;
      case 2: if(surname !==  null && surname !== undefined && surname.length > 2){
                 allCheck++;
             }
             else
               break;
      case 3: if(emailId !== null && emailId !==undefined && emailId.length>6){
                 let checkEmail = validateEmail(emailId);
                 if(checkEmail === true)
                      allCheck++;
               }
               else
                  break;
      case 4: if(passWord!==null && passWord!==undefined && passWord.length>8 && passWord===confPassWord){
                   allCheck++;
               }
               else
                   break;
       case 5 : if(birthDay>0 && birthMonth>0 && birthYear>0){
                     allCheck++;
               }
               else 
                 break;
        case 6: if(gender == "M" || gender == "F" || gender =="O")
                     allCheck++;
                else 
                   break;
       //let userExits = myEmitter.emit('checkUser',emailId);
    //            if(userExits === false){
    //                allCheck++;
    //            }
               
    }
    if(allCheck === 6){
        //pass parameters to database and display message user registered and direct to user home page
        // var entryDetails =[firstName,surname,emailId,passWord,gender,dob];
        // myEmitter.emit('addUser',entryDetails);
        return true;
    
    }
    else{
        //stay on same page and leave a message to correct details
        if(allCheck===0){
            document.getElementById("errorInForm").innerHTML="Check first name";
            //first name
        }
        else if(allCheck===1){
            //surname
            document.getElementById("errorInForm").innerHTML="Check surname name";
        }
        else if(allCheck===2){
            //email id
            document.getElementById("errorInForm").innerHTML="Check email name eg : abc@qwe.com";
        }
        else if(allCheck===3){
            document.getElementById("errorInForm").innerHTML="Password Mismatch";
            //passwordmismatch
        }
        else if(allCheck ===4){
            document.getElementById("errorInForm").innerHTML="select correct date of birth";
        }
        else if(allCheck === 5){
            document.getElementById("errorInForm").innerHTML="select gender";
        }
        else{
            //user exists try new userid
        }
        allCheck=0;
        return false;
    }



}


/***********************
 * check constraints of email
 * characters before @
 * characters after .
 * only one @
 * no space
 */
function validateEmail(emailId){
    let checkVar=0;
    switch(1){
        case 1 : if(emailId.indexOf('@')=== emailId.lastIndexOf('@'))
                   checkVar++;
                 else 
                    break;
        case 2 : if(emailId.lastIndexOf('.') < (emailId.length-2)&& emailId.lastIndexOf('.')> emailId.lastIndexOf('@'))
                     checkVar++;
                 else 
                    break;
        case 3 : if(emailId.indexOf(' ')===-1)
                    checkVar++;
                 else 
                    break;
        default : return true;
    }
    return false;

}

