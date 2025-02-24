import profileImage from "../../assets/Rajashekhar.jpeg";
import Icons from "./Icons";
import ProfileImage from "./ProfileImage";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black text-white pt-32 pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-7 md:w-1/2">
            <h1 className="text-2xl md:text-5xl font-bold">Hello, I am</h1>
            <h1 className="text-2xl md:text-5xl font-bold">
              RAJASHEKHAR SURAKANTI
            </h1>
            <p className="text-2xl text-gray-300">Full Stack Web Developer</p>
            <p className="text-gray-400 text-xl max-w-lg">
              Driven by a passion for crafting innovative and impactful web
              applications, I bring over 2 years of experience in building
              dynamic, user-centric solutions
            </p>
            <Icons />
          </div>
          <ProfileImage profileImage={profileImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
