import React, { useState } from 'react'
import logo from "../../Images/logo.png"
import axios from "../../Axios/Axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

function AdLogin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        console.log(formData);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('users/signup',
                {
                    email: formData.email,
                    password: formData.password,
                },
                {
                    headers: {
                    },
                }
                  );

              
                
            console.log(res);
            if (res.status == 200) {
                const token = res.data.token;
                localStorage.setItem('tpt_token', token);
                setFormData({
                    email: "",
                    password: "",
                })
                toast.success("User created successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setTimeout(() => {
                    navigate("/admin")
                }, [1000])

            }
        }
        catch (err) {
            if (err.response && err.response.status === 403) {
                toast.error("User already exists. Please choose a different email.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } 
            if (err.response && err.response.status === 500) {
                toast.error("Unexpected Error Occured", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }


            else {
                toast.error('Please try again after some time.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        }

    }


    return (
        <div>
            <ToastContainer />
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to={"/"} class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="h-32 " src={logo} alt="logo" />
                    </Link>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-sans  font-thin leading-tight  text-gray-900 md:text-2xl dark:text-white">
                                Admin Login
                            </h1>
                            <form onSubmit={handleSubmitSignUp} class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 font-sans font-normal text-gray-900 dark:text-white">Your email</label>
                                    <input onChange={handleChange} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 font-sans font-normal text-gray-900 dark:text-white">Password</label>
                                    <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                
                                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdLogin