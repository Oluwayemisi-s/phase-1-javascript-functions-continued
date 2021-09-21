// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(vFlair = "*"){

       const innerFunction = function (x = 'special'){
            return `You are ${vFlair}${x}${vFlair}!`
        }
        return innerFunction
}

console.log(wrapAdjective('%')('a great programmer'))
//console.log(saturdayFun('swim and dive'))
//mondayWork() 