import { LoginForm } from "./form";

import { cookies } from 'next/headers';


// async function create() {
//   cookies().set('name', 'lee');
//   // or
//   cookies().set('name', 'lee', { secure: true });
//   // or
//   cookies().set({
//     name: 'name',
//     value: 'lee',
//     httpOnly: true,
//     path: '/',
//   });
// }

export default async function LoginPage() {
  const cookieStore = cookies();

  const access = cookieStore.get('access');
  console.log('login/page', access);

  return (
    <div>
      {/* {name} */}
      <LoginForm access={access}/>
    </div>
  );
}
