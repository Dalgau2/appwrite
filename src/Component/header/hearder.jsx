import { useSelector } from "react-redux";
import { Logo, LogOutBtn } from "../index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Hearder = () => {
  const authStatus = useSelector((state) => state.authReducer.status); // useSelector for access the state

  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "login", slug: "/login", active: !authStatus },
    { name: "signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: true },
    { name: "Add post", slug: "/add-post" },
  ];
  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <ul className="nav-links">
          {navItems.map((option) => {
            const { name, slug, active } = option;
            return (
                <>
                <li>active ? <Link onClick={(()=>navigate(slug))} key={name} to={slug}>{name}</Link> : null</li>
                {authStatus&& <LogOutBtn/> }
                </>
                
            );
        
          })};
          
        </ul>
      </nav>
    </header>
  );
};
export default Hearder;
