import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from "react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from "../../../firebase";
import { updateUserStart, updateUserSuccess, updateUserFailure } from '../../../App/User/userSlice.js';
import { useDispatch } from 'react-redux';

const UserAccountSettings = () => {

  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);

  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);
  const dispatch = useDispatch();

  // Fire base storage rules
  // allow read;
  // allow write: if
  // request.resource.size < 2 * 1024 * 1024 &&
  // request.resource.contentType.matches('image/.*')

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/record_by/update_user_info/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);

    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  return (
    <main className="w-full h-full flex flex-col items-center justify-center p-3">
        <section className="w-full h-full flex flex-col items-center justify-center gap-10 p-3">
          <article className="w-full h-24 flex items-center justify-center bg-white rounded-2xl">
            <h1 className="text-3xl font-bold text-black">Edit Profile</h1>
          </article>
          <article className="w-full h-full flex flex-col items-center justify-center bg-[#A4826E] px-2 py-5 rounded-2xl">
            <form 
              onSubmit={handleSubmit}
              className="md:w-5/6 xl:w-5/6 h-auto flex flex-col w-full text-black gap-4 items-center justify-center p-5"
            >
              <input 
                onChange={(e)=>setFile(e.target.files[0])}
                type="file" 
                ref={fileRef}
                accept='image/*'
                hidden />
              <img
                onClick={() => fileRef.current.click()}
                src={formData.avatar || currentUser.avatar}
                alt='profile'
                className="rounded-full h-32 w-32 object-cover cursor-pointer self-center mt-2 border-2 border-gray-200 p-3 hover:border-4"
              />
               <p className='text-sm self-center'>
                {fileUploadError ? (
                  <span className='text-red-100'>
                    Error Image upload (image must be less than 2 mb)
                  </span>
                ) : filePerc > 0 && filePerc < 100 ? (
                  <span className='text-white'>{`Uploading ${filePerc}%`}</span>
                ) : filePerc === 100 ? (
                  <span className='text-green-400 font-bold'>Image successfully uploaded!</span>
                ) : (
                  ''
                )}
              </p>
              <div className="w-full xl:w-1/2 flex gap-3 mt-3">
                <div className='flex flex-col'>
                  <label htmlFor="firstname" className='text-white font-medium'>First name:</label>
                  <input
                    type="text"
                    defaultValue={currentUser.firstname}
                    placeholder="First name ..."
                    className="w-full border-2 border-gray-200 p-3 rounded-lg bg-white"
                    id="firstname"
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="lastname" className='text-white font-medium'>Last name:</label>
                  <input
                    type="text"
                    defaultValue={currentUser.lastname}
                    placeholder="Last name ..."
                    className="w-full border-2 border-gray-200 p-3 rounded-lg bg-white"
                    id="lastname"
                    onChange={handleChange}
                    />
                </div>
              </div>
              <div className="w-full xl:w-1/2 flex gap-3">
                <div className='flex flex-col w-1/2'>
                  <label htmlFor="email" className='text-white font-medium'>Email:</label>
                  <input
                      type="email"
                      defaultValue={currentUser.email}
                      placeholder="E-mail ..."
                      className="w-full border-2 border-gray-200 p-3 rounded-lg bg-white"
                      id="email"
                      onChange={handleChange}
                      />
                </div>
                <div className="flex flex-col w-1/2 mt-1">
                  <label htmlFor="gender" className='text-white font-medium'>Gender:</label>
                  <select
                      className="w-full border-2 border-gray-200 p-3 rounded-lg bg-white"
                      id="gender"
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="w-full xl:w-1/2 flex gap-3">
                <div className='flex flex-col'>
                  <label htmlFor="weight" className='text-white font-medium'>Weight:</label>
                  <input
                    type="number"
                    defaultValue={currentUser.weight}
                    placeholder="Weight ..."
                    className="w-full border-2 border-gray-200 p-3 rounded-lg bg-white"
                    id="weight"
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="weight" className='text-white font-medium'>Weight:</label>
                  <input
                    type="number"
                    defaultValue={currentUser.height}
                    placeholder="Height ..."
                    className="w-full border-2 border-gray-200 p-3 rounded-lg bg-white"
                    id="height"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* <div className="w-full xl:w-1/2 flex gap-3">
                <input
                  type="password"
                  placeholder="Confirm Password ..."
                  className="w-full border-2 border-gray-200 p-3 rounded-lg bg-white"
                  id="password"
                  onChange={handleChange}
                />
                
              </div> */}
              <button 
                className='w-full xl:w-1/2 bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>
                Update
              </button>
            </form>
          </article>
        </section>
    </main>
  );
};

export default UserAccountSettings;