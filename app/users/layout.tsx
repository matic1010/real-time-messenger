import getUsers from "../actions/getUsers";
import DesktopSidebar from "../components/sidebar/DesktopSidebar";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

interface UsersLayoutProps {
  children: React.ReactNode;
}

const UsersLayout = async ({ children }: UsersLayoutProps) => {
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <UserList users={users} />
        {children}
      </div>
    </Sidebar>
  );
};

export default UsersLayout;
