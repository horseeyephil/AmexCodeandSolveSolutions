//nothing too creative here! it's a famous knapsack problem!

function cookies(target, list){

    const table = new Array(target).fill(null).map(_ => new Array(list.length))

    for(let i = 0; i < table.length; i++){

        const section = table[i]
        let currentBest = 0

        for(let j = 0; j< list.length; j++){

            const [price, value] = list[j]
            const total = i

            if(total>=price){
                const comparison = table[total-price][list.length-1] + value //This aggregates current price with best case of diff
                currentBest = Math.max(comparison, currentBest)
            } 

            section[j]=currentBest
        }
    }

    return table[table.length-1][list.length-1]
}

module.exports = cookies

//const res = cookies(10,[[1,1],[4,5],[5,7],[8,13]])
const res = cookies(20, [[5,2],[3,1],[7,4],[9,3],[1,0]])

console.log(res)