let students = {
    std1: {
        Bengali: 70,
        English: 82,
        Mathematics: 77,
        Physics: 75,
        Chemistry: 68,
        Biology: 76,
    },
    std2: {
        Bengali: 72,
        English: 62,
        Mathematics: 78,
        Physics: 65,
        Chemistry: 62,
        Biology: 67,
    },
    std3: {
        Bengali: 65,
        English: 78,
        Mathematics: 88,
        Physics: 89,
        Chemistry: 82,
        Biology: 84,
    },
    std4: {
        Bengali: 80,
        English: 92,
        Mathematics: 70,
        Physics: 82,
        Chemistry: 60,
        Biology: 89,
    },
    std5: {
        Bengali: 85,
        English: 90,
        Mathematics: 95,
        Physics: 88,
        Chemistry: 84,
        Biology: 82,
    },
    std6: {
        Bengali: 60,
        English: 68,
        Mathematics: 98,
        Physics: 88,
        Chemistry: 82,
        Biology: 72,
    },
    std7: {
        Bengali: 64,
        English: 65,
        Mathematics: 81,
        Physics: 85,
        Chemistry: 77,
        Biology: 74,
    },
    std8: {
        Bengali: 55,
        English: 52,
        Mathematics: 68,
        Physics: 61,
        Chemistry: 59,
        Biology: 85,
    },
    std9: {
        Bengali: 80,
        English: 94,
        Mathematics: 100,
        Physics: 94,
        Chemistry: 92,
        Biology: 89,
    },
    std10: {
        Bengali: 82,
        English: 87,
        Mathematics: 88,
        Physics: 90,
        Chemistry: 85,
        Biology: 92,
    },
}

let sumOfMarks = []
let individualMarks = []
let storeIndex = []
let result = 0, i = 0, j = 0, k = 0


for (let key in students){
    for (let key2 in students[key]){
        result += students[key][key2]
        individualMarks[i++] = students[key][key2]
    }
    sumOfMarks[j++] = result
    result = 0
}

console.log(sumOfMarks)

let len = sumOfMarks.length
for (i=0; i<len; i++){
    for (j=i+1; j<len; j++){
        if (sumOfMarks[i] === sumOfMarks[j]){
            storeIndex[k++] = i
            storeIndex[k++] = j
        }else {
            continue
        }
    }
}

let individualMarksCopy = Array.from(individualMarks)

let inc = 2
let value1 = individualMarks[storeIndex[0]*6+inc] + individualMarks[storeIndex[0]*6+(++inc)]
    + individualMarks[storeIndex[0]*6+(++inc)] + individualMarks[storeIndex[0]*6+(++inc)]

inc = 2
let value2 = individualMarks[storeIndex[1]*6+inc] + individualMarks[storeIndex[1]*6+(++inc)]
    + individualMarks[storeIndex[1]*6+(++inc)] + individualMarks[storeIndex[1]*6+(++inc)]


inc = 0
if (value1 < value2){
    for (i=0; i<6; i++){
        individualMarks[storeIndex[0]*6+inc] = individualMarksCopy[storeIndex[1]*6+inc]

        individualMarks[storeIndex[1]*6+inc] = individualMarksCopy[storeIndex[0]*6+inc]
        inc++
    }
}else {
    for (j=0; j<6; j++){
        individualMarks[storeIndex[1]*6+inc] = individualMarksCopy[storeIndex[0]*6+inc]

        individualMarks[storeIndex[0]*6+inc] = individualMarksCopy[storeIndex[1]*6+inc]
        inc++
    }
}

let finalMarks = []
let sum = 0
let len2 = individualMarks.length
let l= 0
for (i=0; i<len2; i++){
    if ((i+1)%6 !== 0){
        sum += individualMarks[i]
    }else if ((i+1)%6 === 0){
        sum += individualMarks[i]
        finalMarks[l++] = sum
        sum = 0
    }
}

finalMarks.sort()
k = 1
for (i=9; i>=0; i--){
    console.log('Roll-', k, ':', finalMarks[i])
    k++
}


