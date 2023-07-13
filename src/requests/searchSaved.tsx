import axios, { AxiosResponse } from 'axios';

interface DataToSendType {
  location: string,
  terms: string,
}

export const getSearchesSaved = async (): Promise<AxiosResponse> => {
  try {
    const data = await axios.get('/api/searches');

    console.log('🚀 ~ file: requestDB.tsx:18 ~ requestDB ~ data:', data.data);
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

export const getOneSearchSaved = async (id: number): Promise<AxiosResponse> => {
  try {
    const data = await axios.get(`/api/searches/${id}`);

    console.log('🚀 ~ file: requestDB.tsx:18 ~ requestDB ~ data:', data.data);
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

export const postSearchSaved = async (dataProfile: DataToSendType): Promise<AxiosResponse> => {
  try {
    const data = await axios.post('/api/searches', { ...dataProfile });

    console.log('🚀 ~ file: requestDB.tsx:18 ~ requestDB ~ data:', data.data);
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

export const deleteSearchSaved = async (id: number): Promise<AxiosResponse> => {
  try {
    const data = await axios.delete(`/api/searches/${id}`);

    console.log('🚀 ~ file: requestDB.tsx:18 ~ requestDB ~ data:', data.data);
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
