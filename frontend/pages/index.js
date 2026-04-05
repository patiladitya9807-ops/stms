import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Sports Tournament Management System</title>
      </Head>
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">🏆 Sports Tournament Management System</h1>
      </header>
      <main className="p-6">
        <h2 className="text-xl font-semibold">Welcome to STMS</h2>
        <p className="mt-2">Manage your tournaments efficiently with our smart platform.</p>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2023 STMS. All rights reserved.</p>
      </footer>
    </div>
  );
}
