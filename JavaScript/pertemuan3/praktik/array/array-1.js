let buah = ['Mangga', 'Jeruk', 'Apel', 'Anggur']; //deklarasi array biasa
buah[2] = 'Rambutan'; //edit value dari sebagian index
buah.length = 2; //edit panjang data 
let angka = new Array(10,20,30); //deklarasi menggunakan new Array
let arrkosong = new Array(5); //hanya menghitung panjang data, bukan data atau value
let arr = new Array(5).fill(1); //menambahkan value nya 
let angka1 = [1,2,3];

//properti statis yang menambahkan metode ke semua array (menambahkan simbol didalam value)
Array.prototype.tampilkan = function(){
    console.log(this.join(" - "))
}

//menambahkan value di index terakhir
buah.push("Semangka");
console.log(buah);
//mengambil value yang baru ditambahkan
buah.pop();
console.log(buah);
//menambahkan value di index pertama
buah.unshift("Semangka");
console.log(buah);
//mengambil value yang baru ditambahkan di index pertama
buah.shift();
console.log(buah);

let warna = ["Merah", "Biru", "Hijau"];
warna.tampilkan();

console.log(buah[1]);
console.log(arr);
console.log(angka);
console.log(buah);
console.log(buah.length);
console.log(angka1.construktor); //untuk mengecek value apakah dia array atau bukan undefined
console.log(Array.isArray(angka1)); //untuk mengecek value apakah dia array atau bukan (true / false)