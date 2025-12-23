import "./ServicesList.css";

const WHATSAPP_NUMBER = "919503665843";

const servicesData = [
    {
        category: "Tourist Destinations in Maharashtra",
        services: [
            "Best cab service in Solapur",
            "Solapur to Lonavala Car Rental",
            "Solapur to Khandala Car Rental",
            "Solapur to Mahabaleshwar Car Rental",
            "Solapur to Ellora Caves Car Rental",
            "Solapur to Amboli Ghat Car Rental",
            "Solapur to Tamhini Ghat Car Rental",
        ],
    },
    {
        category: "Pilgrimage Destinations in Maharashtra",
        services: [
            "Solapur to Pandharpur Car Rental",
            "Solapur to Tuljapur Car Rental",
            "Solapur to Akkalkot Car Rental",
            "Solapur to Gangapur Car Rental",
            "Solapur to Shirdi Car Rental",
            "Solapur to Bhimashankar Car Rental",
            "Solapur to Jejuri Car Rental",
        ],
    },
    {
        category: "Famous Cities in Maharashtra",
        services: [
            "Solapur to Pune Car Rental",
            "Solapur to Mumbai Car Rental",
            "Solapur to Nagpur Car Rental",
            "Solapur to Kolhapur Car Rental",
            "Solapur to Aurangabad Car Rental",
            "Solapur to Satara Car Rental",
            "Solapur Taxi Service",
        ],
    },
    {
        category: "Beach Destinations in Maharashtra",
        services: [
            "Solapur to Goa Car Rental",
            "Solapur to Ganpatipule Car Rental",
            "Solapur to Tarkarli Beach Car Rental",
            "Solapur to Diveagar Car Rental",
            "Solapur to Alibag Car Rental",
            "Solapur to Murud-Janjira Car Rental",
            "Solapur to Ratnagiri Car Rental",
        ],
    },
];

const openWhatsApp = (serviceName) => {
    const message = `Hello, I am interested in ${serviceName}. Please share details.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
    )}`;
    window.open(url, "_blank");
};

export default function OurServices() {
    return (
        <section className="services-section">
            <h2 className="services-title">OUR SERVICES</h2>

            <p className="services-desc">
                We provide reliable, comfortable and affordable travel solutions across
                Maharashtra. Choose your destination and connect with us instantly on
                WhatsApp.
            </p>

            <div className="services-grid">
                {servicesData.map((group, index) => (
                    <div className="service-card" key={index}>
                        <h3>{group.category}</h3>
                        <ul>
                            {group.services.map((service, i) => (
                                <li
                                    key={i}
                                    onClick={() => openWhatsApp(service)}
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
