# API Documentation

This document provides detailed information about the endpoints available in the API you created. Each endpoint is described with its path, HTTP method, request body (if applicable), and response format.

## Base URL

The base URL for all endpoints is `http://localhost:3000/api/`.

## Register User

- Path: `/signup`
- Method: `POST`
- Content-Type: `application/json`

**Request Body**

```json
{
  "email": "marcelos@mail.com",
  "password": "marcelo",
  "username": "rocha"
}
```

**Response**

```json
{
  "message": "user created with successful"
}
```

## User Login

- Path: `/signin`
- Method: `POST`
- Content-Type: `application/json`

**Request Body**

```json
{
  "email": "marcelo@mail.com",
  "password": "marcelo"
}
```

**Response**

```json
{
  "authToken": "<your_auth_token>",
  "id": "553670a6-823e-4c20-8b43-f534999e222f"
}
```

## Create Job

- Path: `/jobs`
- Method: `POST`
- Content-Type: `application/json`
- Auth Token Required

**Request Body**

```json
{
  "name": "Gusta",
  "description": "full stack"
}
```

**Response**

```json
{
  "id": "311e8557-85fc-4b32-9aa5-addd57320d99",
  "name": "Gusta",
  "description": "full stack",
  "createdAt": "2023-07-14T18:45:09.292Z",
  "updatedAt": "2023-07-14T18:45:09.292Z",
  "userId": "553670a6-823e-4c20-8b43-f534999e222f"
}
```

## Get All Jobs

- Path: `/jobs`
- Method: `GET`
- Auth Token Required

**Response**

```json
[
  {
    "id": "311e8557-85fc-4b32-9aa5-addd57320d99",
    "name": "Gusta",
    "description": "full stack",
    "createdAt": "2023-07-14T18:45:09.292Z",
    "updatedAt": "2023-07-14T18:45:09.292Z",
    "userId": "553670a6-823e-4c20-8b43-f534999e222f"
  },
  {
    "id": "12345678-abcd-efgh-ijkl-1234567890ab",
    "name": "Example Job",
    "description": "Example description",
    "createdAt": "2023-07-15T10:00:00.000Z",
    "updatedAt": "2023-07-15T10:00:00.000Z",
    "userId": "553670a6-823e-4c20-8b43-f534999e222f"
  }
  // Additional jobs...
]
```

## Get Jobs by User

- Path: `/jobs/:userId`
- Method: `GET`
- Auth Token Required

**Response**

```json
[
  {
    "id": "311e8557-85fc-4b32-9aa5-addd57320d99",
    "name": "Gusta",
    "description": "full stack",
    "createdAt": "2023-07-14T18:45:09.292Z",
    "updatedAt": "2023-07-14T18:45:09.292Z",
    "userId": "553670a6-823e-4c20-8b43-f534999e222f"
  },
  {
    "id": "87654321-abcd-efgh-ijkl-1234567890ab",
    "name": "Job 2",
    "description": "Another job description",
    "createdAt": "2023-07-15T11:00:00.000Z",
    "updatedAt": "2023-07-15T11:00:00.000Z",
    "userId": "553670a6-823e-4c20-8b43-f534999e222f"
  }
  // Additional jobs created by the user...
]
```

## Delete Job

- Path: `/user/jobs/delete/:id`
- Method: `DELETE`
- Auth Token Required

**Response**

```json
{
  "message": "Job deleted successfully"
}
```

## Update Job

- Path: `/user/jobs/update/:id`
- Method: `PUT`
- Content-Type: `application/json`
- Auth Token Required

**Request Body**

```json
{
  "name": "Updated Job",
  "description": "Updated job description"
}
```

**Response**

```json
{
  "id": "311e8557-85fc-4b32-9aa5-addd57320d99",
  "name": "Updated Job",
  "description": "Updated job description",
  "createdAt": "2023-07-14T18:45:09.292Z",
  "updatedAt": "2023-07-15T12:00:00.000Z",
  "userId": "553670a6-823e-4c20-8b43-f534999e222f"
}
```

## Apply to Job

- Path: `/jobs/apply/:jobId`
- Method: `POST`
- Content-Type: `application/json`

**Request Body**

```json
{
  "name": "rocha",
  "email": "marcelo.paladino01@gmail.com"
}
```

**Response**

```json
{
  "message": "Applied successfully"
}
```

## Delete Apply

- Path: `/user/jobs/application/:id`
- Method: `DELETE`
- Auth Token Required

**Response**

```json
{
  "message": "Application deleted successfully"
}
```

## Get All Apply for Job

- Path: `/user/jobs/:jobId`
- Method: `GET`
- Auth Token Required

**Response**

```json
[
  {
    "id": "abc123",
    "jobId": "311e8557-85fc-4b32-9aa5-addd57320d99",
    "userId": "553670a6-823e-4c20-8b43-f534999e222f",
    "createdAt": "2023-07-15T13:00:00.000Z",
    "updatedAt": "2023-07-15T13:00:00.000Z"
  }
  // Additional applications for the job...
]
```

Please note that all requests requiring an Auth Token should include it in the headers of the request. The Auth Token can be obtained through the register or login endpoints.
