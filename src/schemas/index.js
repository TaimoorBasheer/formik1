import * as yup from 'yup';
 
export const signUpSchema = yup.object({
    name:yup.string().min(3).max(30).required("Name must have atleast 3 Characters"),
    email:yup.string().email().required("Enter a valid Email"),
    password:yup.string().min(6).required("Password must be at least 6 charcters"),
    confirm_password:yup.string().min(6).required().oneOf([yup.ref('password'),null],"Password must be same"),
    image: yup.mixed().required('Please upload an image file'),
      
})