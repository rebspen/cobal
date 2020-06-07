import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

//when you click on links it scrolls to the top of the page

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);