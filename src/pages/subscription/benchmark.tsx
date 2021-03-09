import Head from "next/head";
import Form from "../../components/Form/Form";

export default function Benchmark() {
  return (
    <div>
      <Head>
        <title>MailChimp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form table="benchmark" title="Benchmark" />
      </main>
    </div>
  );
}
