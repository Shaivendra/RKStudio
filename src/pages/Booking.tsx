
import Layout from "../components/layout/Layout";
import BookingForm from "../components/booking/BookingForm";

const Booking = () => {
  return (
    <Layout>
      <section className="section bg-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Book a Session</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to capture your special moments? Fill out the form below to book a photography 
              or videography session with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
            
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:contact@shuttervista.com" className="text-teal hover:underline">
                      contact@shuttervista.com
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+1234567890" className="text-teal hover:underline">
                      +1 (234) 567-890
                    </a>
                  </li>
                  <li>
                    <strong>Address:</strong>{" "}
                    <span>123 Shutter Lane, Photo City, PC 12345</span>
                  </li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-3">Business Hours</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-3">Important Notes</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Please book at least 48 hours in advance.</li>
                  <li>A 50% deposit is required to secure your booking.</li>
                  <li>Rescheduling is available up to 24 hours before the session.</li>
                  <li>We'll contact you to confirm your booking details.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
