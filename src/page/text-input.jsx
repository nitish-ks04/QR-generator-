import QRCode from 'react-qr-code';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import "../css/text-input.css"
import axios from "../api/axios"

function Textinput() {
    const { register, handleSubmit } = useForm();
    const [qrdata, setqrdata] = useState("");

    const onSubmit = async (data) => {
        const formatted = `Name: ${data.name}\nAge: ${data.age}\nLinkedIn: ${data.linkden}\nGitHub: ${data.git}`;
        setqrdata(formatted);
        try {
            await axios.post("/api/textqr", {
                name: data.name,
                age: data.age,
                linkdin: data.linkdin,
                git: data.git,
                qrdata: formatted
            })
            alert("stored in text")
        } catch (error) {
            alert("failed to save the qr", error);
        }

    }

    return (
        <div className='text-home'>
            <form onSubmit={handleSubmit(onSubmit)} className='text-form'>
                <h2>Enter the detail that you want display</h2>
                <input {...register("name")} placeholder='Enter Your Name' />
                <input {...register("age")} placeholder='Enter Your Age' />
                <input {...register("linkdin")} placeholder='Enter Your Linkedin link' />
                <input {...register("git")} placeholder='Enter Your github link' />
                <button type='submit'> Generate QR</button>
                {qrdata && (
                    <div className='text-qr'>
                        <QRCode value={qrdata} />
                    </div>
                )}
            </form>
        </div>
    )
}

export default Textinput