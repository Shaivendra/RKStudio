
import Layout from "../components/layout/Layout";
import Gallery from "../components/portfolio/Gallery";

const Portfolio = () => {
  return (
    <Layout>
      <section className="section bg-light">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our collection of photography and videography work. 
            Filter by category or media type to find exactly what you're looking for.
          </p>
        </div>
        
        <Gallery />
      </section>
    </Layout>
  );
};

export default Portfolio;
