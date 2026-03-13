//menggunakan symbol
// const _harga = Symbol("harga")
class Produk {
    #harga;
    constructor(nama, harga){
        this.nama = nama,
        //menggunakan underscore
        // this._harga = harga
        //menggunakan symbol
        // this[_harga] = harga;
        //menggunakan pagar / private field
        this.#harga = harga
    }
    getHarga(){
        return this.#harga;
    }
    setHarga(hargaBaru){
        if(hargaBaru > 0){
            this.#harga;
        } else {
            console.log("Harga tidak boleh negatif");
        }
    }
}

const tv = new Produk("Televisi", 5000000);
console.log(tv.getHarga());
tv.setHarga(300000);
console.log(tv.getHarga());
console.log(tv._harga); //tidak disarankan