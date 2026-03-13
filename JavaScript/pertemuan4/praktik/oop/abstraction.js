class Kendaraan {
    constructor(merk, tahun){
        if(this.constructor === Kendaraan){
            throw new Error("Kelas kendaraan tidak dibuat sebagai instance langsung");
        }
        this.merk = merk;
        this.tahun = tahun;
    }

    deskripsi(){
        throw new Error("Method 'deskripsi()' harus diimplementasikan");
    }
}

class Mobil extends Kendaraan {
    constructor(merk, tahun, kecepatan){
        super(merk, tahun);
        this.kecepatan = kecepatan;
    }
    deskripsi(){
        return `Mobil ${this.merk} (${this.tahun}) Melaju dengan kecepatan ${this.kecepatan} km/jam`
    }
}

const mobil1 = new Mobil("BMW", 2004, 200);
console.log(mobil1.deskripsi());