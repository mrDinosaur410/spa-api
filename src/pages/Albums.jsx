import React, { useEffect, useState, Suspense } from "react";
import { Link, Await } from "react-router-dom";
import { IoAlbumsOutline } from "react-icons/io5";
import { toUpper } from "../utils/utils";
import { Api } from "../utils/api";

const Albums = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Api.getAllAlbums());
  }, []);
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
