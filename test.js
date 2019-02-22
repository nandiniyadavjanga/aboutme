function squareofanumber(inputnumber) {
            
   const result = parseInt(inputnumber);
   
   

   return result*result;
   
   
   
   }

QUnit.test("squareofanumber", function(assert) {
   assert.equal(squareofanumber(2), 4, "The square of small number 2 is 4");
   assert.equal(squareofanumber(-2), 4, "The square of small negative number 2 is 4");
   assert.equal(squareofanumber(0), 0, "The square of number 0 is 0");
   assert.equal(squareofanumber(100), 10000, "The square of large number 100 is 10000");
   assert.equal(squareofanumber(-100), 10000, "The square of large negative number 100 is 10000");
   
});