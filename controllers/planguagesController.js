const mysql = require("mysql")
require("dotenv").config()



const connection = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
    
})
  
  
  
  
connection.connect(function(error) {
      if (error) {
        console.error('error connecting: ' + error.stack);
        return;
      }
  
      console.log('connected as id ' + connection.threadId);
      
});




module.exports.getAllplanguages = (req,res) => {

    let sql = "SELECT * FROM planguages"
    connection.query(sql, (error,results,fields) =>{
        if(error) throw error
        console.log(results)
        res.json(results)
    })

}




module.exports.postPlanguage = (req,res) => {

    const data = {
        name: req.body.name,
        designedBy: req.body.designedBy,
        firstAppeared: req.body.firstAppeared
    }

    let sql ="INSERT INTO planguages(name,designedBy,firstAppeared) VALUES(?,?,?)"
    connection.query(sql,[data.name,data.designedBy,data.firstAppeared], (error,results,fields) => {
        if (error) throw error

        console.log(results)
        res.json(results)
    })

}




module.exports.getOneplanguage = (req,res) => {

    const {id} = req.params

    let sql = "SELECT * FROM planguages WHERE id=?"

    connection.query(sql,[id],(error,results,fields)=>{
        if (error) throw error

        console.log(results)
        res.json(results)
    })


}




module.exports.uptadeOnePlanguage = (req,res) => {

    const {id} = req.params

    const data = {
        name: req.body.name,
        designedBy: req.body.designedBy,
        firstAppeared: req.body.firstAppeared
    }


    let sql = "UPDATE planguages SET name=?, designedBy=?, firstAppeared=? WHERE id=?"

    connection.query(sql,[data.name,data.designedBy,data.firstAppeared,id], (error,results,fields) => {
        if (error) throw error
        console.log(results)
        res.json(results)
    })

}




module.exports.deleteOnePlanguage = (req,res) => {

    const {id} = req.params

    let sql = "DELETE FROM planguages WHERE id=?"
    connection.query(sql,[id], (error,results,fields) => {
        if (error) throw error
        console.log(results)
        res.json(results)
    })

}