import useAuth from "../../../Hooks/UseAuth";


const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div className="p-6">
            <h1 className="text-4xl font-semibold">Welcome Back! {user.displayName}</h1>
        </div>
    );
};

export default AdminHome;