"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail } from "lucide-react"
import "./Header.css"
import Logo from "../asset/favicon.jpg"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Gallery", href: "/gallery" },
        { label: "Online Booking", href: "/online-booking" },
        { label: "Packages", href: "/packages" },
        { label: "Contact Us", href: "/contact" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = 80
            setIsScrolled(window.scrollY > headerHeight)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            {/* Main Header */}
            <motion.header
                className={`header ${isScrolled ? "header-scrolled" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="header-container">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="logo"
                    >
                        <a href="/">
                            <motion.img
                                src={Logo}
                                alt="Anmol Tours & Travels"
                                className="logo-image"
                                style={isScrolled ? { boxShadow: "4px 4px 15px rgba(255, 153, 0, 0)" } : {}}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.header
                                className="logo-container"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="logo-text" style={{ color: isScrolled ? "#ff9800" : "#2859a8" }}>ANMOL</h1>
                                <h3 className="logo-subtext" style={{ color: isScrolled ? "#ff9800" : "#2859a8" }}>Tours & Travels</h3>
                            </motion.header>

                        </a>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <motion.a href={link.href} className="nav-link" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                                    {link.label}
                                    <span className="nav-link-underline"></span>
                                </motion.a>
                            </motion.div>
                        ))}
                        <motion.a
                            href="/online-booking"
                            className="cta-button"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(255, 152, 0, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Now
                        </motion.a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={toggleMenu}
                        className={`menu-button ${isScrolled ? "menu-button-scrolled" : ""}`}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={28} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={28} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="nav-mobile"
                        >
                            <div className="nav-mobile-inner">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.3, delay: index * 0.08 }}
                                    >
                                        <a href={link.href} className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                                            <span className="nav-link-mobile-text">{link.label}</span>
                                            <span className="nav-link-mobile-arrow">→</span>
                                        </a>
                                    </motion.div>
                                ))}
                                <motion.a
                                    href="/online-booking"
                                    className="cta-button-mobile"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Book Your Trip Now
                                </motion.a>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    )
}
