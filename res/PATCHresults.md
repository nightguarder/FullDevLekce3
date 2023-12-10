# PATCH 
- Simple example to change author of blog with id 2
```json
{
  "id": 2,
  "title": "Clanek 2",
  "content": "Návrh API",
  "author": "David",
  "username": "davidH",
  "categoryId": 2,
  "category": "Technologie",
  "date": "8.12.2023"
}
```
### PATCH blog author

PATCH http://localhost:3000/blogs/2/author HTTP/1.1
Content-Type: application/json

{
    "newAuthor": "Cyril"
}

```
{
  "message": "Author of the blog updated successfully."
}
```

### Result:

- found modified blog

GET http://localhost:3000/blogs/2

```
{
  "id": 2,
  "title": "Clanek 2",
  "content": "Návrh API",
  "author": "Cyril",
  "username": "davidH",
  "categoryId": 2,
  "category": "Technologie",
  "date": "8.12.2023"
}

```
