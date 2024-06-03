import ProfileView from "./ProfileView";

export interface ProfileProps {
  user: User | null;
  isLoggedIn: boolean;
  logout: () => void;
}

const Profile: React.FC<ProfileProps> = (props) => {
  return props.isLoggedIn ? <ProfileView {...props} /> : null;
};
export default Profile;
