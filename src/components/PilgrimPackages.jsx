import { useState } from "react";
import "./PilgrimPackages.css";

import Gangapur from "../asset/gangapur.jpg"
import Akkalkot from "../asset/akkalkot.jpg"
import Tuljapur from "../asset/tuljapur.jpg"
import Pandharpur from "../asset/Pandharpur.jpg"

const pilgrimData = [
    {
        id: 1,
        title: "Lord Dattatreya, Gangapur",
        image: Gangapur,
        whatsappText: "Hello, I am interested in the Pilgrim Package for Lord Dattatreya, Gangapur.",
    },
    {
        id: 2,
        title: "Swami Samarth, Akkalkot",
        image: Akkalkot,
        whatsappText: "Hello, I am interested in the Pilgrim Package for Swami Samarth, Akkalkot.",
    },
    {
        id: 3,
        title: "Tulja Bhavani Temple, Tuljapur",
        image: Tuljapur,
        whatsappText: "Hello, I am interested in the Pilgrim Package for Tulja Bhavani Temple, Tuljapur.",
    },
    {
        id: 4,
        title: "Vitthal Rukmini Temple, Pandharpur",
        image: Pandharpur,
        whatsappText: "Hello, I am interested in the Pilgrim Package for Vitthal Rukmini Temple, Pandharpur.",
    },
];


export default function PilgrimPackages() {

    const WHATSAPP_NUMBER = "919503665843"; // replace with your number

    const openWhatsApp = (text) => {
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <section className="pilgrim-section">
            <h2 className="pilgrim-section-pilgrim-title">PILGRIM PACKAGES</h2>

            <div className="pilgrim-section-slider-wrapper">
                <div className="pilgrim-section-cards-container">
                    {pilgrimData.map((item, i) => (
                        <div
                            key={item.id}
                            className="pilgrim-section-card"
                            onClick={() => openWhatsApp(item.whatsappText)}
                        >
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
