var express = require('express');
var mysql=require('mysql');
var bodyParser = require('body-parser');
var session=require('express-session');
var cors=require('cors');

//connect to db
var dbms=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'bookreview'
});

dbms.connect((err)=>{
  if(err) return err;
  else {
    console.log('SQL connected');
  }
});
  
var app = express();

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(express.static('client/src/components'));
app.use(session({
  secret:'login',
  saveUninitialized:true,
  resave:true,
})
);


app.use(cors());

//post data in database
app.post('/api/register',urlencodedParser,(req, res) => {
  
  var sess=req.session;
  sess.name=req.body.name;
  sess.email=req.body.email;
  sess.password=req.body.password;
  sess.loggedIn=true;
          
  dbms.query("INSERT INTO `users` (`name`,`password`,`email`) VALUES ('"+req.body.name+"','"+req.body.password+"','"+req.body.email+"')", (error, results, 
fields) => {
   if (error) res.send("Invalid email");
   else res.send("SignUp sucessfull")
 });
});

var sessionChechker=(req,res,next)=>{
  if (req.session.email) {
    res.redirect('/');
  } else {
    next();
  }  
};
//login
app.post('/login',sessionChechker,(req,res)=>{
  
  var email=req.body.email;
  var password=req.body.password;

  if(email && password){
      let sql="SELECT email,password from users where email='"+email+"'and password='"+password+"'";
      dbms.query(sql,(err,result)=>{
        if(result.length>0){
          sess.loggedIn=true;
          res.send("Login successful");
        }
        else{
          res.send('Incorrect Username and/or Password!');
        }    
    }) 
  }
  else{
    res.send('Please enter Username and Password!');
  }
  
});


//logout

app.get('/logout', function(req, res, next) {
  var sess=req.session;
  console.log('Logout')
  if (req.session) {
    // delete session object
    sess.loggedIn=false;
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        console.log(req.session)
        return res.send(req.session);
      }
    });
  }
});

//retreive author
app.get('/author',(req, res) => {
  console.log('Author')
  let sql=`SELECT Author,Id from books order by(Author)`;
  dbms.query(sql , (err , result) => {
    if(err) throw err;
    res.json({
          data:result
        })
  })  
})  

//retreive books
app.get('/:type',(req, res) => {
  console.log(`${req.params.type}`)
  let sql=`SELECT * from books WHERE type="${req.params.type}"`;
  dbms.query(sql , (err , result) => {
    if(err) throw err;
    res.send({
          data:result
        })
  })
})  
//console.log('Next')

app.get('/book/:name',function(req, res){
  console.log('Book');
  var name=`${req.params.name}`;
  console.log(name);
  let sql=`SELECT * from books WHERE Name="${name}"`;
  dbms.query(sql,(err,result)=>{
    if(err) throw err;
    else{
      res.send({
        data:result
      });
    }
    
  });
});


//console.log(dbms);

app.listen(4000,()=>{
  console.log('Listening to port 4000');
});

module.exports = app
