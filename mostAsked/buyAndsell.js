let prices = [7,1,5,3,6,4]
// Output: 5
Input: prices = [7,6,4,3,1]
// Output: 0
var maxProfit = function(prices) {
    let  minPrice = Infinity;
   let maxprofit= 0;
   for(let i=0;i<prices.length;i++){
       if(prices[i]<minPrice){
           minPrice = prices[i]
       }else{
           maxprofit = Math.max(maxprofit,prices[i]-minPrice)
       }
   }
   return maxprofit
};