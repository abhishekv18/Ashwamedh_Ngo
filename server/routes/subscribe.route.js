import express from "express";

import isAuthenticated from "../middleware/isAuthenticated.js";
import { addSubscribed, deleteSubscriber, getSubscribers } from "../controllers/subscribed.controller.js";
const router = express.Router();

router.route("/add").post(addSubscribed);
router.route("/get").get(isAuthenticated,getSubscribers);
router.route("/delete/:id").delete(isAuthenticated,deleteSubscriber);


export default router;