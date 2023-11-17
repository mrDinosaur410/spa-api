import React, { useEffect, Suspense, useState } from "react";
import { Link, Await } from "react-router-dom";
import { Api } from "../utils/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(Api.getAllusers());
  }, []);

  return (
    <Suspense fallback={<>Loading</>}>
      <Await resolve={users}>
        {(resolvedUsers) => (
          <div className="mb-36">
            {resolvedUsers.map((user) => (
              <div className="mb-1" key={user.id}>
                <Link
                  className="hover:text-blue-700 hover:underline"
                  to={`/users/${user.id}`}
                >
                  {user.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export default Users;
