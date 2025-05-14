import React, { useEffect, useState } from "react";
import AvatarCard from "./Avatarcard";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
};

const Avatarlist: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users); 
      })
      .catch(() =>alert("Failed to fetch users:"));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {users.map((user) => (
        <AvatarCard
          key={user.id}
          name={`${user.firstName} ${user.lastName}`}
          imageUrl={user.image}
          onEdit={() => alert(` ${user.firstName} ${user.lastName}`)}
        />
      ))}
    </div>
  );
};

export default Avatarlist;
