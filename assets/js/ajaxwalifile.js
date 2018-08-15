$(document).ready(function(){

    console.log('ajax main');

    $('#regEmail').change(function(){
        // console.log('onchange me enter');
    
        // var emil = JSON.stringify($('#regEmail').val());
        // console.log('eil  :' + emil);

        // $.ajax({
        //     type : 'POST',
        //     url : '/home',
        //     data : emil,
        //     Success : function(data){
        //         if(data== null){
        //             $('#tocheckPresent').hide();

        //         }
        //         else{
        //             $('#tocheckPresent').show()
        //             $('#tocheckPresent').html('user present try different');
        //         }
        //     }
        // })
    });

    // $('#deleteSkill').click(function(){
    //     console.log('on click delete skill');
    //      $.ajax({
    //          type : 'POST',
    //          url : '/delSkill',
    //          data : $('#'),
    //     Success : function(data){
    //     }
    //         });
    // });


    // $('form').on('submit',function(){
    //     console.log('on submit me enter');
    //     var item = $('form input');
    //     var userdata = {}

    //     $ajax({
    //         type : 'POST',
    //         url : '/home',
    //        data : 
    //     });
    // });



    $('#editResume').click(function(){
    
         var emil =$('#idEmail').text();
         console.log('eil  :' + emil);

         $.ajax({
             type : 'GET',
             url : '/skill',
             data : {"emailgot":emil},
             success : function(data){
                // alert(data.html());
                //alert(JSON.stringify(data));
                data.forEach(entry => {
                    $(".listOfSkill").append("<option value="+JSON.stringify(entry.skill)+">"+entry.skill+"</option>");
                })
               // $(".listOfSkill").append("<li>"+JSON.stringify(data[0].skill)+"</li>");
                //$("<li/>",{text: JSON.stringify(data[0].skill)}).append(".listOfSkill");
                //alert(JSON.stringify(data[0].skill));
                //alert(JSON.stringify(data[1]));
               // alert(data.length);
             }
           
         });
        });

        $('#deletingskill').click(function(){
            var id =$('#idEmail').text();
            var delId =$('#deleteSkillList').find(":selected").text();
            if(delId!==undefined && delId!=="" && delId!==null){
              var confirmBox = confirm("Are you sure you want to delete :: " + delId);
              if(confirmBox==true){
                $.ajax({
                     type : 'GET',
                     url :'/deleteSkill',
                     data : {"emlId" : id, "skillName" : delId},
                     success :function(){
                             alert(" :: Record Deleted ::");
                     }

                });
            }
         }
         else{
            $('#deletingskill').hide();
            $('#gotdelSkill').hide();
            alert(" select to delete  ");
         }
        });

        $('#editingskill').click(function(){
            var id =$('#idEmail').text();
            var edtId =$('#editSkillList').find(":selected").text();
            var updatedText=$('textarea#gotedittextarea').val();
            if(edtId!==undefined && edtId!=="" && edtId!==null){
                var confirmBox = confirm("Are you sure you want to delete :: " + edtId);
                if(confirmBox ==true){
                    $.ajax({
                        type : 'GET',
                        url :'/UpdateSkill',
                        data : {"emlId" : id, "skillName" : edtId , "mesg":updatedText},
                        success :function(){
                                alert(" :: Record updated ::");
                                $('#goteditingskill').hide();
                                $('#gotedittextarea').hide();
                                $('#editingskill').hide();
                        }
                    });
                }
            }

        });

        $('#addskill').click(function(){
            var edtId =$('#idEmail').text();
            var newSkill=$('#addskillid').val();
            var newSkillDec=$('textarea#gotaddtextarea').val();
            if(edtId!==undefined && edtId!=="" && edtId!==null){
                if(newSkill.length>1 && newSkillDec.length>5){
                    var confirmBox = confirm("Are you sure you want to Add :: " + newSkill);
                    if(confirmBox == true){
                        $.ajax({
                           type : "GET",
                           url : '/addSkill',
                           data : {"emilId" : edtId ,"newskill" : newSkill, "newSkillDec": newSkillDec},
                           success : function(){
                               alert(":: Record added ::");
                               $('#addskillid').hide();
                                $('#gotaddtextarea').hide();
                                $('#addskill').hide();
                           }
                        });
                    }
                }
            }

        });
        
        $('#logout').click(function(){
            $.ajax({
               method : "GET",
               url : "/logout",
               header:{
                   Accept: "text/html; charset=utf-8",
               },
               data:"data"
            });
        });
});