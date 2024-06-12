'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
    });

    const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });

        setTimeout(() => {
            setAlertInfo({ display: false, message: '', type: '' });
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

            toggleAlert('Message Sent, Well get back to you soon.', 'success');
        } catch (e) {
            console.error(e);
            toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
            setDisabled(false);
            reset();
        }
    };

    return (
        <div className="flex justify-center items-center mt-1 lg:mt-30 xl:mt-30">
            <div className="container border-2 border-[#CDF5EC] bg-[#CDF5EC]/[.3] rounded-lg p-6 w-80 xl:w-1/2 text-white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-1">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="form-control text-white "
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <span className="text-danger">{errors.name.message}</span>}
                    </div>

                    <div className="mb-1">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="form-control text-white "
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                            {...register('email', { required: 'Email is required' })}
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
                        ></textarea>
                        {errors.message && <span className="text-danger">{errors.message.message}</span>}
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="bg-[#CDF5EC] hover:bg-[#CDF5EC]/[.7] text-black p-2 rounded-lg " disabled={disabled}>Submit</button>
                    </div>
                </form>

                {alertInfo.display && (
                    <div className={`alert alert-${alertInfo.type} alert-dismissible mt-5`} role="alert">
                        {alertInfo.message}
                        <button
                            type="button"
                            className="btn-close "
                            data-bs-dismiss="alert"
                            aria-label="Close"
                            onClick={() => setAlertInfo({ display: false, message: '', type: '' })}
                        ></button>
                    </div>
                )}
            </div>
        </div>
    );
}
