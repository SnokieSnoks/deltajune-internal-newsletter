import react from "react";
import { useLocation } from "react-router-dom";

function DynamicTitle() {
  const location = useLocation();

  react.useEffect(() => {
    if (location.pathname === "/") {
      document.title = "DELTAJUNE INTERNAL NEWSLETTER: CHRISTMAS 2025";
    } else {
      document.title = "what are you doing here go back";
    }
  }, [location.pathname]);

  return null;
}

export default DynamicTitle;