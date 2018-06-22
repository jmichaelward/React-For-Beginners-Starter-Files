import React from "react";

/*
Note from the Wes Bos course - Stateless Functional Component
These components carry no state, and thus, can be set up as a function that
accepts a single parameter of props.

You can take things a step further, as illustrated here, and instead of
passing in props and saying, say, "props.tagline" where you use it, you can
instead use ES6 object destructuring to grab all the keys of the props object,
then you can just call that key. So, in this case, we have just tagline.
 */
const Header = ({ tagline }) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  </header>
);

export default Header;
