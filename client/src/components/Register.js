import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidate } from "../helper/validate";
import convertTopBase64 from '../helper/convert'

function Register() {
const [file, setFIle] = useState()

  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = Object.assign(values, {profile: file || ''})
      console.log(values)
    },
  });

  //file upload
  const onUpload = async(e) => {
    console.log(e.target.file, 'upload image')
    const base64 = await convertTopBase64(e.target.files[0]);
    setFIle(base64);
  }

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex items-center justify-center h-screen">
        <div className={styles.glass} style={{width: "50%", height: "auto"}}>
          <div className="flex flex-col items-center title">
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="w-2/3 py-4 text-xl text-center text-gray-500">
              Explore More By connecting with us
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="flex justify-center py-4 profile">
              <label htmlFor="profile">
                <img src={file || avatar} alt="avatar" className={styles.profile_img} />
              </label>
              <input onChange={onUpload} type="file" id="profile" name="profile" />
            </div>
            <div className="flex flex-col items-center textbox">
              <input
                {...formik.getFieldProps("email")}
                className={styles.textbox}
                type="text"
                placeholder="Email*"
              />
              <input
                {...formik.getFieldProps("userName")}
                className={styles.textbox}
                type="text"
                placeholder="Username*"
              />
              <input
                {...formik.getFieldProps("password*")}
                className={styles.textbox}
                type="text"
                placeholder="Password"
              />
              <button className={styles.btn} type="submit">
                Register
              </button>
            </div>
            <div className="py-4 text-center">
              <span className="text-green-500">
                Already Register?&nbsp;
                <Link className="text-red-500" to="/">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
