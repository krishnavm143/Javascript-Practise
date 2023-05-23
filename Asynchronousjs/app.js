// Async Js Programming
// callback
const datas = [
    {
        name: "krishna",
        profession: 'Software Engineer'
    },
    {
        name: "Ajay",
        profession: 'Software Engineer'
    },
    {
        name: "Nagesh",
        profession: 'Software Engineer'
    },
    {
        name: "Parameshwar",
        profession: 'Software Tester'
    },
]

function getDatas() {
    let output = ""
    setTimeout(() => {
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

// function createData(newData, callback) {
//     setTimeout(() => {
//         datas.push(newData)
//         callback()
//     }, 2000)
// }

// createData({ name: 'nanda kishore reddy', profession: 'Software Engineer' }, getDatas)

function createData(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData)
            let error = false;
            if (!error) {
                resolve()
            } else {
                reject('Something went wrong')
            }
        }, 2000)
    })

}

/*
createData({ name: 'nanda kishore reddy', profession: 'Software Engineer' })
    .then(getDatas)
    .catch(error => console.log(error))
*/

async function start() {
    await createData({ name: 'nanda kishore reddy', profession: 'Software Engineer' })
    getDatas()
}

start()