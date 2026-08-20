// import React, { useContext, useState } from 'react'


// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Eye, EyeOff, Loader2 } from 'lucide-react'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { Link, useNavigate } from 'react-router-dom'
// // import { getData } from '@/context/userContext'

// import { AuthContext } from './auth.context.jsx';



// const Login = () => {
// //   const {setUser} = getData();
//   const {setUser,user} = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [showPassword,setshowPassword] = useState(false);
//   const [isLoading,setIsLoading] = useState(false);
//   const [formData,setFormData] = useState({
  
//     email:"",
//     password:""
//   })

//   const handleChange = (e)=>{
//     const {name,value} = e.target;
//     setFormData((prev)=>({
//       ...prev,
//       [name]:value
//     }))
//   }

//   const handleSubmit = async (e)=>{
//    e.preventDefault();
//    console.log(formData); 
//     setIsLoading(true);
//    try {
   
//     // const res = await axios.post(`http://localhost:8000/user/login`,formData,{
//     //   headers:{
//     //     "Content-Type":"application/json"
//     //   }
//     // })

//     const res = await axios.post(
//   "http://localhost:8000/user/login",
//   formData,
//   {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     withCredentials: true,
//   }
// );
//    console.log("result ", res);
//    console.log("1 ",user);
//     if(res.data.success){
//       setUser(res.data.user);
//       console.log("2 ",user);
//       navigate('/home');
//     //   setUser(res.data.user);
//       localStorage.setItem("accessToken",res.data.accessToken);

//       toast.success(res.data.message)
//     }
//    } catch (error) {
//     console.log("hello");
//     console.log(error);
   
//    } finally{
// setIsLoading(false);

//    }
//   }
//   return (
//     <div className='relative w-full h-screen md:h-[47] bg-green-100 overflow-hidden'>
//       <div className='min-h-screen flex flex-col to-muted/20'>
//       <div className='flex-1 flex items-center justify-center p-4'> 
//         <div className='w-full max-w-md space-y-6'>
//           <div className='text-center space-y-2'>
//              <h1 className='text-3xl font-bold tracking-tight text-green-600'>Login your account</h1>
//              <p className='text-gray-600'>Start organizing your thought and ideas today</p>
//           </div>
//            <Card className="w-full max-w-sm">
//       <CardHeader className='space-y-11'>
//         <CardTitle className=' text-2xl text-center text-green-600'>Login</CardTitle>
//         <CardDescription className='text-center mb-2'>
//           Login to your account get started with NotesApp
//         </CardDescription>
        
//       </CardHeader>
//       <CardContent >
//           <div className="flex flex-col gap-6">
           

//              <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"

//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="m@example.com"
//                 required
//               />
//             </div>

            

            
//             <div className="grid gap-2">
             
//                 <div className='flex items-center justify-between'>
//                   <Label htmlFor="password">Password</Label>
//                   <Link className='text-sm text-gray-600' to={'/forgot-password'}>Forgot your password?</Link>
//                 </div>
               
//              <div className='relative '>
//                <Input id="password" name="password"
//                placeholder="Enter your password"
//                value={formData.password}
//                 onChange={handleChange} type={showPassword?"text":"password"} required />
//                <Button variant='ghost' size="sm" className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent ' onClick={()=>
//                 setshowPassword(!showPassword)
                
//                } disabled={isLoading} >
//                 {
//                   showPassword? <EyeOff className='w-4 h-4 text-gray-600'/> : < Eye className='w-4 h-4 text-gray-600'/>
//                 }
               
//                </Button>
//              </div>
             
//             </div>
//             <div className='flex justify-center'>
//             <div className='' >
//               <p>Do'nt have an Account?<span className='text-green-500 text-xl cursor-pointer' onClick={navigate('/signup')}>Signup</span></p>
//             </div>
//             </div>
//           </div>
       
//       </CardContent>
//       <CardFooter className="flex-col gap-2">
//         <Button onClick={handleSubmit} type="submit" className="w-full hover:bg-green-500">
//          {
//           isLoading?
//           (
//             <>
//             <Loader2 className='mr-2 h-4 w-4 animate-spin'>
//               Logging into your account...
//             </Loader2>
//             </>
//           ):"Login"
//          }
//         </Button>
//       </CardFooter>
//     </Card>
//           </div>     </div>
//       </div>
//     </div>
//   )
// }




// export default Login





// import React, { useContext, useState } from "react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Eye, EyeOff, Loader2 } from "lucide-react";

// import axios from "axios";
// import { toast } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom";

// import { AuthContext } from "./auth.context.jsx";

// const Login = () => {
//   const { setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if(!formData.email || !formData.password){
//       setError("Please fill in all fields");
//       return;
//     }
//      // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(formData.email)) {
//       setError("Please enter a valid email address");
//       return;
//     }

    
//     setError("");

//     setIsLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:8000/user/login",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       if (res.data.success) {
//         setUser(res.data.user);

//         toast.success(res.data.message);

//         navigate("/home");
//       }
//     } catch (error) {
//        setError(
//         error.response?.data?.message ||
//           "Login failed. Please try again."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">

//       <div className="w-full max-w-md">

//         {/* Heading */}
//         <div className="text-center mb-6 sm:mb-8">

//           <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-green-600">
//             Welcome Back
//           </h1>

//           <p className="mt-2 text-sm sm:text-base text-gray-600">
//             Login to your account
//           </p>

//         </div>

//         {/* Login Card */}
//         <Card className="w-full shadow-lg border border-green-100">

//           <CardHeader className="space-y-2 text-center px-5 sm:px-6">

//             <CardTitle className="text-xl sm:text-2xl font-semibold">
//               Login
//             </CardTitle>

