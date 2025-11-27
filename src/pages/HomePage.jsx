"use client"

import { useState, useEffect, useRef, use } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import Footer from "../components/Footer"
import person from "../asset/person.jpg"
import AboutImage from "../asset/about.avif"
import HappyTravelersImage from "../asset/travellers.avif"
import "./HomePage.css"
import { useNavigate } from "react-router-dom"

import Phone from "../asset/Phone.png"
import Whatsapp from "../asset/WhatsApp.webp"

import SwiftDzire from "../asset/vehicles/swiftdezire.jpg"
import Ertiga from "../asset/vehicles/Ertiga.webp"
import Tavera from "../asset/vehicles/tavera.webp"
import Innova from "../asset/vehicles/innova.webp"
import InnovaCrysta from "../asset/vehicles/innova crysta.webp"
import Urbenia17SeaterAC from "../asset/vehicles/urbenia 17 seater ac.webp"

import shirdi from "../asset/shirdi.jpg"
import goa from "../asset/goa.jpg"
import mahabaleshwar from "../asset/mahabaleshwar.jpg"
import lonavala from "../asset/lonavala.jpg"

import GalleryImg1 from "../asset/galleryImage1.jpg"
import GalleryImg2 from "../asset/galleryImage2.jpg"
import GalleryImg3 from "../asset/galleryImage3.jpg"

export default function HomePage() {
    return (
        <div className="homepage">
            <Header />
            <HeroSection />
            <QuickBookingSection />
            <AboutSection />
            <FeaturesSection />
            <FleetShowcase />
            <DestinationsSection />
            <WhyChooseUsSection />
            <ProcessSection />
            <ServicesSection />
            <TestimonialsSection />
            <GallerySection />
            <SpecialOffersSection />
            <FAQSection />
            <CTASection />
            <Footer />
            <motion.div
                className="always-on-top"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
            >
                <a href="tel:+919503665843" className="call-btn" aria-label="Call Now">
                    <img src={Phone} alt="Call Now" className="call-btn-img" title="Call to +919503665843"/>
                </a>

                <a href="https://wa.me/+919503665843" className="call-btn" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                    <img src={Whatsapp} alt="WhatsApp" className="call-btn-img" title="Chat on WhatsApp with +919503665843"/>
                </a>
            </motion.div>
        </div>
    )
}

// Animated Counter Component
function AnimatedCounter({ target, suffix = "", duration = 2 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            const num = Number.parseInt(target.replace(/\D/g, ""))
            let start = 0
            const increment = num / (duration * 60)
            const timer = setInterval(() => {
                start += increment
                if (start >= num) {
                    setCount(num)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 1000 / 60)
            return () => clearInterval(timer)
        }
    }, [isInView, target, duration])

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    )
}

