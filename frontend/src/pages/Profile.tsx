import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";
import ProfileDetails from "../components/ProfileDetails";
import { User, GetUserQueryData, GetUserQueryVariables } from "./../../Types";

const Profile = () => {
  const { data, loading, error, refetch } = useQuery<
    GetUserQueryData,
    GetUserQueryVariables
  >(GET_USER, {
    variables: { userId: 1 },
  });

  if (!data) return;
  const user: User = data.user;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-start">
      <ProfileDetails refetch={refetch} user={user} />
    </div>
  );
};

export default Profile;
