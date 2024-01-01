import React, { useState } from 'react'
import { UploadProfileApi } from '../Apis/UserApi';

const Form = () => {
    const [file,setFile] = useState(null);
    const handleChange = (e)=>{
        setFile(e.target.files[0])
        console.log("files",e.target.files[0]);    
    }
    const handleClick =async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('profile', file);
        const res  = await UploadProfileApi({formData});
        console.log("res",res);
    }
  return (
    <div>
        <form action="" method="post">
            <input type="file" name="profile" id="" onChange={handleChange}/>
            <button type="submit" onClick={handleClick}>submit</button>
        </form>
    </div>
  )
}

export default Form