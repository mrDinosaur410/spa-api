import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import UserComponent from "../components/UserComponent";
import AlbumsComponent from "../components/AlbumsComponent";
import { Api } from "../utils/api";
import NotFound from "./NotFound";

export const loader = ({ params: { id } }) => {
  const user = Api.getUserById(id);
  const albums = Api.getUserAlbumsById(id);
  return { user: user, albums: albums };
};

const User = () => {
  const { user, albums } = useLoaderData();
  return (
    <Suspense fallback={<>Loading</>}>
      <Await resolve={Promise.all([user, albums])} errorElement={<NotFound />}>
        {([user, albums]) => (
          <div>
            <UserComponent user={user} />
            <AlbumsComponent userAlbums={albums} />
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export default User;
