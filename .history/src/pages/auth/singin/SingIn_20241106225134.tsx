
import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
const SignIn = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    return (
        <>
            <section className="grid text-center h-screen items-center p-8">
                <div>
                    <Typography variant="h3" color="blue-gray" className="mb-2" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Sign In
                    </Typography>
                    <Typography className="mb-16 text-gray-600 font-normal text-[18px]" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Enter your email and password to sign in
                    </Typography>
                    <form action="#" className="mx-auto max-w-[24rem] text-left">
                        <div className="mb-6">
                            <label htmlFor="email">
                                <Typography
                                    variant="small"
                                    className="mb-2 block font-medium text-gray-900" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                                >
                                    Your Email
                                </Typography>
                            </label>
                            <Input
                                id="email"
                                color="gray"
                                size="lg"
                                type="email"
                                name="email"
                                placeholder="name@mail.com"
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                labelProps={{
                                    className: "hidden",
                                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password">
                                <Typography
                                    variant="small"
                                    className="mb-2 block font-medium text-gray-900" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                                >
                                    Password
                                </Typography>
                            </label>
                            <Input
                                size="lg"
                                placeholder="********"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                type={passwordShown ? "text" : "password"}
                                icon={<i onClick={togglePasswordVisiblity}>
                                    {passwordShown ? (
                                        <EyeIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    )}
                                </i>} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}                            />
                        </div>
                        <Button color="gray" size="lg" className="mt-6" fullWidth children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            sign in
                        </Button>
                        <div className="!mt-4 flex justify-end">
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                variant="small"
                                className="font-medium" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                            >
                                Forgot password
                            </Typography>
                        </div>
                        <Button
                            variant="outlined"
                            size="lg"
                            className="mt-6 flex h-12 items-center justify-center gap-2"
                            fullWidth children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
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
                            className="!mt-4 text-center font-normal" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            Not registered?{" "}
                            <a href="#" className="font-medium text-gray-900">
                                Create account
                            </a>
                        </Typography>
                    </form>
                </div>
            </section>
        </>

    )
}
export default SignIn;