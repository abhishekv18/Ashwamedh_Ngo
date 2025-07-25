import express from "express";
import { addVolunteer,deleteVolunteer,getVolunteers } from "../controllers/volunteer.controller.js";
// import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

// router.route("/add").post(addVolunteer);
// router.route("/get").get(isAuthenticated,getVolunteers);
// router.route("/delete/:id").delete(isAuthenticated,deleteVolunteer);

router.route("/add").post(addVolunteer);
router.route("/get").get(getVolunteers);
router.route("/delete/:id").delete(deleteVolunteer);

export default router;