import axios, { AxiosResponse } from 'axios';

interface DataToSendType {
  login: string,
  name?: string
}

export const getProfilesSaved = async (): Promise<AxiosResponse> => {
  try {
    const data = await axios.get('/api/profiles');

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.status);
      console.error(error.response);
      // Do something with this error...
    }
    console.error(error);
    return Promise.reject(error);
  }
};

export const getOneProfileSaved = async (id: number): Promise<AxiosResponse> => {
  try {
    const data = await axios.get(`/api/profiles/${id}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.status);
      console.error(error.response);
      // Do something with this error...
    }
    console.error(error);
    return Promise.reject(error);
  }
};

export const postProfileSaved = async (dataProfile: DataToSendType): Promise<AxiosResponse> => {
  try {
    const data = await axios.post('/api/profiles', { ...dataProfile });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.status);
      console.error(error.response);
      // Do something with this error...
    }
    console.error(error);
    return Promise.reject(error);
  }
};

export const deleteProfileSaved = async (id: number): Promise<AxiosResponse> => {
  try {
    const data = await axios.delete(`/api/profiles/${id}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.status);
      console.error(error.response);
      // Do something with this error...
    }
    console.error(error);
    return Promise.reject(error);
  }
};
