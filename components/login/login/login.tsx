import type {NextPage} from 'next'
import { useForm } from 'react-hook-form'
import { LoginInfo } from '../../../types/types'
import { clearMessage } from "../../../store/slices/message";
import { AppDispatch } from "../../../types/types"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../../store/slices/actions/login.action';
import Modal from '../../modal/modal';
import ForgetPassWordForm from '../forgetPassword/forgetPassword';
import ResetPassWordForm from '../resetPassword/resetPassword';
import ModalWrapper from '../../modal/modal'

const LoginForm: NextPage = () => {
    const [send, setSend] = useState<boolean>(false)
    const [reset, setReset] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginInfo>()
    const [formValue, setFormValue] = useState<LoginInfo>({
      email: "",
      password: "",
    })

    const { isLoggedIn } = useSelector((state:any) => state.auth);
    const { message } = useSelector((state:any) => state.message);
    console.log(message)
  
    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);

    const onSubmit = () =>{
        console.log(formValue) 
        dispatch(login(formValue))
        .unwrap()
        .then(() => {
            console.log(message)
            console.log('ok')
        })
        .catch(() => {
            console.log(message)
            console.log('no')
        });
        formValue.email =  ""
        formValue.password =  ""
    }

    const handleClick = () => {
        setSend(!send) 
      };
  
    return (
        <div className="container" style={{display: "flex", flexDirection:"column", gap: "20px"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column bd-highlight mb-3">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        value={formValue.email}
                        {...register("email",
                            { required: 'please inter email',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'invalid email address'
                                }
                            }
                        )}
                        onChange={e => setFormValue({...formValue, email:(e.target.value)})}
                    />
                    {errors.email && <p style={{color:"red"}}>{errors.email?.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        value={formValue.password}
                        {...register("password",
                            { required: 'please inter password',
                                minLength: {
                                    value: 8,
                                    message: 'password must be at least 8 character'
                                }
                            }
                        )}
                        onChange={e => setFormValue({...formValue, password:(e.target.value)})}
                    />
                    {errors.password && <p style={{color:"red"}}>{errors.password?.message}</p>}
                </div>
            </div>
            <button
                style={{backgroundColor: "#2c3e50", border:"none"}}
                type="submit"
                className="btn btn-primary mt-4 float-start"
            >
                login
            </button>
        </form>
        <div className="d-flex justify-content-around">
            <button type="button" onClick={handleClick} style={{backgroundColor: "#2c3e50", border:"none"}} className="btn btn-primary " >Forget PassWord</button> 
                {send && <ModalWrapper close={setSend} component={<ForgetPassWordForm/>} />}
            <button type="button" onClick={handleClick} style={{backgroundColor: "#2c3e50", border:"none"}} className="btn btn-primary" >Reset Password</button> 
                {send && <ModalWrapper close={setSend} component={<ResetPassWordForm/>} />}
         </div>
        </div>
        
    )
 }

export default LoginForm