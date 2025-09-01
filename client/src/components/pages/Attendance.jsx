import BenefitsGrid from "./benefits/BenefitGrid"
import CTASection from "./CTASection"
import FooterCTA from "./FooterCTA"
import Hero from "./Hero"

const Main = () => {
    return (
        <>
            <Hero/>
            <CTASection />
            <BenefitsGrid />
            <FooterCTA />
        </>
    )
}
export default Main;