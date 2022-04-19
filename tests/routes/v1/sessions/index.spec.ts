import request from "supertest";
import app from "../../../../src/server";

describe("Sessions routes", () => {
  it("/api/v1/sessions responds with 200", (done) => {
    request(app).get("/api/v1/sessions").expect(200, done);
  });
});
