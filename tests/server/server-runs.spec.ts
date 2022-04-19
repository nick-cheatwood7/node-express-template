import request from "supertest";
import app from "../../src/server";

describe("Server checks", () => {
  it("server is created without error", (done) => {
    request(app).get("/").expect(404, done); // Default response is 404, which is OK in this case
  });
});
