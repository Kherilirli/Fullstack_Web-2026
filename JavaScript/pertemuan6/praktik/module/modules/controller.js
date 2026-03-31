import { ProdukModel } from "./model.js";

export class ProdukController {
    constructor(view) {
        this.model = new ProdukModel();
        this.view = view;
    }
    tambahProduk(produk) {
        if(produk.trim() !== "") {
            this.model.tambahProduk(produk);
            this.view.tampilkanProduk(this.model.getProduk(), this);
        }
    }

    hapusProduk(produk) {
        this.model.hapusProduk(produk);
        this.view.tampilkanProduk(this.model.getProduk(), this);
    }
}