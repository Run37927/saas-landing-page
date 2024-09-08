import FaqSection from './landingPageComponents/FaqSection';
import Footer from './landingPageComponents/Footer';
import FinalPush from './landingPageComponents/FinalPush';
import PricingSection from './landingPageComponents/PricingSection';
import DemoSection from './landingPageComponents/DemoSection';
import FeatureDisplay from './landingPageComponents/FeatureDisplay';
import HeroSection from './landingPageComponents/HeroSection';
import BeforeAfter from './landingPageComponents/BeforeAfter';
import Testimonials from './landingPageComponents/Testimonials';
import AsSeenOn from './landingPageComponents/AsSeenOn';

function LandingPage() {
    return (
        <>
            <HeroSection />
            <BeforeAfter />
            <FeatureDisplay />
            <DemoSection />
            <PricingSection />
            <FaqSection />
            <AsSeenOn />
            <Testimonials />
            <FinalPush />
            <Footer />
        </>
    )
}

export default LandingPage