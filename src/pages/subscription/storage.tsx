import Head from "next/head";
import Form from "../../components/Form/Form";

export default function Storage() {
  return (
    <div>
      <Head>
        <title>MailChimp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form table="storage_emails" title="Storage" />
      </main>
    </div>
  );
}
