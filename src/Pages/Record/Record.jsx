import { useState, useEffect } from "react";
import { BiAlarm, BiCurrentLocation } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineEdit } from "react-icons/ai";
import { RiEditFill } from "react-icons/ri";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./Record.css";

const Record = () => {
  const { currentUser } = useSelector((state) => state.user); // Use to get Current User

  const [data, setData] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedRecordId, setSelectedRecordId] = useState(null);
  const [update ,setUpdate] = useState(false);


  const getID = (e) => {
    setSelectedRecordId(e);
    console.log(e);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    }); 
  };

   const handleSubmit = async (e) => {
      e.preventDefault();
      
      const updatedData = {
        _id: selectedRecordId,
        ...formData,
      };
      console.log(updatedData);
    
      try {
        const request = await fetch(`/api/record_by/user_update_record/${updatedData._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        });
    //
        if (request.ok) {
          const response = await request.json();
          setUpdate(!update)
          if (response.success) {
            console.log("Record updated successfully");
            setUpdate(!update)
          } else {
            console.error("Update failed:", response.error);
          }
        } else {
          console.error("Update failed. Server returned an error status:", request.status);
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    };




  

  useEffect(() => {
    axios
      .get("/api/record/read")
      .then((response) => {
        // Filter data based on currentUser.email
        const filteredData = response.data.filter(
          (record) => record.email === currentUser.email
        );
        setData(filteredData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [currentUser.email, deleteConfirmation]);


  const handleDelete = async (recordId) => {
    const actitvity = {
      _id: recordId,
    };

    try {
      const request = await fetch("/api/record_by/user_delete_Record", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(actitvity),
      });

      const data = await request.json();
      setDeleteConfirmation(!deleteConfirmation);
      if (data.success === false) {
        console.log("Delete successful");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="แยก1.ซ้าย 2.ขวา หน้าทั้งหมดของRecord w-full h-full overflow-hidden flex">
      <div className="ซ้าย w-3/4 h-full relative border">
        <div className="flex w-full h-20 shadow-xl justify-between items-center px-10 mb-4">
          <h1 className=" text-4xl font-semibold text-gray-900 border">
            Habit and Activity
          </h1>
          <NavLink
            to="/form"
            className="h-10 px-10 flex items-center shadow-xl bg-slate-100 text-blue-700 font-medium transition ease-in-out duration-300 hover:bg-slate-200 rounded-3xl border"
          >
            + Add Activity
          </NavLink>
        </div>
        <div
          className="activity-for-scroll relative w-100 w-full h-auto flex flex-wrap p-10 pt-5 pb-24 justify-start items-start gap-6"
          style={{
            height: "100%",
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {Array.isArray(data) && data.length > 0 ? (
            data.map((record, index) => (
              <div
                key={index}
                className="กล่องactivity มี1.ซ้าย2.ขวา แนวนอน relative cursor-pointer shadow-xl rounded-2xl w-[250px] flex overflow-hidden h-[175px] group"
              >
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box w-auto bg-rose-200 relative">
                    <h3 className="font-bold text-lg text-black">Hello!</h3>
                    <form onSubmit={handleSubmit}>
                      <label className="py-4 justify-between font-medium text-black flex">
                        Activity Type
                        <select
                          className="text-black bg-transparent font-medium outline-none"
                          id="activity"
                          onChange={handleChange}
                        >
                          <option default hidden>
                            select
                          </option>
                          <option className="font-medium">Running</option>
                          <option className="font-medium">Aerobic</option>
                          <option className="font-medium">Yoga</option>
                          <option className="font-medium">
                            Weight Training
                          </option>
                          <option className="font-medium">Bicycle</option>
                        </select>
                      </label>
                      <label className="py-4 justify-between font-medium text-black flex">
                        Start
                        <div>
                          <input
                            className="text-center bg-transparent outline-none"
                            id="date"
                            type="date"
                            onChange={handleChange}
                          />
                          <input
                            className="text-center bg-transparent outline-none"
                            id="time"
                            type="time"
                            onChange={handleChange}
                          />
                        </div>
                      </label>
                      <label className="py-4 justify-between font-medium text-black flex">
                        Duration
                        <input
                          className="text-black text-end bg-transparent font-semibold outline-none"
                          type="number"
                          placeholder="0"
                          id="hours"
                          name="hours"
                          min="0"
                          max="24"
                          onChange={handleChange}
                        />
                        <label
                          className="text-black flex items-center font-semibold ml-2"
                          htmlFor="hours"
                        >
                          Hours
                        </label>
                        <input
                          className="text-black text-end bg-transparent font-semibold outline-none"
                          type="number"
                          placeholder="0"
                          id="minute"
                          name="minute"
                          min="0"
                          max="59"
                          required
                          onChange={handleChange}
                        />
                        <label
                          className="text-black flex items-center font-semibold  ml-2"
                          htmlFor="minute"
                        >
                          Minutes
                        </label>
                      </label>
                      
                      <label className="py-4 justify-between font-medium text-black flex">
                        Location
                        <input
                          className="text-black bg-transparent outline-none border-b border-slate-800"
                          id="location"
                          onChange={handleChange}
                        />
                      </label>
                      <label className="py-4 justify-between font-medium text-black flex">
                        Note
                        <input
                          className="bg-transparent outline-none border-b border-slate-800"
                          id="note"
                          onChange={handleChange}
                        />
                      </label>

                      <button
                        onClick={() => getID(record._id)}
                        type="submit"
                        className="btn abs absolute bottom-6"
                      >
                        Update
                      </button>
                    </form>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn abs">close</button>
                      </form>
                    </div>
                  </div>
                </dialog>

                <button
                  onClick={() => handleDelete(record._id)}
                  className="z-50 hidden group-hover:block text-black right-1 top-2 absolute w-5"
                >
                  <AiOutlineEdit />
                </button>

                <div
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  className="ซ้าย  relative w-3/5 h-full bg-stone-700 p-3 flex flex-col justify-start "
                >
                  <p className="text-white left-0 font-semibold">
                    {record.activity}
                  </p>
                  <br />
                  <p className="text-sm flex left-0 text-white font-semibold items-center">
                    <AiOutlineCalendar />: {record.date}
                  </p>
                  <p className="text-sm flex left-0 text-white font-semibold items-center">
                    <BiAlarm />: {record.minute} minute
                  </p>
                  <p className="text-sm flex left-0 text-white font-semibold items-center ">
                    <BiCurrentLocation />:{" "}
                    {record.location.length > 6
                      ? `${record.location.slice(0, 6)}...`
                      : record.location}
                  </p>
                </div>
                <div
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  className="ขวา w-1/2 relative"
                >
                  <img
                    className="h-full object-cover"
                    src="https://i.ibb.co/DwB2b7B/Screenshot-2023-10-23-222636.png"
                    alt={record.activity}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="balls absolute top-[40%] left-[50%] ">
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="ขวา w-1/4 h-full border rounded-r-3xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/tKFDsXy/Screenshot-2023-10-23-225025.png"
          alt="Placeholder"
        />
      </div>
    </div>
  );
};
export default Record;