// validate user name
import toast from "react-hot-toast";

export async function userNameValidate(values) {
  return userNameVerify({}, values);
}

function userNameVerify(errors = {}, values) {
  if (!values.userName) {
    errors.userName = toast.error("Require Username...!");
  } else if (values.userName.includes(" ")) {
    errors.userName = toast.error("Invalid Username...!");
  }
  return errors;
}

// validate password

export async function passwordValidate(values) {
  return passwordVerify({}, values);
}

function passwordVerify(errors = {}, values) {
  const min = 4;
  const passwordRegex =
    /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~/-])[\w!@#$%^&*()_+{}[\]:;<>,.?~/-]{8,}$/;
  if (!values.password) {
    errors.password = toast.error("Require Password...!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Invalid Password...!");
  } else if (values.password.length < min) {
    errors.password = toast.error(`Password Must Be greater than ${min}`);
  } else if (!passwordRegex.test(values.password)) {
    errors.password = toast.error("Password must have special characters");
  }
  return errors;
}

// validate email

function emailVerify(errors = {}, values) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!values.email) {
    errors.userName = toast.error("Require Email...!");
  } else if (values.email.includes(" ")) {
    errors.email = toast.error("Wrong Email...!");
  } else if (!emailRegex.test(values.email)) {
    errors.email = toast.error("Invalid Email...!");
  }
  return errors;
}

// validate reset password
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("Password not match...!");
  }

  return errors;
}

// validate register form

export async function registerValidate(values) {
  let errors = userNameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

// validate profile

export async function profileValidation(values){
  return emailVerify({}, values)
}
