// TODO: add enviroment variables to readme
// looked form the enviroment
const { HOST_URL } =
  { HOST_URL: 'http://localhost:3001' } || process.env;

const NOTE_GET_URL = '/note/';

export const getNote = async (id: string) => {
  const config = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  };
  const resp = await fetch(`${HOST_URL}${NOTE_GET_URL}${id}`, config);
  return resp.json();
};
