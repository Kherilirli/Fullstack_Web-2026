import users from "./data.mjs";

const index = () => {
    console.log("=== Daftar Pengguna ===");
    users.map((user, index) => {
        console.log(
            `${index + 1}. Nama: ${user.nama} | Umur: ${user.umur} | Alamat: ${user.alamat} | Email: ${user.email}`
        );
    });
}

const store = (user) => {
    users.push(user);
    console.log("Pengguna berhasil ditambahkan");
};

const destroy = (nama) => {
    const indexUser = users.findIndex(u => u.nama === nama);

    if(indexUser !== -1) {
        users.splice(indexUser, 1);
        console.log("Pengguna berhasil dihapus");
    } else {
        console.log("Pengguna tidak ditemukan");
    }
};

export { index, store, destroy };