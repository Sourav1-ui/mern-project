import express from "express";
import { createUser, deleteUser, getAllUser, getOneUser, updateUser } from "../controller/UserControllers.js";
const router=express.Router()

router.post("/create",createUser)
router.get("/getall",getAllUser)
router.get("/getone/:id",getOneUser)
router.put("/update/:id",updateUser)
router.delete("/delete/:id",deleteUser)

export default router