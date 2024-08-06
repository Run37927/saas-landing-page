import React from 'react'
import FaqSection from './landingPageComponents/FaqSection';
import Footer from './landingPageComponents/Footer';
import FinalPush from './landingPageComponents/FinalPush';
import PricingSection from './landingPageComponents/PricingSection';
import DemoSection from './landingPageComponents/DemoSection';
import FeatureDisplay from './landingPageComponents/FeatureDisplay';
import WithWithout from './landingPageComponents/WithWithout';
import HeroSection from './landingPageComponents/HeroSection';

function LandingPage() {
    return (
        <>
            <HeroSection />
            <WithWithout />
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