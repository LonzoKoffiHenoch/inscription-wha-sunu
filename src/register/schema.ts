import {z, ZodType} from "zod";
import {RegisterDto} from "@/register/types.ts";

export const RegisterSchema: ZodType<RegisterDto> = z.object({
    email: z.string(),
    civility: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    birthday: z.string(),
    countryOfResidence: z.string(),
    profession: z.string(),
    phoneNumber: z.string(),
});