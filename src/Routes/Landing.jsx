import React from 'react'
import NavbarComponent from '../components/Landing_components/navbar.component'
import HeroSectionComponent from '../components/Landing_components/hero-section.component'
import FeaturesComponent from '../components/Landing_components/features.component'
import WhoWeAreComponent from '../components/Landing_components/who-we-are.component'
import HowItWorksComponent from '../components/Landing_components/how-it-works.component'
import FooterComponent from '../components/Landing_components/footer.component'

export default function Landing() {
    return (
        <>
            <NavbarComponent />
            <HeroSectionComponent />
            <FeaturesComponent />
            <WhoWeAreComponent />
            <HowItWorksComponent />
            <FooterComponent />
        </>
    )
}
