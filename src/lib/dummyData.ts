import { Product, Invoice, FinancialRecord, MonthlyReport } from '@/types';

export const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Mouse',
    category: 'Electronics',
    stock: 150,
    minStock: 20,
    unitPrice: 29.99,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'USB-C Cable',
    category: 'Electronics',
    stock: 8,
    minStock: 15,
    unitPrice: 12.99,
    createdAt: new Date('2024-01-20'),
  },
  {
    id: '3',
    name: 'Office Chair',
    category: 'Furniture',
    stock: 45,
    minStock: 10,
    unitPrice: 199.99,
    createdAt: new Date('2024-02-01'),
  },
  {
    id: '4',
    name: 'Notebook A4',
    category: 'Stationery',
    stock: 5,
    minStock: 25,
    unitPrice: 4.99,
    createdAt: new Date('2024-02-10'),
  },
  {
    id: '5',
    name: 'Desk Lamp',
    category: 'Electronics',
    stock: 32,
    minStock: 10,
    unitPrice: 34.99,
    createdAt: new Date('2024-02-15'),
  },
];

export const dummyInvoices: Invoice[] = [
  {
    id: '1',
    invoiceNumber: 'INV-2024-001',
    customerName: 'Acme Corporation',
    items: [
      {
        productId: '1',
        productName: 'Wireless Mouse',
        quantity: 10,
        unitPrice: 29.99,
        total: 299.90,
      },
      {
        productId: '2',
        productName: 'USB-C Cable',
        quantity: 20,
        unitPrice: 12.99,
        total: 259.80,
      },
    ],
    subtotal: 559.70,
    tax: 55.97,
    total: 615.67,
    createdAt: new Date('2024-03-01'),
  },
  {
    id: '2',
    invoiceNumber: 'INV-2024-002',
    customerName: 'Tech Solutions Inc',
    items: [
      {
        productId: '3',
        productName: 'Office Chair',
        quantity: 5,
        unitPrice: 199.99,
        total: 999.95,
      },
    ],
    subtotal: 999.95,
    tax: 99.99,
    total: 1099.94,
    createdAt: new Date('2024-03-05'),
  },
  {
    id: '3',
    invoiceNumber: 'INV-2024-003',
    customerName: 'Global Enterprises',
    items: [
      {
        productId: '5',
        productName: 'Desk Lamp',
        quantity: 15,
        unitPrice: 34.99,
        total: 524.85,
      },
    ],
    subtotal: 524.85,
    tax: 52.49,
    total: 577.34,
    createdAt: new Date('2024-03-10'),
  },
];

export const dummyFinancialRecords: FinancialRecord[] = [
  {
    id: '1',
    type: 'income',
    description: 'Product Sales - March',
    amount: 15420.50,
    category: 'Sales',
    date: new Date('2024-03-15'),
  },
  {
    id: '2',
    type: 'expense',
    description: 'Office Rent',
    amount: 2500.00,
    category: 'Rent',
    date: new Date('2024-03-01'),
  },
  {
    id: '3',
    type: 'expense',
    description: 'Inventory Purchase',
    amount: 5000.00,
    category: 'Inventory',
    date: new Date('2024-03-10'),
  },
  {
    id: '4',
    type: 'income',
    description: 'Bulk Order Payment',
    amount: 8900.00,
    category: 'Sales',
    date: new Date('2024-03-20'),
  },
  {
    id: '5',
    type: 'expense',
    description: 'Utilities',
    amount: 450.00,
    category: 'Utilities',
    date: new Date('2024-03-05'),
  },
];

export const dummyMonthlyReports: MonthlyReport[] = [
  {
    month: 'March',
    year: 2024,
    totalSales: 24320.50,
    totalProducts: 5,
    lowStockItems: 2,
    inventoryValue: 45680.00,
  },
  {
    month: 'February',
    year: 2024,
    totalSales: 18950.00,
    totalProducts: 5,
    lowStockItems: 1,
    inventoryValue: 42100.00,
  },
  {
    month: 'January',
    year: 2024,
    totalSales: 21450.75,
    totalProducts: 4,
    lowStockItems: 0,
    inventoryValue: 38900.00,
  },
];
