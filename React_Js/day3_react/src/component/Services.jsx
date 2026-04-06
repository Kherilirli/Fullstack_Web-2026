import React from 'react'
import style from '../styles/Services.module.css';
import services from '../utils/services';

function Services() {
  return (
    <section className={style.services}>
        <h2 className={style.title}>Layanan Kami</h2>
        <div className={style.cardContainer}>
            {services.map((services) => (
                <div key={services.id} className={style.card}>
                    <h3 className={style.cardTitle}>{services.name}</h3>
                    <p className={style.cardDescription}>{services.description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Services;
