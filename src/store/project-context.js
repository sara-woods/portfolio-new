import React, { useState } from "react";

const ProjectContext = React.createContext({
  page: "1",
  handlePageChange: () => {},
  showFilterDropdown: false,
  showFilterHandler: () => {},
});

export const ProjectContextProvider = (props) => {
  const [page, setPage] = useState("1");
  const [showFilterDropdown, setFilterDropdown] = useState(false);

  const handlePageChange = (event) => {
    setPage(event.target.dataset.page);
    setFilterDropdown(false);
    document.querySelector(".scroll-anchor").scrollIntoView();
  };

  const showFilterHandler = (event) => {
    setFilterDropdown((prevState) => !prevState);
  };

  return (
    <ProjectContext.Provider
      value = 
        {{
          page: page,
          handlePageChange: handlePageChange,
          showFilterDropdown: showFilterDropdown,
          showFilterHandler: showFilterHandler,
        }}
    >
      {props.children}
    </ProjectContext.Provider>
    )
}

export default ProjectContext;