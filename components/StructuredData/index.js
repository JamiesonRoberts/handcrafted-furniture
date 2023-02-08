export default function StructuredData() {
    return (
        <>
            <script
                type='application/ld+json'
                key={'LocalBusiness-jsonld'}
                id={'localbusiness'}
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://handcraftedfurniture.ca/#localbusiness",
                        "name": "Handcrafted Furniture by Ken Roberts",
                        "contactPoint" : [
                            {
                                "@type" : "ContactPoint",
                                "email": "ken@handcraftedfurniture.ca",
                                "telephone": "+15198723930"
                            }
                        ],
                        "image": "https://handcraftedfurniture.ca/logo.jpg",
                        "url": "https://handcraftedfurniture.ca",
                        "sameAs": [
                            "https://www.facebook.com/HCFurn",
                            "https://www.instagram.com/ker1948/"
                        ],
                        "hasMap": "https://www.google.com/maps/place/Handcrafted+Furniture/@43.0157785,-81.3082369,14z/data=!4m6!3m5!1s0x882eefe7f2466e31:0xb7ef20e1c16ec34f!8m2!3d43.0157785!4d-81.273218!16s%2Fg%2F11bzv24vdy",
                        "email": "ken@handcraftedfurniture.ca",
                        "telephone": "+15198723930",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "21 Gablewood Crescent",
                            "addressLocality": "London",
                            "addressRegion": "ON",
                            "postalCode": "N6G2Z8",
                            "addressCountry": "CA"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 43.00868,
                            "longitude": -81.3207913
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday"
                                ],
                                "opens": "09:00",
                                "closes": "17:00"
                            }
                        ]
                    }`,
                }}
            ></script>
        </>
    )
}
