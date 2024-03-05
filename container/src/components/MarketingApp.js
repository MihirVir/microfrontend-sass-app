import React, { useRef, useEffect } from "react";
import { mount } from "marketing/Marketing";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    // passing refereces of html element
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        // listen function that is eventually calling onNavigate is going to give us an argument
        // which refer to as location. This is an objectthat has some information about where we are about
        // to navigate to inside the marketing application. We got pathname from location object
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
  }, []);

  return <div ref={ref} />;
};
