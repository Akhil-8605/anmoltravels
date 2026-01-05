"use client"

import { motion } from "framer-motion"
import Header from "../components/Header"
import "./GalleryPage.css"
import GalleryImg1 from "../asset/galleryImage1.jpg"
import GalleryImg2 from "../asset/galleryImage2.jpg"
import GalleryImg3 from "../asset/galleryImage3.jpg"
import GalleryImg4 from "../asset/galleryImage4.jpg"
import GalleryImg5 from "../asset/galleryImage5.jpg"
import GalleryImg6 from "../asset/galleryImage6.jpg"
import GalleryImg7 from "../asset/galleryImage7.jpg"
import GalleryImg8 from "../asset/galleryImage8.jpg"
import GalleryImg9 from "../asset/galleryImage9.jpg"
import GalleryImg10 from "../asset/galleryImage10.jpg"
import GalleryImg11 from "../asset/galleryImage11.jpg"
import GalleryImg12 from "../asset/galleryImage12.jpg"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import { pageMetadata } from "../utils/seoConfig"

const galleryImages = [
    GalleryImg1,
    GalleryImg2,
    GalleryImg3,
    GalleryImg4,
    GalleryImg5,
    GalleryImg6,
    GalleryImg7,
    GalleryImg8,
    GalleryImg9,
    GalleryImg10,
    GalleryImg11,
    GalleryImg12,
]

export default function GalleryPage() {
    const gallerySchemaLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ImageGallery",
                name: "Anmol Tours & Travels Gallery",
                url: "https://anmoltoursandtravels.com/gallery",
                description: "Photo gallery showcasing our vehicles, tours, and satisfied customers",
                image: galleryImages.map((img) => ({
                    "@type": "ImageObject",
                    url: img,
                })),
            },
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
                        name: "Gallery",
                        item: "https://anmoltoursandtravels.com/gallery",
                    },
                ],
            },
        ],
    }

    return (
        <>
            <SEO
                title={pageMetadata.gallery.title}
                description={pageMetadata.gallery.description}
                keywords={pageMetadata.gallery.keywords}
                url="https://anmoltoursandtravels.com/gallery"
                image="https://anmoltoursandtravels.com/og-preview.jpg"
                jsonLd={gallerySchemaLd}
                canonical="https://anmoltoursandtravels.com/gallery"
                robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
            />
            <Header />
            <main className="gallery-page">
                {/* Hero Section */}
                <motion.section
                    className="gallery-hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="gallery-hero-overlay">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="gallery-hero-title"
                        >
                            Gallery
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="gallery-hero-subtitle"
                        >
                            Discover your next great adventure
                        </motion.p>
                    </div>
                </motion.section>

                {/* Gallery Grid */}
                <section className="gallery-section">
                    <div className="gallery-container">
                        <motion.div
                            className="gallery-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {galleryImages.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="gallery-item"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                >
                                    <div className="gallery-image-wrapper">
                                        <img src={item || "/placeholder.svg"} />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}
