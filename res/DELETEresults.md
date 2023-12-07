# DELETE
- Delete request to our fakeDb and return '204 No Content'

### DELETE user with id 4

DELETE http://localhost:3000/users/4 HTTP/1.1

```
HTTP/1.1 204 No Content
X-Powered-By: Express
Date: Thu, 07 Dec 2023 23:28:00 GMT
Connection: close
```

### DELETE blog post id 3

DELETE http://localhost:3000/blogs/3

```
{
  "message": "Blog deleted successfully."
}
```