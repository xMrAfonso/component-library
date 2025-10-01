import Head from 'next/head';
import Navbar from '@/src/components/Navbar/Navbar';
import Card from '@/src/components/Card/Card';
import Button from '@/src/components/Button/Button';
import useToggle from '@/src/hooks/useToggle';

export default function ComponentsPage() {
  const { on, toggle } = useToggle();

  return (
    <>
      <Head>
        <title>Components – Open UI</title>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Components</h1>
        <section>
          <h2>Button</h2>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        <section>
          <h2>Hook: useToggle</h2>
          <Card title="Toggle Demo" footer={<small>State: {String(on)}</small>}>
            <Button onClick={toggle}>{on ? 'ON' : 'OFF'}</Button>
          </Card>
        </section>
      </main>
    </>
  );
}