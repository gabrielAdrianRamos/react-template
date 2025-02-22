import React, { useEffect, useState } from "react";
import "./Profile.scss";
import Card from "../../card/Card";
import { Spinner } from "../../loader/Loader";
import { toast } from "react-toastify";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);
  const updateProfile = (e) => {
    e.preventDefault();
    toast.success("Profile update successfully.");
  };

  return (
    <div className="profile">
      <h3>Profile~</h3>
      <Card cardClass={"card"}>
        {isLoading ? (
          <Spinner />
        ) : (
          <form onSubmit={updateProfile}>
            <p>
              <label>Name:</label>
              <input type="text" placeholder="Name" name="name" />
            </p>
            <p>
              <label>Email:</label>
              <input type="text" placeholder="Email" name="email" />
            </p>
            <button type="submit" className="--btn --btn-primary --btn-block">
              Update Profile
            </button>
          </form>
        )}
      </Card>
    </div>
  );
};

export default Profile;
