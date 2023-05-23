import React from 'react';
import './Research.css';
export default function Research() {
  return (
    <>
        <div>
        <div>
          <ul className="">
            <li>
              <Link to="/Areas">Areas</Link>
            </li>
            <li>
              <Link to="/Projects">Project</Link>
            </li>
            <li>
              <Link to="/Publications/Publications">Publications</Link>
            </li>
          </ul>
        </div>
      </div>
     </>
  );
}
