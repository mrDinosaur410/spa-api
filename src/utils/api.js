import instance from "./axios";
export class Api {
  static async getAllusers() {
    try {
      const { data } = await instance.get("/users");
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getUserById(id) {
    try {
      const { data } = await instance.get(`/users/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getUserAlbumsById(id) {
    try {
      const { data } = await instance.get(`/users/${id}/albums`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getAllAlbums() {
    try {
      const { data } = await instance.get("/albums");
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getAlbumById(id) {
    try {
      const album = await instance.get(`/albums/${id}`);
      const users = await instance.get(`/users`);
      const photos = await instance.get(`/albums/${id}/photos`);
      album.data.users = users.data;
      album.data.photos = photos.data;
      return album.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
