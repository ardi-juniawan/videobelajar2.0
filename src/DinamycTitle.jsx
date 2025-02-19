import { useEffect } from "react";
import { useLocation } from "react-router";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Video Belajar - Login",
      "/register": "Video Belajar - Register",
      "/beranda": "Video Belajar - Beranda",
    };

    document.title = titles[location.pathname] || "Video Belajar";
  }, [location]);

  return null;
};

export default DynamicTitle;
