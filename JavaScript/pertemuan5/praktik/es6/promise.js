function download(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Downloading...");
        }, 3000);
    })
}

function verify(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Verifying...");
        }, 2000);
    })
}

function notify(){
    console.log("Download completed!");
}

//comsuming feedback promise
// download()
// .then((result) => {
//     console.log(result);
//     return verify();
// })
// .then((result) => {
//     console.log(result);
//     notify();
// })

// .catch((error) => {
//     console.log(error);
// })
// function main(){
//     download();
//     verify();
//     notify();
// }

//consuming feedback menggunakan async await
const main = async () => {
    console.log(await download());
    console.log(await verify());
    notify();
}

main();