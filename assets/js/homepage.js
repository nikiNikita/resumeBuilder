$(document).ready(function(){
    //hiding delete button
    $('#deleteSkill').click(function(){
       $('#deletingskill').hide();
       $('#gotdelSkill').hide();
    });

    //showing skill and enabling delete button
    $('#deleteSkillList').on('change',function(){
        var delskil = this.value;
        $('#deletingskill').show();
       $('#gotdelSkill').show();
        $('#gotdelSkill').text(delskil);
    });

    $('#editSkillList').on('change',function(){
        var edtskil = this.value;
        $('#goteditingskill').show();
        $('#gotedittextarea').show();
        $('#editingskill').show();
        $('#goteditingskill').text(edtskil);
    });

    $('#createskill').click(function(){
        $('#addskillid').show();
        $('#addskillid').text("");
        $('#gotaddtextarea').show();
        $('#gotaddtextarea').text("");
        $('#addskill').show();
    });
    

});