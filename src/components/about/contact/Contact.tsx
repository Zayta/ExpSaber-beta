

import { useForm } from "react-hook-form";
import styled from "styled-components";

type ContactParams={
    name:string,
    email:string,
    message:string,
    sent:boolean
}
const ContactStyle = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-flow:column nowrap;

h3{
    margin-bottom:0;
}
input,textarea{
    margin:10px;
    padding:10px;
    
}
#contact-form{
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:10px;
    width:50%;
    min-width:fit-content;
    border-radius:5px;
    background-color:var(--bckgrnd-lite);
}
#contact-form > input,textarea{
    width: 100%;
}
form input{
    margin-bottom:2px;
    
}
form + #contact-form-status{
    visibility: hidden;
    color:#38a067;
}
form + #contact-form-status.show {
visibility: visible; /* Show the snackbar */
/* Add animation: Take 0.5 seconds to fade in and out the snackbar.
However, delay the fade out process for 2.5 seconds */
-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
form #message{
    min-height:200px;
}
form button{
    margin-top:5px;
}
.verif{
    font-size: xx-small;
    color:red;
}
`
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
        <ContactStyle>
            <h3>Contact</h3>
    
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
      </ContactStyle>
    );
  }