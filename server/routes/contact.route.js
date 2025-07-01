import express from "express";
import { addContact,getContacts,deleteContact } from "../controllers/contact.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.route("/add").post(addContact);
router.route("/get").get(isAuthenticated,getContacts);

router.route("/delete/:id").delete(isAuthenticated,deleteContact);


export default router;