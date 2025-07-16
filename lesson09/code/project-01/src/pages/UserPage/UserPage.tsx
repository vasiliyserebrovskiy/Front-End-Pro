import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../../types";

export const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [message, setMessage] = useState<string>("");
  async function fetchUserById(id: string | undefined) {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch user with status " + res.status);
      }
      const userRes = await res.json();
      setUser(userRes);
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      }
    }
  }

  useEffect(() => {
    fetchUserById(id);
  }, [id]);
  return (
    <div>
      <h2>User information</h2>
      {message ? (
        <div>{message}</div>
      ) : (
        <>
          <p>{user?.name}</p>
          <img src={user?.avatar} alt="avatar" />
        </>
      )}
    </div>
  );
};
