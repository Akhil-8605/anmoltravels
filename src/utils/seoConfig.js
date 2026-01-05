export const SEO_CONFIG = {
    siteName: "Anmol Tours & Travels",
    siteUrl: "https://anmoltoursandtravels.com",
    domain: "anmoltoursandtravels.com",
    socialProfiles: {
        facebook: "https://www.facebook.com/anmoltours",
        instagram: "https://www.instagram.com/anmoltours",
        whatsapp: "https://wa.me/919503665843",
        youtube: "https://www.youtube.com/anmoltours",
    },
    contact: {
        phone: "+91-9503665843",
        email: "info@anmoltoursandtravels.com",
        address: {
            street: "NEW RTO OFFICE, PLOT NO 203/26, Vijapur Rd, behind NIRMITI VIHAR",
            city: "Solapur",
            state: "Maharashtra",
            postal: "413004",
            country: "India",
            coordinates: { lat: 17.6599, lng: 75.8594 },
        },
    },
    businessHours: "Mo-Su 06:00-22:00",
    services: [
        "Car Rentals",
        "Taxi Service",
        "Tour Packages",
        "Tempo Traveller Rentals",
        "Package Delivery",
        "Pilgrimage Tours",
    ],
    destinations: ["Solapur", "Pune", "Shirdi", "Pandharpur", "Tuljapur", "Akkalkot", "Mahabaleshwar", "Lonavala", "Goa"],
}

export const pageMetadata = {
    home: {
        title: "Anmol Travels - Car Rentals, Tours & Travel Services in Solapur & Pune",
        description:
            "Anmol Tours & Travels offers reliable car rentals, taxi services, pilgrimage packages, and travel solutions in Solapur, Pune, and Maharashtra. Book now for best prices.",
        keywords:
            "Anmol Travels, car rentals Solapur, taxi service Pune, tour packages, pilgrimage tours, tempo traveller rental, travel agency",
    },
    packages: {
        title: "Pilgrimage & Holiday Packages - Anmol Tours & Travels",
        description:
            "Explore affordable pilgrimage and holiday packages from Solapur to Shirdi, Pandharpur, Mahabaleshwar, Goa, and more. Customized tours available.",
        keywords: "pilgrimage packages, holiday tours, Shirdi package, Pandharpur tour, travel packages Solapur",
    },
    gallery: {
        title: "Gallery - Anmol Tours & Travels | Travel Photos & Destinations",
        description:
            "View photos of our vehicles, destinations, and happy customers. See the quality of our travel services and beautiful locations we cover.",
        keywords: "travel gallery, vehicle photos, destination images, customer reviews photos",
    },
    booking: {
        title: "Online Booking - Anmol Tours & Travels | Book Now",
        description:
            "Book your car rental, taxi, or tour package online. Simple, secure, and instant confirmation. Get the best prices for Solapur and Pune travel.",
        keywords: "online booking, car rental booking, taxi reservation, tour package booking",
    },
    contact: {
        title: "Contact Us - Anmol Tours & Travels | Get in Touch",
        description:
            "Contact Anmol Tours & Travels for car rentals and travel services. Call +91-9503665843 or visit our office in Solapur.",
        keywords: "contact us, phone number, office address, customer support",
    },
    about: {
        title: "About Anmol Tours & Travels - Your Trusted Travel Partner",
        description:
            "Learn about Anmol Tours & Travels - a trusted travel company in Solapur with years of experience in car rentals and tour packages.",
        keywords: "about us, company information, travel company Solapur",
    },
}

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://anmoltoursandtravels.com",
    name: "Anmol Tours & Travels",
    alternateName: ["Anmol Travels", "Anmole"],
    description:
        "Professional travel agency offering car rentals, taxi services, and pilgrimage tour packages in Solapur, Pune, and Maharashtra.",
    image: "https://anmoltoursandtravels.com/og-preview.jpg",
    url: "https://anmoltoursandtravels.com",
    telephone: "+91-9503665843",
    email: "info@anmoltoursandtravels.com",
    priceRange: "₹₹",
    address: {
        "@type": "PostalAddress",
        streetAddress: "NEW RTO OFFICE, PLOT NO 203/26, Vijapur Rd, behind NIRMITI VIHAR, Vijay Deshmukh Nagar",
        addressLocality: "Solapur",
        addressRegion: "Maharashtra",
        postalCode: "413004",
        addressCountry: "IN",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "17.6599",
        longitude: "75.8594",
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "06:00",
        closes: "22:00",
    },
    sameAs: ["https://www.facebook.com/anmoltours", "https://www.instagram.com/anmoltours", "https://wa.me/919503665843"],
    areaServed: [
        {
            "@type": "City",
            name: "Solapur",
        },
        {
            "@type": "City",
            name: "Pune",
        },
        {
            "@type": "State",
            name: "Maharashtra",
        },
    ],
}
