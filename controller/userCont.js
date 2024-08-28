import express from "express";
import bodyParser from "body-parser";
import { usersFunc } from "../model/index.js";
const userRouter = express.Router();

userRouter.use(bodyParser.json());

//fetch users
userRouter.get('/', (req, res) => {
    usersFunc.FetchUsers(req, res);
});

//fetch a user
userRouter.get('/:id', (req, res) => {
    usersFunc.FetchUser(req, res);
});

//register a new user
userRouter.post('/register', (req, res) => {
    usersFunc.RegisterUser(req, res);
});

//update a user
userRouter.patch('/:id', (req, res) => {
    usersFunc.UpdateUser(req, res);
});

//delete a user
userRouter.delete('/:id', (req, res) => {
    usersFunc.DeleteUser(req, res);
});

// Route for user login
userRouter.post('/login', (req, res) => {
    usersFunc.Login(req, res);
});

export {
    express,
    userRouter,
};
