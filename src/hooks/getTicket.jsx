import React, { useEffect, useState } from "react";

export const getTicket = (url) => {
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
        setTicket(json);
        setisPending(false);
        setError({ err: false });
      } catch (err) {
        setisPending(true);
        setError(err);
      }
    };

    getUser(url);
  }, [url]);

  return { ticket, isPending, error };
}
