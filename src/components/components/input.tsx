import React, { useState } from 'react'

interface InputType {
    value: string,
    inputChange: (val: any) => any;
    className?: string;
    placeHolder?: string
    type ?: string
}

function Input(
    {
        value,
        inputChange,
        type = "text",
        className,
        placeHolder,
        ...props
    }: InputType
) {
    const [show, setShow] = useState<boolean>(false)
    const [inputType, setInputType] = useState(type)
    function changeType () {
        if(show) setInputType("password");
        else if(!show) setInputType("text")
        setShow(!show)
    }

  return (
    <div className='relative w-4/5 flex items-center'>
        <input placeholder={placeHolder} type={inputType} className={`flex-1 ${className}`} onInput={inputChange} value={value} {...props} />
        {
            type === "password" && <button onClick={changeType} className='absolute top-4 right-4 text-3xl'><i className={show ? "ri-eye-line" : "ri-eye-close-line"}></i></button>
        }
    </div>
  )
}

export default Input