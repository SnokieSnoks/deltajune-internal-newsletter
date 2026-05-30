import react from "react";
import { useLocation } from "react-router-dom";

function DynamicTitle() {
  const location = useLocation();

  react.useEffect(() => {
    if (location.pathname === "/") {
      document.title = "DELTAJUNE Newsletter";
    } else if (location.pathname === "/christmas2025") {
      document.title = "DELTAJUNE Newsletter: Issue 1 - Christmas 2025";
    } else if (location.pathname === "/summer2026") {
      document.title = "DELTAJUNE Newsletter: Issue 2 - Summer 2026";
    } else {
      document.title = "what are you doing here?? Go back!!!";
    }
    
  }, [location.pathname]);

  return null;
}

export default DynamicTitle;