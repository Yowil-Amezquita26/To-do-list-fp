import { useState, useEffect } from "react";

export const verifyUser = (url) => {
  const [verify, setVerify] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  const storage = window.localStorage;
  useEffect(() => {
    const verifyUser = async (url) => {
      try {
        let res = await fetch(url);
        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };
        }
        let json = await res.json();
        console.log(json.userDB.email);
        storage.setItem("UserEmail", json.userDB.email);
        setVerify(json);
        setisPending(false);
        setError({ err: false });
      } catch (err) {
        setisPending(true);
        setError(err);
      }
    };

    verifyUser(url);
  }, [url]);

  return { verify, isPending, error};
};