import React from "react";
import styles from "../styles/Username.module.css";

function Recovery() {

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen">
        <div className={styles.glass}>
          <div className="flex flex-col items-center title">
            <h4 className="text-5xl font-bold">Recovery</h4>
            <span className="w-2/3 py-4 text-xl text-center text-gray-500">
              Enter OTP to recover Password.
            </span>
          </div>

          <form className="pt-20">
            <div className="flex flex-col items-center gap-6 textbox">
              <div className="text-center input">
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter 6 digit OTP sent to your email address.
                </span>
              </div>
              <input
                className={styles.textbox}
                type="text"
                placeholder="OTP"
              />
              <button className={styles.btn} type="submit">
                Recover
              </button>
            </div>
            <div className="py-4 text-center">
              <span className="text-green-500">
                Can't get OTP?&nbsp;
                <button className="text-red-500">
                  Resend
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recovery;
