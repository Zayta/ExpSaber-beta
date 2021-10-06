
import './contact.scss'

import { useForm } from "react-hook-form";

type ContactParams={
    name:string,
    email:string,
    message:string,
    sent:boolean
}
export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactParams>();
    const onSubmit = handleSubmit(data => {
        const formData = new FormData();
        formData.append(
            'name',
            data.name,
        )
        formData.append(
            'email',
            data.email
        )
        formData.append(
            'message',
            data.message
        )
 
        fetch("https://getform.io/f/8853778f-cbdf-497e-b76a-1ba4d70b177a",
        {
            method: "POST",
            body: formData,
        })
        .then(response => {
            alert('Message was sent')

        })
        .catch(error => console.log(error));
    });
  
    return (
        <div className = 'contact-container'>
        <form id="contact-form" onSubmit={onSubmit}>
            
            <input placeholder = "Name" {...register("name", { required: false })} />
            <input type = 'email' placeholder = "Email" {...register("email", { required: true })} />
            
            <div className = 'verif'>
            {errors.email && "Email is required"}
            </div>
            
            <textarea id = "message" placeholder="Message" form="contact-form" {...register("message", { required: true })}></textarea>
            
            
            <button type="submit">Send</button>
            
            <div className = 'verif'>
                {errors.message && "Enter your message"}
            </div>
            
      </form>
      </div>
    );
  }