"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./HeroSection.css"

import BannerImg1 from "../asset/BannerImage1.webp"
import BannerImg2 from "../asset/BannerImage2.jpg"
import BannerImg3 from "../asset/BannerImage3.webp"
import BannerImg4 from "../asset/BannerImage4.webp"
import BannerImg5 from "../asset/BannerImage5.webp"
import BannerImg6 from "../asset/BannerImage6.jpg"
import { Navigate } from "react-router-dom"


// Floating Particles Background
function FloatingParticles() {
    return (
        <div className="hero-floating-particles">
            {[...Array(25)].map((_, i) => (
                <motion.div
                    key={i}
                    className="hero-particle"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: "110%",
                        opacity: 0,
                    }}
                    animate={{
                        y: "-10%",
                        opacity: [0, 0.8, 0.8, 0],
                    }}
                    transition={{
                        duration: Math.random() * 12 + 8,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 5,
                        ease: "linear",
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 8 + 3}px`,
                        height: `${Math.random() * 8 + 3}px`,
                    }}
                />
            ))}
        </div>
    )
}

// Animated Text with Split Characters
function AnimatedText({ text, className, delay = 0 }) {
    return (
        <motion.span className={className}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * 0.03,
                        ease: [0.215, 0.61, 0.355, 1],
                    }}
                    style={{ display: "inline-block" }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    )
}

// Image Thumbnail Preview
function ThumbnailNav({ slides, currentSlide, onSelect }) {
    return (
        <div className="hero-thumbnails">
            {slides.map((slide, idx) => (
                <motion.button
                    key={idx}
                    className={`thumbnail-item ${idx === currentSlide ? "active" : ""}`}
                    onClick={() => onSelect(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                >
                    <div className="thumbnail-image" style={{ backgroundImage: `url('${slide.image}')` }} />
                    <motion.div
                        className="thumbnail-progress"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: idx === currentSlide ? 1 : 0 }}
                        transition={{ duration: idx === currentSlide ? 6 : 0.3, ease: "linear" }}
                    />
                </motion.button>
            ))}
        </div>
    )
}

// Stats Badge Component
function StatsBadge() {
    return (
        <motion.div
            className="hero-stats-badge"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
        >
            <div className="stats-badge-inner">
                <div className="stat-badge-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Years</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-badge-item">
                    <span className="stat-number">50K+</span>
                    <span className="stat-label">Trips</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-badge-item">
                    <span className="stat-number">98%</span>
                    <span className="stat-label">Happy</span>
                </div>
            </div>
        </motion.div>
    )
}

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlay, setIsAutoPlay] = useState(true)
    const [direction, setDirection] = useState(1)
    const [isLoaded, setIsLoaded] = useState(false)

    const slides = [
        {
            title: "Welcome to Anmol Tours & Travels",
            subtitle: "Your Trusted Travel Partner",
            description: "Anmol Tours & Travels delivers safe, comfortable, and premium transportation services for all types of journeys.",
            image: BannerImg1,
            cta: "Know More",
            highlight: "Since 2010",
        },
        {
            title: "Reliable Bus & Vehicle Rentals",
            subtitle: "Affordable & Comfortable",
            description: "We provide well-maintained buses, cars, and tempo travellers for personal, group, and corporate travel needs.",
            image: BannerImg2,
            cta: "View Services",
            highlight: "Most Trusted",
        },
        {
            title: "Expert Travel Management",
            subtitle: "Professional Service",
            description: "From short trips to long tours, our experienced team ensures smooth coordination and hassle-free travel.",
            image: BannerImg3,
            cta: "Explore More",
            highlight: "Quality Assured",
        },
        {
            title: "Pilgrimage & Tour Packages",
            subtitle: "Comfortable Journeys",
            description: "Experience peaceful and well-organized travel for pilgrimage and holiday destinations across India.",
            image: BannerImg4,
            cta: "Check Packages",
            highlight: "Customer Favourite",
        },
        {
            title: "Corporate Travel Solutions",
            subtitle: "Professional & On Time",
            description: "Trusted by companies for employee transport, business trips, and premium corporate travel services.",
            image: BannerImg5,
            cta: "Get a Quote",
            highlight: "Business Class",
        },
        {
            title: "Customized Travel Plans",
            subtitle: "Designed For You",
            description: "We create tailored travel solutions to match your timing, comfort, and budget requirements.",
            image: BannerImg6,
            cta: "Customize Now",
            highlight: "Flexible Options",
        }
    ];


    useEffect(() => {
        setIsLoaded(true)
    }, [])

    useEffect(() => {
        if (!isAutoPlay) return
        const interval = setInterval(() => {
            setDirection(1)
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [isAutoPlay, slides.length])

    const goToSlide = useCallback(
        (index) => {
            setDirection(index > currentSlide ? 1 : -1)
            setCurrentSlide(index)
            setIsAutoPlay(false)
            setTimeout(() => setIsAutoPlay(true), 10000)
        },
        [currentSlide],
    )

    const nextSlide = useCallback(() => {
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsAutoPlay(false)
        setTimeout(() => setIsAutoPlay(true), 10000)
    }, [slides.length])

    const prevSlide = useCallback(() => {
        setDirection(-1)
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        setIsAutoPlay(false)
        setTimeout(() => setIsAutoPlay(true), 10000)
    }, [slides.length])

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 1.1,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
        exit: (direction) => ({
            x: direction > 0 ? "-50%" : "50%",
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.6,
            },
        }),
    }

    return (
        <section className="hero-section">
            <FloatingParticles />

            {/* Background Image Carousel */}
            <div className="hero-carousel-container">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentSlide}
                        className="hero-slide-bg"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        <div className="hero-slide-image" style={{ backgroundImage: `url('${slides[currentSlide].image}')` }} />
                        <div className="hero-gradient-overlay" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Main Content */}
            <div className="hero-main-content">
                <div className="hero-content-wrapper">
                    {/* Left Content */}
                    <div className="hero-text-content">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                className="hero-text-inner"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Highlight Badge */}
                                <motion.div
                                    className="hero-highlight-badge"
                                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    <span className="highlight-dot" />
                                    <span className="highlight-text">{slides[currentSlide].highlight}</span>
                                </motion.div>

                                {/* Subtitle */}
                                <motion.div
                                    className="hero-subtitle-wrapper"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="subtitle-line" />
                                    <span className="hero-subtitle">{slides[currentSlide].subtitle}</span>
                                </motion.div>

                                {/* Title */}
                                <motion.h1
                                    className="hero-main-title"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {slides[currentSlide].title.split(" ").map((word, i) => (
                                        <motion.span
                                            key={i}
                                            className="title-word"
                                            initial={{ opacity: 0, y: 60, rotateX: -45 }}
                                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.3 + i * 0.1,
                                                ease: [0.215, 0.61, 0.355, 1],
                                            }}
                                        >
                                            {word}{" "}
                                        </motion.span>
                                    ))}
                                </motion.h1>

                                {/* Description */}
                                <motion.p
                                    className="hero-description"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.6 }}
                                >
                                    {slides[currentSlide].description}
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    className="hero-cta-group"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.8 }}
                                >
                                    <motion.a
                                        className="hero-cta-primary"
                                        style={{textDecoration: "none"}}
                                        href="/online-booking"
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="cta-text">{slides[currentSlide].cta}</span>
                                        <span className="cta-icon">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                        <span className="cta-shine" />
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side - Stats Badge (Desktop) */}
                    <StatsBadge />
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="hero-navigation">
                {/* Slide Counter */}
                <motion.div
                    className="hero-slide-counter"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <span className="counter-current">{String(currentSlide + 1).padStart(2, "0")}</span>
                    <div className="counter-line">
                        <motion.div
                            className="counter-progress"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 6, ease: "linear" }}
                            key={currentSlide}
                        />
                    </div>
                    <span className="counter-total">{String(slides.length).padStart(2, "0")}</span>
                </motion.div>

                {/* Arrow Controls */}
                <div className="hero-arrows">
                    <motion.button
                        className="hero-arrow prev"
                        onClick={prevSlide}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </motion.button>
                    <motion.button
                        className="hero-arrow next"
                        onClick={nextSlide}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </motion.button>
                </div>
            </div>

            {/* Thumbnail Navigation */}
            <ThumbnailNav slides={slides} currentSlide={currentSlide} onSelect={goToSlide} />

            {/* Scroll Indicator */}
            <motion.div
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    className="scroll-mouse"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                    <div className="mouse-wheel" />
                </motion.div>
                <span className="scroll-text">Scroll to Explore</span>
            </motion.div>

            {/* Decorative Elements */}
            <div className="hero-decorative">
                <div className="deco-circle circle-1" />
                <div className="deco-circle circle-2" />
                <div className="deco-line line-1" />
                <div className="deco-line line-2" />
            </div>
        </section>
    )
}
