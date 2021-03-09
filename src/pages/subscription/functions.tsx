import Head from "next/head";
import Form from "../../components/Form/Form";

export default function Functions() {
  return (
    <div>
      <Head>
        <title>MailChimp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form table="functions_emails" title="Functions Are Ready" />
      </main>
    </div>
  );
}
