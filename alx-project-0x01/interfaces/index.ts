// interfaces/index.ts
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
}

export interface UserData {
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
export interface Address {
  street: string;
  suite?: string;
  city: string;
  zipcode: string;
  geo?: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs?: string;
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone?: string;
  website?: string;
  company: Company;
}
