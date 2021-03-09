import Head from "next/head";
import Form from "../../components/Form/Form";

export default function LocalEmulator() {
  return (
    <div>
      <Head>
        <title>MailChimp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form table="local_emulator" title="Local Emulator" />
      </main>
    </div>
  );
}
