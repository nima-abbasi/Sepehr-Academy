import type {NextPage} from 'next'
import { useForm } from 'react-hook-form'
import { ForgetPasswordProps } from '../../../types/types';
import React, { useState, useEffect } from "react";
import ForgetPasswordAPI from '../../../pages/api/forgetPasswordAPI/forgetPasswordAPI';


const ForgetPassWordForm: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ForgetPasswordProps>()
    const [formValue, setFormValue] = useState<ForgetPasswordProps>({
      email: "",
    })
 

    const onSubmit = () =>{
        console.log(formValue)
       ForgetPasswordAPI(formValue)
       .then((res) => {
        console.log(res)
       })
        formValue.email =  ""
    }

  
    return (
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
            </div>
            
            <button
                type="submit"
                className="btn btn-primary mt-4 float-start"
                style={{backgroundColor: "#2c3e50", border:"none"}}
            >
                send
            </button>
        </form>
    )
 }

export default ForgetPassWordForm