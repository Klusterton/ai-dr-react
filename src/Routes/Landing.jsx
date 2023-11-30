import React from 'react';
import HeroSectionComponent from '../Components/LandingComponents/hero-section.component';
import FeaturesComponent from '../Components/LandingComponents/features.component';
import WhoWeAreComponent from '../Components/LandingComponents/who-we-are.component';
import HowItWorksComponent from '../Components/LandingComponents/how-it-works.component';
import FooterComponent from '../Components/LandingComponents/footer.component';
import TestimonialsComponent from '../Components/LandingComponents/testimonials.component';
import NavbarComponent from '../Components/LandingComponents/Navbar';

export default function Landing() {
    return (
        <>
            <NavbarComponent />
            <HeroSectionComponent />
            <FeaturesComponent />
            <WhoWeAreComponent />
            <HowItWorksComponent />
            <TestimonialsComponent />
            <FooterComponent />
        </>
    );
}
