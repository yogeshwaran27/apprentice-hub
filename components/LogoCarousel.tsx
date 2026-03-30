"use client";

import React from "react";

const companies = [
    { name: "Goldman Sachs", icon: "/assets/image/goldmansachs.svg" },
    { name: "J.P. Morgan", icon: "/assets/image/jpmorgan.svg" },
    { name: "Clifford Chance", icon: "/assets/image/cliffordchance.svg" },
    { name: "Linklaters", icon: "/assets/image/linklaters.svg" },
    { name: "PwC", icon: "/assets/image/pwc.svg" },
    { name: "Deloitte", icon: "/assets/image/deloitte.svg" },
    { name: "Deutsche Bank", icon: "/assets/image/deutschebank.svg" },
    { name: "Barclays", icon: "/assets/image/barclays.svg" },
    { name: "UBS", icon: "/assets/image/ubs.svg" },
    { name: "AstraZeneca", icon: "/assets/image/astrazeneca.svg" },
    { name: "BAE Systems", icon: "/assets/image/baesystems.svg" },
    { name: "Rolls-Royce", icon: "/assets/image/rollsroyce.svg" },
    { name: "Jaguar Land Rover", icon: "/assets/image/jaguarlandrover.svg" },
    { name: "Amazon", icon: "/assets/image/amazon.svg" },
    { name: "Microsoft", icon: "/assets/image/microsoft.svg" },
];

const LogoCarousel = () => {
    const listContent = (
        <div className="flex items-center shrink-0">
            {companies.map((company, index) => (
                <div
                    key={`${company.name}-${index}`}
                    className="inline-flex items-center justify-center w-[180px] md:w-[220px] h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 group/item shrink-0 px-4 md:px-8"
                >
                    <div className="transition-transform duration-500 group-hover/item:scale-105 w-full flex justify-center items-center">
                        <img
                            src={company.icon}
                            alt={company.name}
                            className="h-6 md:h-8 w-auto max-w-full object-contain dark:invert dark:opacity-90 transition-all"
                            onError={(e) => {
                                // Fallback to text if logo fails
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent && !parent.querySelector('.fallback-text')) {
                                    const span = document.createElement('span');
                                    span.className = 'fallback-text text-xs md:text-sm font-bold tracking-tight text-primary font-display whitespace-nowrap';
                                    span.innerText = company.name;
                                    parent.appendChild(span);
                                }
                            }}
                            loading="lazy"
                        />
                    </div>
                </div>
            ))}
            {/* End Element - included in each cycle for seamless loop */}
            <div className="inline-flex items-center justify-center shrink-0 px-8">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                    & many more
                </span>
            </div>
        </div>
    );

    return (
        <section className="bg-white py-12 lg:py-16 border-b border-border/40 overflow-hidden">
            <div className="container max-w-7xl px-6">
                {/* Section Title */}
                <div className="text-center mb-10">
                    <h3 className="font-display text-[15px] md:text-[17px] font-bold text-primary uppercase tracking-wide">
                        Featuring apprenticeships from selective employers including
                    </h3>
                </div>

                {/* Marquee Wrapper */}
                <div className="relative overflow-hidden select-none">
                    {/* Fading Edges Mask */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                    <div className="py-2">
                        <div className="flex animate-marquee-long whitespace-nowrap will-change-transform">
                            {listContent}
                            {listContent}
                            {listContent}
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="text-center mt-8">
                    <p className="text-[11px] md:text-[12px] text-muted-foreground/80 font-medium">
                        Listings sourced from public job boards. Logos used for informational purposes only.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LogoCarousel;
