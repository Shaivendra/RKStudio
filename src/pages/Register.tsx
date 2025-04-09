
import { Link } from 'react-router-dom';
import Layout from "../components/layout/Layout";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <Layout>
      <section className="section bg-light min-h-[80vh] flex items-center">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-muted-foreground">
              Join ShutterVista to book sessions and manage your content.
            </p>
          </div>
          
          <RegisterForm />
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            By creating an account, you agree to our{" "}
            <Link to="#" className="text-teal hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-teal hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
