import Head from 'next/head';
import Navbar from '@/src/components/Navbar/Navbar';
import Card from '@/src/components/Card/Card';
import Button from '@/src/components/Button/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Open UI – Component Library</title>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Open UI</h1>
        <p>A tiny, friendly component library starter for Hacktoberfest.</p>
        <div className="grid">
          <Card title="Get Started" footer={<small>Run <code>npm run dev</code></small>}>
            Clone the repo, start the dev server, and open a PR! Check CONTRIBUTING.md.
          </Card>
          <Card title="Try a Button" footer={<small>Variants: primary, secondary, ghost</small>}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button size="lg">Large</Button>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}