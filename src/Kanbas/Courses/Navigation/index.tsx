import { useParams } from "react-router";
import { courses } from "../../Database";
import "./index.css";
import { Link, useLocation } from "react-router-dom";


export default function CoursesNavigation() {
    const { cid } = useParams();
    const course = courses.find((course) => course._id.toLowerCase() === cid);
    const { pathname } = useLocation();
    const links = [
        { label: "Home", path: "Home" },
        { label: "Modules", path: "Modules" },
        { label: "Piazza", path: "Piazza" },
        { label: "Zoom", path: "Zoom" },
        { label: "Assignments", path: "Assignments" },
        { label: "Quizzes", path: "Quizzes" },
        { label: "Grades", path: "Grades" },
      ];
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">

{links.map((link) => (
        <a
          key={link.path}
          href={`#/Kanbas/Courses/${course?._id}/${link.path}`}
          className={`list-group-item border border-0 ${
            pathname.includes(link.path) ? "active" : "text-danger"
          }`}
        >
          {link.label}
        </a>
      ))}
    </div>

  );
}
