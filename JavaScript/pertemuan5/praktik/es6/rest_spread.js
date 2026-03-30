let daftarProduk = ["Laptop", "Smartphone"];

function tambahProduk(...produkBaru){
    daftarProduk = [...daftarProduk, produkBaru]
    console.log("Produk berhasi ditambahkan : ", produkBaru);
}

function tampilkanProduk(){
    console.log("Daftar Produk : ", daftarProduk);
}

function salinProduk(){
    return[...daftarProduk];
}

tambahProduk("Tablet", "Headphone");
tampilkanProduk();

const produkCadangan = salinProduk();
console.log("Produk Cadangan : ", produkCadangan);

tambahProduk("Smartwatch");
tampilkanProduk();
console.log("Produk Cadangan setelah perubahan : ", produkCadangan)