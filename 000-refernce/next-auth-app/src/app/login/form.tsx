"use client";

import { CounterContext } from "@/context/Auth";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";


export const LoginForm = ({ access }: any) => {
  console.log(access)
  const router = useRouter();
  const { data: session } = useSession();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { id, password } = e.target as typeof e.target & {
        id: { value: string },
        password: { value: string },
      }

      // const res = await signIn("credentials", {
      const res = await signIn("login-id-pwd", {
        redirect: false,
        id: id.value,
        password: password.value,
        callbackUrl: '/',
      });

      console.log(res);

      if (res?.ok) {
        router.push(res.url as string)
      }
    } catch {
      console.log('error')
    }
  };

  const onSubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    // const onSubmitHandle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const { id, password } = e.target as typeof e.target & {
        id: { value: string },
        password: { value: string },
      }

      console.log('first')

      // const queryString = new URLSearchParams({ id: id.value, password: password.value }).toString();
      // const queryString = 'id=1312312';
      // const res = await fetch(`/api/auth?${queryString}`);
      // const res = await fetch(`/api/auth`);
      const res = await fetch('/api/auth', { method: 'POST', body: JSON.stringify({ id: id.value, password: password.value }) })

      const data = await res.json();
      console.log(data)
    } catch {

      console.log('error')
    }
  };


  const onClick = async () => {
    const res = await fetch(`/api/auth`);
    const data = await res.json();
    console.log(data)
  }


  return (
    // <form onSubmit={onSubmit}>
    <div>
      <form onSubmit={onSubmitHandle}>
        <label>
          이메일 :
          <input type="id" name="id" placeholder="test" />
        </label>
        <label>
          비밀번호 :
          <input type="password" name="password" />
        </label>
        <button type="submit">submit</button>
      </form>

      <br />
      <button onClick={onClick}>submit</button>
    </div>
  );
};
