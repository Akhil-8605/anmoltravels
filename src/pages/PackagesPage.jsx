"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "../components/Header"
import "./PackagesPage.css"
import PilgrimPackages from "../components/PilgrimPackages"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import { pageMetadata } from "../utils/seoConfig"

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

    const packageSchemaLd = {
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
                        name: "Packages",
                        item: "https://anmoltoursandtravels.com/packages",
                    },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "Do you provide car rental services in Solapur?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes — we provide comprehensive car rental services and customized outstation packages from Solapur to various destinations across Maharashtra and India.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Can I send parcels via Anmol Travels?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes — we provide reliable parcel pickup & delivery services between Solapur, Pune and major cities in Maharashtra with guaranteed safe delivery.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "What are your package delivery timelines?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Delivery timelines depend on the destination. Local deliveries are usually next day, while outstation packages take 2-5 days based on distance.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Do you offer customized tour packages?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes, we offer fully customized tour packages tailored to your preferences, budget, and schedule for pilgrimages, holidays, and corporate trips.",
                        },
                    },
                ],
            },
        ],
    }

    return (
        <>
            <SEO
                title={pageMetadata.packages.title}
                description={pageMetadata.packages.description}
                keywords={pageMetadata.packages.keywords}
                url="https://anmoltoursandtravels.com/packages"
                image="https://anmoltoursandtravels.com/og-preview.jpg"
                jsonLd={packageSchemaLd}
                canonical="https://anmoltoursandtravels.com/packages"
                robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
            />
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
                            Tour Packages & Delivery Services
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="packages-hero-subtitle"
                        >
                            Send packages across cities with ease and explore amazing tour packages
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
