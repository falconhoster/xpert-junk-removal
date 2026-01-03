// Shared Components for Junk Removal Site

// Determine base path based on current page location
const basePath = (function() {
    const path = window.location.pathname;
    if (path.includes('/services/') || path.includes('/locations/')) {
        return '../';
    }
    return '';
})();

const Components = {
    // Navigation Header
    header: `
    <nav class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-28">
                <div class="flex items-center">
                    <a href="${basePath}home.html">
                        <img src="${basePath}xpert junk (2).png" alt="Xpert Junk Removal" class="h-24">
                    </a>
                </div>
                <div class="hidden md:flex items-center space-x-6">
                    <a href="${basePath}home.html" class="text-gray-700 hover:text-primary transition font-medium">Home</a>
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-primary transition font-medium flex items-center gap-1">
                            Services
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                        </button>
                        <div class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div class="py-2">
                                <a href="${basePath}services/household-junk-removal-auckland.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">Household Junk Removal</a>
                                <a href="${basePath}services/furniture-removal-auckland.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">Furniture Removal</a>
                                <a href="${basePath}services/appliance-whiteware-removal-auckland.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">Appliance & Whiteware Removal</a>
                                <a href="${basePath}services/property-cleanout-services-auckland.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">Property Cleanout Services</a>
                                <a href="${basePath}services/garden-outdoor-waste-removal.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">Garden & Outdoor Waste</a>
                                <a href="${basePath}services/commercial-trade-junk-removal.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">Commercial & Trade</a>
                                <a href="${basePath}services/same-day-junk-removal-auckland.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">Same Day Removal</a>
                                <div class="border-t border-gray-100 mt-2 pt-2">
                                    <a href="${basePath}home.html#services" class="block px-4 py-2 text-primary font-medium hover:bg-primary/10">View All Services →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-primary transition font-medium flex items-center gap-1">
                            Locations
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                        </button>
                        <div class="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div class="py-2">
                                <a href="${basePath}locations/junk-removal-central-auckland.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">Central Auckland</a>
                                <a href="${basePath}locations/junk-removal-north-shore.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">North Shore</a>
                                <a href="${basePath}locations/junk-removal-west-auckland.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">West Auckland</a>
                                <a href="${basePath}locations/junk-removal-south-auckland.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">South Auckland</a>
                                <a href="${basePath}locations/junk-removal-east-auckland.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">East Auckland</a>
                                <a href="${basePath}locations/junk-removal-manukau.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">Manukau</a>
                                <div class="border-t border-gray-100 mt-2 pt-2">
                                    <a href="${basePath}home.html#service-areas" class="block px-4 py-2 text-primary font-medium hover:bg-primary/10">View All Areas →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="${basePath}home.html#pricing" class="text-gray-700 hover:text-primary transition font-medium">Pricing</a>
                    <a href="${basePath}home.html#how-it-works" class="text-gray-700 hover:text-primary transition font-medium">How It Works</a>
                </div>
                <a href="tel:0800452104" class="bg-navy text-white px-5 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-navy-dark transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Call Now
                </a>
            </div>
        </div>
    </nav>`,

    // How It Works Section
    howItWorks: `
    <section id="how-it-works" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-navy mb-4">How It Works</h2>
                <p class="text-gray-600 text-lg">Simple 4-step process to a clutter-free life.</p>
            </div>
            <div class="grid md:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <h3 class="font-bold text-navy mb-2">1. Book</h3>
                    <p class="text-gray-600 text-sm">Call or book online</p>
                </div>
                <div class="text-center">
                    <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <h3 class="font-bold text-navy mb-2">2. Quote</h3>
                    <p class="text-gray-600 text-sm">Free on-site estimate</p>
                </div>
                <div class="text-center">
                    <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    </div>
                    <h3 class="font-bold text-navy mb-2">3. Remove</h3>
                    <p class="text-gray-600 text-sm">We do all the work</p>
                </div>
                <div class="text-center">
                    <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <h3 class="font-bold text-navy mb-2">4. Enjoy</h3>
                    <p class="text-gray-600 text-sm">Clutter gone!</p>
                </div>
            </div>
        </div>
    </section>`,

    // Pricing Section
    pricing: `
    <section id="pricing" class="py-16 bg-gray-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold text-navy mb-4">Transparent Pricing</h2>
                <p class="text-gray-600">Pay only for the space your items take. No hidden fees.</p>
            </div>
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div class="bg-navy text-white grid grid-cols-2 p-4">
                    <div class="font-semibold uppercase tracking-wide text-sm">Load Size</div>
                    <div class="font-semibold uppercase tracking-wide text-sm text-right">Starting From</div>
                </div>
                <div class="divide-y divide-gray-100">
                    <div class="grid grid-cols-2 p-4 hover:bg-gray-50">
                        <div class="text-gray-700">Small (approx. 1/4 truck)</div>
                        <div class="text-right font-bold text-primary text-xl">$300</div>
                    </div>
                    <div class="grid grid-cols-2 p-4 hover:bg-gray-50">
                        <div class="text-gray-700">Medium (approx. 1/2 truck)</div>
                        <div class="text-right font-bold text-primary text-xl">$400</div>
                    </div>
                    <div class="grid grid-cols-2 p-4 hover:bg-gray-50">
                        <div class="text-gray-700">Large (approx. 3/4 truck)</div>
                        <div class="text-right font-bold text-primary text-xl">$500</div>
                    </div>
                    <div class="grid grid-cols-2 p-4 hover:bg-gray-50">
                        <div class="text-gray-700">Full load / bulky</div>
                        <div class="text-right font-bold text-primary text-xl">$600</div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-8">
                <a href="https://book.servicem8.com/request_booking?uuid=39abb35c-4890-4d5c-9b3d-1b8b2896fbbb" class="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg">
                    Get Your Free Estimate Now
                </a>
            </div>
        </div>
    </section>`,

    // Service Areas Section
    serviceAreas: `
    <section id="service-areas" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl font-bold text-navy mb-4">Serving All Auckland</h2>
                    <p class="text-gray-600 mb-6">From North Shore to Manukau, West to East Auckland - we've got you covered.</p>
                    <div class="grid grid-cols-2 gap-3 mb-6">
                        <div class="flex items-center gap-2 text-gray-700">
                            <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                            Central Auckland
                        </div>
                        <div class="flex items-center gap-2 text-gray-700">
                            <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                            North Shore
                        </div>
                        <div class="flex items-center gap-2 text-gray-700">
                            <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                            West Auckland
                        </div>
                        <div class="flex items-center gap-2 text-gray-700">
                            <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                            South Auckland
                        </div>
                    </div>
                    <a href="tel:0800452104" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        Call 0800 452 104
                    </a>
                </div>
                <div class="bg-gray-100 rounded-2xl overflow-hidden h-[350px] shadow-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204479.88890095446!2d174.5755027!3d-36.8509664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>`,

    // Footer
    footer: `
    <footer class="bg-navy-dark text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <a href="${basePath}home.html" class="block mb-4">
                        <img src="${basePath}xpert junk (2).png" alt="Xpert Junk Removal" class="h-20">
                    </a>
                    <p class="text-gray-400">Auckland's trusted junk removal service. Fast, affordable, eco-friendly.</p>
                </div>
                <div>
                    <h3 class="font-bold mb-4">Our Services</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="${basePath}services/household-junk-removal-auckland.html" class="hover:text-primary transition">Household Junk Removal</a></li>
                        <li><a href="${basePath}services/furniture-removal-auckland.html" class="hover:text-primary transition">Furniture Removal</a></li>
                        <li><a href="${basePath}services/appliance-whiteware-removal-auckland.html" class="hover:text-primary transition">Appliance Removal</a></li>
                        <li><a href="${basePath}services/property-cleanout-services-auckland.html" class="hover:text-primary transition">Property Cleanouts</a></li>
                        <li><a href="${basePath}services/commercial-trade-junk-removal.html" class="hover:text-primary transition">Commercial Removal</a></li>
                        <li><a href="${basePath}home.html#services" class="hover:text-primary transition text-primary">All Services →</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold mb-4">Service Areas</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="${basePath}locations/junk-removal-central-auckland.html" class="hover:text-primary transition">Central Auckland</a></li>
                        <li><a href="${basePath}locations/junk-removal-north-shore.html" class="hover:text-primary transition">North Shore</a></li>
                        <li><a href="${basePath}locations/junk-removal-west-auckland.html" class="hover:text-primary transition">West Auckland</a></li>
                        <li><a href="${basePath}locations/junk-removal-south-auckland.html" class="hover:text-primary transition">South Auckland</a></li>
                        <li><a href="${basePath}locations/junk-removal-east-auckland.html" class="hover:text-primary transition">East Auckland</a></li>
                        <li><a href="${basePath}home.html#service-areas" class="hover:text-primary transition text-primary">All Areas →</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold mb-4">Contact</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li class="flex items-center gap-2">
                            <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                            <a href="tel:0800452104" class="hover:text-primary transition">0800 452 104</a>
                        </li>
                        <li class="flex items-center gap-2">
                            <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            Mon - Sun: 7am - 8pm
                        </li>
                    </ul>
                    <div class="mt-4 space-y-2">
                        <a href="${basePath}home.html#pricing" class="block text-gray-400 hover:text-primary transition">Pricing</a>
                        <a href="${basePath}home.html#how-it-works" class="block text-gray-400 hover:text-primary transition">How It Works</a>
                    </div>
                    <a href="https://book.servicem8.com/request_booking?uuid=39abb35c-4890-4d5c-9b3d-1b8b2896fbbb" class="inline-block mt-4 bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-semibold transition">
                        Get a Quote
                    </a>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
                <p>&copy; 2026 EcoJunkAuckland. All rights reserved.</p>
            </div>
        </div>
    </footer>`,

    // Initialize components
    init: function() {
        document.getElementById('header')?.insertAdjacentHTML('afterbegin', this.header);
        document.getElementById('how-it-works-section')?.insertAdjacentHTML('afterbegin', this.howItWorks);
        document.getElementById('pricing-section')?.insertAdjacentHTML('afterbegin', this.pricing);
        document.getElementById('service-areas-section')?.insertAdjacentHTML('afterbegin', this.serviceAreas);
        document.getElementById('footer')?.insertAdjacentHTML('afterbegin', this.footer);

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => Components.init());
