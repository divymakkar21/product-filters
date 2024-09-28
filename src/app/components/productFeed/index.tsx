import Head from 'next/head';
import Sidebar from '../sidebar'
import Header from '../header';
import ProductTable from '../productTable';

export default function ProductFeedPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Head>
        <title>Product Feed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <ProductTable />
          </div>
        </main>
      </div>
    </div>
  );
}

