import React from "react";
import { useSearchParams } from "react-router-dom";

const Tabs = () => {
  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");
  const activeClass = "active";

  return (
    <div className="container mx-auto mt-5 flex border-2 border-gray-300 rounded">
      
        <div className="tabs">
          <div className="tab nav nav-tabs flex-shrink-0 border-1 distance-x-30">
            <div className="tab-pane">
            <button className="margin-left-30 rounded"> <a 
                className={
                  todosData === "active" ? activeClass : ""
                }
                href="/?todos=active"
              >
                Active
              </a></button>
            </div>
            <div className="tab-pane">
            <button className="margin-left-30 rounded"> <a
                className={
                  todosData === "completed" ? activeClass : ""
                }
                href="/?todos=completed"
              >
                Completed
              </a></button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Tabs;