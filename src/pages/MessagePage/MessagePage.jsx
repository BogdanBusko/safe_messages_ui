import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useQuery from '../../utils/use_query';

const MessagePage = () => {
  const { register, handleSubmit } = useForm();
  const [askPassword, setAskPassword] = useState(true)
  const [state, setState] = useState({});
  const { uuid } = useParams();

  useEffect(() => {
    useQuery({url: `/api/v1/messages/${uuid}`, setState: setState});
  }, []);

  const onSubmit = (data) => {
    useQuery({
      url: `/api/v1/view_decrypted/${uuid}`,
      method: 'post',
      dataParams: {
        password: data.password
      },
      setState: setState
    });
  }

  return(
    <div className="container custom d-flex justify-content-center flex-column">
      <h1>Secret message</h1>
      <div className="font-weight-bold">
        {state.data.text}
      </div>
      { askPassword &&
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="font-weight-bold" htmlFor="message-password">Password</label>
            <input className="form-control" id="message-password" name="password" type="password" defaultValue="" ref={register}/>
          </div>

          <input type="submit" value="Send"/>
        </form>
      }
    </div>
  );
}

export default MessagePage;
