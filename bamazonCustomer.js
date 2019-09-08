var mysql = require('mysql');
var inquirer = ('inquirer');
var table = require('cli-table2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'bamazon_db',
    port: 3306,
})
connection.connect();

var display = function() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log('-----------------------------');
      console.log('       Welcome To Bamazon    ');
      console.log('-----------------------------');
      console.log('');
      console.log('Find Your Products Below');
      console.log('');
      var table = new Table({
        head: ['Product Id', 'Product Description', 'Cost'],
        colWidths: [12, 50, 8],
        colAligns: ['center', 'left', 'right'],
        style: {
          head: ['aqua'],
          compact: true
          
        }

      });
    });
}
