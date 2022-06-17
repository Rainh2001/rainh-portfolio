import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li className="item">
          <button>Profile</button>
        </li>
        <li className="item">
          <button>Projects</button>
        </li>
        <li className="item">
          <button>Education</button>
        </li>
        <li className="item">
          <button>Contact</button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
