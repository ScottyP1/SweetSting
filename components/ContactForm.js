'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import MessageOverlay from './MessageOverlay'; // Assuming you have a MessageOverlay component

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [disabled, setDisabled] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        message: '',
        type: '',
    });

    // Function to prevent window scroll
    const preventScroll = (event) => {
        event.preventDefault();
        const element = document.getElementById(event.target.id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const toggleAlert = (message, type) => {
        setAlertInfo({ message, type });
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
            setAlertInfo({ message: '', type: '' });
        }, 5000);
    };

    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        try {
            setDisabled(true);

            const templateParams = {
                name,
                email,
                subject,
                message,
            };

            await emailjs.send(
                'service_iqx51xt',
                'template_oo1tkhk',
                templateParams,
                'r0066Wy1OPF7yKf5W'
            );

            toggleAlert('Message Sent, We\'ll get back to you soon.', 'success');
        } catch (e) {
            console.error(e);
            toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
            setDisabled(false);
            reset();
        }
    };

    const closeAlert = () => {
        setShowAlert(false);
        setAlertInfo({ message: '', type: '' });
    };

    return (
        <div className="flex justify-center items-center mt-12 lg:mt-30 xl:mt-30">
            <div className="container border-2 border-[#CDF5EC] bg-[#CDF5EC]/[.3] rounded-lg p-6 w-80 xl:w-1/2 text-white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-1">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="form-control text-white"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                            {...register('name', { required: 'Name is required' })}
                            onFocus={preventScroll} // Prevent window scroll on focus
                        />
                        {errors.name && <span className="text-danger">{errors.name.message}</span>}
                    </div>

                    <div className="mb-1">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="form-control text-white"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                            {...register('email', { required: 'Email is required' })}
                            onFocus={preventScroll} // Prevent window scroll on focus
                        />
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </div>

                    <div className="mb-1">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input
                            id="subject"
                            type="text"
                            className="form-control text-white"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                            {...register('subject', { required: 'Subject is required' })}
                            onFocus={preventScroll} // Prevent window scroll on focus
                        />
                        {errors.subject && <span className="text-danger">{errors.subject.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            id="message"
                            className="form-control text-white"
                            rows="4"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                            {...register('message', { required: 'Message is required' })}
                            onFocus={preventScroll} // Prevent window scroll on focus
                        ></textarea>
                        {errors.message && <span className="text-danger">{errors.message.message}</span>}
                    </div>

                    <div className="d-grid gap-2">
                        <button type="submit" className="bg-[#CDF5EC] hover:bg-[#CDF5EC]/[.7] text-black p-2 rounded-lg " disabled={disabled}>Submit</button>
                    </div>

                    {showAlert && (
                        <MessageOverlay
                            message={alertInfo.message}
                            type={alertInfo.type}
                            onClose={closeAlert}
                        />
                    )}
                </form>
            </div>
        </div>
    );
}
