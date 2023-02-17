import { useState, useEffect } from "react";

export const getUser = (url) => {
  const [logUser, setlogUser] = useState();
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const User = async (url) => {
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
        localStorage.setItem("UserId", json.userDB._id);
        setlogUser(json);
        setisPending(false);
        setError({ err: false });
      } catch (err) {
        setisPending(true);
        setError(err);
      }
    };

    User(url);
  }, [url]);

  return { logUser, isPending, error };
};
