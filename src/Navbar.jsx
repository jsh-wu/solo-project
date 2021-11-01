import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div id = 'navbar'>
      <Link to="/"><button>Home</button></Link>
      <Link to="/score"><button>Add Score</button></Link>
      <Link to='/view'><button>View Scores</button></Link>
    </div>
  );
};

export default Navbar;
