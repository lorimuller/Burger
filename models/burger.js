var orm = require("../config/orm.js");

var burger = {
	// selects all burgers in the database
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	// inserts one record into the burgers table
	insertOne: function(burgerName, cb) {
		orm.insertOne("burgers", "burger_name", burgerName, function(res) {
			cb(res);
		});
	},
	// updates a burger entry
	updateOne: function(idNum, cb) {
		orm.updateOne("burgers", "devoured", "1", "id", idNum, function(res) {
			cb(res);
		});
	},
	// deletes a burger entry
	deleteOne: function(idNum, cb) {
		orm.deleteOne("burgers", "id", idNum, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;

// var burgers = {
//     insert: function(some_val, cb){
//       orm.insert('burgers', 'burger_name', some_val, function(res){
//         cb(res);
//       });
//     },
//     read: function(cb){
//       orm.read('burgers', function(res){
//         cb(res);
//       });
//     },
//     update: function(user_id, cb){
//       orm.update('burgers', 'devoured', 1 , 'id', user_id, function(res){
//         cb(res);
//       });
//     },
//     delete: function(user_id, cb){
//       orm.delete('burgers', 'id', user_id, function(res){
//         cb(res);
//       });
//     }
//   }

// var burgers = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (burger_controller.js).
// module.exports = burgers;
