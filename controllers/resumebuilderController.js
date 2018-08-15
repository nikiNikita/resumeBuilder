var bodyParser= require('body-parser');
var db = require('./database');
var express=require('express');
var dbcon=db.dbconnection;

var apps=express();

console.log('passed all require');

var urlencodedParser = bodyParser.urlencoded({extended : false});

apps.use(bodyParser.json());

console.log('body parser');

module.exports = function(app){

   app.get('/',function(req,res){
    res.render('index');
   });

   app.get('/logout',function(req,res){
    res.render('index');
   });

   console.log('get passed');

   app.post('/register',urlencodedParser,function(req,res){
     var sqlquery = "select emailid from userdetails where emailid=" + JSON.stringify(req.body.uEmail);;
     var data =dbcon.query(sqlquery, function(err,result){
       if(err){
        console.log("err caught in query");
        throw err;
       }  
      //  console.log(JSON.stringify(result));

       var idGot= JSON.parse(JSON.stringify(result));
        // console.log(idGot);
        // console.log(idGot.length);
        if(idGot===undefined || idGot===null || idGot.length===0){
          console.log("new user");
          db.newUser(req.body);
        }
        else {
        // console.log("user present :::"+ idGot);
        // res.send("user present");
        // res.end(req.body);
         res.render('index_userpresent',{data : req.body});
        }
       });
    //res.end(JSON.stringify(req.body));
  });
  

  app.post('/login',urlencodedParser,function(req,res){
    console.log(JSON.stringify(req.body));
    var sqlquery = "select * from userdetails where emailid=" + JSON.stringify(req.body.loginUID);;
    var data =dbcon.query(sqlquery, function(err,result){
      if(err){
       console.log("err caught in query");
       throw err;
      }  
      console.log(JSON.stringify(result));
      var idGot= JSON.parse(JSON.stringify(result));       
      console.log("bd pass:: :" +JSON.stringify(idGot[0].userpassword)+ "  from html page pass:::: "+ req.body.loginPassword)
       if(idGot===undefined || idGot===null || idGot.length===0 || (idGot[0].userpassword != req.body.loginPassword)){
        console.log("idGot[0] ::" + JSON.stringify(idGot[0])); 
        res.render('login_invalid',{data : idGot[0]});
       }
       else {  
        var sqlquery1 = "select skill,skillDec from skills where userid=" + JSON.stringify(req.body.loginUID);
         var data1 =dbcon.query(sqlquery1, function(err,result1){
            // var noSkill=JSON.parse(JSON.stringify(skillDetails)).length;
            console.log("skillData ::: " + JSON.stringify(result1));
            res.render('homepage',{info : idGot[0], allSkill :JSON.parse(JSON.stringify(result1))});
         });
       }
      });
 });
  
 app.post('/delskill',function(req,res){
    
 });

 app.get('/skill',function(req,res){
   console.log(req.query.emailgot);
   var person =req.query.emailgot;
   var sqlquery1= "select skill from skills where userid=\""+person+"\"";
   console.log(sqlquery1);
   var data1 = dbcon.query(sqlquery1,function(err,result1){
     if(err){
       console.log("got in select err");
       throw err;
     }
     console.log(result1);
     res.json(result1);
     //res.send(result1);
   });
   
 });

  app.delete('/home',function(req,res){
  });

  app.get('/deleteSkill',function(req,res){
      console.log('in delete skill :: ' + JSON.stringify(req.query));
      var sqlquery1 = "delete from skills where userid=\""+req.query.emlId +"\" AND skill=\"" +req.query.skillName+"\"";
      console.log(sqlquery1);
      var data1= dbcon.query(sqlquery1,function(err,result){
        if(err) throw err;
        res.json(req.query.skillName);
      });
  });

  app.get('/UpdateSkill',function(req,res){
      var sqlquery1 ="update skills set skillDec=\""+req.query.mesg+"\" where userid=\""+req.query.emlId+"\" AND skill=\""+req.query.skillName+"\"";
      var data1=dbcon.query(sqlquery1,function(err,result){
        if(err) throw err;
        console.log("updated table :: ");

      });
     
  });

  app.get('/addSkill',function(req,res){
     var sqlquery1 ="insert into skills values (\""+req.query.emilId+"\",\"" +req.query.newskill+"\",\""+req.query.newSkillDec+"\")" ;
      console.log(sqlquery1);
      var data1=dbcon.query(sqlquery1,function(err,result){
             if(err) throw err;
             console.log("added new skill :: ");
             res.json(req.query.emilId);
        });

  });
  


  // function selectUserSkill(userEmailId){
  //   var sqlquery = "select skill,skillDec from skills where userid=" + JSON.stringify(userEmailId);
  //   var data =dbcon.query(sqlquery, function(err,result){
  //      if(err) throw err;
  //      console.log(JSON.stringify(result));
  //      return result;
  
  //   });
  // }
};

