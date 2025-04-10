"use client"

import { useState } from "react"

export default function ServicesSection() {
    const [hoveredService, setHoveredService] = useState(null)

    const services = [
        {
            id: 1,
            title: "Trip Arrangement",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.5 12C9.5 11.1716 10.1716 10.5 11 10.5H13C13.8284 10.5 14.5 11.1716 14.5 12V12C14.5 12.8284 13.8284 13.5 13 13.5H11C10.1716 13.5 9.5 12.8284 9.5 12V12Z"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                    />
                    <path d="M11 13.5V16.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 13.5V16.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M7.5 7.5V7.5C7.5 5.29086 9.29086 3.5 11.5 3.5H12.5C14.7091 3.5 16.5 5.29086 16.5 7.5V7.5"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M5 10.5L5.14645 10.3536C6.10124 9.39878 7.63379 9.5 8.5 10.5V10.5C9.36621 11.5 10.8988 11.6012 11.8536 10.6464L12 10.5"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 10.5L12.1464 10.3536C13.1012 9.39878 14.6338 9.5 15.5 10.5V10.5C16.3662 11.5 17.8988 11.6012 18.8536 10.6464L19 10.5"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5 16.5L5.14645 16.3536C6.10124 15.3988 7.63379 15.5 8.5 16.5V16.5C9.36621 17.5 10.8988 17.6012 11.8536 16.6464L12 16.5"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 16.5L12.1464 16.3536C13.1012 15.3988 14.6338 15.5 15.5 16.5V16.5C16.3662 17.5 17.8988 17.6012 18.8536 16.6464L19 16.5"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            id: 2,
            title: "Installation",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.5 5.5L11.5 4.5L12.5 5.5L13.5 4.5L14.5 5.5L15.5 4.5L16.5 5.5L17.5 4.5L18.5 5.5V12.5L17.5 13.5L16.5 12.5L15.5 13.5L14.5 12.5L13.5 13.5L12.5 12.5L11.5 13.5L10.5 12.5L9.5 13.5L8.5 12.5V5.5L9.5 4.5L10.5 5.5Z"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M8.5 7.5H18.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.5 10.5H18.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M5.5 16.5L6.5 17.5L8.5 15.5"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.5 19.5L6.5 20.5L8.5 18.5"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M11.5 16.5H18.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.5 19.5H18.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            id: 3,
            title: "Delivery",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 16H9M14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16M14 16H18.5M9 16H4.5M9 16C9 17.1046 8.10457 18 7 18C5.89543 18 5 17.1046 5 16M19 16C19 17.1046 18.1046 18 17 18C15.8954 18 15 17.1046 15 16"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M10 16V8C10 6.89543 10.8954 6 12 6H19L21 10L21 16"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3 16V12C3 10.8954 3.89543 10 5 10H10"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M21 10H17" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            id: 4,
            title: "Co-ordination",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16.5V21.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 4.5L7.5 9.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M16.5 4.5L16.5 9.5"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="7.5" cy="12" r="2.5" stroke="#8B4513" strokeWidth="1.5" />
                    <circle cx="16.5" cy="12" r="2.5" stroke="#8B4513" strokeWidth="1.5" />
                    <circle cx="12" cy="14.5" r="2.5" stroke="#8B4513" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            id: 5,
            title: "Quality Check",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 9L11 11L15 7" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M20.5 6.5L21 17.5L16 21.5L12 19.5L8 21.5L3 17.5L3.5 6.5L8 3.5L12 4.5L16 3.5L20.5 6.5Z"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M16 3.5L12 19.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 3.5L12 19.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M3.5 6.5L12 12L20.5 6.5"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            id: 6,
            title: "Design Consultation",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" stroke="#8B4513" strokeWidth="1.5" />
                    <path
                        d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                    />
                </svg>
            ),
        },
        {
            id: 7,
            title: "After Sale Services",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10.5H16" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 14H13.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            ),
        },
        {
            id: 8,
            title: "Procurement Ideation",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.5 16.5L21.5 21.5"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M5 3.5H12.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 8.5H8.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 13.5H7" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="16.5" cy="11.5" r="5" stroke="#8B4513" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            id: 9,
            title: "Requirement Analysis",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M12 12H15" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16H15" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12H9.01" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 16H9.01" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            id: 10,
            title: "Container Planning",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 16V10C20 8.89543 19.1046 8 18 8H6C4.89543 8 4 8.89543 4 10V16"
                        stroke="#8B4513"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M2 16H22" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8V16" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12H4" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 12H16" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
    ]


    return (
        <section className="px-5 py-16 bg-[#faf9f6] font-['Segoe UI','Tahoma','Geneva','Verdana','sans-serif']">
            <div className="container mx-auto">
                <h2 className="text-center text-[2.5rem] text-[#8b4513] font-semibold mb-12">Our Services</h2>

                <div className="grid grid-cols-5 gap-y-12 
                      max-[1024px]:grid-cols-4 
                      max-[768px]:grid-cols-3 
                      max-[576px]:grid-cols-2 
                      max-[375px]:grid-cols-1">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`flex flex-col items-center text-center transition-all duration-300 ${hoveredService === service.id ? "hovered" : ""
                                }`}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div
                                className={`w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md transition-all duration-300 ${hoveredService === service.id ? "animate-pulseShadow transform -translate-y-1 shadow-[0_8px_20px_rgba(139,69,19,0.15)]" : ""
                                    }`}
                            >
                                <div className={`${hoveredService === service.id ? "scale-110 transition-transform duration-300" : ""}`}>
                                    {service.icon}
                                </div>
                            </div>

                            <h3
                                className={`text-base transition-colors duration-300 ${hoveredService === service.id ? "text-[#8b4513]" : "text-[#333]"
                                    }`}
                            >
                                {service.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Custom animation keyframes */}
                <style jsx>{`
        @keyframes pulseShadow {
          0% {
            box-shadow: 0 0 0 0 rgba(139, 69, 19, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(139, 69, 19, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(139, 69, 19, 0);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 1.5s infinite;
        }
      `}</style>
            </div>
        </section>
    )
}
