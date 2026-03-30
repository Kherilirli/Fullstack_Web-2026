function jumlahkan(...angka){
    return angka.reduce((total, num) => total + num, 0);
}

console.log(jumlahkan(2, 4, 5));

const arr_angka = [1, 2, 3, 4, 5];

//destructing
const [pertama, kedua, ...sisanya] = arr_angka;
console.log(pertama, kedua, sisanya);

const data = {
    nama: "Ali", 
    umur: 25, 
    kota: "Bandung",
    pekerjaan: "Programmer"
}

const {nama, ...infolain} = data;
console.log(nama, infolain);