// without spread
const angka = [1, 2, 3];
console.log(angka[0], angka[1], angka[2]);

// with spread
const angka2 = [1, 2, 3];
console.log(...angka2);

//penggabungan array dalam spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const gabungan = [...arr1, ...arr2];
console.log(gabungan);

const user = {
    nama: "Ali",
    umur: 25,
    kota: "Bandung"
}

const userBaru = {...user};
console.log(userBaru);