import {SubmitHandler, useForm} from "react-hook-form";
import {RegisterDto} from "@/register/types.ts";
import {RegisterSchema} from "@/register/schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {InputField} from "@/core/components/ui/input-field.tsx";
import {Button} from "@/core/components/ui/button";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/core/components/ui/select";
import {Label} from "@/core/components/ui/label.tsx";
import Logo from "@/core/assets/logo-white-background.png"

export const RegisterPage = () => {
    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm<RegisterDto>({resolver: zodResolver(RegisterSchema)});

    const handleRegisterUser: SubmitHandler<RegisterDto> = () => {


    }

    return (
        <div className={"w-full md:max-w-[50rem] "}>
            <div className={"md:border border-third/10 px-8 py-6 rounded-md md:shadow  w-full"}>
                <div className={"flex flex-col items-center justify-center mb-4"}>
                    <img src={Logo} alt="" className={"w-28"}/>
                    <h4 className={"text-2xl font-bold text-third"}>Creation de compte</h4>
                </div>
                <form onSubmit={handleSubmit(handleRegisterUser)} className={"space-y-4"}>


                    <div className={"grid grid-cols-1 gap-4 md:grid-cols-2"}>
                        <InputField
                            labelText="Entrez le nom *"
                            fieldRegister={register("firstName")}
                            type="email"
                            error={errors.firstName?.message}
                        />
                        <InputField
                            labelText="Entrez le prenom *"
                            fieldRegister={register("lastName")}
                            type="email"
                            error={errors.lastName?.message}
                        />
                        <InputField
                            labelText="Date de naissance *"
                            fieldRegister={register("birthday")}
                            type="date"
                            error={errors.birthday?.message}
                        />
                        <div className={'flex flex-col '}>
                            <Label className="text-left text-gray-600 text-xs text-wrap"
                                   htmlFor={"countryOfResidence"}>
                                Pays de résidence
                            </Label>
                            <Select {...register('countryOfResidence')}>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Selectionnez un pays"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {/*<SelectLabel>Fruits</SelectLabel>*/}
                                        <SelectItem value="m">CIV</SelectItem>
                                        <SelectItem value="mme">TGO</SelectItem>
                                        <SelectItem value="mlle">GAB</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <InputField
                            labelText="Profession *"
                            fieldRegister={register("profession")}
                            error={errors.profession?.message}
                        />
                        <div className={'flex flex-col '}>
                            <Label className="text-left text-gray-600 text-xs text-wrap"
                                   htmlFor={"civility"}>
                                Civilité
                            </Label>
                            <Select {...register('civility')}>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Selectionnez une civilité"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {/*<SelectLabel>Fruits</SelectLabel>*/}
                                        <SelectItem value="m">M.</SelectItem>
                                        <SelectItem value="mme">Mme</SelectItem>
                                        <SelectItem value="mlle">Mlle</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <InputField
                            labelText="Email *"
                            fieldRegister={register("email")}
                            type="email"
                            error={errors.email?.message}
                        />
                        <InputField
                            labelText="Numero de Téléphone *"
                            fieldRegister={register("phoneNumber")}
                            error={errors.phoneNumber?.message}
                        />

                    </div>

                    <div className={"flex flex-col items-center justify-center mb-4 w-full"}>
                        <Button size={"lg"}>Créer un compte</Button>
                    </div>
                </form>
            </div>

        </div>
    )
}