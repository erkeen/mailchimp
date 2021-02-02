import { useState } from "react";
import useInput from "../../hooks/useInput";
import { supabase } from "../../utils/supabaseClient";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export default function Form() {
  const [name, bindName, resetName] = useInput("");
  const [email, bindEmail, resetEmail] = useInput("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const { error } = await supabase.from("emails").insert([
        {
          name,
          email_address: email,
        },
      ]);
      const timer = setTimeout(() => {
        resetName();
        resetEmail();
        if (error) notifyError(error.details);
        if (!error) notifySuccess();
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  const notifyError = (errorMessage) =>
    toast.error(errorMessage, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
  const notifySuccess = () =>
    toast.success("You have successfully subscribed!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/images/logo-light.png"
            alt="SupabaseLogo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Get Notified When Storage Is Ready
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">
                Name (Optional)
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                autoComplete="first_name"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-brand-500 focus:z-10 sm:text-sm"
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
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-brand-500 focus:z-10 sm:text-sm"
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
