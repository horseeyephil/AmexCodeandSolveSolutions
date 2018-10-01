function cashBack(products){

    let bestFrequency = [0,null]
    const memo = {}

    products.forEach(eachPurchase=>{

        [name, product, price]=eachPurchase

        if(!memo[product]) memo[product] = {best: price, buyers: [[name, price]]}
        else {
            memo[product].best = Math.min(memo[product].best, price)
            memo[product].buyers.push([name,price])
        }

        const updatedFrequency = memo[product].buyers.length
        bestFrequency = bestFrequency[0] < updatedFrequency ? [updatedFrequency, product] : bestFrequency
    })

    const topProduct = bestFrequency[1]
    const bestPrice = memo[topProduct].best
    const cashBackClaims = memo[topProduct].buyers.filter(each=>each[1]!==bestPrice).map(each=>each[0]+'-'+(each[1]-bestPrice))

    return [topProduct+ ' ' +bestPrice, cashBackClaims]
}

module.exports = cashBack

const games = [

    ['Lora', 'xbox', 300],
    ['Philip', 'xbox', 400],
    ['Patrick', 'switch', 500],
    ['Julian', 'switch', 600],
    ['Zack', 'ps4', 800],
    ['Tayeb', 'xbox', 100],
    ['Charlie', 'ps4', 200],
    ['Dee', 'ps4', 200],
    ['Dennis', 'ps4', 300]
]

const res = cashBack(games)

console.log(res)