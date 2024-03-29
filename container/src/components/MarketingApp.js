import React, { useRef, useEffect } from "react";
import { mount } from "marketing/Marketing";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  // browser history object
  const history = useHistory();

  useEffect(() => {
    // passing refereces of html element
    const { onParentNavigate } = mount(ref.current, {
      initPath: history.location.pathname,
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

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
