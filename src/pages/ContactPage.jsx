"use client"

import { useState } from "react"
import { motion , AnimatePresence} from "framer-motion"
import Header from "../components/Header"
import "./ContactPage.css"
import Footer from "../components/Footer"

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

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
            alert("Please fill all fields")
            return
        }

        setLoading(true)

        const message = `*Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`

        const whatsappUrl = `https://wa.me/919503665843?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        })
        setLoading(false)
    }

    return (
        <>
            <Header />
            <main className="contact-page">
                {/* Hero Section */}
                <motion.section
                    className="contact-hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="contact-hero-overlay">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="contact-hero-title"
                        >
                            Contact Us
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="contact-hero-subtitle"
                        >
                            Get in touch with ANMOL Travels
                        </motion.p>
                    </div>
                </motion.section>

                {/* Contact Section */}
                <section className="contact-section">
                    <div className="contact-container">
                        <div className="contact-content">
                            {/* Contact Info */}
                            <motion.div
                                className="contact-info-box"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h2>Get In Touch</h2>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3>Phone</h3>
                                        <p>+91 9503665843</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3>Email</h3>
                                        <p>ashaikh1419@gmail.com</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3>Address</h3>
                                        <p>SR No. 204, Papde Wasti Rd,</p>
                                        <p>Dhamalwadi, Bhekrai Nagar, Phursungi, Pune</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.form
                                className="contact-form"
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your phone number"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What is this about?"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message here..."
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="submit-btn"
                                >
                                    {loading ? "Sending..." : "Send Message via WhatsApp"}
                                </motion.button>
                            </motion.form>
                        </div>
                    </div>
                </section>
            </main>
            <FAQSection />
            <Footer/>
        </>
    )
}
