// validate user name
import toast from 'react-hot-toast'

export async function userNameValidate(values){
    const errors = userNameVerify({}, values);
    return errors
}

function userNameVerify(error = {}, values){
    if(!values.userName){
        error.userName = toast.error("Require Username")
    } else if(values.userName.includes(' ')){
        error.userName = toast.error("Invalid Username")
    }
    return error
}