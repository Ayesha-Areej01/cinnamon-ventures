'use client';
import React from 'react';
import * as Form from '@radix-ui/react-form';
import Link from 'next/link';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
const Contact = () => (
    <>
<section className='bg-slate-100 grainy-dark py-24'>
      <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
      <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className='mt-0 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
              Contact Us 📞
            </h2>
  <Form.Root className="w-[260px] items-baseline">
    <Form.Field className="grid mb-[10px]" name="email">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] leading-[35px] text-blck font-semibold">Your Email</Form.Label>
        <Form.Message className="text-[13px] text-red-600 opacity-[0.8]" match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className="text-[13px] text-red-600 opacity-[0.8]" match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-slate-300 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-green-700 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-black"
          type="email"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="question">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-semibold leading-[35px] text-black">
          Comment
        </Form.Label>
        <Form.Message className="text-[13px] text-red-600 opacity-[0.8]" match="valueMissing">
          Please enter a question
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea
          className="box-border w-full bg-slate-300 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-green-800 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <button className="box-border w-full text-black shadow-black hover:bg-green-600 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-300 px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
        Post question
      </button>
    </Form.Submit>
  </Form.Root>
  </div>
  <div className="">
  <h6 className='mt-0 tracking-tight text-center text-balance !leading-tight font-bold text-2xl md:text-3xl text-green-900'>
              Our Social Prescence
            </h6>
  <div className="flex  flex-row mx-24 mt-4">
    <Link href="https://www.instagram.com/cinnamonssoaps/" className="flex items-center mr-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    </Link>

    <Link href="https://www.linkedin.com/in/ayesha-aay-0a6a46289/" className="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    </Link>
    </div>
  </div>



</MaxWidthWrapper>
</section>
  </>
);

export default Contact;
