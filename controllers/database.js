var mysql = require('mysql');

var conDatabase = mysql.createConnection({
    host: "127.0.0.1",
    user: "project",
    password: "project",
    database : "project_resume"
},function(err){
    if(err) {
        
        console.log('db connection fail' + err.stack);
        throw err;        
    }
    console.log('dadabase connection inside');
});

console.log('dadabase connection outside :');

 var conn = conDatabase.connect(function(err){
  if(err) {
      
      console.log('error in connection' + err.stack);
       throw err;
  }
  console.log('connected to db inside');
 });

function createUser(userInfo){
console.log("inside create user");
  var data = JSON.parse(JSON.stringify(userInfo));
  console.log(data);
  var dateOfBirth = data.dayOB + "-" + data.monthOB +"-"+data.yearOB;
  var sqlquery = "insert into userdetails values ('" +data.FirstName +"','" 
                                                + data.surName + "','" 
                                                +data.uEmail +"','" 
                                                +data.uPassword+"'," 
                                                +"STR_TO_DATE('"+dateOfBirth +"','%d-%m-%Y')"+ ",'" 
                                                +data.gender +"')";
    console.log(sqlquery);
    conDatabase.query(sqlquery,function(err,result){
      if(err) throw err;
      console.log("entry Inserted");
    });

 }

 
 exports.dbconnection = conDatabase;
exports.connection = conn;
exports.newUser= createUser;
console.log('exported connection');