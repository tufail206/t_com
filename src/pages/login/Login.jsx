import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useActionData, useNavigate, useSubmit } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const submit=useSubmit()
  const navigate=useNavigate()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
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
    action:"/login"
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
         console.log("login success", actionData);
         navigate('/')
       } else {
         setIsSubmitting(false);
         toast.error(actionData.message);
        
       }
     }
   }, [reset, actionData]);

  return (
    <div className="flex items-center justify-center h-max bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Login
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Welcome back! Please enter your credentials.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-blue-600 text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
          disabled={isSubmitting}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
           { isSubmitting ? "Logging ": "Login"}
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
