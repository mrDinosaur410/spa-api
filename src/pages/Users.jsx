import React, { Suspense } from "react";
import { Link, Await, useLoaderData } from "react-router-dom";
import { Api } from "../utils/api";

export const loader = () => {
  const users = Api.getAllusers();
  return users;
};

const Users = () => {
  const users = useLoaderData();
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
