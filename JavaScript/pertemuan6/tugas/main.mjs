import { index, store, destroy } from "./controller.mjs";

const main = () => {

    //menampilkan data
    index();

    console.log("\nMenambahkan data...\n");
    
    //menambahkan data
     store({
        nama: "Kheril",
        umur: 21,
        alamat: "Depok",
        email: "kheril@mail.com"
    });

    store({
        nama: "Rahmat",
        umur: 22,
        alamat: "Jakarta",
        email: "rahmat@mail.com"
    });

    //menampilkan data
    index();

    console.log("\nHapus data...\n");

    //hapus data
    destroy("Andi");

    //menampikan data kembali
    index();
}

main();