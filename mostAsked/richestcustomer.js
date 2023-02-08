//  each subset in an array is an  overall invest in different banks , find the wealthy on by adding up each sub set 

function calculateTotal(banks){
    let totalAmount=0
    for(let balance of banks){
        totalAmount+= balance
    }
    return totalAmount
}
function calculateRichestPerson(account){
    let maxAmount= -Infinity
    for(let customer of account){
        maxAmount = Math.max(calculateTotal(customer),maxAmount)
    }
    return maxAmount
}
console.log(calculateRichestPerson([[2,8,7],[7,1,10],[1,9,5]]))