function dbconnect()
{
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'use'
    });

    connection.connect();
    return connection
}



function insertuser(bouton,id1,id2,id3)
{
    var db= dbconnect();

    var email=document.getElementById(id1);
    var mdp=document.getElementById(id2);
    var pseudo=document.getElementById(id3);

    let crypto=require('crypto')

    var hash = crypto.createHmac('sha256', mdp)
                .update('gcftygb')
                .digest('hex');

    var data= [pseudo,email,mdp]
    db.query("INSERT INTO user SET pseudo=? , email=? , mdp=?",data,(err,user,field)=>{

    })
}

getuser();

function del()
{
    var db= dbconnect();
    var data=[1];
    db.query('DELETE FROM user WHERE id=?',data,(err,user,field)=>{
        if(err) throw err;
    })

}
del();

function getuser()
{
    var db= dbconnect();
    var data=["leo","email@exemple.com"]  ;
    db.query("SELECT * FROM user WHERE pseudo=? AND email=?",data,(err,user,field)=>{
        if(err) throw err;
        console.log(user);

    })
}
up();

function up()
{
    var db= dbconnect();

    let crypto=require('crypto')
    //import { createHmac } from 'crypto';

    var hash = crypto.createHmac('sha256', 'gufuv')
                .update('gcftygb')
                .digest('hex');


    var data=[hash,2];
    db.query('UPDATE user SET mdp=? WHERE id=? ',data,(err,user,field)=>{
        if(err) throw err;
    })


}