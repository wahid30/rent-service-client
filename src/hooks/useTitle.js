import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Rent Services`;
  }, [title]);
};

export default useTitle;
