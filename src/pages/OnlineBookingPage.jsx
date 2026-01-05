"use client"
import { motion } from "framer-motion"
import Header from "../components/Header"
import "./OnlineBookingPage.css"

import { ChevronDown, UsersRound, SnowflakeIcon, PawPrint, Shield, Clock, Award } from "lucide-react"

import SwiftDzire from "../asset/vehicles/swiftdezire.jpg"
import Ertiga from "../asset/vehicles/Ertiga.webp"
import Tavera from "../asset/vehicles/tavera.webp"
import Innova from "../asset/vehicles/innova.webp"
import InnovaCrysta from "../asset/vehicles/innova crysta.webp"
import Urbenia17SeaterAC from "../asset/vehicles/urbenia 17 seater ac.webp"
import Seater32ACPushBack from "../asset/vehicles/32 seater AC push back.webp"
import Seater20TempoTravellerAC from "../asset/vehicles/20 seater tempo traveller ac.webp"
import Seater13TempoTravellerAC from "../asset/vehicles/13 seater tempo traveller ac.webp"
import Seater13TempoTravellerNonAC from "../asset/vehicles/13 seater tempo traveller non ac.webp"
import Seater17TempoTravellerAc from "../asset/vehicles/17 seater tempo traveller ac.webp"
import Seater26Ac from "../asset/vehicles/26 seater ac.webp"
import Seater27NonAcPushBack from "../asset/vehicles/27 seater non ac push back.webp"
import Seater32AcPushBack from "../asset/vehicles/32 seater AC push back.webp"
import Seater17TempoTravellerNonAC from "../asset/vehicles/17 seater tempo traveller non ac.webp"
import Seater35AcBharatBenz from "../asset/vehicles/35 seater ac bharat benz.webp"
import Seater40NonAc from "../asset/vehicles/40 seater non ac.webp"
import Seater40Ac from "../asset/vehicles/40 seater ac.webp"
import Seater45Ac from "../asset/vehicles/45 seater ac.webp"
import Seater45NonAc from "../asset/vehicles/45 seater non ac.webp"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import { pageMetadata } from "../utils/seoConfig"

const vehicles = [
    {
        id: 1,
        name: "Swift Dzire",
        seats: "4 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 300 km",
        rate: "12/km",
        price: "3,600/-",
        image: SwiftDzire,
    },
    {
        id: 2,
        name: "Ertiga",
        seats: "7 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 300 km",
        rate: "?/km",
        price: "4,500/-",
        image: Ertiga,
    },
    {
        id: 3,
        name: "Tavera",
        seats: "7 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 300 km",
        rate: "?/km",
        price: "4,800/-",
        image: Tavera,
    },
    {
        id: 4,
        name: "Innova",
        seats: "7 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 300 km",
        rate: "?/km",
        price: "5,100/-",
        image: Innova,
    },
    {
        id: 5,
        name: "Innova Crysta",
        seats: "7 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 400 km",
        rate: "?/km",
        price: "5,700/-",
        image: InnovaCrysta,
    },
    {
        id: 6,
        name: "Urbenia 17 Seater AC",
        seats: "17 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 400 km",
        rate: "?/km",
        price: "10,200/-",
        image: Urbenia17SeaterAC,
    },
    {
        id: 7,
        name: "32 Seater A/C Push Back",
        seats: "32 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 500 km",
        rate: "?/km",
        price: "15,000/-",
        image: Seater32ACPushBack,
    },
    {
        id: 8,
        name: "20 Seater Tempo Traveller AC",
        seats: "20 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 400 km",
        rate: "?/km",
        price: "7,800/-",
        image: Seater20TempoTravellerAC,
    },
    {
        id: 9,
        name: "13 Seater Tempo Traveller AC",
        seats: "13 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 400 km",
        rate: "?/km",
        price: "7,500/-",
        image: Seater13TempoTravellerAC,
    },
    {
        id: 10,
        name: "13 Seater Tempo Traveller Non-AC",
        seats: "13 Seats",
        ac: "Non AC",
        pets: "No Pets",
        minKm: "Minimum 400 km",
        rate: "?/km",
        price: "6,600/-",
        image: Seater13TempoTravellerNonAC,
    },
    {
        id: 11,
        name: "17 Seater Tempo Traveller AC",
        seats: "17 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 400 km",
        rate: "?/km",
        price: "7,800/-",
        image: Seater17TempoTravellerAc,
    },
    {
        id: 12,
        name: "26 Seater A/C",
        seats: "24 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 500 km",
        rate: "?/km",
        price: "12,500/-",
        image: Seater26Ac,
    },
    {
        id: 13,
        name: "27 Seater Non A/C Push Back",
        seats: "27 Seats",
        ac: "Non AC",
        pets: "No Pets",
        minKm: "Minimum 500 km",
        rate: "?/km",
        price: "9,600/-",
        image: Seater27NonAcPushBack,
    },
    {
        id: 14,
        name: "32 Seater A/C Push Back",
        seats: "32 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 500 km",
        rate: "?/km",
        price: "15,000/-",
        image: Seater32AcPushBack,
    },
    {
        id: 15,
        name: "17 Seater Tempo Traveller Non-AC",
        seats: "17 Seats",
        ac: "Non AC",
        pets: "No Pets",
        minKm: "Minimum 400 km",
        rate: "?/km",
        price: "6,900/-",
        image: Seater17TempoTravellerNonAC,
    },
    {
        id: 16,
        name: "35 Seater A/C (Bharat Benz)",
        seats: "35 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 500 km",
        rate: "?/km",
        price: "17,000/-",
        image: Seater35AcBharatBenz,
    },
    {
        id: 17,
        name: "40 Seater Non A/C",
        seats: "35 Seats",
        ac: "Non AC",
        pets: "No Pets",
        minKm: "Minimum 500 km",
        rate: "?/km",
        price: "12,600/-",
        image: Seater40NonAc,
    },
    {
        id: 18,
        name: "40 Seater A/C",
        seats: "40 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 500 km",
        rate: "?/km",
        price: "21,600/-",
        image: Seater40Ac,
    },
    {
        id: 19,
        name: "45 Seater A/C",
        seats: "45 Seats",
        ac: "AC",
        pets: "No Pets",
        minKm: "Minimum 500 km",
        rate: "?/km",
        price: "21,600/-",
        image: Seater45Ac,
    },
    {
        id: 20,
        name: "45 Seater Non A/C",
        seats: "45 Seats",
        ac: "Non AC",
        pets: "No Pets",
        minKm: "Minimum 500 km",
        rate: "?/km",
        price: "14,400/-",
        image: Seater45NonAc,
    },
]

