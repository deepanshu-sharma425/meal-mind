import React, { useContext } from 'react';
// import { ThemeContext } from '../../themeContext';
// import TeamCarousel from '../../components/TeamCarousel/TeamCarousel';
import '../globals.css';


const About = () => {
    //   const { darkMode } = useContext(ThemeContext);


    const TeamCarousel = ({ members }) => {
        return (
            <div className="team-carousel">
                <div className="carousel-track">
                    {members.map(member => (
                        <div key={member.id} className="team-card">
                            <div className="card-image">
                                <img
                                    src={`public/images/team/${member.photo || 'default-profile.jpg'}`}
                                    alt={member.name}
                                />
                            </div>
                            <div className="card-content">
                                <h3>{member.name}</h3>
                                <p className="role">{member.role}</p>
                                <p className="bio">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };



    const teamMembers = [
        {
            id: 1,
            name: 'Dr. Sarah Chen',
            role: 'Nutritionist',
            bio: 'Registered dietitian with 10+ years of experience in clinical nutrition and weight management.',
            photo:'/person1.png'
        },
        {
            id: 2,
            name: 'Michael Rodriguez',
            role: 'Fitness Expert',
            bio: 'Certified personal trainer specializing in nutrition for athletic performance.',
            photo: 'michael-rodriguez.jpg'
        },
        {
            id: 3,
            name: 'Priya Patel',
            role: 'Software Engineer',
            bio: 'Full-stack developer passionate about creating health-focused applications.',
            photo: 'priya-patel.jpg'
        },
        {
            id: 4,
            name: 'David Kim',
            role: 'Product Designer',
            bio: 'UX/UI designer dedicated to creating intuitive health and wellness experiences.',
            photo: 'david-kim.jpg'
        }
    ];

    return (
        <div className={`about-page`}>
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="slide-up">Our Mission</h1>
                    <p className="fade-in">Empowering healthier lives through personalized nutrition tracking and education</p>
                </div>
            </section>

            {/* Company History */}
            <section className="history-section">
                <div className="container">
                    <h2 className="section-title fade-in">Our Story</h2>
                    <div className="history-content">
                        <div className="history-text fade-in">
                            <p>Founded in 2020, NutriTrack began as a small team of nutritionists and developers who saw a gap in personalized nutrition tracking tools.</p>
                            <p>What started as a university project has grown into a platform used by over 500,000 people worldwide to improve their eating habits and achieve their health goals.</p>
                            <p>Today, we combine evidence-based nutrition science with cutting-edge technology to deliver the most comprehensive meal tracking experience available.</p>
                        </div>
                        <div className="history-image fade-in">
                            <img src="/images/about/history.jpg" alt="NutriTrack founding team" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision">
                <div className="container">
                    <div className="mission-card slide-up">
                        <div className="icon">🌱</div>
                        <h3>Our Mission</h3>
                        <p>To make nutrition tracking accessible, accurate, and actionable for everyone, regardless of their dietary needs or health goals.</p>
                    </div>
                    <div className="vision-card slide-up">
                        <div className="icon">🚀</div>
                        <h3>Our Vision</h3>
                        <p>A world where personalized nutrition is seamlessly integrated into daily life, helping people prevent disease and optimize wellbeing.</p>
                    </div>
                </div>
            </section>

           
            <section className="team-section">
                <div className="container">
                    <h2 className="section-title fade-in">Meet The Team</h2>
                    <p className="section-subtitle fade-in">The passionate people behind NutriTrack</p>
                    <TeamCarousel members={teamMembers} />
                </div>
            </section>


            <section className="values-section">
                <div className="container">
                    <h2 className="section-title fade-in">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card fade-in">
                            <h3>Science-Based</h3>
                            <p>All our recommendations are grounded in peer-reviewed nutrition research.</p>
                        </div>
                        <div className="value-card fade-in">
                            <h3>User-Centric</h3>
                            <p>We design for real people with diverse needs and lifestyles.</p>
                        </div>
                        <div className="value-card fade-in">
                            <h3>Transparent</h3>
                            <p>We're open about our methods and data sources.</p>
                        </div>
                        <div className="value-card fade-in">
                            <h3>Innovative</h3>
                            <p>We continuously improve our tools with the latest technology.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;