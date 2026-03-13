class Kendaraan {
    constructor(merk, tahun) {
        this.merk = merk;
        this.tahun = tahun;
    }

    deskripsi() {
        return `${this.merk} (${this.tahun})`;
    }
}

class Mobil extends Kendaraan {
    constructor(merk, tahun, pintu) {
        super(merk, tahun);
        this.pintu = pintu;
    }

    deskripsi() {
        return `Mobil ${this.merk} tahun ${this.tahun} dengan ${this.pintu} pintu`;
    }
}

class Motor extends Kendaraan {
    constructor(merk, tahun, tipe) {
        super(merk, tahun);
        this.tipe = tipe;
    }

    deskripsi() {
        return `Motor ${this.merk} tahun ${this.tahun} tipe ${this.tipe}`;
    }
}

class Pelanggan {
    constructor(nama, nomorTelepon,){
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan){
        this.kendaraanDisewa = kendaraan;
        console.log(`${this.nama} berhasil menyewa ${kendaraan.deskripsi()}`);
    }

    infoPelanggan(){
        return `Nama : ${this.nama} | No.Telepon : ${this.nomorTelepon} | Kendaraan yang disewa : ${this.kendaraanDisewa.deskripsi()}`;
    }
}

class SistemTransportasi {
    constructor(){
        this.daftarPelanggan = [];
        this.daftarKendaraan = [];
    }

    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }

    tambahKendaraan(kendaraan) {
        this.daftarKendaraan.push(kendaraan);
    }

    tampilkanKendaraan() {
        console.log("")
        console.log("Daftar Kendaraan:");
        this.daftarKendaraan.forEach((k, index) => {
            console.log(`${index + 1}. ${k.deskripsi()}`);
        });
    }

    tampilkanPelanggan() {
        console.log("\nDaftar Pelanggan yang Menyewa Kendaraan:");
        this.daftarPelanggan.forEach(p => {
            console.log(p.infoPelanggan());
        });
    }
}

const sistem = new SistemTransportasi();

const kendaraan1 = new Mobil("Toyota", 2022, 4);
const kendaraan2 = new Mobil("BMW", 2020, 4);
const kendaraan3 = new Motor("Honda", 2021, "Sport");

sistem.tambahKendaraan(kendaraan1);
sistem.tambahKendaraan(kendaraan2);
sistem.tambahKendaraan(kendaraan3);

const pelanggan1 = new Pelanggan("Andi", "08123456789");
const pelanggan2 = new Pelanggan("Budi", "08234567890");

sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

console.log("=== Transaksi Penyewaan Kendaraan ===")
pelanggan1.sewaKendaraan(kendaraan1);
pelanggan2.sewaKendaraan(kendaraan3);

sistem.tampilkanKendaraan();
sistem.tampilkanPelanggan();