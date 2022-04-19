import request from "supertest";
import app from "../../../src/server";

describe("V1 routes", () => {
  it("/api/v1 responds with 200", (done) => {
    request(app).get("/api/v1/healthcheck").expect(200, done);
  });
});
