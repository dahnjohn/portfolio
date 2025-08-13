import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ProjectsSection = () => {
  return (
    <section
      id="work"
      className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Featured Projects
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {[
            {
              title: "SukiPay",
              description:
                "SukiPay revolutionizes payments by providing a portal for merchants and billers that has no online payment platform where their respective customers can pay online and providing a single dashboard for all mode of payments.",
              metrics: {
                rating: 95,
                downloads: 98,
                users: 100,
              },
              techDetails: [
                "Fund In & Instant Wallet Top-Up via QRPh/Bank Transfer",
                "24/7 Retailer Load Wallet Top-Up with Earnings",
                "Full Prepaid Load Support (Smart, TnT, Cignal, Home WiFi, etc.)",
                "Nationwide Bills Payment Integration",
                "Partner Merchant Payments",
              ],
              image: "./code1.jpg",
            },
            {
              title: "SecurePaws",
              description:
                "WSecurePaws is a Know Your Customer (KYC) verification solution developed for identity authentication and fraud prevention. SecurePaws streamlines user verification through a secure, user-friendly process. It enables organizations to verify customer identities quickly and accurately while maintaining compliance with regulatory standards. ",
              metrics: {
                rating: 95,
                downloads: 98,
                activeUsers: 100,
              },
              techDetails: [
                "Face Comparison API",
                "Fake ID Detection",
                "Liveness Detection",
                "OCR (Optical Character Recognition)",
              ],
              image: "./code.jpg",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-[#21262D] rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    {project.description}
                  </p>

                  {/* Performance Metrics */}

                  {project.title === "SukiPay" && (
                    <div className="space-y-3">
                      <h4 className="text-base sm:text-lg font-semibold">
                        Performance Metrics
                      </h4>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        <div className="space-y-1 text-center">
                          <div className="flex items-center justify-center gap-1 text-yellow-400">
                            <svg
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                            </svg>
                            <span className="font-semibold">4.0</span>
                          </div>
                          <p className="text-sm text-gray-400 capitalize">
                            Rating
                          </p>
                        </div>
                        <div className="space-y-1 text-center">
                          <div className="flex items-center justify-center gap-1 text-blue-400">
                            <svg
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18M8,13H10.55V16H13.45V13H16L12,9L8,13Z" />
                            </svg>
                            <span className="font-semibold">9.4K+</span>
                          </div>
                          <p className="text-sm text-gray-400 capitalize">
                            Downloads
                          </p>
                        </div>
                        <div className="space-y-1 text-center">
                          <div className="flex items-center justify-center gap-1 text-green-400">
                            <svg
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M16,14H17.5V16.82L19.94,18.23L19.19,19.53L16,17.69V14M17,12A5,5 0 0,0 12,17A5,5 0 0,0 17,22A5,5 0 0,0 22,17A5,5 0 0,0 17,12M17,10A7,7 0 0,1 24,17A7,7 0 0,1 17,24C14.21,24 11.8,22.36 10.67,20H1V17C1,14.34 6.33,13 9,13C9.6,13 10.34,13.07 11.12,13.2C12.36,11.28 14.53,10 17,10M10,17C10,16.3 10.1,15.62 10.29,15C9.87,14.93 9.43,14.9 9,14.9C6.03,14.9 2.9,16.36 2.9,17V18.1H10.09C10.03,17.74 10,17.37 10,17M9,4A4,4 0 0,1 13,8A4,4 0 0,1 9,12A4,4 0 0,1 5,8A4,4 0 0,1 9,4M9,5.9A2.1,2.1 0 0,0 6.9,8A2.1,2.1 0 0,0 9,10.1A2.1,2.1 0 0,0 11.1,8A2.1,2.1 0 0,0 9,5.9Z" />
                            </svg>
                            <span className="font-semibold">1.24k+</span>
                          </div>
                          <p className="text-sm text-gray-400 capitalize">
                            Active Users
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Key Features */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      {project.techDetails.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="text-green-400">▹</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.title === "SukiPay" && (
                    <div className="flex gap-4">
                      <Link
                        href="https://play.google.com/store/apps/details?id=com.baldpuppiessolutions.mysuki&pli=1"
                        className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                      >
                        View Project
                      </Link>
                    </div>
                  )}
                </div>

                <div className="relative h-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
