import request from "supertest";
import app from "../src/app";
import { faker } from "@faker-js/faker";

async function generateRandomUser() {
  const name = await faker.person.fullName();
  const email =
    (await faker.word.interjection({ length: 10 })) +
    "@" +
    faker.word.interjection({ length: 5 }) +
    ".com";
  const age = await faker.number.int({ min: 2, max: 100 });
  return {
    name,
    email,
    age,
  };
}

describe("User API", () => {
  let server: any;

  beforeAll(async () => {
    server = app.listen(3000);
    await new Promise((resolve) => server.on("listening", resolve));
  });

  afterAll(async () => {
    await new Promise((resolve) => server.close(resolve));
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("check get all user", async () => {
    const response = await request(app).get("/users").expect(200);
    expect(response.body).toBeInstanceOf(Object);
  });
  let data: any;
  it("create new user", async () => {
    const dataNewUser = await generateRandomUser();
    console.log(dataNewUser);
    const response = await request(app)
      .post("/users")
      .send(dataNewUser)
      .expect(201);
    data = response.body.data;
    expect(response.body).toHaveProperty("data.id");
  });
  it("find one user by id", async () => {
    // console.log(data.id)
    const response = await request(app)
      .get("/users/" + data.id)
      .expect(200);
    // console.log(response.body.data)
    expect(response.body.data.id).toEqual(data.id);
  });
  it("update user", async () => {
    const dataUpdateUser = {
      name: "update" + data.name,
      email: "update" + data.email,
      age: data.age,
    };
    const response = await request(app)
      .put("/users/" + data.id)
      .send(dataUpdateUser)
      .expect(200);
    data = response.body.data;
    expect(response.body.data.name).toEqual(dataUpdateUser.name);
  });
  it("deleting user", async () => {
    const response = await request(app)
      .delete("/users/" + data.id)
      .expect(204);
  });
});
