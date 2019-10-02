const server = require('../server.js');
const request = require('supertest');
const db = require('../data/dbConfig.js');
const Database = require('../components/technologies/model')

const new_item = {
  technology_name: "TEST",
  technology_experience: "TEST",
  technology_hex_color: "#fff"
}

const edit_field = {
  technology_name: "CHANGING"
}

describe("Technologies", () => {

  describe("Test endpoints/routes", () => {
    it("Get all", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get('/api/technologies/')
      expect(response.status).toBe(expectedStatusCode)
    })
    it("Create New", async () => {
      const expectedStatusCode = 201;
      const response = await request(server).post('/api/technologies/').send(new_item)
      expect(response.status).toBe(expectedStatusCode)
      expect(response.body.technology_name).toBe(new_item.technology_name)
      expect(response.body.technology_experience).toBe(new_item.technology_experience)
      new_item.technology_id = response.body.technology_id
    })
    it("Get the created one", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get(`/api/technologies/${new_item.technology_id}`)
      expect(response.status).toBe(expectedStatusCode)
      expect(response.body.technology_name).toBe(new_item.technology_name)
      expect(response.body.technology_experience).toBe(new_item.technology_experience)
      expect(response.body.technology_id).toBe(new_item.technology_id)
    })
    it("Edit that one", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).put(`/api/technologies/${new_item.technology_id}`).send(edit_field)
      expect(response.status).toBe(expectedStatusCode)
      expect(response.body.technology_name).toBe(edit_field.technology_name)
      expect(response.body.technology_experience).toBe(new_item.technology_experience)
      expect(response.body.technology_id).toBe(new_item.technology_id)
    })
  })

  describe("Test database", () => {
  })

})



    //
    // const expectedStatusCode = 201;
    // const response = await request(server).post('/api/teachers/register').send(new_user);
    // expect(response.status).toBe(expectedStatusCode);




        //
        // const expectedStatusCode = 201;
        // //Login
        // const response = await request(server).post('/api/teachers/login').send(good_cred);
        // expect(response.status).toBe(expectedStatusCode);
        // //Call it first time
        // const score1 = await request(server).post('/api/scores/start').set('Authorization', response.body.token)
        // expect(score1.status).toBe(201)
        // const s1_id = score1.body.score_id
        // //Call it the second time
        // const score2 = await request(server).post('/api/scores/start').set('Authorization', response.body.token)
        // expect(score2.status).toBe(201)
        // const s2_id = score2.body.score_id
        // //Make sure the ids are the same
        // expect(s1_id).toBe(s2_id)
        //
        //
        //
