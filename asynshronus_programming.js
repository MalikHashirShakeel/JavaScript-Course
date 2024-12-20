// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(5);
// },3000);
// console.log(3);
// console.log(4);

// function getData(data,nextData){
//     setTimeout(() => {
//         console.log(`Data = ${data}`);
//     },4000);
//     if (nextData) {
//         setTimeout(() => {
//             nextData()
//         },4000);
//     };
// };

// console.log("Getting data 1..")
// getData(1,() => {
//     console.log("Getting data 2...");
//     getData(2),() => {
//         console.log("Getting data 3...");
//         getData(3),() => {
//             console.log("Getting data 4...");
//             getData(4),() => {

//             }
//         }
//     }
// });


// function getData(data) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log(`Data = ${data}`)
//             resolve("The data has transferred successfully");
//         },4000);
//     });
// };

// getData(1).then((res) => {
//     console.log(res);
//     console.log("Getting data 2...");
//     getData(2).then((res) => {
//         console.log(res);
//         console.log("Getting data 3...");
//         getData(3).then((res),() => {
//             console.log(res);
//             console.log("Getting data 3...");
//         })
//     })
// })

// function getData(data){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log(`Data = ${data}`);
//             resolve("");
//         },4000);
//     });
// };

// (async function (params) {
//     console.log("Getting data 1...");
//     await getData(1);
//     console.log("Getting data 2...");
//     await getData(2);
//     console.log("Getting data 3...");
//     await getData(3);
//     console.log("Getting data 4...");
//     await getData(4);
// })();



// function getData(id ,callback){
//     setTimeout(() => {
//         console.log(id);
//         if (callback){
//             callback()
//         } else {
//             return;
//         }
//     } ,2000);

// }


// //Callback Hell
// console.log("Getting data 1...");
// getData(12 ,() => {
//     console.log("Getting data 2...");
//     getData(34 ,() => {
//         console.log("Getting data 3...");
//         getData(56 ,() => {
//             console.log("Getting data 4...");
//             getData(78);
//         })
//     })
// });


function getData(id){
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
            console.log(id);
            resolve("Data has been received successfully");
        } ,2000);
    })
}

// //Promise Chaining
// getData(12).then((res) => {
//     console.log(res);
//     return getData(34);
// }).then((res) => {
//     console.log(res);
//     return getData(56);
// }).then((res) => {
//     console.log(res);
// })

(async function receive_data() {
    
    console.log("Getting data 1...");
    await getData(12);
    console.log("Getting data 2...");
    await getData(34);
    console.log("Getting data 3...");
    await getData(56);

})();