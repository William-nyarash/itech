import { Telescope, Presentation, Contact, Activity, NotebookTabs, Award } from "lucide-react";
import BenefitCard from "./BenefitCard";

const BenefitsGrid = () => {
  const benefits = [
    { icon: Telescope, title: "Focused Learning", description: "Specialize in tech domains to master your chosen field", color: "text-red-500" },
    { icon: Contact, title: "Mentorship", description: "Guidance from experienced mentors and professionals", color: "text-amber-400" },
    { icon: Presentation, title: "Industry Projects", description: "Work on real-world projects and build a portfolio", color: "text-green-500" },
    { icon: NotebookTabs, title: "Networking", description: "Connect with peers and industry leaders", color: "text-blue-700" },
    { icon: Award, title: "Competitions", description: "Participate in hackathons and competitions", color: "text-red-900" },
    { icon: Activity, title: "Hands-on Activities", description: "Learn by doing — avoid tutorial hell", color: "text-fuchsia-500" },
  ];

  return (
    <section className="mt-[2rem] mb-[3em]">
      <div className="text-center w-[90%] sm:max-w-[760px] mb-[3em] mx-auto">
        <h2 className="text-[2rem] font-bold mb-1">Why iTech club?</h2>
        <p className="font-extralight">Discover the benefits of being part of our thriving tech community at Zetech University</p>
      </div>
      <div className="w-[90%] max-w-[700px] flex justify-center flex-wrap items-center gap-6 text-center mx-auto">
        {benefits.map((benefit, i) => (
          <BenefitCard key={i} {...benefit} />
        ))}
      </div>
    </section>
  );
};
export default BenefitsGrid;