import React from "react";

export default function Button(props, children) {
  return (
    <button
      {...props}
      className="group relative w-full flex justify-center items-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {props.children}
      <img
        className={`w-5 h-5 ml-2 ${!props.loading && "hidden"}`}
        src="/loader/spinner.gif"
      />
    </button>
  );
}
