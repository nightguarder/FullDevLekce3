# POST
- Simple Post request to create a new user in fakeDb

### POST new user

POST http://localhost:3000/users  HTTP/1.1
Content-Type: application/json

{
    "username": "guarderG",
    "email": "guarder.example.com",
    "name": "Young G"
}

```
{
  "id": 4,
  "username": "guarderG",
  "email": "guarder.example.com",
  "name": "Young G"
}
```

- // TODO: Create a new blog post

POST http://localhost:3000/blogs HTTP/1.1