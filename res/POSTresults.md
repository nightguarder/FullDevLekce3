# POST
- Simple Post request to create a new user in fakeDb

### POST new user

POST http://localhost:3000/users/new  HTTP/1.1
```json
Content-Type: application/json
{
    "username": "guarderG",
    "email": "guarder.example.com",
    "name": "Young G"
}
```
- Result
```json
{
  "id": 4,
  "username": "guarderG",
  "email": "guarder.example.com",
  "name": "Young G"
}
```

- // TODO: Create a new blog post

POST http://localhost:3000/blogs/new HTTP/1.1
```json
Content-Type: application/json
{
  "id": 4,
  "author": "Nevim",
  "category": "Development",
  "content": "I have created an REST API blog example.",
  "title": "Rest API"
}
```
- Result

GET http://localhost:3000/blogs/search/4

```JSON
{
    "id": 4,
    "title": "Rest API",
    "content": "I have created an REST API blog example.",
    "author": "Young G",
    "username": "guarderG",
    "category": "Development",
    "date": "12/10/2023"
  }
]
```