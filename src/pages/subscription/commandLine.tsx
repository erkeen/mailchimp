import Head from "next/head";
import Form from "../../components/Form/Form";

export default function CommandLine() {
  return (
    <div>
      <Head>
        <title>MailChimp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form table="command_line" title="Command Line Interface" />
      </main>
    </div>
  );
}
