function createGrid(courses){

    const weekMap = {Monday: 0, Wednesday: 1, Friday: 2} //this will be useful

    const periods = new Array(4).fill(null).map(_=>[])
    //We are going to make a map of course names to what respective line they should fall on in which column in which course-period (or row)

    courses.forEach(eachCourse=>{

        [name, day, period] = eachCourse
        period--

        //The prompt tells us to give every word in the coursename its own line, which ultimately saves us some trouble
        name.split(' ').forEach((eachWord, idx)=>{

            if(!periods[period][idx]) periods[period][idx] = new Array(3).fill(' ') //initialize with only slots for MWF  
            periods[period][idx][weekMap[day]] = eachWord

        })
    })
    // ok, now we have a mapped array of lines for every period


    //Finally, we just have to print our template
    //IN SHORT, a Schedule is made out of Periods, which are made out of Lines, which are made of Words

    return periods.reduce((accum, eachPeriod)=>{
        
        const period = eachPeriod.reduce((accum, eachLine, idx)=>{
            const line = eachLine.reduce((accum, eachWord, idx)=>{

                const paddedText = eachWord + ' '.repeat(10-eachWord.length)
                return accum + paddedText + '|'

            }, '|')
            return accum + line + '          |'.repeat(3-eachLine.length) + '\n'
        },'') || '|' + 'X         |'.repeat(3-eachPeriod.length) + '\n'

        return accum + period + '+----------+----------+----------+\n'
        
    }, '+----------+----------+----------+\n')
}

module.exports = createGrid

const list = [

    ["biology","Wednesday", 3],
    ["world history", "Monday", 1],
    ["maths", "Wednesday", 1],
    ["social studies", "Friday", 2]

]

const res = createGrid(list)

console.log(res)