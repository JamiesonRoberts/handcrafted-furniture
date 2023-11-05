const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Woodworker',
    '@id': 'https://handcraftedfurniture.ca/#localbusiness',
    name: 'Handcrafted Furniture by Ken Roberts',
    contactPoint: [
        {
            '@type': 'ContactPoint',
            email: 'ken@handcraftedfurniture.ca',
            telephone: '+15198723930',
        },
    ],
    image: 'https://handcraftedfurniture.ca/logo.jpg',
    url: 'https://handcraftedfurniture.ca',
    sameAs: [
        'https://www.facebook.com/HCFurn',
        'https://www.instagram.com/ker1948/',
    ],
    email: 'ken@handcraftedfurniture.ca',
    telephone: '+15198723930',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '21 Gablewood Crescent',
        addressLocality: 'London',
        addressRegion: 'ON',
        postalCode: 'N6G2Z8',
        addressCountry: 'CA',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.00868,
        longitude: -81.3207913,
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
        },
    ],
}

export default function StructuredData() {
    return (
        <>
            <script
                type='application/ld+json'
                key={'LocalBusiness-jsonld'}
                id={'localbusiness'}
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessJsonLd),
                }}
            ></script>
        </>
    )
}
