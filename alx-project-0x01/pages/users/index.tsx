// pages/users/index.tsx

import React from "react";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      <div className="grid grid-cols-3 gap-4">
        {posts.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
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
 

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [usersList, setUsersList] = useState<UserProps[]>(posts);

  // Function to handle adding new users from the modal
  const handleAddUser = (newUser: UserData) => {
    const newUserWithId = { ...newUser, id: usersList.length + 1 };
    setUsersList((prev) => [...prev, newUserWithId]);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Users List</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usersList.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>

      {/* User Modal */}
      {isModalOpen && (
        <UserModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleAddUser}
        />
      )}
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
