import { FiUser } from "react-icons/fi";
import { LuBriefcase } from "react-icons/lu";
import { MdOutlineCastForEducation } from "react-icons/md";
import Card from "./Card";
import education from "../../assets/education.json";
import Education from "./Education";

const AboutMe = () => {
  return (
    <section id="about" className=" py-40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card icon={<FiUser className="h-5 w-5" />} title="Personal Info">
            <p>
              <strong>Gmail:</strong> rajashekharsurakanti@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Karimnager, Hyderabad, Telangana
            </p>
            <p>
              <strong>Languages:</strong> English, German, Telugu
            </p>
          </Card>

          <Card icon={<LuBriefcase className="h-5 w-5" />} title="Experience">
            <p className="font-semibold">
              Full Stack Web Developer at Capgemini
            </p>
            <p className="text-sm text-gray-900">April 2023 - Present</p>
          </Card>

          <Card
            icon={<MdOutlineCastForEducation className="h-5 w-5" />}
            title="Education"
          >
            <Education education={education} />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
