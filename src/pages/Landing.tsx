import Button from "../components/Button";
import ColorStripes from "../components/ColorStripes";
import DoubleDownChevron from "../components/DoubleDownChevron";
import Navigation from "../components/Navigation";
import WorkAvailability from "../components/WorkAvailability";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landing-page">
      <ColorStripes />
      <Navigation />
      <div className="portfolio-name">
        <h1 className="text">Rain Holloway</h1>
      </div>
      <div className="call-to-action">
        <h2 className="catch-phrase">Software is my passion.</h2>
        <h3 className="brief-bio">
          I'm an undergraduate computer science student in pursuit of solving
          real world problems through self-education and employment
          opportunities.
        </h3>
        <Button>View my work</Button>
      </div>
      <WorkAvailability />
      <div className="scroll-prompt">
        <DoubleDownChevron />
      </div>
    </div>
  );
};

export default Landing;
