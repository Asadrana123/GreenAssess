import "./Home.css";
import sectionImage from "../assets/hero-image.jpg"
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image2 from "../assets/image-2.jpg"
gsap.registerPlugin(ScrollTrigger);
function Home() {
    const aboutRef = useRef(null);
    const visionRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);
    useEffect(() => {
        const sections = [aboutRef.current, visionRef.current, servicesRef.current, contactRef.current];

        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    ease: "bounce.out",
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 60%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="main-container">
            <header className="header">
                <div className="header-container">
                    <h1 className="logo">GreenAssess AI</h1>
                    <nav>
                        <ul className="nav-list">
                            <li>
                                <a
                                    href="#about"
                                    className="nav-item"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("about");
                                    }}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#vision"
                                    className="nav-item"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("vision");
                                    }}
                                >
                                    Vision
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="nav-item"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("services");
                                    }}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="nav-item"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("contact");
                                    }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section id="hero" className="hero-section bounce">
                    <div className="hero-container">
                        <h2 className="hero-title">Revolutionizing Green Property Assessment</h2>
                        <p className="hero-subtitle">
                            We improve understanding of how climate change impacts financial performance and investment decisions
                        </p>
                        <button
                            className="pushable"
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("contact");
                            }}
                        >
                            <span className="front">
                                Get Started
                            </span>
                        </button>
                    </div>
                    <img src={sectionImage} />
                </section>

                <section id="about" className="about-section" ref={aboutRef}>
                    <div className="content-container">
                        <h2 className="section-title">About Us</h2>
                        <p className="section-description">
                            Companies need to meet goals while balancing Cost, CO&#8322;, Energy, Returns, and Policy requirements.
                            We use AI to empower their decision-making process.
                        </p>
                        <p className="section-description">
                            Our solution is revolutionizing TCFD reporting and enabling dynamic
                            sustainability-linked loans and mortgages, paving the way for a greener future
                            in real estate.
                        </p>
                    </div>
                </section>

                <section id="vision" className="vision-section" ref={visionRef}>
                    <div className="content-container">
                        <h2 className="section-title">Our Vision</h2>
                        <p className="section-description">
                            We envision a world where the impact of climate change on financial performance
                            and investment decisions is clearly understood and actively managed.
                        </p>
                        <p className="section-description">
                            By providing accurate, real-time environmental data, we aim to transform how
                            financial institutions assess property sustainability, ultimately driving
                            positive change in the real estate sector.
                        </p>
                    </div>
                    <img className="image-2" src={image2} />
                </section>

                <section id="services" className="services-section" ref={servicesRef}>
                    <div className="content-container">
                        <h2 className="section-title">Our Services</h2>
                        <div className="services-grid">
                            <div className="service-item">
                                <h3 className="service-title">Energy-Efficient Mortgages (EEMs)</h3>
                                <p className="service-description">
                                    Finance the purchase of energy-efficient homes or cover the cost of energy
                                    efficiency upgrades for existing properties.
                                </p>
                            </div>
                            <div className="service-item">
                                <h3 className="service-title">Energy Improvement Mortgages (EIMs)</h3>
                                <p className="service-description">
                                    Specially designed financing options for energy improvement projects on
                                    existing properties.
                                </p>
                            </div>
                            <div className="service-item">
                                <h3 className="service-title">Green Refinancing</h3>
                                <p className="service-description">
                                    Refinancing options for homeowners looking to invest in energy efficiency
                                    improvements as part of their mortgage refinancing.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
                <section id="contact" className="contact-section" ref={contactRef}>
                    <div className="content-container text-center">
                        <h2 className="section-title">Ready to Get Started?</h2>
                        <p className="section-description">
                            Contact us today to learn how GreenAssess AI can revolutionize your property
                            assessments and financing options.
                        </p>
                        <button
                            className="pushable"
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("contact");
                            }}
                        >
                            <span className="front">
                                Contact us
                            </span>
                        </button>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="footer-container">
                    <p>&copy; 2024 GreenAssess AI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
