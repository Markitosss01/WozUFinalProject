import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import "./Profile.css";

function Profile() {
 
 
const [yourUploads, setYourUploads] = useState([]);
const [loaded, setLoaded] = useState(false);
const [username, setUsername] = useState("Marcos");

  
  useEffect(() => {
    if(!loaded){
      console.log(username);
      axios.get(
        `http://localhost:3001/upload/byUser/${username}`
      ).then((response) => {
        console.log(response)
        setYourUploads(response.data);
        setLoaded(true);
      });
      
    }
  }, [loaded]);
  return (
    <div className="Profile">
      <h1>{username}</h1>
      {yourUploads.map((val, index) => {
        return (
          <div className="Post" key={index}>
            <div className="Image">
            <Image cloudName="dbw3pcgui" //publicId="Malibu_rakmqr" 
              publicId={val.image}
              />
            </div>
            <div className="Content">
              <div className="title">
                {" "}
                {val.title} / by @{val.author}
              </div>
              <div className="description">{val.description}</div>
            </div>
            <div className="Engagement">{val.likes}</div>
          </div>
        );
      })}
    </div>
  );
}




export default Profile;

