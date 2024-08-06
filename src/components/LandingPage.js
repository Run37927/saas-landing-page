import React from 'react'
import FaqSection from './landingPageComponents/FaqSection';
import Footer from './landingPageComponents/Footer';
import FinalPush from './landingPageComponents/FinalPush';
import PricingSection from './landingPageComponents/PricingSection';
import DemoSection from './landingPageComponents/DemoSection';
import FeatureDisplay from './landingPageComponents/FeatureDisplay';
import HeroSection from './landingPageComponents/HeroSection';
import BeforeAfter from './landingPageComponents/WithWithout';

function LandingPage() {
    return (
        <>
            <HeroSection />
            <BeforeAfter />
            <FeatureDisplay />
            <DemoSection />
            <PricingSection />
            <FaqSection />
            <FinalPush />
            <Footer />
        </>
    )
}

export default LandingPage