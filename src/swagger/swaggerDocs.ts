import { SwaggerOptions } from "swagger-ui-express";
import dotenv from "dotenv";

dotenv.config()

const port=process.env.PORT || "8080"

const swaggerDocs: SwaggerOptions = {
  openapi: "3.0.0",
  info: {
    title: "UserAPI",
    version: "1.0.0",
    description: "API for Manage User Table",
  },
  servers: [
    {
      url: "http://localhost:"+port,
    },
  ],
  paths: {
    "/users": {
      get: {
        summary: "Get all users",
        responses: {
          200: {
            description: "List of all users",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string" },
                      email: { type: "string" },
                      age: { type: "integer" },
                      name: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: "Create a new user",
        description: "Creates a new user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "Name of the user",
                  },
                  email: {
                    type: "string",
                    description: "Email address of the user",
                  },
                  age: {
                    type: "integer",
                    description: "Age of the user",
                  },
                },
                required: ["name", "email", "age"], // Required for POST
              },
            },
          },
        },
        responses: {
          201: {
            description: "User created successfully",
          },
          400: {
            description: "Bad request",
          },
        },
      },
      
    },
    "/users/{id}": { 
      get: { 
        summary: "Get a single user",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the user to retrieve",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "User found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                    properties: {
                      id: { type: "string" },
                      email: { type: "string" },
                      age: { type: "integer" },
                      name: { type: "string" },
                    },
                },
              },
            },
          },
          404: {
            description: "User not found",
          },
        },
      },
      put: {
        summary: "Update an existing user",
        description: "Updates an existing user with the provided information.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the user to update",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "Name of the user",
                  },
                  email: {
                    type: "string",
                    description: "Email address of the user",
                  },
                  age: {
                    type: "integer",
                    description: "Age of the user",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "User updated successfully",
          },
          404: {
            description: "User not found",
          },
          400: {
            description: "Bad request",
          },
        },
      },
      delete: {
        summary: "Delete a user",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the user to delete",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "User deleted successfully",
          },
          404: {
            description: "User not found",
          },
        },
      },
    },
  },
};

export default swaggerDocs;