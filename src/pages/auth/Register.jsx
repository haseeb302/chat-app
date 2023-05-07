import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

import Add from "../../img/addAvatar.png";
import "../../style.scss";

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const file = e.target[4].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, `${firstName + res.user.uid}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName: firstName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: firstName,
              photoURL: downloadURL,
              email,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (e) {
            console.log(e);
            setError(true);
          }
        });
      });
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-header">
          <h2 className="app-logo">Chat Now!</h2>
          <p className="form-title">Register</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="label-input">
            <label>First Name: </label>
            <input type="text" />
          </div>
          <div className="label-input">
            <label>Last Name: </label>
            <input type="text" />
          </div>
          <div className="label-input">
            <label>Email: </label>
            <input type="email" />
          </div>
          <div className="label-input">
            <label>Password: </label>
            <input type="password" />
          </div>
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Register</button>
        </form>
        {error && <span> Something went wrong</span>}
        <div>
          <p>
            Already have an account <Link to={"/login"}>login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
