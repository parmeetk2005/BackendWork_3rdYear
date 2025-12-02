const user = require('./model/user.model'); 
const app = require('./server'); 
const request = require('supertest'); // api pe request bhejne k liye
jest.mock('./model/user.model'); // model ko mock kr diya
describe("POST /api/users/register",()=>{
    it("should return user already exits if email is parmeet@gmail.com", async ()=>{
        user.findOne.mockResolvedValueOnce(true);
        let response = await request(app).post("/api/users/register").send({
            name: "Parmeet Kaur",
            email: "parmeet@gmail.com",
            password: "1234"
        })
        expect(response.body.message).toBe("User already exists");
    })
    it("should create new user with email parmeet1234@gmail.com", async ()=>{
        user.findOne.mockResolvedValueOnce(false); // user exist nhi krta
        user.create.mockResolvedValueOnce({ // new user create krna hai
            name: "Parmeet Kaur",
            email: "parmeet1234@gmail.com",
            password: "1234"
        });
        let response = await request(app).post("/api/users/register").send({
            name: "Parmeet Kaur",
            email: "parmeet1234@gmail.com",
            password: "1234"
        });
        expect(response.body.message).toBe("User registered successfully");
        expect(response.body.data).toEqual({
            name: "Parmeet Kaur",
            email: "parmeet1234@gmail.com",
            password: "1234"
        })
    })
})
