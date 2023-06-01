import DesktopSidebar from "../components/sidebar/DesktopSidebar";
import Sidebar from "../components/sidebar/Sidebar";

interface UsersLayoutProps {
  children: React.ReactNode;
}

const UsersLayout: React.FC<UsersLayoutProps> = ({ children }) => {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default UsersLayout;
