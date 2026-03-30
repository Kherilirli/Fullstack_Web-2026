const angka = [10, 20, 30];

const a = angka[0] ;
const b = angka[1];
const c = angka[2];

console.log(a, b, c);

// with destructuring
const angkaBaru = [10, 20, 30];
const [a1, b2, c3] = angkaBaru;

console.log(a1, b2, c3);

const person = {
    nama : "Budi",
    umur : 25,
    pekerjaan : "Programmer"
};

// without Destructing
// const nama = person.nama;
// const umur = person.umur;
// const pekerjaan = person.pekerjaan;

// with Destructing
const { nama, umur, pekerjaan} = person;

console.log(nama, umur, pekerjaan);

const siswa = [
    {nama : "Ali", nilai : 85},
    {nama : "Budi", nilai : 80}
];

for(const {nama, nilai} of siswa){
    console.log(`Nama : ${nama} | Nilai : ${nilai}`);
}