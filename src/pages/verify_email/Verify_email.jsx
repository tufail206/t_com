import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
        const res = await axios.get(
          `http://localhost:5000/api/v1/verify-email?token=${token}`
        ).then((response) => response.data);
    
        if (!res.success) {
          toast.error(data.message);
          return;
        }
        toast.success(res.message);
        navigate("/login");
      } catch (error) {
        console.error("Verification error", error);
      }
    };

    verifyEmail();
  }, [navigate]);

  return <h2 className="text-2xl w-full h-[30vh] flex justify-center items-center ">Verifying Your Email...</h2>;
};



export default Verify_email;