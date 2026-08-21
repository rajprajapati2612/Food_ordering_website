// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';

// const Verify = () => {
//     const {token} = useParams()
//     const [status, setStatus] = useState("Verifying...");
//     const navigate = useNavigate();
//     useEffect(()=>{
//         const verifyEmail = async()=>{
//             try {
//                 const res = await axios.post(`https://food-ordering-website-backend-u9o1.onrender.com/user/verify`,{},{
//                  headers:{
//                     Authorization:`Bearer ${token}`
//                  }   
//                 })
//                 if(res.data.success){
//                     setStatus("✅ Email Verified Successfully")
//                     setTimeout(()=>{
//                         navigate("/login");
//                     },2000)

//                 }else{
//                     setStatus("❌ Invalid or Expired Token");
//                 }
//             } catch (error) {
//                 console.log("find error ", error);
//                 setStatus("❌ Verification Failed.Please try again");

//             }
//         }
//     verifyEmail();
    
//     },[token,navigate])
//   return (
//     <div className='relative w-full h-[47] bg-green-100 overflow-hidden'>
//         <div className='min-h-screen flex items-center justify-center'>
//            <div className='bg-white p-6 rounded-xl shadow-md text-center w-[90%] max-w-md'>
//             <h2 className='text-xl font-semibold text-gray-800'>{status}</h2>
//            </div>

//         </div>
      
//     </div>
//   )
// }

// export default Verify


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

const Verify = () => {
  const { token } = useParams();

  const [status, setStatus] = useState("Verifying");
  const [verified, setVerified] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.post(
          `https://food-ordering-website-backend-u9o1.onrender.com/user/verify`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.success) {
          setStatus("Email Verified Successfully");
          setVerified(true);

          setTimeout(() => {
            navigate("/login");
          }, 3000);
        } else {
          setStatus("Invalid or Expired Token");
          setVerified(false);
        }

      } catch (error) {
        console.log("Verification error:", error);

        setStatus(
          error.response?.data?.message ||
          "Verification Failed. Please try again."
        );

        setVerified(false);
      }
    };

    if (token) {
      verifyEmail();
    }

  }, [token, navigate]);

  return (
    <div className="min-h-screen w-full bg-green-100 flex items-center justify-center px-4">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">

        {verified === null && (
          <>
            <Loader2 className="w-12 h-12 mx-auto text-green-600 animate-spin mb-5" />

            <h2 className="text-xl font-semibold text-gray-700">
              Verifying your email...
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Please wait while we verify your account.
            </p>
          </>
        )}

        {verified === true && (
          <>
            <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-5" />

            <h2 className="text-2xl font-bold text-green-700">
              {status}
            </h2>

            <p className="text-gray-500 text-sm mt-3">
              Redirecting you to login...
            </p>
          </>
        )}

        {verified === false && (
          <>
            <XCircle className="w-16 h-16 mx-auto text-red-500 mb-5" />

            <h2 className="text-xl font-semibold text-red-600">
              {status}
            </h2>

            <button
              onClick={() => navigate("/signup")}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
            >
              Back to Signup
            </button>
          </>
        )}

      </div>

    </div>
  );
};

export default Verify;
