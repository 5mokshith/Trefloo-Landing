import React from 'react';
import { Linkedin, Mail, Users } from 'lucide-react';

function Footer() {
    return (
        <footer className="w-full bg-[#0f0f0f] text-white py-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-2">For Investors</h3>
                    <p className="text-sm text-gray-300">
                        Interested in transforming rural tourism? Let’s talk.
                    </p>
                    <a href="mailto:team@trefloo.com" className="inline-flex items-center mt-2 text-sm hover:underline text-blue-400" >
                        <Mail size={16} className="mr-2" /> team@trefloo.com
                    </a>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">For Early Adopters</h3>
                    <p className="text-sm text-gray-300">
                        Be part of our beta launch and shape the future of cultural exploration.
                    </p>
                    <a
                        href="#join"
                        className="inline-flex items-center mt-2 text-sm hover:underline text-green-400"
                    >
                        <Users size={16} className="mr-2" /> Join the waitlist
                    </a>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                            <Linkedin size={16} className="mr-2" />
                            <a
                                href="https://www.linkedin.com/in/avinash-kamadri-28246935a/"
                                className="hover:underline text-blue-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Avinash Kamadri
                            </a>
                        </li>
                        <li className="flex items-center">
                            <Linkedin size={16} className="mr-2" />
                            <a
                                href="https://www.linkedin.com/in/mokshith-rao-50a385290"
                                className="hover:underline text-blue-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Mokshith Rao
                            </a>
                        </li>
                        <li className="flex items-center">
                            <Linkedin size={16} className="mr-2" />
                            <a
                                href="https://www.linkedin.com/in/raghavendra-manchikatla-79b12624b/"
                                className="hover:underline text-blue-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Raghavendra Manchikatla
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-4">
                © {new Date().getFullYear()} Trefloo. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;