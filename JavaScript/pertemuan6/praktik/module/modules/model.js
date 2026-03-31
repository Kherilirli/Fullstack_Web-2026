export class ProdukModel {
    constructor(){
        this.produkList = [];
    }
    //Fungsi untuk menambahkan produk
    tambahProduk(produk){
        this.produkList.push(produk);
    }

    //Fungsi untuk menghapus produk
    hapusProduk(produk) {
        this.produkList = this.produkList.filter(p => p !== produk);
    }

    //Fungsi untuk menampilkan semua produk
    getProduk() {
        return this.produkList;
    }
}