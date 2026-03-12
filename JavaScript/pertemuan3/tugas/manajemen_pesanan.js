const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7},
];

function rupiah(angka){
    return "Rp " + angka.toLocaleString("id-ID")
}

function tampilkanProduk(){
    console.log("=== Daftar Produk ===");

    produkToko.forEach(function(p){
        console.log(
            `ID: ${p.id} | Nama: ${p.nama} | Harga: ${rupiah(p.harga)} | Stok: ${p.stok}`
        );
    });
}

function tambahProduk(nama, harga, stok){
    let idBaru = produkToko.length + 1;

    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok,
    }
    produkToko.push(produkBaru);

    console.log(`Produk ${nama} baru saja ditambahkan`);
}

function hapusProduk(id){
    produkToko = produkToko.filter(function(p){
        return p.id !== id;
    })

    console.log(`Produk dengan ID ${id} tidak lagi dijual`);
}

let pesanan = [];

function buatPesanan(){
    rl.question("Masukkan nama produk: ", function(namaProduk){
        rl.question("Masukkan jumlah yang dibeli: ", function(jumlah){
            let produk = produkToko.find(
                p => p.nama.toLowerCase() === namaProduk.toLowerCase()
            );

            if(!produk){
                console.log("Produk tidak ditemukan");
                rl.close();
                return;
            }

            if(produk.stok < jumlah){
                console.log("Stok tidak cukup");
                rl.close();
                return;
            }

            let total = produk.harga * jumlah;

            let pesananBaru = {
                produk: produk.nama,
                jumlah: jumlah,
                totalBayar: total
            };

            pesanan.push(pesananBaru);

            produk.stok -= jumlah;

            console.log("");
            console.log("=== Pesanan berhasil dibuat ===");
            console.log(`Total pembayaran: ${rupiah(total)}`);
            console.log("")

            tampilkanPesanan();

            rl.close();
        });
    });
}

function tampilkanPesanan(){
    console.log("=== Pesanan Anda ===");

    pesanan.forEach(function(p){
        console.log(
            `Produk: ${p.produk} | Jumlah: ${p.jumlah} | Total: ${rupiah(p.totalBayar)}`
        );
    });
}

//cetak
tampilkanProduk();
console.log("")

tambahProduk("Monitor", 1500000, 4);
console.log("")

tampilkanProduk();
console.log("")

hapusProduk(2);
console.log("")

tampilkanProduk();
console.log("")

buatPesanan();