function QuickBookingSection() {
    const [activeTab, setActiveTab] = useState("one-way");

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [passengers, setPassengers] = useState("1-10 passengers");

    const handleSubmit = () => {
        if (!from || !to || !date) {
            alert("Please fill all required fields.");
            return;
        }

        const phone = "+919503665843";

        const msg =
            `🚌 *New Booking Request*
--------------------------------
🔸 *Trip Type:* ${activeTab.replace("-", " ")}
🔸 *From:* ${from}
🔸 *To:* ${to}
🔸 *Date:* ${date}
🔸 *Passengers:* ${passengers}
--------------------------------
Kindly confirm the booking.`;

        const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <section className="quick-booking">
            <div className="booking-container">
                <motion.div
                    className="booking-card"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="booking-header">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Book Your Journey
                        </motion.h3>

                        <div className="booking-tabs">
                            {["one-way", "round-trip", "multi-city"].map((tab) => (
                                <motion.button
                                    key={tab}
                                    className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                                    onClick={() => setActiveTab(tab)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {tab.replace("-", " ")}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div className="booking-form">
                        <motion.div
                            className="form-group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <label>From</label>
                            <div className="input-wrapper">
                                <span className="input-icon">📍</span>
                                <input
                                    type="text"
                                    placeholder="Enter pickup location"
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="swap-group"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                className="swap-btn"
                                whileHover={{ rotate: 180, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                    const temp = from;
                                    setFrom(to);
                                    setTo(temp);
                                }}
                            >
                                ⇄
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="form-group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <label>To</label>
                            <div className="input-wrapper">
                                <span className="input-icon">🎯</span>
                                <input
                                    type="text"
                                    placeholder="Enter destination"
                                    value={to}
                                    onChange={(e) => setTo(e.target.value)}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="form-group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <label>Date</label>
                            <div className="input-wrapper">
                                <span className="input-icon">📅</span>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="form-group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <label>Passengers</label>
                            <div className="input-wrapper">
                                <span className="input-icon">👥</span>
                                <select
                                    value={passengers}
                                    onChange={(e) => setPassengers(e.target.value)}
                                >
                                    <option>1-10 passengers</option>
                                    <option>11-20 passengers</option>
                                    <option>21-30 passengers</option>
                                    <option>31-50 passengers</option>
                                </select>
                            </div>
                        </motion.div>
                    </div>

                    <motion.button
                        className="search-btn"
                        onClick={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, boxShadow: "0 15px 40px rgba(255, 152, 0, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>Book Vehicle</span>
                        <motion.span
                            className="btn-icon"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}


function AboutSection() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })
    const y = useTransform(scrollYProgress, [0, 1], [100, -100])

    const navigation = useNavigate();

    return (
        <section className="about-section" ref={containerRef}>
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        <motion.div className="about-image-main" style={{ y }}>
                            <img src={AboutImage} alt="About ANMOL Travels" />
                        </motion.div>
                        <motion.div
                            className="about-image-float"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img src={HappyTravelersImage} alt="Happy Travelers" />
                        </motion.div>
                        <motion.div
                            className="experience-badge"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, type: "spring", bounce: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <span className="exp-number">12+</span>
                            <span className="exp-text">Years of Excellence</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        <motion.span
                            className="section-label"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            ABOUT ANMOL TRAVELS
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Your Trusted Travel Partner Since 2010
                        </motion.h2>

                        <motion.p
                            className="about-desc"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            With over 12 years of experience in the travel industry, ANMOL Travels has established itself as a
                            reliable and professional travel service provider. We specialize in providing hassle-free, affordable, and
                            comfortable travel solutions tailored to meet your specific needs.
                        </motion.p>

                        <div className="about-features">
                            {[
                                { icon: "💰", text: "Pocket-Friendly Rates" },
                                { icon: "📊", text: "Transparent Pricing" },
                                { icon: "👨‍✈️", text: "Professional Drivers" },
                                { icon: "🎧", text: "24/7 Customer Support" },
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    className="feature-item"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                >
                                    <span className="feature-icon-box">{feature.icon}</span>
                                    <span>{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.a
                            className="about-cta"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            viewport={{ once: true }}
                            href="/online-booking"
                            style={{ textDecoration: "none" }}
                        >
                            <motion.button className="cta-btn primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Book Now
                            </motion.button>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function FeaturesSection() {
    const features = [
        {
            icon: "🚌",
            title: "Modern Fleet",
            description: "Well-maintained vehicles with latest amenities for your comfort",
            color: "#2859a8",
        },
        {
            icon: "👨‍✈️",
            title: "Expert Drivers",
            description: "Experienced, trained, and courteous professional drivers",
            color: "#ff9800",
        },
        {
            icon: "💎",
            title: "Premium Service",
            description: "Luxury travel experience at competitive market rates",
            color: "#00bcd4",
        },
        {
            icon: "⏰",
            title: "On-Time Guarantee",
            description: "Punctual and reliable service you can always count on",
            color: "#4caf50",
        },
    ]

    return (
        <section className="features-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">WHY TRAVEL WITH US</span>
                    <h2>Experience Excellence in Every Journey</h2>
                    <p>We deliver exceptional service and unmatched comfort at every step</p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="feature-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -15, scale: 1.02 }}
                        >
                            <motion.div
                                className="feature-icon-wrapper"
                                style={{ "--accent-color": feature.color }}
                                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="feature-icon">{feature.icon}</span>
                            </motion.div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <motion.div
                                className="feature-line"
                                style={{ backgroundColor: feature.color }}
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
                                viewport={{ once: true }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function FleetShowcase() {
    const vehicles = [
        {
            name: "Swift Dzire",
            seats: "4 Seats",
            price: "₹12/km",
            dailyRate: "₹3,600",
            ac: "AC",
            image: SwiftDzire
        },
        {
            name: "Ertiga",
            seats: "7 Seats",
            price: "₹? /km",
            dailyRate: "₹4,500",
            ac: "AC",
            image: Ertiga
        },
        {
            name: "Tavera",
            seats: "7 Seats",
            price: "₹? /km",
            dailyRate: "₹4,800",
            ac: "AC",
            image: Tavera
        },
        {
            name: "Innova",
            seats: "7 Seats",
            price: "₹? /km",
            dailyRate: "₹5,100",
            ac: "AC",
            image: Innova
        },
        {
            name: "Innova Crysta",
            seats: "7 Seats",
            price: "₹? /km",
            dailyRate: "₹5,700",
            ac: "AC",
            image: InnovaCrysta
        },
        {
            name: "Urbenia 17 Seater AC",
            seats: "17 Seats",
            price: "₹? /km",
            dailyRate: "₹10,200",
            ac: "AC",
            image: Urbenia17SeaterAC
        }
    ]

    return (
        <section className="fleet-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">OUR FLEET</span>
                    <h2>Choose Your Perfect Ride</h2>
                    <p>From compact sedans to luxury coaches - we have it all</p>
                </motion.div>

                <div className="fleet-grid">
                    {vehicles.map((vehicle, idx) => (
                        <motion.div
                            key={idx}
                            className="fleet-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="fleet-image">
                                <img src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} />
                            </div>
                            <div className="fleet-info">
                                <h4>{vehicle.name}</h4>
                                <div className="fleet-details">
                                    <span className="seats">👥 {vehicle.seats}</span>
                                    <span className="price">{vehicle.price}</span>
                                </div>
                                <motion.a href="/online-booking" style={{ textDecoration: "none" }} className="book-fleet-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    Book Now
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.a
                    className="search-btn"
                    href="/online-booking"
                    style={{ textDecoration: "none", width: "fit-content", margin: "0 auto", marginTop: "75px" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 40px rgba(255, 152, 0, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>View More</span>
                    <motion.span
                        className="btn-icon"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        →
                    </motion.span>
                </motion.a>
            </div>
        </section>
    )
}

function DestinationsSection() {
    const destinations = [
        { name: "Shirdi", category: "Pilgrimage", image: shirdi },
        { name: "Goa", category: "Beach", image: goa },
        { name: "Mahabaleshwar", category: "Hill Station", image: mahabaleshwar },
        { name: "Lonavala", category: "Weekend", image: lonavala },
    ]

    return (
        <section className="destinations-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">POPULAR DESTINATIONS</span>
                    <h2>Explore Amazing Places</h2>
                    <p>Discover the most sought-after travel destinations with us</p>
                </motion.div>

                <div className="destinations-grid">
                    {destinations.map((dest, idx) => (
                        <motion.a
                            key={idx}
                            className="destination-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            href="/online-booking"
                        >
                            <div className="destination-image">
                                <img src={dest.image || "/placeholder.svg"} alt={dest.name} />
                                <motion.div className="destination-overlay" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
                                    <span className="dest-category">{dest.category}</span>
                                    <h3>{dest.name}</h3>
                                    <motion.button className="explore-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                        Explore Tours
                                    </motion.button>
                                </motion.div>
                            </div>
                            <div className="destination-info">
                                <span className="dest-tag">{dest.category}</span>
                                <h4>{dest.name}</h4>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}

function WhyChooseUsSection() {
    const stats = [
        { number: "12", suffix: "+", label: "Years Experience" },
        { number: "3400", suffix: "+", label: "Successful Trips" },
        { number: "1500", suffix: "+", label: "Happy Clients" },
        { number: "45", suffix: "+", label: "Vehicles" },
    ]

    return (
        <section className="stats-section">
            <div className="stats-bg-pattern" />
            <div className="container">
                <motion.div
                    className="section-header light"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">OUR ACHIEVEMENTS</span>
                    <h2>Numbers That Speak</h2>
                    <p>Our journey of excellence reflected in these milestones</p>
                </motion.div>

                <div className="stats-grid">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            className="stat-card"
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.08, y: -5 }}
                        >
                            {/* <div className="stat-icon-ring">
                                <motion.div
                                    className="stat-ring"
                                    initial={{ rotate: 0 }}
                                    whileInView={{ rotate: 360 }}
                                    transition={{ duration: 1.5, delay: idx * 0.2 }}
                                    viewport={{ once: true }}
                                />
                            </div> */}
                            <div className="stat-number">
                                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ProcessSection() {
    const steps = [
        { icon: "📍", title: "Choose Destination", description: "Select your pickup and drop location" },
        { icon: "🚗", title: "Select Vehicle", description: "Pick the perfect vehicle for your needs" },
        { icon: "📅", title: "Book Date", description: "Choose your travel date and time" },
        { icon: "✨", title: "Enjoy Trip", description: "Sit back, relax and enjoy the journey" },
    ]

    return (
        <section className="process-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">HOW IT WORKS</span>
                    <h2>Book in 4 Easy Steps</h2>
                    <p>Simple and hassle-free booking process</p>
                </motion.div>

                <div className="process-grid">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className="process-step"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.div className="step-icon" whileHover={{ scale: 1.1, rotate: 10 }}>
                                <span>{step.icon}</span>
                                <div className="step-number">{idx + 1}</div>
                            </motion.div>
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                            {idx < steps.length - 1 && (
                                <motion.div
                                    className="step-connector"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ delay: idx * 0.2 + 0.3, duration: 0.5 }}
                                    viewport={{ once: true }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ServicesSection() {
    const services = [
        {
            icon: "🚌",
            title: "Bus Rental",
            description: "Comfortable buses for any journey or occasion",
            link: "/services/bus-rental",
        },
        {
            icon: "🗺️",
            title: "Tour Packages",
            description: "Curated packages for unforgettable experiences",
            link: "/services/tours",
        },
        {
            icon: "💼",
            title: "Corporate Travel",
            description: "Professional solutions for business needs",
            link: "/services/corporate",
        },
        {
            icon: "👨‍👩‍👧‍👦",
            title: "Group Tours",
            description: "Perfect arrangements for families and groups",
            link: "/services/group",
        },
        {
            icon: "🎓",
            title: "Educational Tours",
            description: "Learning experiences for students",
            link: "/services/educational",
        },
        {
            icon: "🏨",
            title: "Holiday Packages",
            description: "Complete vacation solutions with stay",
            link: "/services/holiday",
        },
    ]

    return (
        <section className="services-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">OUR SERVICES</span>
                    <h2>Comprehensive Travel Solutions</h2>
                    <p>Everything you need for a perfect journey</p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="service-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -15, scale: 1.02 }}
                        >
                            <motion.div
                                className="service-icon"
                                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.4 }}
                            >
                                {service.icon}
                            </motion.div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const testimonials = [
        {
            name: "Smita Puri",
            role: "Business Traveler",
            text: "Our tour with ANMOL Tours & Travels was absolutely perfect. From smooth booking to careful selection of destinations, everything was handled professionally. Highly recommended!",
            image: "/professional-woman-portrait.png",
            rating: 5,
        },
        {
            name: "Dev Mohite",
            role: "Family Vacation",
            text: "The vehicle was clean, and the driver was very knowledgeable about local attractions. The team was available for assistance whenever needed. Best travel experience!",
            image: "/professional-man-portrait.png",
            rating: 5,
        },
        {
            name: "Kundalik More",
            role: "Corporate Client",
            text: "I recently traveled with ANMOL Tours & Travels, and it was an amazing experience! The team was professional and ensured every detail of our trip was well-organized.",
            image: "/confident-businessman.png",
            rating: 5,
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [testimonials.length])

    return (
        <section className="testimonials-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">TESTIMONIALS</span>
                    <h2>What Our Clients Say</h2>
                    <p>Real experiences from real travelers</p>
                </motion.div>

                <div className="testimonials-container">
                    <div className="testimonial-main">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                className="testimonial-card featured"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="quote-icon">"</div>
                                <div className="stars">
                                    {Array(testimonials[activeIndex].rating)
                                        .fill(0)
                                        .map((_, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                ★
                                            </motion.span>
                                        ))}
                                </div>
                                <p className="testimonial-text">{testimonials[activeIndex].text}</p>
                                <div className="testimonial-author">
                                    <img
                                        src={person}
                                        alt={testimonials[activeIndex].name}
                                    />
                                    <div>
                                        <h4>{testimonials[activeIndex].name}</h4>
                                        <p>{testimonials[activeIndex].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="testimonial-nav">
                        {testimonials.map((t, idx) => (
                            <motion.button
                                key={idx}
                                className={`nav-dot ${idx === activeIndex ? "active" : ""}`}
                                onClick={() => setActiveIndex(idx)}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function GallerySection() {
    const images = [
        GalleryImg1,
        GalleryImg2,
        GalleryImg3,
    ]

    return (
        <section className="gallery-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">GALLERY</span>
                    <h2>Choose Your Perfect Ride</h2>
                    <p>Find the ideal vehicle that matches your travel needs.</p>
                </motion.div>

                <div className="gallery-grid">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                        >
                            <img src={img || "/placeholder.svg"} alt={`Gallery ${idx + 1}`} />
                            <motion.div className="gallery-overlay" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
                                <span className="gallery-zoom">🔍</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.a
                    className="search-btn"
                    href="/gallery"
                    style={{ textDecoration: "none", width: "fit-content", margin: "0 auto", marginTop: "75px" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 40px rgba(255, 152, 0, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>View More</span>
                    <motion.span
                        className="btn-icon"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        →
                    </motion.span>
                </motion.a>
            </div>
        </section>
    )
}

function SpecialOffersSection() {
    const offers = [
        {
            badge: "20% OFF",
            title: "Summer Special",
            description: "Book your summer vacation with us and get 20% discount on all packages",
            validTill: "June 30, 2025",
            color: "#ff9800",
        },
        {
            badge: "30% OFF",
            title: "Group Discount",
            description: "Bring your group and enjoy up to 30% discount for groups of 20+",
            validTill: "Limited Time",
            color: "#2859a8",
        },
        {
            badge: "25% OFF",
            title: "Corporate Deals",
            description: "Special corporate packages with flexible booking options",
            validTill: "Year Round",
            color: "#00bcd4",
        },
    ]

    return (
        <section className="offers-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">LIMITED TIME OFFERS</span>
                    <h2>Exclusive Deals For You</h2>
                    <p>Grab these amazing offers before they expire</p>
                </motion.div>

                <div className="offers-grid">
                    {offers.map((offer, idx) => (
                        <motion.div
                            key={idx}
                            className="offer-card"
                            style={{ "--offer-color": offer.color }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <motion.div
                                className="offer-badge"
                                style={{ backgroundColor: offer.color }}
                                initial={{ scale: 0, rotate: -20 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{ delay: idx * 0.15 + 0.2, type: "spring", bounce: 0.5 }}
                                viewport={{ once: true }}
                            >
                                {offer.badge}
                            </motion.div>
                            <h3>{offer.title}</h3>
                            <p>{offer.description}</p>
                            <span className="offer-validity">Valid till: {offer.validTill}</span>
                            <motion.button
                                className="offer-btn"
                                style={{ backgroundColor: offer.color }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Claim Offer
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0)
    const faqs = [
        {
            q: "How do I book a vehicle?",
            a: "You can book through our website, call us directly, or use our WhatsApp booking. We offer instant confirmation and 24/7 support.",
        },
        {
            q: "What types of vehicles do you offer?",
            a: "We have a diverse fleet including sedans, SUVs, tempo travellers, mini buses, and luxury coaches to suit all your travel needs.",
        },
        {
            q: "Are your drivers experienced?",
            a: "Yes, all our drivers are professionally trained with 5+ years of experience, proper licensing, and excellent knowledge of routes.",
        },
        {
            q: "Do you offer outstation trips?",
            a: "We specialize in outstation trips across Maharashtra, Goa, and other popular destinations in India.",
        },
    ]

    return (
        <section className="faq-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">FAQ</span>
                    <h2>Frequently Asked Questions</h2>
                    <p>Find answers to common queries</p>
                </motion.div>

                <div className="faq-list">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            className={`faq-item ${openIndex === idx ? "open" : ""}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                className="faq-question"
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                whileHover={{ backgroundColor: "rgba(255, 152, 0, 0.05)" }}
                            >
                                <span>{faq.q}</span>
                                <motion.span className="faq-icon" animate={{ rotate: openIndex === idx ? 180 : 0 }}>
                                    ▼
                                </motion.span>
                            </motion.button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function CTASection() {
    return (
        <section className="cta-section">
            <div className="cta-bg-shapes">
                <motion.div
                    className="shape shape-1"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        rotate: [0, 10, 0],
                    }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                    className="shape shape-2"
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 30, 0],
                        rotate: [0, -15, 0],
                    }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                />
            </div>
            <div className="container">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <motion.span
                        className="cta-label"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Ready for Your Next Adventure?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Let's Plan Your Perfect Journey Together
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Contact us today and experience the difference of traveling with ANMOL Travels
                    </motion.p>
                    <motion.div
                        className="cta-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <motion.a href="/online-booking" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <button className="cta-btn primary">
                                Book Your Trip
                                <span className="btn-shine" />
                            </button>
                        </motion.a>
                        <motion.a href="tel:+919876543210" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
                            <button className="cta-btn">
                                <span className="phone-icon">📞</span>
                                Call Now
                            </button>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
