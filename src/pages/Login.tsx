
import { Link } from 'react-router-dom';
import Layout from "../components/layout/Layout";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <Layout>
      <section className="section bg-light min-h-[80vh] flex items-center">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Sign In</h1>
            <p className="text-muted-foreground">
              Welcome back! Please sign in to continue.
            </p>
          </div>
          
          <LoginForm />
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            By signing in, you agree to our{" "}
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

export default Login;
