export class ProdukView {
    constructor() {
        this.daftarProduk1 = document.getElementById('daftar-produk');
        this.form1 = document.getElementById('produk-form');
        this.inputProduk1 = document.getElementById('input-produk');
    }

    tampilkanProduk(produkList, controller) {
        this.daftarProduk1.innerHTML = "";
        produkList.forEach((produk) => {
            const li = document.createElement('li');
            li.textContent = produk;
            const tombolHapus = document.createElement('button');
            tombolHapus.textContent = "Hapus";
            tombolHapus.addEventListener("click", () => {
                controller.hapusProduk(produk);
            });
            li.appendChild(tombolHapus);
            this.daftarProduk1.appendChild(li);
        });
    }

    bindTambahProduk(controller) {
        this.form1.addEventListener("submit", (event) => {
            event.preventDefault();
            const produk = this.inputProduk1.value.trim();
            if(produk) {
                controller.tambahProduk(produk);
                this.inputProduk1.value = "";
            }
        });
    }
}