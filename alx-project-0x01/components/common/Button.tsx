const Button: React.FC<{ label: string }> = ({ label }) => {
  return <button className="px-4 py-2 bg-blue-600 text-white rounded">{label}</button>;
};

export default Button;
