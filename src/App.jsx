import { useState, useEffect } from 'react';
import { Menu, X, Zap, Wrench, Phone, Mail, MapPin, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import Map from './component/map.jsx';
import Preloader from './component/Preloader';
import Carousel from './component/carousel';


export default function TechnicianWebsite() {
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const done = () => setLoading(false);
    //
    //     if (document.readyState === 'complete') {
    //         done();
    //         return;
    //     }
    //     window.addEventListener('load', done);
    //     return () => window.removeEventListener('load', done);
    // }, []);
    useEffect(() => {
        // Change 2000 to the number of milliseconds you want
        const id = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(id);
    }, []);


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const services = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Electrical Services",
            description: "Complete electrical installations, repairs, and maintenance for residential and commercial properties.",
            features: ["Wiring & Rewiring", "Circuit Installation", "Emergency Repairs", "Safety Inspections"]
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: "Mechanical Services",
            description: "Expert mechanical solutions including HVAC, plumbing, and industrial equipment maintenance.",
            features: ["HVAC Systems", "Equipment Maintenance", "Preventive Service", "Industrial Repairs"]
        }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (

        <>
            <Preloader show={loading} />

            <main className={loading ? 'pointer-events-none select-none min-h-dvh blur-sm' : ''}>
                <div className="min-h-screen bg-gray-50">
                    {/* Navigation */}
                    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center h-16">
                                <div className="flex items-center space-x-2">
                                    <Zap className="w-8 h-8 text-blue-600"/>
                                    <span className="text-xl font-bold text-gray-900">SUSARA Electronics</span>
                                </div>

                                {/* Desktop Menu */}
                                <div className="hidden md:flex space-x-8">
                                    <button onClick={() => scrollToSection('home')}
                                            className="text-gray-700 hover:text-blue-600 transition">Home
                                    </button>
                                    <button onClick={() => scrollToSection('services')}
                                            className="text-gray-700 hover:text-blue-600 transition">Services
                                    </button>
                                    <button onClick={() => scrollToSection('about')}
                                            className="text-gray-700 hover:text-blue-600 transition">About
                                    </button>
                                    <button onClick={() => scrollToSection('contact')}
                                            className="text-gray-700 hover:text-blue-600 transition">Contact
                                    </button>
                                </div>

                                {/* Mobile Menu Button */}
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="md:hidden text-gray-700"
                                >
                                    {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div className="md:hidden bg-white border-t">
                                <div className="px-4 py-4 space-y-3">
                                    <button onClick={() => scrollToSection('home')}
                                            className="block w-full text-left text-gray-700 hover:text-blue-600">Home
                                    </button>
                                    <button onClick={() => scrollToSection('services')}
                                            className="block w-full text-left text-gray-700 hover:text-blue-600">Services
                                    </button>
                                    <button onClick={() => scrollToSection('about')}
                                            className="block w-full text-left text-gray-700 hover:text-blue-600">About
                                    </button>
                                    <button onClick={() => scrollToSection('contact')}
                                            className="block w-full text-left text-gray-700 hover:text-blue-600">Contact
                                    </button>
                                </div>
                            </div>
                        )}
                    </nav>

                    {/* Hero Section */}
                    <section id="home" className="pt-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                            <div className="text-center">
                                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                                    Professional Electrical & Mechanical Services
                                </h1>
                                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                                    Your trusted partner for reliable electrical and mechanical solutions. Available
                                    24/7 for emergencies.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                                    >
                                        Get a Quote
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('services')}
                                        className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition border border-blue-400"
                                    >
                                        Our Services
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>



                    {/* Services Section */}
                    <section id="services" className="py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    We provide comprehensive electrical and mechanical solutions for residential,
                                    commercial, and industrial clients.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {services.map((service, index) => (
                                    <div key={index}
                                         className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                                        <div className="text-blue-600 mb-4">{service.icon}</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                        <p className="text-gray-600 mb-6">{service.description}</p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-gray-700">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"/>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="carousel" className="py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <Carousel/>

                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about" className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Choose
                                        Us?</h2>
                                    <p className="text-gray-600 mb-6">
                                        With over 15 years of experience, we've built a reputation for excellence in
                                        electrical and mechanical services. Our certified technicians are committed to
                                        delivering quality workmanship and exceptional customer service.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"/>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Certified Technicians</h4>
                                                <p className="text-gray-600">Fully licensed and insured
                                                    professionals</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"/>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">24/7 Emergency Service</h4>
                                                <p className="text-gray-600">Available whenever you need us</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"/>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                                                <p className="text-gray-600">Quality service at fair rates</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8">
                                    <div className="bg-white rounded-lg p-6 shadow-lg">
                                        <Clock className="w-12 h-12 text-blue-600 mb-4"/>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Hours</h3>
                                        <div className="space-y-2 text-gray-700">
                                            <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                                            <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
                                            <p><strong>Sunday:</strong> Emergency Only</p>
                                            <p className="text-blue-600 font-semibold mt-4">24/7 Emergency Response
                                                Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="py-20 bg-gray-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                                <p className="text-gray-600">Get in touch for a free consultation or emergency
                                    service</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                                    <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4"/>
                                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                                    <p className="text-gray-600">+94 77 081 8427</p>
                                    <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
                                </div>
                                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                                    <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4"/>
                                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                                    <p className="text-gray-600">susaraelectronics@gmail.com</p>
                                    <p className="text-sm text-gray-500 mt-1">We respond within 24hrs</p>
                                </div>
                                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4"/>
                                    <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                                    <p className="text-gray-600">Susara Electronics, Kalugamuwa Road, Kalagaha Panadaragama</p>
                                    <p className="text-gray-600">City, State 12345</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <div className="text-center mb-12">
                        <div id='map' className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                            <h1>Locate Us</h1>
                            <Map/>
                        </div>
                    </div>


                    {/* Footer */}
                    <footer className="bg-gray-900 text-white py-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <div className="flex items-center justify-center space-x-2 mb-4">
                                <Zap className="w-6 h-6 text-blue-400"/>
                                <span className="text-xl font-bold">SUSARA Electronics</span>
                            </div>
                            <p className="text-gray-400 mb-2">Professional Electrical & Mechanical Services</p>
                            <p className="text-gray-500 text-sm">© 2025 SUSARA Electronics. All rights reserved.</p>
                        </div>
                    </footer>
                </div>

            </main>
        </>
    );
}