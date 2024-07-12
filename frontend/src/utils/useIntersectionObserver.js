import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { navbarActions } from "../store/navbarSlice";

const useIntersectionObserver = (ref, id, options) => {
  const dispatch = useDispatch();

  const handleIntersection = (id) => {
    dispatch(
      navbarActions.setSelected(id.charAt(0).toUpperCase() + id.slice(1))
    );
  };

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleIntersection(id);
          }
        });
      }, options);

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [ref, id, options, dispatch]);
};

export default useIntersectionObserver;
