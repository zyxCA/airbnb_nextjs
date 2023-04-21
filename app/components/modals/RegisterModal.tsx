"use client"
import axios from "axios"
import { useCallback, useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/Fc"
import useRegisterModal from "@/app/hooks/useRegisterModal"
import { FieldValues, SubmitHandler, set, useForm } from "react-hook-form"
import { Modak } from "next/font/google"
import Modal from "./Modal"
import Heading from "../Heading"

import Input from "../inputs/Input"
import { toast } from "react-hot-toast"
import Button from "../Button"
const RegisterModal = () => {
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose()
      })
      .catch((error) => {
        toast.error("Something Went Wrong")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" center />
      <Input
        register={register}
        errors={errors}
        // formatPrice
        id="email"
        label="Email"
        disabled={isLoading}
        required
      />
      <Input
        register={register}
        errors={errors}
        // formatPrice
        id="name"
        label="Name"
        disabled={isLoading}
        required
      />
      <Input
        register={register}
        errors={errors}
        // formatPrice
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className=" text-neutral-500  mt-4 font-light">
        <div className="flex flex-row gap-4 justify-center items-center">
          <div>Already have an account?</div>
          <div className="text-neutral-800 hover:underline cursor-pointer">
            Log in
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal
