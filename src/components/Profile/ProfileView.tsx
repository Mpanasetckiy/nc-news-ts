import "./ProfileView.css";
import { ProfileProps } from "./Profile";

const ProfileView: React.FC<ProfileProps> = (props) => {
  return (
    <section className="root__container">
      <div className="profile-card">
        <h2>Hello {props.user?.name}!</h2>
        <p>@{props.user?.username}</p>
        <img src={props.user?.avatar_url} alt="user avatar" />
        <button onClick={props.logout}>SIGN OUT</button>
      </div>
    </section>
  );
};

export default ProfileView;
