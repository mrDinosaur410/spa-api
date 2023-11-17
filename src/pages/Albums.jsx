import React, { Suspense } from "react";
import { Link, Await, useLoaderData } from "react-router-dom";
import { IoAlbumsOutline } from "react-icons/io5";
import { toUpper } from "../utils/utils";
import { Api } from "../utils/api";

export const loader = () => {
  const albums = Api.getAllAlbums();
  return albums;
};

const Albums = () => {
  const data = useLoaderData();
  return (
    <Suspense fallback={<>Loading</>}>
      <Await resolve={data}>
        {(resolvedData) => (
          <div>
            {resolvedData.map((album) => (
              <Link
                className="flex gap-5 items-center underline hover:text-blue-700 hover:underline"
                to={`${album.id}`}
                key={album.id}
              >
                <IoAlbumsOutline className="text-black" />
                <h2>{toUpper(album.title)}</h2>
              </Link>
            ))}
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export default Albums;
