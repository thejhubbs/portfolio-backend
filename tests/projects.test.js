const server = require('../server.js');
const request = require('supertest');
const db = require('../data/dbConfig.js');
const Database = require('../components/projects/model')

const new_item = {
  project_name: "TEST",
  project_description: "TEST"
}

const edit_field = {
  project_name: "CHANGING"
}

describe("Projects",  () => {

  describe("Test endpoints/routes", () => {
    it("Get all", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get('/api/projects/')
      expect(response.status).toBe(expectedStatusCode)
    })
    it("Create New", async () => {
      const expectedStatusCode = 201;
      const response = await request(server).post('/api/projects/').send(new_item)
      expect(response.status).toBe(expectedStatusCode)
      expect(response.body.project_name).toBe(new_item.project_name)
      expect(response.body.project_description).toBe(new_item.project_description)
      new_item.project_id = response.body.project_id
    })
    it("Get the created one", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get(`/api/projects/${new_item.project_id}`)
      expect(response.status).toBe(expectedStatusCode)
      expect(response.body.project_name).toBe(new_item.project_name)
      expect(response.body.project_description).toBe(new_item.project_description)
      expect(response.body.project_id).toBe(new_item.project_id)
    })
    it("Edit that one", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).put(`/api/projects/${new_item.project_id}`).send(edit_field)
      expect(response.status).toBe(expectedStatusCode)
      expect(response.body.project_name).toBe(edit_field.project_name)
      expect(response.body.project_description).toBe(new_item.project_description)
      expect(response.body.project_id).toBe(new_item.project_id)
    })
  })

  describe("Test database", () => {
  })

})


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
