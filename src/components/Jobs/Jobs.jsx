import React from "react";
import Card from "../Card/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Jobsingle from "../Jobsingle/Jobsingle";

let appliedJobs = [
  {
    applied: true,
    name: "Oracle",
    pending: false,
    hired: true,
    des: "We deliver items and happiness all over world.",
    emp: "1000+",
    location: "Noida, Uttar Pradesh",
    jobtype: "Frontend developer",
    where: "Office",
    stipend: "Rs. 20k - Rs. 40 | Plus Equity",
    time: "4 days ago",
    stage: 3,
  },
  {
    applied: true,
    name: "Shadi.com",
    pending: true,
    hired: true,
    des: "Forget Tinder and join Shadi.com , after all its India!",
    emp: "5000+",
    location: "Banglore",
    jobtype: "SDE + DevOps",
    where: "Office",
    stipend: "Rs. 14 Lpa | Plus Equity",
    time: "10 days ago",
    stage: 3,
  },
  {
    applied: true,
    name: "Push Notification",
    pending: false,
    hired: false,
    des: "We deliver items and happiness all over world.",
    emp: "100-120",
    location: "-",
    jobtype: "Backend developer",
    where: "Remote",
    stipend: "Rs. 60k | No Equity",
    time: "4 days ago",
    stage: 4,
  },
];

let searchJobs = [
  {
    applied: false,
    name: "Tvarit",
    pending: false,
    hired: false,
    des: "We provide employment to all those who are worthy",
    emp: "100+",
    location: "Mumbai",
    jobtype: "Software Engineer",
    where: "Office",
    stipend: "Rs. 16 Lpa | Plus Equity",
    time: "6 days ago",
    stage: 3,
  },
  {
    applied: false,
    name: "Veritas",
    pending: true,
    hired: false,
    des: "Veritas, here we provide facilities never seen before!",
    emp: "5000+",
    location: "Banglore",
    jobtype: "SDE + DevOps",
    where: "Office",
    stipend: "Rs. 14 Lpa | Plus Equity",
    time: "2 weeks ago",
    stage: 3,
  },
  {
    applied: false,
    name: "Push Notification",
    pending: false,
    hired: false,
    des: "We deliver items and happiness all over world.",
    emp: "100-120",
    location: "-",
    jobtype: "Backend developer",
    where: "Remote",
    stipend: "Rs. 60k | No Equity",
    time: "1 month ago",
    stage: 4,
  },
];
// import Sonnet from '../../components/Sonnet';
const Jobs = () => {
  console.log(appliedJobs);
  return (
    <div style={{ position: "sticky", top: "15px" }}>
      <Card>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "600",
            textTransform: "uppercase",
            marginBottom: "15px",
          }}
        >
          Jobs Portal
        </div>
        <Tabs
          defaultActiveKey="applied"
          transition={true}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="applied" title="Applied Jobs">
            {appliedJobs.map((e) => (
              <Jobsingle data={e} />
            ))}
          </Tab>
          <Tab eventKey="continue" title="Continue Search">
            {searchJobs.map((e) => (
              <Jobsingle data={e} />
            ))}
          </Tab>
        </Tabs>
      </Card>
    </div>
  );
};

export default Jobs;
