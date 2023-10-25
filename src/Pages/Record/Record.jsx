import { useState, useEffect } from "react";
import { BiAlarm, BiCurrentLocation } from "react-icons/bi";
import { AiOutlineCalendar, AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./Record.css";


const Record = () => {

  const { currentUser } = useSelector((state) => state.user); // Use to get Current User

  const [data, setData] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  // const dispatch = useDispatch();
  
  // const deleteRecord = (recordId) => {
  //   axios
  //     .delete(`/api/record/delete/${recordId}`)
  //     .then(() => {
  //       // Remove the deleted record from the state
  //       const updatedData = data.filter((record) => record._id !== recordId);
  //       setData(updatedData);
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting record:", error);
  //     });
  // };

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
  }, [currentUser.email]);

  // const handleDelete = (recordId) => {

  //   if (deleteConfirmation === recordId) {
  //     // Perform the delete action
  //     axios
  //       .delete(`/api/record/delete/${recordId}`)
  //       .then(() => {
  //         // Reload the data after deleting
  //         axios.get("/api/record/read").then((response) => {
  //           const filteredData = response.data.filter(
  //             (record) => record.email === currentUser.email
  //           );
  //           setData(filteredData);
  //         });
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });

  //   } else {
  //     // Show the delete confirmation dialog
  //     setDeleteConfirmation(recordId);
  //   }
  // };

  useEffect(() => {
    console.log("Activity was delete")    

  }, [deleteConfirmation]);

  const handleDelete = async(recordId) => {

    const actitvity = {
      "_id": recordId
    }

    try {
      const request = await fetch('/api/record_by/user_delete_Record', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(actitvity),
      });

      const data = await request.json();
      setDeleteConfirmation(!deleteConfirmation)
      if (data.success === false) {
        return;
      }

    } catch (error) {
      console.log(error)
    }
 
  } 

  return (
    <div className="แยก1.ซ้าย 2.ขวา หน้าทั้งหมดของRecord w-full h-full overflow-hidden flex">
      <div className="ซ้าย w-3/4 h-full relative border">
        <div className="flex w-full h-20 shadow-xl justify-between items-center px-10">
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
          className="activity-for-scroll relative w-100 w-full h-auto flex flex-wrap p-10 pt-5 pb-24 justify-start items-center gap-6"
          style={{
            height: "100%",
            overflowY: "scroll",
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
          }}
        >
          {Array.isArray(data) && data.length > 0 ? (
            data.map((record, index) => (
              <div
                key={index}
                className="กล่องactivity มี1.ซ้าย2.ขวา แนวนอน relative shadow-xl  rounded-2xl w-[250px] flex overflow-hidden h-[175px] group"
              >
                <button
                  className="z-50 hidden group-hover:block text-black right-1 top-2 absolute w-5"
                  onClick={() => handleDelete(record._id)} // Pass the record _id to the delete function
                >
                  <AiFillCloseCircle />
                </button>
                <div className="ซ้าย relative w-1/2 h-full bg-sky-500 p-3 flex flex-col justify-start">
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
                <div className="ขวา w-1/2 relative">
                  <img
                    className="h-full object-cover"
                    src="https://i.ibb.co/QHSCTRZ/Screenshot-2023-10-23-222636.png"
                    alt={record.activity}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="balls absolute left-[50%] translate-x-[-50%]">
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
          src="https://i.ibb.co/k9bR69F/Screenshot-2023-10-23-225025.png"
          alt="Placeholder"
        />
      </div>
    </div>
  );
};
export default Record;