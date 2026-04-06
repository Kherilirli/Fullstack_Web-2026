import React, { useRef, useState } from 'react'
import produkData from '../utils/produkData'
import style from '../styles/Produk.module.css'

function Produk() {
    const [produkList, setProdukList] = useState([...produkData]);
    const handleClick = () => {
        const newProduk = {
            id: produkList.length + 1,
            nama: "Printer Epson",
            tahun: 2023,
            harga: "Rp 3.000.000",
            gambar: "https://placehold.co/150",
        };

       // Menambahkan produk baru ke dalam state produkList
        setProdukList((prevList) => [...prevList, newProduk]);
        alert("Produk baru berhasil ditambahkan!");
    } 
    return (
        <div className={style.produkContainer}>
            <h1 className={style.title}>Daftar Produk</h1>
            <div className={style.cardContainer}>
                {produkList.map((item) => (
                    <div key={item.id} className={style.card}>
                        <img src={item.gambar} alt={item.nama} />
                        <h3>{item.nama}</h3>
                        <p>Tahun: {item.tahun}</p>
                        <p>Harga: {item.harga}</p>
                    </div>
                ))}
                <button onClick={handleClick} className={style.addButton}>
                    Tambah Produk Baru
                </button>
            </div>
        </div>
    )
}

export default Produk
