import React from "react";
import { useState } from "react";
import useUser from "../lib/useUser";
import Layout from "../components/Layout";
import Form from "../components/Form";
import fetchJson from "../lib/fetchJson";

const SignUp = () => {
  const { mutateUser } = useUser({
    redirectTo: "/profile-sg",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // Get form data
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const body = {
      email: email,
      password: password,
    };

    try {
      await mutateUser(
        fetchJson("/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      );
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }

  return (
    <Layout>
      <div className="signup">
        <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
      <style jsx>{`
        .signup {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </Layout>
  );
};

export default SignUp;
