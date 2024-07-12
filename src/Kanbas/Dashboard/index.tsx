export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/neu-bridge.jpeg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5610
              </a>
              <p className="wd-dashboard-course-title">
                Web Development
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> CS5004 </a>
              <p className="wd-dashboard-course-title">
                Object Oriented Design
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> CS5200 </a>
              <p className="wd-dashboard-course-title">
                Database Management Systems
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> CS5500 </a>
              <p className="wd-dashboard-course-title">
                Fouondations of Software Engineering
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> CS5800 </a>
              <p className="wd-dashboard-course-title">
                Algorythms
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> CS5002 </a>
              <p className="wd-dashboard-course-title">
                Discrete Structures
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> ENCP6000 </a>
              <p className="wd-dashboard-course-title">
                Career Management for Engineers
              </p>
            </div>
          </div>
        </div>
      </div>
  );}
  