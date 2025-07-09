import type { FC } from "react";
import styles from "./ProfileCard.module.css";

interface Props {
  avatar: string;
  name: string;
  description: string;
}

const ProfileCard: FC<Props> = ({ avatar, name, description }) => {
  return (
    <div className={styles.userCard}>
      ProfileCard
      <h2>{name}</h2>
      <img src={avatar} alt="avatar" />
      <p>{description}</p>
    </div>
  );
};

// const ProfileCard = ({ avatar, name, description }: Props) => {
//   return (
//     <div>
//       ProfileCard
//       <h2>{name}</h2>
//       <img src={avatar} alt="avatar" />
//       <p>{description}</p>
//     </div>
//   );
// };

export default ProfileCard;
// export default function ProfileCard({ avatar, name, description }: Props) {
//   return (
//     <div>
//       ProfileCard
//       <h2>{name}</h2>
//       <img src={avatar} alt="avatar" />
//       <p>{description}</p>
//     </div>
//   );
// }
