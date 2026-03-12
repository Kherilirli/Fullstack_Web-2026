const mahasiswa = [
    {nama: "Budi", nilai: 80},
    {nama: "Andi", nilai: 90},
    {nama: "Citra", nilai: 85},
    {nama: "Dewi", nilai: 75},
    {nama: "Eko", nilai: 100}
];

const hitungAverage = data => data.reduce((acc, mhs) => acc + mhs.nilai, 0) / data.length;

const mahasiswaLulus = data => data.filter(mhs => mhs.nilai >= 60);
const namaMahasiswaLulus = data => mahasiswaLulus(data).map(mhs => mhs.nama);

console.log(`Rata-Rata Nilai: ${hitungAverage(mahasiswa)}`);
console.log(`Mahasiswa yang Lulus: ${namaMahasiswaLulus(mahasiswa)}`);