import React from "react";

const ProjectTage = ({name, onClick, isSelected}) => {
    const buttonStyle = isSelected
    ? "text-black border-secondary-700 dark:text-white"
    :
    "text-black border-slate-600 dark:text-white"
    return(
        <button
        className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
        onClick={() => onClick(name)}>
           {name}</button>
    )
}

export default ProjectTage;