import {FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn} from "react-hook-form";
import React, {HTMLInputTypeAttribute} from "react";
import {Input} from "@/core/components/ui/input.tsx";
import {Label} from "@/core/components/ui/label.tsx";
import {cn} from "@/core/lib/utils.ts";

interface FormFieldProps
    extends React.HTMLAttributes<HTMLInputElement> {
    labelText: string;
    fieldRegister: UseFormRegisterReturn;
    error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<never>>;
    type?: HTMLInputTypeAttribute;
    disabled?: boolean;
    value?: string | number | readonly string[] | undefined;
}

export function InputField(props: FormFieldProps) {
    const
        {
            labelText, fieldRegister,
            error, type, disabled, className,
            ...restProps
        } = props;
    return (
        <div className={cn("flex flex-col mb-2 w-full gap-1", className)}>
            <Label className="text-left text-gray-600 text-xs text-wrap"
                   htmlFor={fieldRegister.name}>
                {labelText}
            </Label>
            <Input
                type={type ?? "text"}
                className={"-mt-1"}
                value={props.value}
                disabled={disabled}

                {...restProps}
                {...fieldRegister}
            />
            {error && <div className="text-red-500 text-xs transition duration-500 ">{"* " + error.toString()}</div>}
        </div>
    );
}