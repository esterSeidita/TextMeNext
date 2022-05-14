const BASE_URL = "https://edgemony-backend.herokuapp.com/";

export const GET = (type) =>
  fetch(`${BASE_URL}${type}`).then((res) => res.json());

export const POST = (type, content) =>
  fetch(`${BASE_URL}${type}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  }).then((res) => res.json());


export const UPDATE = (type, content) =>
  fetch(`${BASE_URL}${type}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  }).then((res) => res.json());

export const DELETE = (type) =>
  fetch(`${BASE_URL}${type}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
