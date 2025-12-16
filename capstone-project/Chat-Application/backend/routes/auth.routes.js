// import express from "express";
// const router = express.Router();
// import { signup, login, logout } from "../controllers/auth.controllers.js";


// router.post("/signup", signup);
// router.post("/login", login);
// router.post("/logout", logout);


// export default router;/

import express from "express";
import { signup, login, logout } from "../controllers/auth.controllers.js";

const router = express.Router();

// Register new user
router.post("/signup", signup);

// Login user
router.post("/login", login);

// Logout user
router.post("/logout", logout);

export default router;
