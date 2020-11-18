module.exports = function(table) {
   if (process.env !== "production") {
      console.log("\n🚀 init table seed");
      return table.create({ payee: 'amazon', amount: 10.2, category: 'electronics'});
   }
   return Promise.resolve();
};
