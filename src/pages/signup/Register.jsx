import React, { useEffect, useState } from "react";
import { Controller, useForm  } from "react-hook-form";
import { Link ,useNavigate,useActionData,useSubmit  } from "react-router-dom";
import {toast} from 'react-toastify'
const Signup = () => {
  const submit=useSubmit()
  const navigate=useNavigate()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
          },
  });
  const  actionData=useActionData()
  const [isSubmitting,setIsSubmitting]=useState(false)
  const onSubmit = (data) => {
    const submitOptions={
      method:"POST",
    encType: 'application/json',
      action:"/Signup"
    }
     setIsSubmitting(true);
    submit(data, submitOptions);
   
  };
   useEffect(() => {
     if (actionData) {
       if (actionData.success) {
         setIsSubmitting(false);
         toast.success(actionData.message);
         reset();
          navigate("/login")

       } else {
         setIsSubmitting(false);
         toast.error(actionData.message);
        
       }
     }
   }, [reset, actionData]);
  return (
    <div className="flex items-center justify-center h-max  bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Sign Up
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Create your account to get started!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name Field */}
          <div>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Full Name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Sign Up Button */}
          <button
         
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
           {
            isSubmitting? "Signing Up..." : "Sign Up"
 
           }
          </button>
        </form>

        {/* Already have an account? Login */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
