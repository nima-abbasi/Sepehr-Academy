import type {NextPage} from 'next'
import { useForm } from 'react-hook-form'
import React, { useState, useEffect } from "react";
import { ContactUsProps } from '../../types/types';
import ContactUsAPI from '../../pages/api/contactUsApi/contactUsAPI';
import emailImg from "../../assets/images/email.png"
import addressImg from "../../assets/images/address.png"

const ContactUsForm: NextPage = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm<ContactUsProps>()
    const [formValue, setFormValue] = useState<ContactUsProps>({
      email: "",
      name: "",
      text: "",
    })

   
    const onSubmit = () =>{
        console.log(formValue) 
        ContactUsAPI(formValue)
        .then((res) => {
          console.log(res.data)
        })
        formValue.email =  ""
        formValue.name =  ""
        formValue.text = ""
    }

   
  
    return (
        <div className="container" style={{display: "flex", flexDirection:"row", gap: "20px", marginTop: "50px"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-column bd-highlight mb-3">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">name</label>
                        <input
                            className="form-control"
                            type="name"
                            value={formValue.name}
                            {...register("name",
                                    { required: 'please inter name',
                                        minLength: { 
                                        value: 2, 
                                        message: 'name must be at least 2 character'
                                        }
                                    }
                                )}
                                onChange={e => setFormValue({...formValue, name:(e.target.value)})}
                        />
                        {errors.name && <p style={{color:"red"}}>{errors.name?.message}</p>}
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
                        <label htmlFor="textarea" className="form-label">Comment</label>
                        <textarea
                            className="form-control"
                            id="textarea"
                            value={formValue.text}
                            {...register("text",
                                { required: 'please inter text',
                                    minLength: {
                                        value: 8,
                                        message: 'text must be at least 100 character'
                                    }
                                }
                            )}
                            onChange={e => setFormValue({...formValue, text:(e.target.value)})}
                        />
                        {errors.text && <p style={{color:"red"}}>{errors.text?.message}</p>}
                    </div>
                </div>
            <button
                type="submit"
                className="btn btn-primary mt-4 float-start"
                style={{backgroundColor: "#2c3e50", border:"none"}}
            >
                Send
            </button>
        </form>
        <div className="container" 
            style={{display: "flex", flexDirection:"column", gap: "20px", backgroundColor: "#2c3e50", border:"none"}}
        >
            <p className="card-text" style={{color:"white"}}>
                <img src={emailImg.src} height="25px" width="25px"/>
                sepehr@queratim1.com
            </p>
            <p className="card-text" style={{color:"white"}}>
                <img src={addressImg.src} height="25px" width="25px"/>
                Nakojaabad, khunedelbaze, pelake 00
            </p>
            <p className="card-text" style={{color:"white"}}>
                moasese amuzeshi
            </p>
            <p className="card-text" style={{color:"white"}}>
                saate kari: haft ruze hafte, 24 saateh
            </p>

        </div>
        </div>
        
    )
 }

export default ContactUsForm