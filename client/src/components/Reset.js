import React from "react";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidation } from "../helper/validate";

function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: resetPasswordValidation,
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
        <div className={styles.glass} style={{width: "50%"}}>
          <div className="flex flex-col items-center title">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="w-2/3 py-4 text-xl text-center text-gray-500">
              Enter new password
            </span>
          </div>

          <form className="pt-20" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col items-center textbox">
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="text"
                placeholder="New Password"
              />
              <input
                {...formik.getFieldProps("confirm_pwd")}
                className={styles.textbox}
                type="text"
                placeholder="Repeat Password"
              />
              <button className={styles.btn} type="submit">
                Reset
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset;
