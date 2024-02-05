import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/validate";
import convertTopBase64 from "../helper/convert";

function Profile() {
  const [file, setFIle] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });

  //file upload
  const onUpload = async (e) => {
    console.log(e.target.file, "upload image");
    const base64 = await convertTopBase64(e.target.files[0]);
    setFIle(base64);
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex items-center justify-center h-screen">
        <div className={styles.glass} style={{ width: "50%", height: "auto" }}>
          <div className="flex flex-col items-center title">
            <h4 className="text-5xl font-bold">Profile</h4>
            <span className="w-2/3 py-4 text-xl text-center text-gray-500">
              You an update the details.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="flex justify-center py-4 profile">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  alt="avatar"
                  className={styles.profile_img}
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>
            <div className="flex flex-col items-center gap-6 textbox">
              <div className="flex gap-10 name w3/4">
                <input
                  {...formik.getFieldProps("firstName")}
                  className={styles.textbox}
                  type="text"
                  placeholder="FirstName*"
                />
                <input
                  {...formik.getFieldProps("lastName")}
                  className={styles.textbox}
                  type="text"
                  placeholder="LastName*"
                />
              </div>
              <div className="flex gap-10 name w3/4">
                <input
                  {...formik.getFieldProps("mobile")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Mobile*"
                />
                <input
                  {...formik.getFieldProps("email")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Email*"
                />
              </div>
              <div className="flex gap-10 w-[100%] items-left name">
                <input
                  {...formik.getFieldProps("address")}
                  className={styles.textbox}
                  style={{ width: "300px" }}
                  type="text"
                  placeholder="Address*"
                />
              </div>
              <button
                className={styles.btn}
                style={{ height: "60px", width: '100%' }}
                type="submit"
              >
                Update
              </button>
            </div>
            <div className="py-4 text-center">
              <span className="text-green-500">
                Come back later?&nbsp;
                <Link className="text-red-500" to="/">
                  Logout
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
