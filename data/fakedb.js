const fakeDB = {
    users: [
        { id: 1, username: 'cyrilS', email: 'cyril123@example.com' },
        { id: 2, username: 'davidH', email: 'david123@example.com' },
        { id: 3, username: 'NolanC', email: 'nolan123@example.com' },
    ],
    categories: [
        { id: 1, name: 'Life' },
        { id: 2, name: 'Technologie' },
        { id: 3, name: 'Investice' },
    ],
    articles: [
        { id: 1, title: 'Clanek 1', content: 'Zalozeni blogu', JmenoAutora: 'Cyril',username:'davidH', categoryId: 1 },
        { id: 2, title: 'Clanek 2', content: 'Návrh API', JmenoAutora: 'David', username:'cyrilS',categoryId: 2 },
        { id: 3, title: 'Clanek 3', content: 'Investice v EU', JmenoAutora: 'Nolan',username:'NolanC', categoryId: 3 },
    ],
};