function initialLoad(){
    document.getElementById("deleteskillspace").style.display="none";
    document.getElementById("addskillspace").style.display="none";
    document.getElementById("editskillspace").style.display="none";
}

function resmview(){
   document.getElementById("editRes").style.display="none";
   document.getElementById("viewRes").style.display="block";
}

function resedit(){
    document.getElementById("viewRes").style.display="none";
    document.getElementById("editRes").style.display="block";
}

function editSkillCode(){
    document.getElementById("deleteskillspace").style.display="none";
    document.getElementById("addskillspace").style.display="none";
    document.getElementById("editskillspace").style.display="block";
    document.getElementById("goteditingskill").style.display="none";
    document.getElementById("gotedittextarea").style.display="none";
    document.getElementById("editingskill").style.display="none";

}

function deleteSkillCode(){
    document.getElementById("editskillspace").style.display="none";
    document.getElementById("addskillspace").style.display="none";
    document.getElementById("deleteskillspace").style.display="block";
}

function addSkillCode(){
    document.getElementById("editskillspace").style.display="none";
    document.getElementById("deleteskillspace").style.display="none";
    document.getElementById("addskillspace").style.display="block";
    document.getElementById("addskillid").style.display="none";
    document.getElementById("gotaddtextarea").style.display="none";
    document.getElementById("addskill").style.display="none";
}