export const validate = (data, type) => {
    const errors = {}

    if (!data.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email address is invalid";
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = "Password is required";
    // } else if (data.password.length < 6) {
    //     errors.password = "Password need to be 6 characters or more";
    } else {
        delete errors.password
    }

    if (type === "signup") {

        if (!data.name.trim()) {
            errors.name = "Name is required";
        } else {
            delete errors.name
        }

        if(!data.confirmpassword) {
            errors.confirmpassword = "Confirm the Password";
        } else if (data.password !== data.confirmpassword) {
            errors.confirmpassword = "Password do not match";
        } else {
            delete errors.confirmpassword
        }
    
        if(!data.isAccepted) {
            errors.isAccepted = "Accept our regulations";
        } else {
            delete errors.isAccepted
        }
    }

    return errors
}