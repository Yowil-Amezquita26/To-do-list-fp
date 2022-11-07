import { useState, useEffect } from "react";

export const getUser = (url) => {
  const [user, setUser] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  const [ticket, setTicket] = useState(null);
  useEffect(() => {
    const getUser = async (url) => {
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
        setUser(json);
        setisPending(false);
        setError({ err: false });
      } catch (err) {
        setisPending(true);
        setError(err);
      }
    };

    getUser(url);
  }, [url]);

  return { user, isPending, error };
};
