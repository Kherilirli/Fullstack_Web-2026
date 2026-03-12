let angka1 = [1,2,3];
let angka2 = [4,5,6];

//mengurutkan value
console.log(angka1.sort());
//membalikkan value 
console.log(angka1.reverse());

console.log(angka1.indexOf(2));
console.log(angka1.lastIndexOf(3));

//menggambungkan 2 array
let hasilGabung = angka1.concat(angka2);
console.log(hasilGabung);

//ubah tipe data menjadi string
let teks = angka1.join(" - ");
console.log(teks);

//memotong value yang ingin ditampilkan
let potongan = angka1.slice(1,3);
console.log(potongan);

//menambahkan dan mengganti value
angka1.splice(1,1,10,20);
console.log(angka1)