import avatar from "../assets/image-jeremy.png";
import "./ProfileCard.css";

type Props = {
  onClick: React.MouseEventHandler<HTMLInputElement>;
};

const ProfileCard = ({ onClick }: Props) => {
  return (
    <div className="container--profile rounded-md">
      <article className="user-card rounded-md">
        <h2>
          <span className="text:sm unbold">Report for</span>{" "}
          <span className="username text:lg">Jeremy Robson</span>
        </h2>
        <img src={avatar} alt="" />
      </article>
      <ul role="list" className="stack-md">
        <li>
          <input type="button" value={"daily"} onClick={onClick} />
        </li>
        <li>
          <input type="button" value={"weekly"} onClick={onClick} />
        </li>
        <li>
          <input type="button" value={"monthly"} onClick={onClick} />
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
