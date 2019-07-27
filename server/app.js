var express = require('express');
var mysql=require('mysql');
var bodyParser = require('body-parser');
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
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));
app.use(cors());

//post data in database
app.post('/api/register',urlencodedParser,(req, res) => {
  console.log(req.body.name)
  console.log(req.body.password)
  console.log(req.body.email)

  dbms.query("INSERT INTO `users` (`name`,`password`,`email`,`allowed`) VALUES ('"+req.body.name+"','"+req.body.password+"','"+req.body.email+"','"+1+"')", (error, results, 
fields) => {
   if (error) throw error;
   res.end();
 });
});

//retreive author
app.get('/author',(req, res) => {
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
  console.log('Result')
  let sql=`SELECT * from books WHERE type="${req.params.type}"`;
  dbms.query(sql , (err , result) => {
    if(err) throw err;
    res.json({
          data:result
        })
    res.end() 
  })
  
})  
console.log('Next')

app.get('/:name',function(req, res){
  console.log('Next')
  console.log(req.params.name);
  /*
  var name=`${req.params.name}`;
  var new_Name=name.split("%20");
  var name=new_Name.join(" ")
  console.log(name)
  let sql=`SELECT * from books WHERE Name="${name}"`;
  dbms.query(sql,(err,result)=>{
    if(err) throw err
    console.log('Result2');
    res.json({
        data:result
      })
  })
  */
})

app.get('/api/login',(req,res)=>{
  let sql="SELECT email,password from users";
  dbms.query(sql,(err,result)=>{
    if (err) throw err
    res.json({
      data:result
    })
  })
})
//console.log(dbms);

app.listen(4000,()=>{
  console.log('Listening to port 4000');
});

module.exports = app
