import { Heading } from './components/atoms/Heading';import { SalesDashboard } from './components/organisms/SalesDashboard';
export default function Home() {
  return (
    <main className="min-h-screen p-24 bg-gray-50">
      <Heading text="Annual Sales Report (2022 - 2024)" />
      <SalesDashboard data={salesData} />
    </main>
  );
}
