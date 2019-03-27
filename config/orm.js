var connection = require("./connection.js");


var orm = {
	selectAll: function(table, cb) {
		var query = "SELECT * FROM ??;";
		connection.query(query, [table], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, colName, colValue, cb) {
		var query = "INSERT INTO ?? (??) VALUES (?);";
		connection.query(query, [table, colName, colValue], function(err, result) {
			if (err) throw err;
			console.log("Successfully inserted: " + result);
			cb(result);
		});
	},
	updateOne: function(table, colName, colValue, idCol, idValue, cb) {
		var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
		connection.query(query, [table, colName, colValue, idCol, idValue], function(err, result) {
			if (err) throw err;
			console.log("Successfully updated: " + result);
			cb(result);
		});
	},
	deleteOne: function(table, idCol, idValue, cb) {
		var query = "DELETE FROM ?? WHERE ?? = ?;"
		connection.query(query, [table, idCol, idValue], function(err, result) {
			if (err) throw err;
			console.log("Successfully deleted: " + result);
			cb(result);
		})
	}
};

module.exports = orm;
// var connection = require("../config/connection.js");

// var orm = {
//     insert: function (table, col, val, cb) {
//         connection.query('INSERT INTO ' + table + ' ( ' + col + ' ) ' + ' VALUES (?)', [val], function (err, result) {
//             cb(result);
//         });
//     },

//     read: function (table, cb) {
//         connection.query('SELECT *  FROM ' + table + ';', function (err, result) {
//             cb(result);
//         });
//     },

//     update: function (table, some_set_col, some_set_val, some_col_param, some_val_param, cb) {
//         connection.query('UPDATE ' + table + ' SET ' + some_set_col + ' = ? WHERE ' + some_col_param + ' = ?', [some_set_val, some_val_param], function (err, result) {
//             cb(result);
//         });
//     },

//     delete: function (table, col, val, cb) {
//         connection.query('DELETE FROM ' + table + ' WHERE ' + col + ' = ?', [val], function (err, result) {
//             cb(result);
//         });
//     }
// }

// // Export the orm object for the model (burger.js).
// module.exports = orm;