import { UserProps } from "@/interfaces";
import { Mail, Phone, Globe } from "lucide-react";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>
      <div className="text-gray-700 space-y-2">
        <p className="flex items-center gap-2"><Mail size={16} /> {email}</p>
        <p className="flex items-center gap-2"><Phone size={16} /> {phone}</p>
        <p className="flex items-center gap-2"><Globe size={16} /> {website}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="italic text-sm text-gray-500">"{company.catchPhrase}"</p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Address</h3>
        <p className="text-gray-600">{address.street}, {address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
