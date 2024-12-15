const Features = () => {
    const features = [
        {
            title: 'Wide Variety of Gadgets',
            description: 'Choose from laptops, cameras, gaming consoles, and more.',
            icon: 'https://img.freepik.com/premium-photo/all-kinds-famous-gadgets_217507-790.jpg',
        },
        {
            title: 'Affordable Pricing',
            description: 'Rent gadgets at competitive prices that suit your budget.',
            icon: 'https://hbint.biz/wp-content/uploads/2021/04/Blog-Photo-4_7.png',
        },
        {
            title: 'Quick Delivery',
            description: 'Get your gadgets delivered to your doorstep swiftly.',
            icon: 'https://www.shutterstock.com/shutterstock/photos/1602765481/display_1500/stock-vector-quick-delivery-home-service-fast-shipping-vector-icon-logo-design-1602765481.jpg',
        },
    ];
    return (
        <section className="py-20 bg-blue-500 h-screen" id="features">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Why Choose QuickRent?</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded shadow hover:shadow-lg text-center flex flex-col items-center"
                        >
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-32 h-32 object-contain mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-700">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Features;