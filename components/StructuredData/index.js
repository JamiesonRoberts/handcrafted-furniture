export default function StructuredData() {
    return (
        <>
            <script
                type='application/ld+json'
                key={'Website-jsonld'}
                dangerouslySetInnerHTML={{
                    __html: `{}`,
                }}
            ></script>
            <script
                type='application/ld+json'
                key={'LocalBusiness-jsonld'}
                dangerouslySetInnerHTML={{
                    __html: `{}`,
                }}
            ></script>
        </>
    )
}
