import { useParams } from "react-router";
import EMPLOYEE_DATA from "../Employee_data.json";
import "./ProjectData.css";
import image from "../assets/Pune.png";

function ProjectsData() {
  const { project_name } = useParams();

  const filterData = EMPLOYEE_DATA.filter((item) =>
    item.project_name.includes(project_name)
  );

  return (
    <>
      <div>
        <h2 className="h1">Project Name : {project_name}</h2>

        <div className="upper-body">
          <div className="body">
            {filterData.map((item) => {
              return (
                <div className="info-container">
                
                    <img src={item.profile_image} alt="image" />
                  <div>
                    <h1>{item.employee_first_name} {item.employee_last_name}</h1>
                    <p>{item.employee_email}</p>
                    <ul className="list-disc pl-5">
                      <li>{item.employee_work_location}</li>
                      <li>{item.employee_work_mode}</li>
                    </ul>
                  </div>
                    
                 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsData;
