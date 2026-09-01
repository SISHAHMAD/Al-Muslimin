import React from 'react'
import RegisterForm from './RegisterForm'
import { supabase } from "../../utils/supabase";

function ResetPassword() {
    const handleResetPassword = async (e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const { error } = await supabase.auth.resetPasswordForEmail(
            email,
            { redirectTo: `${window.location.origin}/login?reset=true`, }
        );
        if (error) {
            alert(error.message);
            return;
        }
        alert("Password reset email sent. Please check your inbox.");
        e.currentTarget.reset();
        form.reset(); navigate("/login"); return;
    };
    return (
        <div className='w-full  flex justify-center items-center m-5x'>
            <div className='w-90 m-10 max-w-md p-10 space-y-3 rounded-xl text-gray-800'>
                <h1 className='text-2xl font-bold text-center'>Reset Password</h1>
                <p className='text-sm text-center text-gray-600'>Enter your email to reset your password</p>
                <form className='space-y-6 ng-untouched ng-pristine ng-valid'
                    onSubmit={handleResetPassword}
                >
                    <div className='space-y-1 text-md  border border-black '>
                        <input type='email' name='email' id='email' required placeholder='Enter your email' className='w-full px-4 py-3  rounded-md text-gray-700 focus:border-violet-400' />
                    </div>
                    <button className='block w-full p-3 mt-4 text-center rounded-md text-gray-50 bg-violet-400' type='submit'>Reset Password</button>
                </form>
            </div>
        </div>
    )

}
export default ResetPassword