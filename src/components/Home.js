import React from "react";
import { useForm } from "react-hook-form"
import styles from './style.module.css'
export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const formSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="page" >
      <form onSubmit={handleSubmit(formSubmit)}>
        <input className={styles['form-control']} {...register("firstName", { required: true, maxLength: 6 })} />
        <div className={styles.error}>
        {errors.firstName?.type === 'required' && "Họ không để trống"}
        {errors.firstName?.type === 'maxLength' && "Họ nhiều nhất 6 ký tự"}
        </div>
  
        <input type="submit" className={styles.button}/>
      </form>
    </div>
  );
}


