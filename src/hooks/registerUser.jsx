import { useState, useEffect } from "react";

export const registerUser = () => {
//   const [user, setUser] = useState(null);
const [register, setRegister] = useState({
  _id: null ,
  name: null,
  last_name: null,
  password: null,
  email: null,
  signUpDate: null,
  ticket: 
    {
      not_done: [
        {
          title: null,
          desciption: null,
          status: null,
        },
      ],

      doing: [
        {
          title: null,
          desciption: null,
          status: null,
        },
      ],
      done: [
        {
          title: null,
          desciption: null,
          status: null,
        },
      ],
    },
})
  const {user, isAuthenticated} = useAuth0()
  if (isAuthenticated) {
      useEffect(() => {
        console.log(user);
    
        registerUser(user);
      }, [user]);
    
  }

  return { user, isPending, error };
};
