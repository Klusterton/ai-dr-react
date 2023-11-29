import React from 'react';
import HeroSectionComponent from '../Components/Landing_components/hero-section.component';
import FeaturesComponent from '../Components/Landing_components/features.component';
import WhoWeAreComponent from '../Components/Landing_components/who-we-are.component';
import HowItWorksComponent from '../Components/Landing_components/how-it-works.component';
import FooterComponent from '../Components/Landing_components/footer.component';
import TestimonialsComponent from '../Components/Landing_components/testimonials.component';
import NavbarComponent from '../Components/Landing_components/Navbar';

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
