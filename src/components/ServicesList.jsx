import "./ServicesList.css";

const WHATSAPP_NUMBER = "919503665843";

const servicesData = [
    {
        category: "Tourist Destinations in Maharashtra",
        services: [
            "Best cab service in Solapur",
            "Solapur to Lonavala Car Rent / Car Hire",
            "Solapur to Khandala Car Rent / Car Hire",
            "Solapur to Matheran Car Rental / Car Hire",
            "Solapur to Mahalej Ghat Car Rental / Car Hire",
            "Solapur to Saputara Car Rental / Car Hire",
            "Solapur to Ellora Caves Car Rental / Car Hire",
            "Solapur to Amboli Car Rental / Car Hire",
            "Solapur to Varandha Ghat Car Rent / Car Hire",
            "Solapur to Kaspathar - Thoseghar Car Rental / Car Hire",
            "Solapur to Bemnoli Car Rental / Car Hire",
            "Solapur to Tamhini Ghat Car Rental / Car Hire",
        ],
    },
    {
        category: "Pilgrimage Destinations in Maharashtra",
        services: [
            "solapur to pandharpur tuljapur akkalkot gangapur",
            "solapur to bhimashankar car rental / Car hire",
            "Solapur to Shirdi Car Rental / Car Hire",
            "Solapur to Nashik Car Rental / Car Hire",
            "Solapur to Kolhapur Car Rental / Car Hire",
            "Solapur to Ghruneshwar Car Rental / Car Hire",
            "Solapur to Aurangabad Car Rental / Car Hire",
            "Solapur To Akkalkot Car Rent / Car Hire",
            "Solapur To Tuljapur Car Rental / Car Hire",
            "Solapur To Gangapur Car Rent / Car Hire",
            "Solapur To Pandharpur Car Rental / Car Hire",
            "Solapur To Bhimashankar Car Rental / Car Hire",
            "Solapur To Jejuri Car Rental / Car Hire",
            "Solapur To Ashtavinayak Car Rental / Car Hire",
            "Solapur To Tuljapur taxi",
            "Solapur To Parali Vaijanath Car Rental / Car Hire",
            "Solapur To Narsobawadi Car Rental / Car Hire",
            "Solapur To Sajjangad Cab service",
        ],
    },
    {
        category: "Famous Cities in Maharashtra",
        services: [
            "Solapur to Pune Car Rental / Car Hire",
            "Solapur to Mumbai Car Rental / Car Hire",
            "Solapur to Satara Car Rental / Car Hire",
            "Solapur to Sangali Car Rental / Car Hire",
            "Solapur to Nagpur Car Rental / Car Hire",
            "Solapur to Kolhapur Car Rental / Car Hire",
            "Solapur to Latur Car Rental / Car Hire",
            "Solapur to Vijapur Car Rental / Car Hire",
            "Solapur to Bagalkot Car Rent / Car Hire",
            "Solapur to Malvan Caves Car Rental / Car Hire",
            "Solapur to Pachgani Car Rental / Car Hire",
            "Solapur to Jalgoan Car Rental / Car Hire",
            "Solapur to Akkalkot cab",
            "Solapur to Ahmadnagar Car Rental / Car Hire",
            "Solapur to Kudki Car Rental / Car Hire",
            "Solapur taxi service",
            "Solapur to Jalna Car Rental / Car Hire",
        ],
    },
    {
        category: "Beach Destinations in Maharashtra",
        services: [
            "Solapur To Ganpatipule Car Rental / Car Hire",
            "Solapur To Goa Car Rental / Car Hire",
            "Solapur To Shriwardhan Harihareshwar Car Rental / Car Hire",
            "Solapur To Tarkarali Beach Car Rental / Car Hire",
            "Solapur To Diveagar Car Rental / Car Hire",
            "Solapur To Dapoli Car Rental / Car Hire",
            "Solapur To Alibag Caves Car Rental / Car Hire",
            "Solapur To Kasid Car Rental / Car Hire",
            "Solapur To Murud - Janjira Car Rent / Car Hire",
            "Solapur To Hamai Car Rental / Car Hire",
            "Solapur To Nagaon Car Rental / Car Hire",
            "Solapur To Ratnagiri Car Rental / Car Hire",
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
