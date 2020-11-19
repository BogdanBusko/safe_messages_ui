import axios from 'axios';

const useQuery = ({url, method = 'get', dataParams, setState}) => {
  axios.request(
    {
      url: url,
      method: method,
      data: dataParams
    }
  ).then((data) => {
    setState({data: data.data, statusCode: data.status});
  }).catch((error) => {
    console.log(error);
  });
}

export default useQuery;
