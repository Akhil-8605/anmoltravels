import "./Footer.css"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, MessageCircle, Bus, Plane, Globe, Star, Sparkles } from 'lucide-react'

export default function Footer() {
    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "Contact Us", href: "/contact" },
    ]

    const services = [
        { name: "Gallery", href: "/gallery" },
        { name: "Online Booking", href: "/online-booking" },
        { name: "Packages", href: "/packages" },
    ]

    const socialLinks = [
        { icon: Facebook, href: "#", color: "#1877f2", name: "Facebook" },
        { icon: Twitter, href: "#", color: "#1da1f2", name: "Twitter" },
        { icon: Instagram, href: "#", color: "#e4405f", name: "Instagram" },
        { icon: Linkedin, href: "#", color: "#0a66c2", name: "LinkedIn" },
    ]

    return (
        <footer className="footer">
            {/* <CHANGE> Added animated gradient orbs background */}
            <div className="footer-gradient-orbs">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
                <div className="orb orb-4"></div>
            </div>

            {/* <CHANGE> Enhanced floating icons with more elements */}
            <div className="footer-bg-elements">
                <Plane className="floating-icon plane-1" />
                <Plane className="floating-icon plane-2" />
                <Bus className="floating-icon bus-1" />
                <Globe className="floating-icon globe-1" />
                <Star className="floating-icon star-1" />
                <Star className="floating-icon star-2" />
                <Star className="floating-icon star-3" />
                <Sparkles className="floating-icon sparkle-1" />
            </div>

            {/* <CHANGE> Added animated particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{ '--i': i }}></div>
                ))}
            </div>

            <div className="footer-container">
                {/* Brand Section */}
                <div className="footer-section brand-section">
                    <div className="logo-wrapper">
                        {/* <CHANGE> Enhanced logo with animated ring */}
                        <div className="logo-icon">
                            <div className="logo-ring"></div>
                            <div className="logo-ring ring-2"></div>
                            <Bus className="bus-icon" />
                        </div>
                        <div className="logo-text">
                            <h2 className="company-name">
                                <span className="highlight">ANMOL</span>
                                <span className="sub-text">TOURS & TRAVELS</span>
                            </h2>
                            <div className="since-badge">
                                <Sparkles size={12} />
                                Since 2010
                                <Sparkles size={12} />
                            </div>
                        </div>
                    </div>
                    <p className="tagline">
                        Explore the world with ANMOL Tours and Travels—your trusted partner for unforgettable journeys.
                    </p>
                    {/* <CHANGE> Enhanced social links with labels */}
                    <div className="social-links">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="social-link"
                                style={{ "--hover-color": social.color, "--delay": `${index * 0.1}s` }}
                                aria-label={social.name}
                            >
                                <span className="social-bg"></span>
                                <social.icon size={20} />
                                <span className="social-tooltip">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section">
                    <h3 className="section-title">
                        <span className="title-icon">🔗</span>
                        <span className="title-text">Quick Links</span>
                        <span className="title-underline"></span>
                    </h3>
                    <ul className="link-list">
                        {quickLinks.map((link, index) => (
                            <li key={index} style={{ "--delay": `${index * 0.1}s` }}>
                                <a href={link.href} className="footer-link">
                                    <span className="link-dot"></span>
                                    <span className="link-text">{link.name}</span>
                                    <span className="link-arrow">→</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services Section */}
                <div className="footer-section">
                    <h3 className="section-title">
                        <span className="title-icon">⚡</span>
                        <span className="title-text">Services</span>
                        <span className="title-underline"></span>
                    </h3>
                    <ul className="link-list">
                        {services.map((service, index) => (
                            <li key={index} style={{ "--delay": `${index * 0.1}s` }}>
                                <a href={service.href} className="footer-link">
                                    <span className="link-dot"></span>
                                    <span className="link-text">{service.name}</span>
                                    <span className="link-arrow">→</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-section">
                    <h3 className="section-title">
                        <span className="title-icon">📍</span>
                        <span className="title-text">Contacts</span>
                        <span className="title-underline"></span>
                    </h3>
                    <div className="contact-list">
                        <div className="contact-item">
                            <div className="contact-icon location">
                                <MapPin size={18} />
                            </div>
                            <p>
                                NEW RTO OFFICE, PLOT NO 203/26, Vijapur Rd, behind NIRMITI VIHAR, Vijay Deshmukh Nagar, Solapur, 
                                Maharashtra 413004
                            </p>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon whatsapp">
                                <MessageCircle size={18} />
                            </div>
                            <a href="tel:+919503665843">+91 9503665843</a>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon email">
                                <Mail size={18} />
                            </div>
                            <a href="mailto:anmoltourstravells@gmail.com">anmoltourstravells@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="bottom-content">
                    <p>
                        <span className="heart">❤️</span> © 2025 <span className="brand-highlight">ANMOL Tours & Travels</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
