import React, { useId, useState } from 'react'

interface InputType {
    value: string,
    inputChange: (val: any) => any;
    className?: string;
    placeHolder?: string;
    type ?: string;
    label : string;
}

function Input(
    {
        value,
        inputChange,
        type = "text",
        className,
        placeHolder,
        label,
        ...props
    }: InputType
) {
    const [show, setShow] = useState<boolean>(false)
    const [inputType, setInputType] = useState(type)
    const id = useId()
    function changeType () {
        if(show) setInputType("password");
        else if(!show) setInputType("text")
        setShow(!show)
    }

  return (
    <div className='relative'>
        <label htmlFor={id} className="ml-1 text-white">{label}</label>
        <input placeholder={placeHolder} name={id} type={inputType} className={`mt-2 placeholder:text-lg p-2 w-full ${className}`} onInput={inputChange} value={value} {...props} />
        {
            type === "password" && <button onClick={changeType} className='text-white absolute bottom-1 right-3 text-2xl'><i className={show ? "ri-eye-line" : "ri-eye-close-line"}></i></button>
        }
    </div>
  )
}

export default Input