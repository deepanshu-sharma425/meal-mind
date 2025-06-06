'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import "../globals.css";

export default function Homes() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);


        const interval = setInterval(() => {
            setActiveSlide(prev => (prev + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`home-container ${isVisible ? 'visible' : ''}`}>

            <section className="hero-section">
                <div className="parallax-bg"></div>
                <div className="hero-content">
                    <div className="hero-text-container">
                        <h1 className="animated-text">
                            <span className="text-reveal">Fuel</span>
                            <span className="text-reveal">Your</span>
                            <span className="text-reveal">Potential</span>
                        </h1>
                        <p className="tagline">Where nutrition meets innovation</p>
                        <div className="hero-description">
                            <p>Personalized meal plans and intelligent calorie tracking that adapts to your unique body and goals</p>
                        </div>
                        <div className="cta-container">
                            <Link href="/signup" className="cta-button pulse">Start Your Journey</Link>
                            <Link href="/meal-plans" className="secondary-cta">Explore Meal Plans</Link>
                        </div>
                    </div>

                    <div className="floating-elements">
                        <div className="floating-element apple">
                            <Image src="/apple.png" alt="Apple" width={80} height={80} />
                            <span className="nutrient-tag">Fiber</span>
                        </div>
                        <div className="floating-element avocado">
                            <Image src="/avocado.png" alt="Avocado" width={90} height={90} />
                            <span className="nutrient-tag">Healthy Fats</span>
                        </div>
                        <div className="floating-element broccoli">
                            <Image src="/broccoli.png" alt="Broccoli" width={70} height={70} />
                            <span className="nutrient-tag">Vitamins</span>
                        </div>
                        <div className="floating-element salmon">
                            <Image src="/salmon.png" alt="Salmon" width={100} height={60} />
                            <span className="nutrient-tag">Protein</span>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <div>
                        <span className="scroll-text">Scroll to discover</span>
                    </div>
                </div>
            </section>


            <section className="features-section">
                <div className="section-header">
                    <h2>Transform Your Relationship With Food</h2>
                    <div className="underline-animation"></div>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon-container">
                            <div className="feature-icon-bg"></div>
                            <Image src="/plate-icon.png" alt="Smart Tracking" width={80} height={80} className="feature-icon" />
                        </div>
                        <h3>Smart Tracking</h3>
                        <p>Our AI recognizes your food from photos and automatically calculates calories and nutrients</p>
                        <div className="feature-hover-info">
                            <span>Just snap a photo of your meal!</span>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-container">
                            <div className="feature-icon-bg"></div>
                            <Image src="/chef-icon.png" alt="Personalized Recipes" width={80} height={80} className="feature-icon" />
                        </div>
                        <h3>Personalized Recipes</h3>
                        <p>Get custom recipes that adapt to your taste preferences, dietary needs, and available ingredients</p>
                        <div className="feature-hover-info">
                            <span>Never waste food again!</span>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-container">
                            <div className="feature-icon-bg"></div>
                            <Image src="/chart-icon.png" alt="Adaptive Goals" width={80} height={80} className="feature-icon" />
                        </div>
                        <h3>Adaptive Goals</h3>
                        <p>Our system learns from your progress and adjusts your nutrition plan for optimal results</p>
                        <div className="feature-hover-info">
                            <span>Your body is unique, your plan should be too!</span>
                        </div>
                    </div>
                </div>
            </section>


            <section className="meal-plan-preview">
                <div className="meal-plan-content">
                    <h2>Delicious Meets Nutritious</h2>
                    <p>Preview some of our most popular meal plans designed by nutritionists and loved by users</p>

                    <div className="meal-tabs">
                        <button className="meal-tab active">Weight Loss</button>
                        <button className="meal-tab">Muscle Gain</button>
                        <button className="meal-tab">Plant-Based</button>
                        <button className="meal-tab">Keto-Friendly</button>
                    </div>

                    <div className="meal-showcase">
                        <div className="meal-card breakfast">
                            <div className="meal-image">
                                <Image src="/breakfast.png" alt="Healthy breakfast" width={200} height={150} />
                                <div className="meal-time">Breakfast</div>
                            </div>
                            <div className="meal-info">
                                <h4>Greek Yogurt Power Bowl</h4>
                                <div className="meal-stats">
                                    <span>320 cal</span>
                                    <span>24g protein</span>
                                    <span>12g fiber</span>
                                </div>
                            </div>
                        </div>

                        <div className="meal-card lunch">
                            <div className="meal-image">
                                <Image src="/lunch.png" alt="Healthy lunch" width={200} height={150} />
                                <div className="meal-time">Lunch</div>
                            </div>
                            <div className="meal-info">
                                <h4>Mediterranean Quinoa Salad</h4>
                                <div className="meal-stats">
                                    <span>410 cal</span>
                                    <span>15g protein</span>
                                    <span>8g fiber</span>
                                </div>
                            </div>
                        </div>

                        <div className="meal-card dinner">
                            <div className="meal-image">
                                <Image src="/dinner.png" alt="Healthy dinner" width={200} height={150} />
                                <div className="meal-time">Dinner</div>
                            </div>
                            <div className="meal-info">
                                <h4>Baked Salmon with Roasted Vegetables</h4>
                                <div className="meal-stats">
                                    <span>480 cal</span>
                                    <span>32g protein</span>
                                    <span>6g fiber</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="testimonials">
                <div className="stars-bg"></div>
                <h2>What Our Users Say</h2>

                <div className="testimonial-list">
                    <div className="testimonial-item">
                        <h3>Sarah</h3>
                        <p className="testimonial-quote">"I never thought I could enjoy healthy eating until I found this app. The personalized meal plans made everything so simple!"</p>
                    </div>

                    <div className="testimonial-item">
                        <h3>Michael</h3>
                        <p className="testimonial-quote">"The protein-focused meal plans helped me build muscle while staying lean. My energy levels have never been better!"</p>
                    </div>

                    <div className="testimonial-item">
                        <h3>Emma</h3>
                        <p className="testimonial-quote">"The low-glycemic meal options helped me get my blood sugar under control. My doctor was amazed at my results!"</p>
                    </div>
                </div>
            </section>



            <section className="interactive-cta">
                <div className="cta-content">
                    <h2>Ready to Rewrite Your Health Story?</h2>
                    <div className="cta-features">
                        <div className="cta-feature">
                            <div className="checkmark">✓</div>
                            <span>Personalized meal plans</span>
                        </div>
                        <div className="cta-feature">
                            <div className="checkmark">✓</div>
                            <span>AI-powered food recognition</span>
                        </div>
                        <div className="cta-feature">
                            <div className="checkmark">✓</div>
                            <span>Progress tracking dashboard</span>
                        </div>
                        <div className="cta-feature">
                            <div className="checkmark">✓</div>
                            <span>Community support</span>
                        </div>
                    </div>

                    <div className="pricing-info">
                        <div className="price-tag">
                            <span className="price-currency">$</span>
                            <span className="price-amount">9</span>
                            <span className="price-period">/month</span>
                        </div>
                        <p className="price-note">First 7 days free, cancel anytime</p>
                    </div>

                    <Link href="/signup" className="cta-button glow">Begin Your Transformation</Link>
                </div>

                <div className="app-preview">

                </div>
            </section>
            <footer className="site-footer">
  <div className="footer-container">
    <div className="footer-logo">
      <h3>Meal Mind</h3>
      <p>Your personal journey to better health starts here.</p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Plans</a></li>
        <li><a href="/testimonials">Testimonials</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-contact">
      <h4>Contact Us</h4>
      <p>Email: MealMind@fitlife.com</p>
      <p>Phone: +91  5551234567</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Meal Mind. All rights reserved.</p>
  </div>
</footer>

        </div>
    );
}