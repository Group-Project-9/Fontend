import ImgAvatar from "../../../assets/avatar-defult.svg";


const User_account = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Settings</h2>

      <div className="mb-4">
        <label className="block text-gray-600 text-sm mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full border rounded px-3 py-2"
          placeholder="Your name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full border rounded px-3 py-2"
          placeholder="Your email"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 text-sm mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full border rounded px-3 py-2"
          placeholder="Your password"
        />
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Save Changes
      </button>
    </div>
  </div>
  );
};

export default User_account;
