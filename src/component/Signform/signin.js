import './index.css';
import { useFormik } from 'formik';
import { auth } from '../../utils/firebase';
import { createUserWithEmailAndPassword } from '../../utils/firebase';

const initialValues={
    email:'',
    password:'',
}

const onSubmit=values=>{
    createUserWithEmailAndPassword(auth,values.email,values.password)
    .then((userCredential)=>{
        const user=userCredential.user;
        console.log('Succelly SignedIn',user);
    }).catch((error)=>{
         const errorCode=error.code;
         const errorMessage=error.Message;
         console.log("Errorcode",errorCode,"ErrorMessage",errorMessage)
    });
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
            <label htmlFor='email'>Email</label>
            <div className='form-control'>
                <input
                id='email' 
                type="email"
                name='email'
                autoComplete='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? <div className='Error'>{formik.errors.email}</div>:null}
            </div>

            <label htmlFor='password'>Password</label>
            <div className='form-control'>
                <input
                id='password'
                type="password" 
                name='password'
                autoComplete='"new-password"'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password?<div className='Error'>{formik.errors.password}</div>:null}
            </div>

            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default SignIn