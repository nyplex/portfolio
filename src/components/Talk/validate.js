const validate = (type, value) => {
    switch (type) {
        case "email":
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        case "name":
            if(value.trim().length === 0 || value.trim().length > 20) {
                return false;
            }
            return true;
        case "subject":
            if(value.trim().length === 0|| value.trim().length > 80) {
                return false;
            }
            return true;
        case "message":
            if(value.trim().length === 0 || value.trim().length > 10000) {
                return false;
            }
            return true;
        default:
            return true;
    }
}


export default validate;