const fakeDB = {
    users: [
        { id: 1, username: 'cyrilS', email: 'cyril123@example.com',name: 'Cyril Steger' },
        { id: 2, username: 'davidH', email: 'david123@example.com',name: 'David Hruška' },
        { id: 3, username: 'rezidentS', email: 'rezident123@example.com', name: 'Rezident'},
    ],
    categories: [
        { id: 1, name: 'Life',blogs: '1' },
        { id: 2, name: 'Technologie',blogs: '1', },
        { id: 3, name: 'Investice', blogs: '1' },
    ],
    blogs: [
        { id: 1, title: 'Clanek 1', content: 'Zalozeni blogu', author: 'Cyril',username:'cyrilS', categoryId: 1,category: "Life", date: "15.9.2023" },
        { id: 2, title: 'Clanek 2', content: 'Návrh API', author: 'David', username:'davidH',categoryId: 2, category: "Technologie",date: "8.12.2023"},
        { id: 3, title: 'Clanek 3', content: 'Investice v EU', author: 'Rezident',username:'rezidentS', categoryId: 3, category: "Investice",date: "10.12.2023" },
    ]
};

module.exports = {fakeDB};