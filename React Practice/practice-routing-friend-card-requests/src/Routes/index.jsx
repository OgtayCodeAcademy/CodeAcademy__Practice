import Friends from "../Pages/User/Friends";
import UserHome from "../Pages/User/Home";
import UserRoot from "../Pages/User/UserRoot";
import SendCard from '../Pages/User/SendCard';
import AdminRoot from '../Pages/Admin/AdminRoot';
import AdminPanel from "../Pages/Admin/AdminPanel";

export const ROUTES = [
  {
    path: "/",
    element: <UserRoot></UserRoot>,
    children: [
      {
        path: "",
        element: <UserHome></UserHome>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,
      },
      {
        path: "send",
        element: <SendCard></SendCard>,
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminRoot></AdminRoot>,
    children: [
      {
        path: 'cardrequest',
        element: <AdminPanel></AdminPanel>
      }
    ]
  }
];
