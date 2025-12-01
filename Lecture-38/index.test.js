const app = require("./index");
const request = require("supertest");

describe("POST /sum", (req, res)=>{
    it("should return addition of two numbers",async()=>{ // write either test or it
        let response = await request(app).post("/sum").send({
            a: 2,
            b: 3
        })
        expect(response.body.data).toBe(5);
    })
    it("should return all arguments must be passed",async ()=>{
        let response = await request(app).post("/sum").send({
            a: 2
        })
        expect(response.body.message).toBe("invalid argument");
    })
    /* (response.body.data)
    response = {
        body:{
            api response
        }
    }
    */
})
