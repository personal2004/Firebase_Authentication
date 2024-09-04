import './index.css';
import { useFormik } from 'formik';

const SignIn=()=>{
    const formik=useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        onSubmit:values=>{
            console.log(formik.values)
        }
    });
    return(
        <div className='SignIn_page'>
        <form onSubmit={formik.handleSubmit}>
            <h1>SIGN UP</h1>
            <label>Email</label>
            <input 
             type="email"
             name='email'
             onChange={formik.handleChange}
             value={formik.values.email}
             />
            <label>Password</label>
            <input
             type="password" 
             name='password'
             onChange={formik.handleChange}
             value={formik.values.password}
             />
            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default SignIn