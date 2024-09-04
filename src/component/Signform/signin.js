import './index.css';
import { useFormik } from 'formik';

const initialValues={
    email:'',
    password:'',
}

const onSubmit=values=>{
    console.log(values)
}

const validate=values=>{
    let errors={}

    if(!values.email){
      errors.email="Required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email="Email format is wrong"
    }

    if(!values.password){
      errors.password="Required"
    }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(values.password)){
        errors.password="Password format is wrong"
    }

    return errors
  }

const SignIn=()=>{
    
    const formik=useFormik({
        initialValues,
        onSubmit,
        validate
    });

    return(
        <div className='SignIn_page'>
        <form onSubmit={formik.handleSubmit}>
            <h1>SIGN UP</h1>
            <label>Email</label>
            <div className='form-control'>
                <input 
                type="email"
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                />
                {formik.errors.email ? <div className='Error'>{formik.errors.email}</div>:null}
            </div>

            <label>Password</label>
            <div className='form-control'>
                <input
                type="password" 
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                />
                {formik.errors.password?<div className='Error'>{formik.errors.password}</div>:null}
            </div>

            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default SignIn