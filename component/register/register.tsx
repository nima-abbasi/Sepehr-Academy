import type {NextPage} from 'next'
import { useForm } from 'react-hook-form'
import { UserInfo } from '../../types/types'
import { clearMessage } from "../../store/slices/message";
import { AppDispatch } from "../../types/types"
import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singUp } from '../../store/slices/actions/sing-up.action';
import ForgetPassWordForm from "../login/forgetPassword/forgetPassword"

const RegisterForm: NextPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit, formState: {errors} } = useForm<UserInfo>()
    const [formValue, setFormValue] = useState<UserInfo>({
        fullName: "",
        email: "",
        password: "",
        phoneNumber: "",
        birthDate: "",
        nationalId:"",
        profile: "",
    })

    const { isLoggedIn } = useSelector((state:any) => state.auth);
    const { message } = useSelector((state:any) => state.message);
    console.log(message)
  
    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);

    const onSubmit = () =>{
        console.log(formValue) 
        dispatch(singUp(formValue))
        .unwrap()
        .then(() => {
            console.log(message)
            console.log('ok')
        })
        .catch(() => {
            console.log(message)
            console.log('no')
        });
        formValue.fullName = ""
        formValue.email =  ""
        formValue.password =  ""
        formValue.phoneNumber =  ""
        formValue.birthDate =  ""
        formValue.nationalId = ""
        formValue.profile =  "" 
    }

   
  
    return (
        <div className="container" style={{display: "flex", flexDirection:"column", gap: "20px"}}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column bd-highlight mb-3">
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">FullName</label>
                    <input
                        className="form-control"
                        type="name"
                        value={formValue.fullName}
                        {...register("fullName",
                                { required: 'please inter fullName',
                                    minLength: { 
                                    value: 2, 
                                    message: 'FullName must be at least 2 character'
                                    }
                                }
                            )}
                            onChange={e => setFormValue({...formValue, fullName:(e.target.value)})}
                    />
                    {errors.fullName && <p style={{color:"red"}}>{errors.fullName?.message}</p>}
                </div>
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
            <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">PhoneNumber</label>
                <input
                    className="form-control"
                    type="tel"
                    value={formValue.phoneNumber}
                    {...register("phoneNumber", 
                        { required: 'please inter phone number',
                            minLength: {
                                value: 10,
                                message: 'phone number must be at least 10 character'
                            },
                            maxLength: {
                                value: 15,
                                message: 'phone number must be at maximum 15 character'
                            }
                        }
                    )}
                    onChange={e => setFormValue({...formValue, phoneNumber:(e.target.value)})}
                />
                {errors.phoneNumber && <p style={{color:"red"}}>{errors.phoneNumber?.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="birthDate" className="form-label">BirthDate</label>
                <input
                    className="form-control"
                    type="Date"
                    value={formValue.birthDate}
                    {...register("birthDate", {required: 'please inter birth date'})}
                    onChange={e => setFormValue({...formValue, birthDate:(e.target.value)})}
                />
                {errors.birthDate && <p style={{color:"red"}}>{errors.birthDate?.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="nationalId" className="form-label">NationalId</label>
                <input
                    className="form-control"
                    type="text"
                    value={formValue.nationalId}
                    {...register("nationalId",
                        { required:'please inter id',
                            maxLength: {
                                value: 10,
                                message: 'phone number must be at max 10 character'
                            },
                            minLength: {
                                value: 10,
                                message: 'phone number must be at least 10 character'
                            }
                        }
                    )}
                    onChange={e => setFormValue({...formValue, nationalId:(e.target.value)})} 
                />
                {errors.nationalId && <p style={{color:"red"}}>{errors.nationalId?.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="profile" className="form-label">profile</label>
                <input
                    className="form-control"
                    id="profile"
                    type="text"
                    value={formValue.profile}
                    {...register("profile", {required: 'please upload an image'})}
                    onChange={e => setFormValue({...formValue, profile:(e.target.value)})}
                />
                {errors.profile && <p style={{color:"red"}}>{errors.profile?.message}</p>}
            </div>
          
        </div>
            <button
                style={{backgroundColor: "#2c3e50", border:"none"}}
                type="submit"
                className="btn btn-primary mt-4 float-start"
            >
                sing up
            </button>
        </form> 
        <div className="d-flex justify-content-around">
            <button type="button" className="btn btn-link" >Login</button> 
         </div>
    </div>
        
    )
 }

export default RegisterForm