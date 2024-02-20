// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'test@test.com',
    password: 'test123',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 203578,
    status: "paid",
    date: "2022-06-25"
},
{
  customer_id: customers[3].id,
  amount: 678938,
  status: "paid",
  date: "2023-12-20"
},
{
  customer_id: customers[2].id,
  amount: 2089874,
  status: "paid",
  date: "2023-12-13"
},
{
    customer_id: customers[1].id,
    amount: 1519538,
    status: "paid",
    date: "2023-08-24"
},
{
    customer_id: customers[2].id,
    amount: 1031081,
    status: "paid",
    date: "2022-10-25"
},
{
    customer_id: customers[3].id,
    amount: 1297976,
    status: "paid",
    date: "2022-08-21"
},
{
    customer_id: customers[4].id,
    amount: 844372,
    status: "paid",
    date: "2023-04-21"
},
{
    customer_id: customers[5].id,
    amount: 486593,
    status: "paid",
    date: "2023-05-02"
},
{
    customer_id: customers[6].id,
    amount: 1390336,
    status: "paid",
    date: "2022-05-28"
},
{
    customer_id: customers[7].id,
    amount: 1631799,
    status: "paid",
    date: "2023-08-30"
},
{
    customer_id: customers[8].id,
    amount: 1860038,
    status: "paid",
    date: "2022-04-30"
},
{
    customer_id: customers[9].id,
    amount: 177973,
    status: "paid",
    date: "2022-12-22"
},
{
    customer_id: customers[8].id,
    amount: 866195,
    status: "paid",
    date: "2022-07-21"
},
{
    customer_id: customers[4].id,
    amount: 1163260,
    status: "paid",
    date: "2023-03-06"
},
{
    customer_id: customers[4].id,
    amount: 1484750,
    status: "pending",
    date: "2022-06-22"
},
{
    customer_id: customers[6].id,
    amount: 471643,
    status: "pending",
    date: "2022-06-14"
},
{
    customer_id: customers[4].id,
    amount: 1265843,
    status: "pending",
    date: "2022-12-07"
},
{
    customer_id: customers[0].id,
    amount: 1667173,
    status: "pending",
    date: "2022-05-24"
},
{
    customer_id: customers[0].id,
    amount: 212896,
    status: "paid",
    date: "2022-07-24"
},
{
    customer_id: customers[9].id,
    amount: 1711657,
    status: "pending",
    date: "2022-10-13"
},
{
    customer_id: customers[8].id,
    amount: 1410458,
    status: "paid",
    date: "2022-12-21"
},
{
    customer_id: customers[9].id,
    amount: 1122235,
    status: "paid",
    date: "2023-05-21"
},
{
    customer_id: customers[3].id,
    amount: 139993,
    status: "pending",
    date: "2022-12-26"
},
{
    customer_id: customers[6].id,
    amount: 1890460,
    status: "paid",
    date: "2022-10-24"
},
{
    customer_id: customers[4].id,
    amount: 1956715,
    status: "pending",
    date: "2023-10-01"
},
{
    customer_id: customers[2].id,
    amount: 1612955,
    status: "paid",
    date: "2022-08-11"
},
{
    customer_id: customers[3].id,
    amount: 1656421,
    status: "paid",
    date: "2022-08-20"
},
{
    customer_id: customers[7].id,
    amount: 1281898,
    status: "paid",
    date: "2022-07-04"
},
{
    customer_id: customers[0].id,
    amount: 714604,
    status: "pending",
    date: "2022-05-31"
},
{
    customer_id: customers[5].id,
    amount: 1266704,
    status: "paid",
    date: "2023-11-07"
},
{
    customer_id: customers[4].id,
    amount: 1637393,
    status: "paid",
    date: "2023-11-13"
},
{
    customer_id: customers[5].id,
    amount: 225847,
    status: "pending",
    date: "2023-01-24"
},
{
    customer_id: customers[7].id,
    amount: 1495426,
    status: "paid",
    date: "2023-07-13"
},
{
    customer_id: customers[0].id,
    amount: 1289351,
    status: "paid",
    date: "2023-06-16"
},
{
    customer_id: customers[4].id,
    amount: 1171971,
    status: "paid",
    date: "2023-08-07"
},
{
    customer_id: customers[3].id,
    amount: 1746335,
    status: "paid",
    date: "2023-02-06"
},
{
    customer_id: customers[8].id,
    amount: 392315,
    status: "pending",
    date: "2022-03-31"
},
{
    customer_id: customers[3].id,
    amount: 1705287,
    status: "paid",
    date: "2023-08-22"
},
{
    customer_id: customers[1].id,
    amount: 690063,
    status: "pending",
    date: "2023-08-25"
},
{
    customer_id: customers[8].id,
    amount: 1370400,
    status: "paid",
    date: "2022-05-28"
},
{
    customer_id: customers[5].id,
    amount: 451152,
    status: "paid",
    date: "2023-04-21"
},
{
    customer_id: customers[6].id,
    amount: 741494,
    status: "pending",
    date: "2023-08-08"
},
{
    customer_id: customers[8].id,
    amount: 1267967,
    status: "paid",
    date: "2023-03-23"
},
{
    customer_id: customers[2].id,
    amount: 842348,
    status: "pending",
    date: "2022-07-13"
},
{
    customer_id: customers[7].id,
    amount: 1656425,
    status: "paid",
    date: "2022-03-02"
},
{
    customer_id: customers[1].id,
    amount: 320498,
    status: "paid",
    date: "2023-07-27"
},
{
    customer_id: customers[8].id,
    amount: 526934,
    status: "pending",
    date: "2023-03-27"
},
{
    customer_id: customers[7].id,
    amount: 200992,
    status: "paid",
    date: "2023-09-24"
},
{
    customer_id: customers[9].id,
    amount: 1898470,
    status: "pending",
    date: "2022-06-30"
},
{
    customer_id: customers[7].id,
    amount: 53030,
    status: "paid",
    date: "2023-04-12"
},
{
    customer_id: customers[1].id,
    amount: 1034593,
    status: "paid",
    date: "2022-09-02"
},
{
    customer_id: customers[7].id,
    amount: 72240,
    status: "pending",
    date: "2022-10-16"
},
{
    customer_id: customers[2].id,
    amount: 1821523,
    status: "paid",
    date: "2022-09-22"
},
{
    customer_id: customers[9].id,
    amount: 1336908,
    status: "paid",
    date: "2022-12-14"
},
{
    customer_id: customers[2].id,
    amount: 1850845,
    status: "pending",
    date: "2022-12-30"
},
{
    customer_id: customers[9].id,
    amount: 567457,
    status: "pending",
    date: "2023-11-08"
},
{
    customer_id: customers[8].id,
    amount: 171914,
    status: "pending",
    date: "2022-03-28"
},
{
    customer_id: customers[7].id,
    amount: 1472784,
    status: "pending",
    date: "2023-03-07"
},
{
    customer_id: customers[0].id,
    amount: 747818,
    status: "pending",
    date: "2022-02-28"
},
{
    customer_id: customers[0].id,
    amount: 795095,
    status: "pending",
    date: "2022-08-12"
},
{
    customer_id: customers[3].id,
    amount: 1060126,
    status: "pending",
    date: "2022-06-03"
},
{
    customer_id: customers[4].id,
    amount: 1318560,
    status: "pending",
    date: "2023-05-05"
},
{
    customer_id: customers[8].id,
    amount: 1859301,
    status: "paid",
    date: "2022-03-28"
},
{
    customer_id: customers[1].id,
    amount: 1657484,
    status: "pending",
    date: "2022-10-13"
},
{
    customer_id: customers[6].id,
    amount: 784583,
    status: "pending",
    date: "2022-09-05"
},
{
    customer_id: customers[1].id,
    amount: 1487650,
    status: "paid",
    date: "2022-03-24"
},
{
    customer_id: customers[0].id,
    amount: 363774,
    status: "paid",
    date: "2022-11-10"
},
{
    customer_id: customers[6].id,
    amount: 326544,
    status: "paid",
    date: "2022-07-09"
},
{
    customer_id: customers[7].id,
    amount: 776579,
    status: "pending",
    date: "2022-05-13"
},
{
    customer_id: customers[2].id,
    amount: 736351,
    status: "pending",
    date: "2023-09-22"
},
{
    customer_id: customers[2].id,
    amount: 475316,
    status: "paid",
    date: "2023-04-30"
},
{
    customer_id: customers[2].id,
    amount: 1439910,
    status: "paid",
    date: "2022-01-14"
},
{
    customer_id: customers[4].id,
    amount: 1133430,
    status: "paid",
    date: "2022-02-10"
},
{
    customer_id: customers[4].id,
    amount: 1539080,
    status: "paid",
    date: "2022-11-29"
},
{
    customer_id: customers[1].id,
    amount: 1682498,
    status: "paid",
    date: "2022-01-09"
},
{
    customer_id: customers[7].id,
    amount: 1383903,
    status: "pending",
    date: "2022-11-20"
},
{
    customer_id: customers[7].id,
    amount: 1778056,
    status: "paid",
    date: "2023-09-30"
},
{
    customer_id: customers[5].id,
    amount: 1033652,
    status: "paid",
    date: "2022-05-03"
},
{
    customer_id: customers[8].id,
    amount: 574215,
    status: "pending",
    date: "2023-11-08"
},
{
    customer_id: customers[6].id,
    amount: 71357,
    status: "paid",
    date: "2023-01-25"
},
{
    customer_id: customers[0].id,
    amount: 1858944,
    status: "pending",
    date: "2023-11-13"
},
{
    customer_id: customers[0].id,
    amount: 846713,
    status: "pending",
    date: "2022-12-07"
},
{
    customer_id: customers[7].id,
    amount: 1361898,
    status: "paid",
    date: "2023-04-20"
},
{
    customer_id: customers[4].id,
    amount: 995631,
    status: "pending",
    date: "2023-06-05"
},
{
    customer_id: customers[3].id,
    amount: 1960775,
    status: "pending",
    date: "2022-02-16"
},
{
    customer_id: customers[0].id,
    amount: 737760,
    status: "pending",
    date: "2022-01-10"
},
{
    customer_id: customers[2].id,
    amount: 463196,
    status: "pending",
    date: "2022-09-07"
},
{
    customer_id: customers[4].id,
    amount: 1495547,
    status: "paid",
    date: "2022-10-11"
},
{
    customer_id: customers[6].id,
    amount: 898688,
    status: "pending",
    date: "2022-08-05"
},
{
    customer_id: customers[1].id,
    amount: 1132410,
    status: "paid",
    date: "2023-10-21"
},
{
    customer_id: customers[0].id,
    amount: 1309174,
    status: "paid",
    date: "2022-07-02"
},
{
    customer_id: customers[9].id,
    amount: 1342931,
    status: "pending",
    date: "2023-06-20"
},
{
    customer_id: customers[7].id,
    amount: 869323,
    status: "pending",
    date: "2022-03-07"
},
{
    customer_id: customers[6].id,
    amount: 1049778,
    status: "pending",
    date: "2023-03-06"
},
{
    customer_id: customers[2].id,
    amount: 992334,
    status: "pending",
    date: "2023-10-09"
},
{
    customer_id: customers[4].id,
    amount: 1072164,
    status: "pending",
    date: "2023-09-22"
},
{
    customer_id: customers[2].id,
    amount: 358438,
    status: "pending",
    date: "2022-11-08"
},
{
    customer_id: customers[2].id,
    amount: 1255225,
    status: "pending",
    date: "2023-09-17"
},
{
    customer_id: customers[2].id,
    amount: 1146319,
    status: "pending",
    date: "2023-02-24"
},
{
    customer_id: customers[8].id,
    amount: 891385,
    status: "paid",
    date: "2023-08-16"
},
{
    customer_id: customers[5].id,
    amount: 1409615,
    status: "paid",
    date: "2022-02-06"
},
{
    customer_id: customers[3].id,
    amount: 1696928,
    status: "paid",
    date: "2023-11-29"
}
,
{
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};
