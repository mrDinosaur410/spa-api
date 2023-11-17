import React, { useEffect, Suspense } from "react";
import { Link, useParams, Await } from "react-router-dom";
import { toUpper } from "../utils/utils";
import { Api } from "../utils/api";
import { useState } from "react";
import NotFound from "./NotFound";

const Album = () => {
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    setData(Api.getAlbumById(params.id));
  }, [params]);

  return (
    <Suspense fallback={<>Loading</>}>
      <Await resolve={data} errorElement={<NotFound />}>
        {(resolvedData) => (
          <div>
            <div className="mb-10">
              <h1 className="text-lg mb-5">{toUpper(resolvedData.title)}</h1>
              <div className="flex gap-2">
                <span>Created by: </span>
                <Link
                  className="hover:text-blue-700 hover:underline"
                  to={`/users/${resolvedData.userId}`}
                >
                  {
                    resolvedData.users?.find(
                      (user) => user.id === +resolvedData.userId
                    ).name
                  }
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5">
              {resolvedData.photos?.map((photo) => (
                <div key={photo.id}>
                  <img src={photo.url} alt={photo.id} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Await>
    </Suspense>
  );
  /* return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        album && (
          <div>
            <div className="mb-10">
              <h1 className="text-lg mb-5">{toUpper(album.title)}</h1>
              <div className="flex gap-2">
                <span>Created by: </span>
                <Link
                  className="hover:text-blue-700 hover:underline"
                  to={`/users/${album.userId}`}
                >
                  {album.users.find((user) => user.id == album.userId).name}
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5">
              {album.photos.map((photo) => (
                <div>
                  <img src={photo.url} alt="image" />
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  ); */
};

export default Album;
