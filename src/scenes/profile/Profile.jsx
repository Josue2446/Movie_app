import './profile.css';
import Nav from '../../components/nav/Nav';
import NetflixAvatar from '../../assets/images/Netflix-avatar.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import SubscriptionPlans from '../../components/subcriptionPlans/SubscriptionPlans';

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Nav />
      <div className="profile-body">
        <h1>Edit Profile</h1>
        <div className="profile-info">
          <img src={NetflixAvatar} alt="avatar" />
          <div className="profile-details">
            <h2>{user.email}</h2>
            <div className="profile-plans">
              <h3>Subscription Plans: </h3>
              <SubscriptionPlans />
              <button
                onClick={() => auth.signOut()}
                className="profile-sign-out"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
