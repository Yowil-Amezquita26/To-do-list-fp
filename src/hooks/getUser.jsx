import { useState, useEffect } from "react";

export const getUser = (url) => {
  const [logUser, setlogUser] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState();
  const [refresh, setRefresh] = useState(false);
  const storage = window.localStorage;
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
        storage.setItem("UserId", json.userDB._id);
        storage.setItem("UserEmail", json.userDB.email);
        setlogUser(json);
        setisPending(false);
        setError({ err: false });
        setTasks(json.userDB.tickets);
        setRefresh(false);
      } catch (err) {
        setisPending(true);
        setError(err);
      }
    };

    User(url);
  }, [url, refresh]);

  return { logUser, isPending, error, tasks, setRefresh };
};
