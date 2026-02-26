import { useState } from "react";
import { useLocation } from "react-router-dom";
import IndexButton from "./IndexButton";
import IndexOverlay from "./IndexOverlay";

const IndexNavigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Hide on admin routes
  if (location.pathname.startsWith("/admin")) return null;

  return (
    <>
      <IndexButton onClick={() => setOpen(true)} hidden={open} />
      <IndexOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default IndexNavigation;
