module.exports = function(table) {
   if (process.env !== "production") {
      console.log("\n🚀 init table seed");
      return table.create({ payee: 'Amazon.com', amount: 10.27, category: 'electronics'});
   }
   return Promise.resolve();
};
