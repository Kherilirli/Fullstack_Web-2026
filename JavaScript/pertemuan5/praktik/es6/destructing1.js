const produkList = [
    {nama: "Laptop", harga: 10000000, stok: 5},
    {nama: "SmartPhone", harga: 3000000, stok: 10},
    {nama: "Tablet", harga: 1000000, stok: 7} 
];

function tampilkanProduk({nama, harga, stok}) {
    console.log(`Nama Produk: ${nama}`);
    console.log(`Harga: ${harga}`);
    console.log(`Stok: ${stok}`);
    console.log('-------------------');
}

const [produk1, produk2, produk3] = produkList;

console.log("Detail Produk 1 :");
tampilkanProduk(produk1);
console.log("Detail Produk 2 :");
tampilkanProduk(produk2);