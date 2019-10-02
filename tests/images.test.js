const server = require('../server.js');
const request = require('supertest');
const db = require('../data/dbConfig.js');
const Database = require('../components/images/model')

const new_item = {
  image_name: "TEST",
  image_description: "TEST",
  thumbnail: false,
  image_project_id: 2
}

const edit_field = {
  image_name: "CHANGING"
}

describe("Images", () => {

  describe("Test endpoints/routes", () => {
    it("Get all", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get('/api/images/')
      expect(response.status).toBe(expectedStatusCode)
    })
    it("Create New", async () => {
      const expectedStatusCode = 201;
      const response = await request(server).post('/api/images/').send(new_item)
      expect(response.status).toBe(expectedStatusCode)
      expect(response.body.image_name).toBe(new_item.image_name)
      expect(response.body.image_description).toBe(new_item.image_description)
      new_item.image_id = response.body.image_id
    })
    it("Get the created one", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get(`/api/images/${new_item.image_id}`)
      expect(response.status).toBe(expectedStatusCode)
      expect(response.body.image_name).toBe(new_item.image_name)
      expect(response.body.image_description).toBe(new_item.image_description)
      expect(response.body.image_id).toBe(new_item.image_id)
    })
    it("Edit that one", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).put(`/api/images/${new_item.image_id}`).send(edit_field)
      expect(response.status).toBe(expectedStatusCode)
      expect(response.body.image_name).toBe(edit_field.image_name)
      expect(response.body.image_description).toBe(new_item.image_description)
      expect(response.body.image_id).toBe(new_item.image_id)
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
