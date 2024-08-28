import express from "express";
import bodyParser from "body-parser";
import { users } from "../model/index.js";
const userRouter = express.Router();

userRouter.use(bodyParser.json());

//fetch users
userRouter.get('/', (req, res) => {
    users.FetchUsers(req, res);
});

//fetch a user
userRouter.get('/:id', (req, res) => {
    users.FetchUser(req, res);
});

//register a new user
userRouter.post('/register', (req, res) => {
    users.RegisterUser(req, res);
});

//update a user
userRouter.patch('/:id', (req, res) => {
    users.UpdateUser(req, res);
});

//delete a user
userRouter.delete('/:id', (req, res) => {
    users.DeleteUser(req, res);
});

// Route for user login
userRouter.post('/login', (req, res) => {
    users.Login(req, res);
});

export {
    express,
    userRouter
};
