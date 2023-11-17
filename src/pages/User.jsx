import React, { useEffect, useState, Suspense } from "react";
import { useParams, Await } from "react-router-dom";
import UserComponent from "../components/UserComponent";
import AlbumsComponent from "../components/AlbumsComponent";
import { Api } from "../utils/api";
import NotFound from "./NotFound";

const User = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setUser(Api.getUserById(params.id));
    setAlbums(Api.getUserAlbumsById(params.id));
  }, [params]);

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
