import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface MovieEditProps {
  id: string;
  currentTitle: string;
}

export default function MovieEdit({ id, currentTitle }: MovieEditProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(currentTitle);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;

    dispatch({
      type: "movies/editTitle",
      payload: { id, newTitle: value.trim() },
    });

    setEditing(false);
  }

  if (!editing) {
    return (
      <button
        onClick={() => setEditing(true)}
        className="text-blue-500 hover:text-blue-700 cursor-pointer"
        type="button"
      >
        <EditIcon fontSize="small" />
      </button>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2"
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-2 py-1 rounded-lg text-sm hover:bg-green-700 cursor-pointer"
      >
        <CheckCircleOutlineIcon />
      </button>
      <button
        type="button"
        onClick={() => setEditing(false)}
        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg text-sm hover:bg-gray-400 cursor-pointer"
      >
        <HighlightOffIcon />
      </button>
    </form>
  );
}
