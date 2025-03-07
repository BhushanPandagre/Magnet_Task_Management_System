// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import "./Register.css"; // Updated CSS file

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [input, setInput] = useState({
//     name: "",
//     email: "",
//     password: "",
//     title: "",
//     isAdmin: false,
//   });

//   const isAdmin = useSelector((state) => state.isAdmin);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInput({ ...input, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/user/register",
//         input
//       );
//       toast.success(response.data.message);

//       setInput({
//         name: "",
//         email: "",
//         password: "",
//         title: "",
//         isAdmin: false,
//       });
//       navigate("/login");
//     } catch (err) {
//       console.log(err);
//       toast.error(err.response.data.message);
//     }
//   };

//   if (!isAdmin) {
//     navigate("/");
//     return null;
//   }

//   return (
//     <div className="add-employee-container">
//       <section className="add-employee-box">
//         <h3 className="add-employee-title">Register</h3>
//         <form className="add-employee-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label className="form-label">Name</label>
//             <input
//               type="text"
//               name="name"
//               minLength="1"
//               maxLength="50"
//               value={input.name}
//               onChange={handleChange}
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={input.email}
//               onChange={handleChange}
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={input.title}
//               onChange={handleChange}
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Make Admin?</label>
//             <select
//               name="isAdmin"
//               value={input.isAdmin}
//               onChange={handleChange}
//               className="form-select"
//             >
//               <option value={false}>No</option>
//               <option value={true}>Yes</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label className="form-label">Password</label>
//             <div className="password-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={input.password}
//                 onChange={handleChange}
//                 className="form-input"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="toggle-password-btn"
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//           </div>
//           <div className="form-btn-container">
//             <button className="form-btn" type="submit">
//               Create User
//             </button>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Register;
