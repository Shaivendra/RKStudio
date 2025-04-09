
import Layout from "../components/layout/Layout";
import AboutContent from "../components/about/AboutContent";

const About = () => {
  return (
    <Layout>
      <section className="section bg-light">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about ShutterVista Photography, our team, and our approach to visual storytelling.
          </p>
        </div>
        
        <AboutContent />
      </section>
    </Layout>
  );
};

export default About;