//             <CardDescription className="text-sm">
//               Enter your credentials to access your account
//             </CardDescription>

//           </CardHeader>

//           <CardContent className="px-5 sm:px-6">

//             {/* ERROR BOX AT TOP */}
//             {error && (
//               <div className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">

//                 <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />

//                 <p className="flex-1">
//                   {error}
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() => setError("")}
//                   className="shrink-0 hover:text-red-800"
//                 >
//                   <X className="h-4 w-4" />
//                 </button>

//               </div>
//             )}

//             <form
//               onSubmit={handleSubmit}
//               className="space-y-5"
//             >

//               {/* Email */}
//               <div className="space-y-2">

//                 <Label htmlFor="email">
//                   Email
//                 </Label>

//                 <Input
//                   id="email"
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   required
//                   disabled={isLoading}
//                   className="h-11 w-full"
//                 />

//               </div>

//               {/* Password */}
//               <div className="space-y-2">

//                 <div className="flex items-center justify-between gap-2">

//                   <Label htmlFor="password">
//                     Password
//                   </Label>

//                   <Link
//                     to="/forgot-password"
//                     className="text-xs sm:text-sm text-green-600 hover:text-green-700 hover:underline whitespace-nowrap"
//                   >
//                     Forgot password?
//                   </Link>

//                 </div>

//                 <div className="relative">

//                   <Input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Enter your password"
//                     required
//                     disabled={isLoading}
//                     className="h-11 w-full pr-12"
//                   />

//                   <Button
//                     type="button"
//                     variant="ghost"
//                     size="icon"
//                     className="absolute right-1 top-1 h-9 w-9"
//                     onClick={() =>
//                       setShowPassword(!showPassword)
//                     }
//                     disabled={isLoading}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-4 w-4 text-gray-500" />
//                     ) : (
//                       <Eye className="h-4 w-4 text-gray-500" />
//                     )}
//                   </Button>

//                 </div>

//               </div>

//               {/* Login Button */}
//               <Button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full h-11 bg-green-600 hover:bg-green-700"
//               >

//                 {isLoading ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     Logging in...
//                   </>
//                 ) : (
//                   "Login"
//                 )}

//               </Button>

//             </form>

//           </CardContent>

//           {/* Signup */}
//           <CardFooter className="flex flex-col gap-4 px-5 sm:px-6">

//             <div className="relative w-full">

//               <div className="absolute inset-0 flex items-center">
//                 <span className="w-full border-t" />
//               </div>

//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="bg-white px-3 text-gray-500">
//                   Or
//                 </span>
//               </div>

//             </div>

//             <p className="text-sm text-gray-600 text-center">
//               Don't have an account?{" "}

//               <Link
//                 to="/signup"
//                 className="font-semibold text-green-600 hover:text-green-700 hover:underline"
//               >
//                 Sign up
//               </Link>
//             </p>

//           </CardFooter>

//         </Card>

//       </div>

//     </div>
//   );
// };

// export default Login;





import React, { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Eye,
  EyeOff,
  Loader2,
  AlertCircle,
  X,
} from "lucide-react";

import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "./auth.context.jsx";

const Login = () => {
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // Error state
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts typing
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError("");

    // Empty email validation
    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Empty password validation
    if (!formData.password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setUser(res.data.user);

        toast.success(res.data.message);

        navigate("/home");
      }
    } catch (error) {
      console.log(error);

      // Backend error message
      const message =
        error.response?.data?.message ||
        "Unable to login. Please try again.";

      setError(message);

      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-green-600">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Login to your account
          </p>

        </div>

        <Card className="w-full shadow-lg border border-green-100">

          <CardHeader className="space-y-2 text-center px-5 sm:px-6">

            <CardTitle className="text-xl sm:text-2xl font-semibold">
              Login
            </CardTitle>

            <CardDescription className="text-sm">
              Enter your credentials to access your account
            </CardDescription>

          </CardHeader>

          <CardContent className="px-5 sm:px-6">

            {/* ERROR BOX AT TOP */}
            {error && (
              <div className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">

                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />

                <p className="flex-1">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={() => setError("")}
                  className="shrink-0 hover:text-red-800"
                >
                  <X className="h-4 w-4" />
                </button>

              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Email */}
              <div className="space-y-2">

                <Label htmlFor="email">
                  Email
                </Label>

                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  disabled={isLoading}
                  className={`h-11 w-full ${
                    error ? "border-red-300" : ""
                  }`}
                />

              </div>

              {/* Password */}
              <div className="space-y-2">

                <div className="flex items-center justify-between gap-2">

                  <Label htmlFor="password">
                    Password
                  </Label>

                  <Link
                    to="/forgot-password"
                    className="text-xs sm:text-sm text-green-600 hover:text-green-700 hover:underline whitespace-nowrap"
                  >
                    Forgot password?
                  </Link>

                </div>

                <div className="relative">

                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    disabled={isLoading}
                    className={`h-11 w-full pr-12 ${
                      error ? "border-red-300" : ""
                    }`}
                  />

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-9 w-9"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>

                </div>

              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-green-600 hover:bg-green-700"
              >

                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}

              </Button>

            </form>

          </CardContent>

          {/* Signup */}
          <CardFooter className="flex flex-col gap-4 px-5 sm:px-6">

            <div className="relative w-full">

              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>

              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-gray-500">
                  Or
                </span>
              </div>

            </div>

            <p className="text-sm text-gray-600 text-center">
              Don't have an account?{" "}

              <Link
                to="/signup"
                className="font-semibold text-green-600 hover:text-green-700 hover:underline"
              >
                Sign up
              </Link>

            </p>

          </CardFooter>

        </Card>

      </div>

    </div>
  );
};

export default Login;