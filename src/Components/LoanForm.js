import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoanForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const formattedData = {
            Applicant: {
                FirstName: data.FirstName,
                LastName: data.LastName,
                Email: data.Email,
                Phone: data.Phone,
            },
            PersonalLoan: {
                LoanAmount: data.LoanAmount,
                LoanPurpose: data.LoanPurpose,
            },
            EmploymentInformation: {
                JobTitle: data.JobTitle,
                Income: data.Income,
                YearsEmployed: data.YearsEmployed,
            },
        };

        axios
            .post("http://localhost:5121/applicants", data)
            .then((response) => console.log(response))
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    };

    return (
        <>
            <div className="max-w-xl mx-auto">
                <header id="header" className="relative z-20">
                    <div>
                        <p className="mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
                            eForms
                        </p>
                        <div className="flex items-center">
                            <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                                Simple Loans Forms
                            </h1>
                        </div>
                    </div>
                    <p className="my-2 text-xs text-slate-700 dark:text-slate-400">
                        Using .NET 6 Web API With Dapper / React, Axios
                    </p>
                </header>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-6">
                            <label className="block">
                                <span className="text-gray-700">
                                    名字:
                                </span>
                                <input
                                    className="mt-1 block w-full h-7 rounded-md border-gray-300"
                                    type="text"
                                    {...register("FirstName", {
                                        required: true,
                                    })}
                                />
                                {errors.FirstName && (
                                    <p className="text-red-500">此欄位為必填</p>
                                )}
                            </label>
                        </div>
                        <div className="col-span-6">
                            <label className="block">
                                <span className="text-gray-700">
                                    姓:
                                </span>
                                <input
                                    className="mt-1 block w-full h-7 rounded-md border-gray-300"
                                    type="text"
                                    {...register("LastName", {
                                        required: true,
                                    })}
                                />
                                {errors.LastName && (
                                    <p className="text-red-500">此欄位為必填</p>
                                )}
                            </label>
                        </div>
                        <div className="col-span-12">
                            <label className="block">
                                <span className="text-gray-700">電話:</span>
                                <input
                                    className="mt-1 block w-full h-7 rounded-md border-gray-300"
                                    type="tel"
                                    {...register("Phone", {
                                        required: true,
                                    })}
                                />
                                {errors.Phone && (
                                    <p className="text-red-500">此欄位為必填</p>
                                )}
                            </label>
                        </div>
                        <div className="col-span-12">
                            <label className="block">
                                <span className="text-gray-700">電子郵件:</span>
                                <input
                                    className="mt-1 block w-full h-7 rounded-md border-gray-300"
                                    type="email"
                                    {...register("Email", {
                                        required: true,
                                    })}
                                />
                                {errors.Email && (
                                    <p className="text-red-500">此欄位為必填</p>
                                )}
                            </label>
                        </div>
                        <div className="col-span-6">
                            <label className="block">
                                <span className="text-gray-700">
                                    職稱:
                                </span>
                                <input
                                    className="mt-1 block w-full h-7 rounded-md border-gray-300"
                                    type="text"
                                    {...register("JobTitle", {
                                        required: false,
                                    })}
                                />
                            </label>
                        </div>
                        <div className="col-span-6">
                            <label className="block">
                                <span className="text-gray-700">
                                    年資:
                                </span>
                                <input
                                    className="mt-1 block w-full h-7 rounded-md border-gray-300"
                                    type="number"
                                    {...register("YearsEmployed", {
                                        required: true,
                                    })}
                                />
                                {errors.YearsEmployed && (
                                    <p className="text-red-500">此欄位為必填</p>
                                )}
                            </label>
                        </div>
                        <div className="col-span-12">
                            <label className="block">
                                <span className="text-gray-700">收入:</span>
                            </label>
                            <div className="relative">
                                <div className="absolute px-2.5 text-gray-500 line-height[1.5]">
                                    $
                                </div>
                                <div className="absolute right-0 px-2.5 text-gray-500 line-height[1.5]">
                                    NTD
                                </div>
                                <input
                                    className="block w-full rounded-md border-gray-300 h-7 px-8 line-height[1.5] shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                    type="number"
                                    placeholder="0"
                                    {...register("Income", {
                                        required: true,
                                    })}
                                />
                                {errors.Income && (
                                    <p className="text-red-500">此欄位為必填</p>
                                )}
                            </div>
                        </div>
                        <div className="col-span-12">
                            <label className="block">
                                <span className="text-gray-700">
                                    借貸金額:
                                </span>
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">
                                    $
                                </div>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-500">
                                    NTD
                                </div>
                                <input
                                    type="number"
                                    className="block w-full rounded-md border-gray-300 h-7 px-8 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                    placeholder="0"
                                    {...register("LoanAmount", {
                                        required: true,
                                    })}
                                />
                            </div>
                        </div>
                        <div className="col-span-12">
                            <label className="block">
                                <span className="text-gray-700">
                                    借貸目的:
                                </span>
                                <textarea
                                    className="mt-1 block w-full rounded-md border-gray-300"
                                    type="text"
                                    {...register("LoanPurpose", {
                                        required: true,
                                    })}
                                />
                                {errors.LoanPurpose && (
                                    <p className="text-red-500">此欄位為必填</p>
                                )}
                            </label>
                        </div>
                        <div className="col-span-12">
                            <button
                                type="submit"
                                className="float-right mt-2 px-4 py-1 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoanForm;
