// id, pw, name
const memberData = [{
        id: 'user01',
        pw: '1111',
        name: '사용자1',
        responsibility: 'User'
    },
    {
        id: 'user02',
        pw: '2222',
        name: '사용자2',
        responsibility: 'User'
    },
    {
        id: 'user03',
        pw: '3333',
        name: '사용자3',
        responsibility: 'Admin'
    }
]

// pcode, pname, price
const productData = [{
        pcode: 'P001',
        pname: '사과',
        price: 2000,
        image: 'apple.jpg'
    },
    {
        pcode: 'P002',
        pname: '참외',
        price: 1500,
        image: 'koreamelon.jpg'
    },
    {
        pcode: 'P003',
        pname: '복숭아',
        price: 2500,
        image: 'peach.jpg'
    },
    {
        pcode: 'P004',
        pname: '수박',
        price: 5000,
        image: 'watermelon.jpg'
    },
    {
        pcode: 'P005',
        pname: '바나나',
        price: 1500,
        image: 'banana.jpg'
    },
    {
        pcode: 'P006',
        pname: '포도',
        price: 2500,
        image: 'grape.jpg'
    },
    {
        pcode: 'P007',
        pname: '망고',
        price: 3500,
        image: 'mango.jpg'
    }
]

// id, pcode, qty
const cartData = [{
        id: 'user01',
        pcode: 'P001',
        qty: 2
    },
    {
        id: 'user01',
        pcode: 'P002',
        qty: 3
    },
    {
        id: 'user02',
        pcode: 'P001',
        qty: 3
    }
]

// 객체의 정보를 활용해서 row 생성.
function makeRow(obj = {}) {
    let tr = document.createElement('tr');
    for (let prop in obj) {
    let td = document.createElement('td');
    td.innerHTML = obj[prop];
    tr.appendChild(td);
    }

    return tr;
}