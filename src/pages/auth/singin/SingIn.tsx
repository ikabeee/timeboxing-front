
import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import IUser from "../../../interfaces/IUser";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
    const {register, handleSubmit, formState: {errors}}=useForm<IUser>();
    const onSubmit: SubmitHandler<IUser> = data =>console.log(data)
    return (
        <>
            <section className="grid text-center min-h-screen items-center p-8">
            <div className="py-20 w-1/2 rounded-lg shadow-2xl border bg-white mx-auto my-auto">
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        Inicia sesión
                    </Typography>
                    <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                        Ingresa tu correo y contraseña para ingresar
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} action="#" className="mx-auto max-w-[24rem] text-left">
                        <div className="mb-6">
                            <label htmlFor="email">
                                <Typography
                                    variant="small"
                                    className="mb-2 block font-medium text-gray-900"
                                >
                                    Tu correo
                                </Typography>
                            </label>
                            <Input
                                id="email"
                                color="gray"
                                size="lg"
                                type="email" {...register("email", {required: true})}
                                name="email"
                                placeholder="name@mail.com"
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                             {errors.email && (<span className="text-danger">Ingresa un correo</span>)}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password">
                                <Typography
                                    variant="small"
                                    className="mb-2 block font-medium text-gray-900"
                                >
                                    Contraseña
                                </Typography>
                            </label>
                            <Input
                                size="lg"
                                placeholder="********"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                type={passwordShown ? "text" : "password"} {...register("password", {required: true})}
                                icon={
                                    <i onClick={togglePasswordVisiblity}>
                                        {passwordShown ? (
                                            <EyeIcon className="h-5 w-5" />
                                        ) : (
                                            <EyeSlashIcon className="h-5 w-5" />
                                        )}
                                    </i>
                                }
                            />
                            {errors.password && (<span className="text-danger">Ingresa una contraseña</span>)}
                        </div>
                        <Button type="submit" color="gray" size="lg" className="mt-6" fullWidth>
                            sign in
                        </Button>
                        <div className="!mt-4 flex justify-end">
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                variant="small"
                                className="font-medium"
                            >
                                Forgot password
                            </Typography>
                        </div>
                        <Button
                            variant="outlined"
                            size="lg"
                            className="mt-6 flex h-12 items-center justify-center gap-2"
                            fullWidth
                        >
                            <img
                                src={`https://www.material-tailwind.com/logos/logo-google.png`}
                                alt="google"
                                className="h-6 w-6"
                            />{" "}
                            sign in with google
                        </Button>
                        <Typography
                            variant="small"
                            color="gray"
                            className="!mt-4 text-center font-normal"
                        >
                            Not registered?{" "}
                            <Link to="/signUp" className="font-medium text-gray-900">
                                Create account
                            </Link>
                        </Typography>
                    </form>
                </div>
            </section>

        </>

    )
}
export default SignIn;