import React, { Suspense } from "react";
import { Link, Await, useLoaderData } from "react-router-dom";
import { toUpper } from "../utils/utils";
import { Api } from "../utils/api";
import NotFound from "./NotFound";

export const loader = ({ params: { id } }) => {
  const data = Api.getAlbumById(id);
  return data;
};

const Album = () => {
  const data = useLoaderData();

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
};

export default Album;
