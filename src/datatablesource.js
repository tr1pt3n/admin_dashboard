export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "danhmuc",
    headerName: "Danh mục",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.name} 
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const itemsColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "thanhphandanhmuc",
    headerName: "Thành phần danh mục",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.itemName} 
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const dishesColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "monan",
    headerName: "Các món ăn",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.dishName} 
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
//temporary data

export const DATA = [
  {
    id: 1,
    name: 'Cá',
    items: [
      {
        id: 1,
        itemName: 'Cá Rô',
        dishes: 
        [
          {
            id: 1,
            dishName: 'Cá Rô chiên giòn',
            price: 10000,
          },
          {
            id: 2,
            dishName: 'Cá Rô nướng',
            price: 20000,
          }
        ]
      },
      {
        id: 2,
        itemName: 'Cá Trê',
        dishes: 
        [
          {
            id: 1,
            dishName: 'Cá Trê chiên giòn',
            price: 10000,
          },
          {
            id: 2,
            dishName: 'Cá Trê nướng',
            price: 30000,
          }
        ]
      }
    ]
  }, 
  {
    id: 2,
    name: 'Cua',
    items: 
    [
      {
        id: 1,
        itemName: 'Cua Gạch',
        dishes: 
        [
          {
            id: 1,
            dishName: 'Cua Gạch hấp',
            price: 100000,
          },
          {
            id: 2,
            dishName: 'Cua Gạch nướng',
            price: 150000,
          }
        ]
      },
      {
        id: 2,
        itemName: 'Cua Alaska',
        dishes:
        [
          {
            id: 1,
            dishName: 'Cua Alaska hấp',
            price: 200000,
          },
          {
            id: 2,
            dishName: 'Cua Alaska nướng',
            price: 250000,
          }
        ]
      }
    ]
  }
]
