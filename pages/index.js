import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Mini Noon</title>
      </Head>
      <main className="p-4">
        <h1 className="text-3xl font-bold text-center">مرحبًا بك في متجر نون المبسط</h1>
        <p className="text-center mt-4">هنا يتم عرض المنتجات من قاعدة البيانات</p>
      </main>
    </div>
  );
}