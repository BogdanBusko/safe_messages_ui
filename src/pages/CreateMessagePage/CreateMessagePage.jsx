import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreateMessagePage = () => {
  const [link, setLink] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios.post('/api/v1/messages', { message: data })
         .then(({data}) => setLink(data.link));
  }

  return(
    <div className="container custom d-flex align-items-center">
      { !link &&
        <div className="row w-100">
          <div className="col-12 offset-md-3 col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label className="font-weight-bold" htmlFor="message-text">Text</label>
                <textarea className="form-control" id="message-text" name="text" defaultValue="" ref={register({required: true})}/>
              </div>
              <div className="form-group">
                <label className="font-weight-bold" htmlFor="message-password">Password</label>
                <input className="form-control" id="message-password" name="password" type="text" defaultValue="" ref={register({required: true})}/>
              </div>
              <div className="form-group">
                <input type="submit" value="Submit" className="btn btn-primary"/>
              </div>
            </form>
          </div>
        </div>
      }
      { link &&
        <div>
          Link on message: {link}
        </div>
      }
    </div>
  );
}

export default CreateMessagePage;
