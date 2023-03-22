import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import plusImg from '../../assets/plus.svg';

const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl font-sans hover:font-serif"
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7"> Crear</span>
    </button>
  )
}

export default CreateEventButton