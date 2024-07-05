"use client"

import LandingIntro from '@/features/login/landing-intro';
import InputText from '@/components/input/input-text';
import ErrorText from '@/components/typography/error-text';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthProvider';

interface LoginObj {
  otp: string;
  emailId: string;
}


function Login(): JSX.Element {

  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showLoginPage, setShowLoginPage] = useState<boolean>(true);
  const [isOtpSent, setIsOtpSent] = useState(false)
  const { login } = useAuth()

  const [loginObj, setLoginObj] = useState<LoginObj>({
    otp: '',
    emailId: '',
  });
  

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setErrorMessage('');
    if(loading)return;
    if(isOtpSent){
        submitVerificationCode()
    }else{
        sendMailOtp()
    }
  };

  const sendMailOtp = () => {
      if (loginObj.emailId.trim() === '') {
        setErrorMessage('Email Id is required! (use any value)');
        return;
      }else{
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
              setIsOtpSent(true)
              setLoading(false);
        }, 1000);
      }
  }

  const submitVerificationCode = () => {
      if (loginObj.otp.trim() === '') {
        setErrorMessage('OTP is required! (use any value)');
        return;
      }else{
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
          loginUser({token : "asdsadsddsad$$token"})
        }, 2000);
      }
  }


  const loginUser = async({ token }: { token: string;}) => {
    await login(token)
  };

  const updateFormValue = (updateType: string, value: string): void => {
    setErrorMessage('');
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div>
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">

              {
                    !isOtpSent && 
                    <>
                        <p className='text-center text-lg   md:mt-0 mt-6 mb-12  font-semibold'>Enter Email ID to Continue</p>

                        <InputText
                          type="email"
                          defaultValue={loginObj.emailId}
                          updateType="emailId"
                          containerStyle="mt-4"
                          labelTitle="Enter your Email Id"
                          placeholder="Ex - dashwind@gmail.com"
                          updateFormValue={updateFormValue}
                        />
                    </>
              }

              {
                                isOtpSent && <>
                                
                    <p className='text-center text-lg   md:mt-0 mt-6   font-semibold'>Enter verification code received on {loginObj.emailId}</p>
                    <p className="text-center text-slate-500 mt-2 text-sm">Didn&apos;t receive mail? Check spam folder</p>
                    
                    <InputText
                        type="number"
                        defaultValue={loginObj.otp}
                        updateType="otp"
                        containerStyle="mt-4"
                        labelTitle="Verification Code"
                        placeholder="Ex- 1234"
                        updateFormValue={updateFormValue}
                      />
                    </>
                }

                
                
              </div>
              
              <div className='mt-8'>
                  {errorMessage && <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>}
                  <button type="submit" className={`btn mt-2 w-full btn-primary`}>
                    {loading && <span className="loading loading-spinner"></span>}{isOtpSent ? "Verify" : "Get Verification Code" }
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
