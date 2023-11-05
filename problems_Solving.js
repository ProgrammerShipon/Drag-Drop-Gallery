const products = [
  {
    _id: 1,
    name: "Item 1",
    img: "https://i.ibb.co/q9zdgTD/image-3.webp",
  },
  {
    _id: 2,
    name: "Item 2",
    img: "https://i.ibb.co/WsTNF7v/image-4.webp",
  },
  {
    _id: 3,
    name: "Item 3",
    img: "https://i.ibb.co/qd4nry7/image-5.webp",
  },
  {
    _id: 4,
    name: "Item 4",
    img: "https://i.ibb.co/Qjq69Nx/image-6.webp",
  },
  {
    _id: 5,
    name: "Item 5",
    img: "https://i.ibb.co/cJgqpwJ/image-7.webp",
  },
  {
    _id: 6,
    name: "Item 6",
    img: "https://i.ibb.co/7zZppSf/image-8.webp",
  },
  {
    _id: 7,
    name: "Item 7",
    img: "https://i.ibb.co/7S7YSPD/image-9.webp",
  },
  {
    _id: 8,
    name: "Item 8",
    img: "https://i.ibb.co/4fdCCLm/image-10.jpg",
  },
  {
    _id: 9,
    name: "Item 9",
    img: "https://i.ibb.co/qD2QPGQ/image-11.jpg",
  },
  {
    _id: 10,
    name: "Item 10",
    img: "https://i.ibb.co/gTLjTTp/image-1.webp",
  },
  {
    _id: 11,
    name: "Item 11",
    img: "https://i.ibb.co/vZGn8z1/image-2.webp",
  },
];

const deletedId = [3, 5, 6];

const filtered = products.filter((product) => {
  const removeItem = deletedId.includes(product._id);
  return !removeItem;
});

// console.log("filtered ", filtered);

//---------------------------------
const idxObj = {
  _id: 8,
  name: "Item 8",
  img: "https://i.ibb.co/4fdCCLm/image-10.jpg",
};

const DroopSort = (lists, idx, obj) => {
  let filtered = [];
  lists.map((list, i) => {
    if (i == idx) {
      filtered = [...filtered, obj, list];
    } else {
      if (list._id != obj._id) {
        filtered = [...filtered, list];
      }
    }
  });

  return filtered;
};

console.log(DroopSort(products, 3, idxObj));
