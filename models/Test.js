module.exports = function(sequelize, DataTypes) {
   const Log = sequelize.define("Log", {
      id: {
         type: DataTypes.INTEGER(6).ZEROFILL,
         autoIncrement: true,
         primaryKey: true
      },

      date: {
         type: DataTypes.DATE(6),
         defaultValue: DataTypes.NOW
      },

      payee: {
         type: DataTypes.TEXT,
         allowNull: false
      },

      amount: {
         type: DataTypes.DECIMAL(10,2),
         allowNull: false
      },

      category: {
         type: DataTypes.STRING
      }

   });
   return Log;
};
