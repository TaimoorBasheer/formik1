import { useFormik } from "formik";
import {signUpSchema} from './schemas'
const initialValues = {
    email:"",
    password:"",
    name:"",
}
const Home = () => {
 const formik =  useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    const {values,errors,touched,handleSubmit,handleChange,handleBlur} = formik;
     
return <>
      

<form className="max-w-sm mx-auto border p-5 mt-7" onSubmit={handleSubmit}>
<div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input type="text" name="name" id="name" autoComplete="off" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
  </div>
  {errors.name && touched.name?<p style={{color:'red', fontSize:'0.7rem', marginBottom:'0.5rem'}}>{errors.name}</p>:null}
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" name="email" id="email" autoComplete="off" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name@flowbite.com" value={values.email} onChange={handleChange} onBlur={handleBlur} />
  </div>
  {errors.email && touched.email?<p style={{color:'red', fontSize:'0.7rem', marginBottom:'0.5rem'}}>{errors.email}</p>:null}
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" name="password" autoComplete="off" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " value={values.password} onChange={handleChange} onBlur={handleBlur}/>
  </div>
  {errors.password && touched.password?<p style={{color:'red', fontSize:'0.7rem', marginBottom:'0.5rem'}}>{errors.password}</p>:null}
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "/>
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 ">Remember me</label>
  </div>
  <button type="submit" className=" text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center ">Submit</button>
</form>

 </>
}
  export default Home;