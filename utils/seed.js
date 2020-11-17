module.exports = function(table) {
   if (process.env !== "production") {
      console.log("\n🚀 init table seed");
      return table.create({ expense: "🚀 init" });
   }
   return Promise.resolve();
};
