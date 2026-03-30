function download(){
    setTimeout(() => {
        console.log("Downloading...");
    }, 3000);
}

function verify(){
    setTimeout(() => {
        console.log("Verifying...");
    }, 2000);
}

function notify(){
    console.log("Download completed!");
}

function main(){
    download();
    verify();
    notify();
}

main();