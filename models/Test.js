module.exports = function(sequelize, DataTypes) {
   const Log = sequelize.define("Log", {
      expense: {
         type: DataTypes.STRING,
         validate: { len: [1, 500] }
      }
   });
   return Log;
};
