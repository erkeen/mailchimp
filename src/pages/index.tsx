import Head from "next/head";
import Button from "../components/Button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MailChimp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-gray-700 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/images/logo-dark.png"
              alt="SupabaseLogo"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold dark:text-gray-200 text-gray-900">
              Which emailing list would you like to subscribe?
            </h2>
          </div>
          <div>
            <Link href="/subscription/storage">
              <a className="m-2">
                <Button>Get Notified When Storage Is Ready</Button>
              </a>
            </Link>
            <Link href="/subscription/functions">
              <a className="m-2">
                <Button>Get Notified When Fuctions Are Ready</Button>
              </a>
            </Link>
            <Link href="/subscription/benchmarks">
              <a className="m-2">
                <Button>Get Notified When Benchmark is Ready</Button>
              </a>
            </Link>
            <Link href="/subscription/localEmulator">
              <a className="m-2">
                <Button>Get Notified When Local Emulator is Ready</Button>
              </a>
            </Link>
            <Link href="/subscription/commandLine">
              <a className="m-2">
                <Button>Get Notified When CLI is Ready</Button>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
