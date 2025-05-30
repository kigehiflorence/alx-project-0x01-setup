import UserModal from "@/components/common/UserModal";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import React from 'react';

const UsersPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl">Users Page</h1>
      </main>
    </div>
  );
};

export default UsersPage;

interface UsersPageProps {
  posts: UserProps[];
}
const [isModalOpen, setModalOpen] = useState(false);
const [usersList, setUsersList] = useState<UserProps[]>(posts); // or whatever your props name is

const handleAddUser = (newUser: UserData) => {
  const newUserWithId = { ...newUser, id: usersList.length + 1 };
  setUsersList((prev) => [...prev, newUserWithId]);
};


const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Users List</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts?.map((user: UserProps, key: number) => (
            <UserCard key={key} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
<button
  onClick={() => setModalOpen(true)}
  className="bg-blue-700 px-4 py-2 rounded-full text-white"
>
  Add User
</button>

{isModalOpen && (
  <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
)}

