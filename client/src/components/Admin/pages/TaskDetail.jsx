import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const TaskDetail = () => {
  const [input, setInput] = useState({});
  const [user, setUser] = useState();
  const { _id } = useParams();
  const isAdmin = useSelector((state) => state.isAdmin);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/task/gettask/?_id=${_id}`
      );
      setInput(res.data[0]);
      setUser(res.data[0].assign.name);
    } catch (err) {
      console.log(err);
    }
  };

  if (!isAdmin) {
    navigate("/");
    return null;
  }

  return (
    <div className="task-card-container">
      <section className="task-card-section">
        <div className="task-card">
          <h3 className="task-title">{input.title}</h3>
          <div className="task-details">
            <p>
              <span className="icon">📝</span> <strong>Description:</strong>{" "}
              {input.description}
            </p>
            <p>
              <span className="icon">👤</span> <strong>Assigned To:</strong>{" "}
              {user}
            </p>
            <p>
              <span className="icon">⚡</span> <strong>Priority:</strong>{" "}
              {input.priority}
            </p>
            <p>
              <span className="icon">🔄</span> <strong>Status:</strong>{" "}
              {input.status}
            </p>
            <p>
              <span className="icon">📅</span> <strong>Start Date:</strong>{" "}
              {input.startdate}
            </p>
            <p>
              <span className="icon">⏰</span> <strong>End Date:</strong>{" "}
              {input.enddate}
            </p>
          </div>
          <button className="back-button" onClick={() => navigate(-1)}>
            🔙 Back
          </button>
        </div>
      </section>

      {/* Styles */}
      <style>
        {`
          /* Container */
          .task-card-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
          }

          /* Task Card Section */
          .task-card-section {
            width: 100%;
            max-width: 700px;
          }

          /* Task Card */
          .task-card {
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            padding: 25px;
            text-align: left;
            transition: box-shadow 0.3s ease, transform 0.2s ease;
          }

          .task-card:hover {
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            transform: translateY(-3px);
          }

          /* Task Title */
          .task-title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 15px;
            color: #2d2d2d;
          }

          /* Task Details */
          .task-details p {
            font-size: 16px;
            margin: 10px 0;
            color: #444;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .task-details strong {
            font-weight: 600;
            color: #222;
          }

          /* Back Button */
          .back-button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          .back-button:hover {
            background-color: #0056b3;
            transform: scale(1.05);
          }

          /* Icons */
          .icon {
            font-size: 18px;
            color: #007bff;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .task-card {
              padding: 20px;
            }
            .task-title {
              font-size: 22px;
            }
            .task-details p {
              font-size: 15px;
            }
            .back-button {
              font-size: 13px;
              padding: 8px 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TaskDetail;
