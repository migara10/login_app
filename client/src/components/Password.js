import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";

function Password() {
  const formik = useFormik({
    initialValues: {
      password: "admin@123",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex items-center justify-center h-screen">
        <div className={styles.glass}>
          <div className="flex flex-col items-center title">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="w-2/3 py-4 text-xl text-center text-gray-500">
              Explore More By connecting with us
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="flex justify-center py-4 profile">
              <img src={avatar} alt="avatar" className={styles.profile_img} />
            </div>
            <div className="flex flex-col items-center textbox">
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="text"
                placeholder="Password"
              />
              <button className={styles.btn} type="submit">
                Sign in
              </button>
            </div>
            <div className="py-4 text-center">
              <span className="text-green-500">
                Forgot Password?
                <Link className="text-red-500" to="/recovery">
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Password;
