import { Link } from "react-router-dom";
import useUsers from "../../hooks/useUsers";

export default function UsersList() {
  const { users, loading, error } = useUsers();

  if (loading) {
    return <div>Loading ... </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
            <img
              src={u.avatar}
              alt="avatar"
              width={"200px"}
              onError={(e) =>
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                (e.target.src =
                  "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small_2x/default-avatar-photo-placeholder-profile-icon-vector.jpg")
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
