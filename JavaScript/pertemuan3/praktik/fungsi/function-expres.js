//harus dideklarasikan atau di initilisasi dulu sebelum ditampilkan hasilnya
const kali = function(a, b){
    return a * b;
}

console.log(kali(5,4));
//Named function expres
// const hitungLuas = function luasPersegi(sisi){
//     return sisi * sisi;
// }
//Anonymous function expres (digunakan dalam kode yang singkat)
const hitungLuas = function(sisi){
    return sisi * sisi;
}

console.log(hitungLuas(5))

const mahasiswa = [
    {nama: "Budi", nilai: 80},
    {nama: "Andi", nilai: 90},
    {nama: "Citra", nilai: 85},
    {nama: "Dewi", nilai: 75},
    {nama: "Eko", nilai: 100}
];

const hitungAverage = function (data){
    let total = 0;
    for(let i = 0; i < data.length; i++){
        total += data[i].nilai;
    }
    return total / data.length;
}

const mahasiswaLulus = function (data){
    return data.filter(mhs => mhs.nilai >= 60);
}

const mahasiswaTidakLulus = function (data) {
    return data.filter(mhs => mhs.nilai < 60);
}

console.log(`Rata-Rata Nilai: ${hitungAverage(mahasiswa)}`);
console.log("Mahasiswa yang Lulus: ", mahasiswaLulus(mahasiswa));
console.log("Mahasiswa yang tidak Lulus: ", mahasiswaTidakLulus(mahasiswa));