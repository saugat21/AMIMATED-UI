import React from "react";
import { motion } from "framer-motion";

const App = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { delay: delay * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div className="bg-light py-5">
      <div className="text-start px-5 mb-5">
        <h3 className="text-Dark">
          Explore our classes and master trending skills!
        </h3>
        <h2 className="display-5 fw-bold text-Dark">
          Dive Into <span className="text-success">What's Hot Right Now!</span>{" "}
          🔥
        </h2>
      </div>

     
      <div className="container">
        <div className="row g-4">
          {/* All Courses Card */}
          <motion.div
            className="col-md-4"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div className="card text-white bg-danger h-100">
              <div className="card-body text-center">
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src="/react-icon.png"
                    alt="React"
                    className="me-2"
                    width="40"
                  />
                  <img
                    src="/vue-icon.png"
                    alt="Vue"
                    className="me-2"
                    width="40"
                  />
                  <img src="/design-icon.png" alt="Design" width="40" />
                </div>
                <h3 className="display-4 fw-bold">23+</h3>
                <p>All Courses</p>
                <p>courses you're powering through right now.</p>
                <a href="#" className="btn btn-light mt-3">
                  View all Courses →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Upcoming Courses Card */}
          <motion.div
            className="col-md-4"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div className="card bg-white text-danger border-danger h-100">
              <div className="card-body text-center">
                <h3 className="display-4 fw-bold">05+</h3>
                <p>Upcoming Courses</p>
                <p>exciting new courses waiting to boost your skills.</p>
              </div>
            </div>
          </motion.div>

          {/* Ongoing Courses Card */}
          <motion.div
            className="col-md-4"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div className="card bg-white text-danger border-danger h-100">
              <div className="card-body text-center">
                <h3 className="display-4 fw-bold">10+</h3>
                <p>Ongoing Courses</p>
                <p>currently happening—don’t miss out on the action!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default App;