export default function OnlineBookingPage() {
    const handleBooking = (vehicle) => {
        const message = `Hi, I want to book your ${vehicle.name}. It has ${vehicle.seats} and costs ${vehicle.price} at ${vehicle.rate}. Please provide more details and availability.`
        const whatsappUrl = `https://wa.me/919503665843?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
    }

    const scrollToFleet = () => {
        const fleetSection = document.querySelector(".booking-section")
        fleetSection?.scrollIntoView({ behavior: "smooth" })
    }

    const bookingSchemaLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://anmoltoursandtravels.com",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Online Booking",
                        item: "https://anmoltoursandtravels.com/online-booking",
                    },
                ],
            },
            {
                "@type": "CollectionPage",
                name: "Vehicle Rental Booking",
                description: "Browse and book from our fleet of 20+ vehicles",
                url: "https://anmoltoursandtravels.com/online-booking",
            },
        ],
    }

    return (
        <>
            <Header />
            <SEO
                title={pageMetadata.booking.title}
                description={pageMetadata.booking.description}
                keywords={pageMetadata.booking.keywords}
                url="https://anmoltoursandtravels.com/online-booking"
                image="https://anmoltoursandtravels.com/og-preview.jpg"
                jsonLd={bookingSchemaLd}
                canonical="https://anmoltoursandtravels.com/online-booking"
                robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
            />
            <main className="booking-page">
                <motion.section
                    className="booking-hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="booking-hero-overlay">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="booking-hero-title"
                        >
                            Premium Car Rentals
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="hero-divider"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="booking-hero-subtitle"
                        >
                            Experience luxury and comfort with our premium fleet. Book your perfect ride for unforgettable journeys.
                        </motion.p>

                        {/* Feature Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="hero-features"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} className="hero-feature-card">
                                <div className="hero-feature-icon">
                                    <Shield size={26} />
                                </div>
                                <h3 className="hero-feature-title">Verified Vehicles</h3>
                                <p className="hero-feature-text">All our vehicles are regularly inspected and certified</p>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} className="hero-feature-card">
                                <div className="hero-feature-icon">
                                    <Clock size={26} />
                                </div>
                                <h3 className="hero-feature-title">24/7 Support</h3>
                                <p className="hero-feature-text">Round-the-clock assistance for all your travel needs</p>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} className="hero-feature-card">
                                <div className="hero-feature-icon">
                                    <Award size={26} />
                                </div>
                                <h3 className="hero-feature-title">Best Prices</h3>
                                <p className="hero-feature-text">Competitive rates with no hidden charges</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="scroll-indicator"
                        onClick={scrollToFleet}
                        style={{ cursor: "pointer" }}
                    >
                        <ChevronDown size={32} />
                    </motion.div>
                </motion.section>

                {/* Vehicles Grid */}
                <section className="booking-section">
                    <div className="booking-container">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                            <h2 className="section-title">Our Fleet</h2>
                        </motion.div>

                        <div className="vehicles-grid">
                            {vehicles.map((vehicle, index) => (
                                <motion.div
                                    key={vehicle.id}
                                    className="vehicle-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                                >
                                    <div className="vehicle-image-section">
                                        <img src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} />
                                    </div>

                                    <div className="vehicle-info">
                                        <h3 className="vehicle-name">{vehicle.name}</h3>

                                        <div className="vehicle-facilities">
                                            <span className="facility-item">
                                                <UsersRound width="20" height="20" />
                                                {vehicle.seats}
                                            </span>
                                            <span className="facility-item">
                                                <SnowflakeIcon width="20" height="20" />
                                                {vehicle.ac}
                                            </span>
                                            <span className="facility-item">
                                                <PawPrint width="20" height="20" />
                                                {vehicle.pets}
                                            </span>
                                        </div>

                                        <div className="vehicle-details">
                                            <p className="detail-text">{vehicle.minKm}</p>
                                            <p className="detail-text">{vehicle.rate}</p>
                                        </div>

                                        <div className="vehicle-footer">
                                            <div className="price-section">
                                                <span className="price">{vehicle.price}</span>
                                            </div>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => handleBooking(vehicle)}
                                                className="book-btn"
                                            >
                                                Book Now
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}
