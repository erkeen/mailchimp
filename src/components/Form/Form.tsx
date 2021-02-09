import { useState } from "react";
import useInput from "../../hooks/useInput";
import { supabase } from "../../utils/supabaseClient";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { insertEmails } from "../../api/insert";
toast.configure();
export default function Form(props) {
  const [name, bindName, resetName] = useInput("");
  const [email, bindEmail, resetEmail] = useInput("".trim());
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      if (!email)
        throw new Error(
          "Email is required. Please provide a valid email address!"
        );
      const { error } = await insertEmails(props.table, name, email);
      const timer = setTimeout(() => {
        resetName();
        resetEmail();
        if (error) notifyError(error.details);
        if (!error) notifySuccess();
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    } catch (error) {
      notifyError(error.message);
      setLoading(false);
    }
  }

  const notifyError = (errorMessage) =>
    toast.error(errorMessage, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
  const notifySuccess = () =>
    toast.success("You have successfully subscribed!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
    });

  return (
    <div className="dark:bg-gray-700 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/images/logo-dark.png"
            alt="SupabaseLogo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold dark:text-gray-200 text-gray-900">
            Get Notified When {props.title} Is Ready
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">
                Name (optional)
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                autoComplete="first_name"
                className="dark:bg-gray-900 dark:placeholder-gray-200 dark:text-gray-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-brand-700 focus:z-10 sm:text-sm"
                placeholder="Name (Optional)"
                {...bindName}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                className="dark:bg-gray-900 dark:placeholder-gray-200 dark:text-gray-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-brand-700 focus:z-10 sm:text-sm"
                placeholder="Email address"
                {...bindEmail}
              />
            </div>
          </div>

          <div>
            <Button type="submit" loading={loading && loading}>
              SUBSCRIBE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
