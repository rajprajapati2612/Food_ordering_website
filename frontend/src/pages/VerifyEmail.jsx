// import React from 'react'

// const VerifyEmail = () => {
//   return (
//     <div className='relative w-full h-[47] overflow-hidden'>
//       <div className='min-h-screen flex items-center justify-center bg-green-100 px-4'>
//         <div className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center'>

//             <h2 className='text-2xl font-semibold text-green-700 mb-4'>✅ Check Your Email</h2>
//             <p className='text-gray-400 text-sm'>
//                 We've sent you an email to verify your account. Please check your inbox and click the verification link.
//             </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default VerifyEmail



import React from "react";

const VerifyEmail = () => {
  return (
    <div className="min-h-screen w-full bg-green-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">

        <div className="text-5xl mb-4">
          📧
        </div>

        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Check Your Email
        </h2>

        <p className="text-gray-500 text-sm leading-6">
          We've sent you a verification email.
          Please check your inbox and click the verification link
          to activate your account.
        </p>

        <p className="text-gray-400 text-xs mt-5">
          Don't forget to check your spam folder.
        </p>

      </div>
    </div>
  );
};

export default VerifyEmail;
