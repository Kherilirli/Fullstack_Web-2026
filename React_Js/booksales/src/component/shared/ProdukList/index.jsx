import { useState } from "react"
import booksData from "../../../utils/books.js"


export default function ProdukList() {
    const [books, setBooks] = useState([...booksData]);

    const handleAddBook = () => {
        const newBook = {
            id: books.length + 1,
            title: "Buku Baru " + (books.length + 1),
            author: "Penulis Baru",
            year: 2024,
            description: "Buku ini baru saja ditambahkan.",
            image: `https://picsum.photos/300/200?random=${books.length + 10}`
        };

        setBooks((prevBooks) => [...prevBooks, newBook]);

        alert("Berhasil menambahkan buku baru! Scroll ke bawah");
    }

    return (
        <>
            <section className="py-5 text-center container" id="book">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Best Salling Book</h1>
                        <p className="lead text-body-secondary">
                            Temukan koleksi buku terbaik pilihan kami yang dapat menambah wawasan dan inspirasi.
                            Setiap buku dipilih dengan kualitas terbaik untuk menemani perjalanan belajar dan pengembangan diri Anda.
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary my-2 m-2">Views</a>
                            <a href="#" className="btn btn-secondary my-2">Other Book</a>
                        </p>
                    </div>
                </div>
            </section>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <button
                        className="btn btn-primary mb-4"
                        onClick={handleAddBook}
                    >
                        Tambah Buku +
                    </button>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {books.map((item) => (
                            <div className="col" key={item.id}>
                                <div className="card shadow-sm">
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt={item.title}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>

                                        <p className="card-text">
                                            {item.description}
                                        </p>

                                        <p className="text-muted">
                                            {item.author} - {item.year}
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button className="btn btn-sm btn-primary">Buy</button>
                                                <button className="btn btn-sm btn-outline-secondary">Detail</button>
                                            </div>
                                            <small className="text-muted">Book</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}