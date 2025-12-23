"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "../components/Header"
import "./PackagesPage.css"
import PilgrimPackages from "../components/PilgrimPackages"
import Footer from "../components/Footer"

const cities = ["Pune", "Shirdi", "Solapur", "Aurangabad", "Jalgaon", "Nashik", "Thane", "Mumbai"]

export default function PackagesPage() {
    const [fromCity, setFromCity] = useState("")
    const [toCity, setToCity] = useState("")

    const handleBookPackage = () => {
        if (!fromCity || !toCity) {
            alert("Please select both cities")
            return
        }

        const message = `Hi, I want to send a package from ${fromCity} to ${toCity}. Can you please provide details about the cost, delivery time, and available options?`
        const whatsappUrl = `https://wa.me/919503665843?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
    }

    return (
        <>
            <Header />
            <main className="packages-page">
                {/* Hero Section */}
                <motion.section
                    className="packages-hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="packages-hero-overlay">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="packages-hero-title"
                        >
                            Packages
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="packages-hero-subtitle"
                        >
                            Send packages across cities with ease
                        </motion.p>
                    </div>
                </motion.section>
                <PilgrimPackages />

                {/* Packages Section */}
                <section className="packages-section">
                    <div className="packages-container">
                        <motion.div
                            className="packages-content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="section-title">Send Your Package</h2>

                            <div className="package-form">
                                <div className="form-group">
                                    <label htmlFor="from-city">From City</label>
                                    <select
                                        id="from-city"
                                        value={fromCity}
                                        onChange={(e) => setFromCity(e.target.value)}
                                        className="city-select"
                                    >
                                        <option value="">Select Starting City</option>
                                        {cities.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="to-city">To City</label>
                                    <select
                                        id="to-city"
                                        value={toCity}
                                        onChange={(e) => setToCity(e.target.value)}
                                        className="city-select"
                                    >
                                        <option value="">Select Destination City</option>
                                        {cities.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <motion.div
                                className="package-info"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: fromCity && toCity ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {fromCity && toCity && (
                                    <div className="info-card">
                                        <h3>Package Details</h3>
                                        <p>
                                            <strong>From:</strong> {fromCity}
                                        </p>
                                        <p>
                                            <strong>To:</strong> {toCity}
                                        </p>
                                        <p className="info-note">Cost will be calculated based on package weight and dimensions</p>
                                    </div>
                                )}
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleBookPackage}
                                disabled={!fromCity || !toCity}
                                className="book-package-btn"
                            >
                                Get Quote & Book
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
