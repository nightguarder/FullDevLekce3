# GET requests

- simple parameters and query examples

### Get All users

GET http://localhost:3000/users

```
[
  {
    "id": 1,
    "username": "cyrilS",
    "email": "cyril123@example.com",
    "name": "Cyril Steger"
  },
  {
    "id": 2,
    "username": "davidH",
    "email": "david123@example.com",
    "name": "David Hruška"
  },
  {
    "id": 3,
    "username": "rezidentS",
    "email": "rezident123@example.com",
    "name": "Rezident"
  }
]
```

### Get User by id

GET http://localhost:3000/users/1

```
{
  "id": 1,
  "username": "cyrilS",
  "email": "cyril123@example.com",
  "name": "Cyril Steger"
}
```

### Get User not found

GET http://localhost:3000/users/4

```
{
  "error": "User not found!"
}
```

### Get all blogs

GET http://localhost:3000/blogs

```
[
  {
    "id": 1,
    "title": "Clanek 1",
    "content": "Zalozeni blogu",
    "author": "Cyril",
    "username": "cyrilS",
    "categoryId": 1,
    "category": "Life",
    "date": "15.9.2023"
  },
  {
    "id": 2,
    "title": "Clanek 2",
    "content": "Návrh API",
    "author": "David",
    "username": "davidH",
    "categoryId": 2,
    "category": "Technologie",
    "date": "8.12.2023"
  },
  {
    "id": 3,
    "title": "Clanek 3",
    "content": "Investice v EU",
    "author": "Rezident",
    "username": "rezidentS",
    "categoryId": 3,
    "category": "Investice",
    "date": "10.12.2023"
  }
]
```

### Get blog post by author name

// Query example
GET http://localhost:3000/blogs/author/?author=Cyril

```
[
  {
    "id": 1,
    "title": "Clanek 1",
    "content": "Zalozeni blogu",
    "author": "Cyril",
    "username": "cyrilS",
    "categoryId": 1,
    "category": "Life",
    "date": "15.9.2023"
  }
]
```

### Get blog post from catergory name

GET http://localhost:3000/blogs/category?category=Life

```
[
  {
    "id": 3,
    "title": "Clanek 3",
    "content": "Investice v EU",
    "author": "Rezident",
    "username": "rezidentS",
    "categoryId": 3,
    "category": "Investice",
    "date": "10.12.2023"
  }
]
```