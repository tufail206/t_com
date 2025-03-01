import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Verify_email = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      if (!token) {
        alert("Invalid verification link");
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:5000/api/v1/verify-email?token=${token}`
        );
        const data = await res.json();
        alert(data.message);
        navigate("/login");
      } catch (error) {
        console.error("Verification error", error);
      }
    };

    verifyEmail();
  }, [navigate]);

  return <h2>Verifying Email...</h2>;
};



export default Verify_email;