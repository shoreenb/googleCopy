const request = require("supertest");
const app = require("../app");

describe("api server", () => {
  let api;
  beforeAll(() => {
    api = app.listen(5000, () => {
      console.log("test 5000");
    });
  });

  test("it responds to get / with status 200", (done) => {
    request(api).get("/").expect(200, done);
  });

  test("it responds to get /results with status 200", (done) => {
    request(api).get("/results").expect(200, done);
  });

  test("it responds to delete /results with status 404", (done) => {
    request(api).delete("/results").expect(204, done);
  });

  afterAll((done) => {
    console.log("Gracefully stoppinf test server");
    api.close(done);
  });
});
