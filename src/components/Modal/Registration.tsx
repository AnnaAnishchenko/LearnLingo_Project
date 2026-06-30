//src/components/Modal/Registration.tsx

import { useState } from "react";

import { registerUser } from "../../services/auth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registrationSchema } from "../../validation/registrationSchema";

import css from "./Modal.module.css";

interface RegistrationForm {
  name: string;
  email: string;
  password: string;
}

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationForm) => {
    try {
      await registerUser(data.email, data.password);

      alert("Registration success");
    } catch (error) {
      console.log(error);
    }
  };

  // const onSubmit = async (data: RegistrationForm) => {
  //   console.log(data);
  // };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Registration</h2>

      <p className={css.description}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          // type="name"
          type="text"
          placeholder="Name"
          className={css.input}
          {...register("name")}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email"
          className={css.input}
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <div className={css.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={css.input}
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <button
            type="button"
            className={css.eyeButton}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label="Show password"
          >
            <svg width="20" height="20">
              <use
                href={
                  showPassword
                    ? "/icons.svg#icon-eye"
                    : "/icons.svg#icon-eye-off"
                }
              />
            </svg>
          </button>
        </div>

        <button type="submit" className={css.logInButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
