import React from "react";
import { IoAlbumsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toUpper } from "../utils/utils";

const AlbumsComponent = ({ userAlbums }) => {
  return (
    <div className="mt-5">
      <h2 className="font-medium text-xl">Albums</h2>
      <ul className="mt-5">
        {userAlbums.map((album) => (
          <li className="flex gap-4 items-center" key={album.id}>
            <IoAlbumsOutline />
            <Link
              className="hover:text-blue-700 hover:underline"
              to={`/albums/${album.id}`}
            >
              {toUpper(album.title)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumsComponent;
