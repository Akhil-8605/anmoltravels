import { Helmet } from "react-helmet-async"
import Logo from "../asset/favicon.jpg"

export default function SEO({
    title,
    description,
    keywords,
    url,
    image,
    article = false,
    canonical,
    jsonLd = null,
    author = "Anmol Tours & Travels",
    publishedDate = null,
    modifiedDate = null,
    robots = "index, follow",
    language = "en",
}) {
    const siteName = "Anmol Tours & Travels"
    const fullTitle = title ? `${title} | ${siteName}` : siteName
    const metaImage = image || Logo
    const metaUrl = url || (typeof window !== "undefined" ? window.location.href : "https://anmoltoursandtravels.com")

    const structuredData = jsonLd || {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url: "https://anmoltoursandtravels.com",
        sameAs: ["https://www.facebook.com/anmoltours", "https://www.instagram.com/anmoltours", "https://www.whatsapp.com"],
    }

    return (
        <Helmet>
            <html lang={language} />
            <title>{fullTitle}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={author} />
            <meta name="robots" content={robots} />
            <meta name="language" content={language} />
            <meta name="revisit-after" content="7" />
            <link rel="canonical" href={canonical || metaUrl} />

            <meta name="theme-color" content="#1f2937" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content={siteName} />

            <meta property="og:locale" content="en_IN" />
            <meta name="geo.position" content="17.6599;75.8594" />
            <meta name="ICBM" content="17.6599, 75.8594" />
            <meta name="geo.placename" content="Solapur" />
            <meta name="geo.region" content="IN-MH" />

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={article ? "article" : "website"} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_IN" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={metaImage} />
            <meta name="twitter:creator" content="@anmoltours" />
            <meta name="twitter:site" content="@anmoltours" />

            {article && publishedDate && <meta property="article:published_time" content={publishedDate} />}
            {article && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
            {article && <meta property="article:author" content={author} />}

            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />

            <link rel="icon" href={Logo} />
            <link rel="apple-touch-icon" href={Logo} />

            <link rel="alternate" hrefLang="en" href={metaUrl} />
            <link rel="alternate" hrefLang="en-IN" href={metaUrl} />
        </Helmet>
    )
}
