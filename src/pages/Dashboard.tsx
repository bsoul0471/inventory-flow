import { Package, FileText, TrendingUp, AlertTriangle } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { dummyProducts, dummyInvoices, dummyFinancialRecords } from '@/lib/dummyData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const salesData = [
  { month: 'Jan', sales: 21450 },
  { month: 'Feb', sales: 18950 },
  { month: 'Mar', sales: 24320 },
  { month: 'Apr', sales: 19800 },
];

const stockData = dummyProducts.map(p => ({
  name: p.name.length > 15 ? p.name.substring(0, 15) + '...' : p.name,
  stock: p.stock,
}));

export default function Dashboard() {
  const navigate = useNavigate();
  const lowStockProducts = dummyProducts.filter(p => p.stock <= p.minStock);
  const totalInventoryValue = dummyProducts.reduce((sum, p) => sum + (p.stock * p.unitPrice), 0);
  const monthlyIncome = dummyFinancialRecords
    .filter(r => r.type === 'income')
    .reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your inventory and sales</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Products"
          value={dummyProducts.length}
          icon={Package}
          trend="+2 from last month"
          trendUp
        />
        <StatsCard
          title="Total Invoices"
          value={dummyInvoices.length}
          icon={FileText}
          trend="+12% from last month"
          trendUp
        />
        <StatsCard
          title="Monthly Sales"
          value={`$${monthlyIncome.toLocaleString()}`}
          icon={TrendingUp}
          trend="+8.2% from last month"
          trendUp
        />
        <StatsCard
          title="Low Stock Items"
          value={lowStockProducts.length}
          icon={AlertTriangle}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Line type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Stock Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="stock" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Low Stock Alerts</CardTitle>
          <Button variant="outline" size="sm" onClick={() => navigate('/products')}>
            View All Products
          </Button>
        </CardHeader>
        <CardContent>
          {lowStockProducts.length === 0 ? (
            <p className="text-muted-foreground">No low stock items</p>
          ) : (
            <div className="space-y-3">
              {lowStockProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{product.name}</h3>
                      <Badge variant="destructive">Low Stock</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      Stock: <span className="text-destructive">{product.stock}</span> / Min: {product.minStock}
                    </p>
                    <p className="text-sm text-muted-foreground">${product.unitPrice.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button onClick={() => navigate('/products')}>Add New Product</Button>
          <Button variant="outline" onClick={() => navigate('/invoices')}>
            Create Invoice
          </Button>
          <Button variant="outline" onClick={() => navigate('/reports')}>
            View Reports
          </Button>
          <Button variant="outline" onClick={() => navigate('/financial')}>
            Add Transaction
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
