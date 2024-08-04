import React from "react";

interface SelectType {
    options : string[],
    className ?: string,
    defaultSelect ?: string,
    changeFunction: (val: string) => any
}

function Select({
    options,
    className,
    defaultSelect,
    changeFunction
}: SelectType) {

	return (
        <div>
            <select onChange={(e) => changeFunction(e.target.value)} className={`${className}`} defaultValue={defaultSelect}>
                {
                    options.map((item) => <option key={item}>
                        {item}
                    </option>)
                }
            </select>
        </div>
    )
}

export default Select;
