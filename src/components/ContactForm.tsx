"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

const fields = ["name", "email", "message"] as const;
type Field = typeof fields[number];

const ContactForm = () => {
  const formik = useFormik<Record<Field, string>>({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message cannot be empty"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert("Message Sent Successfully!");
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto space-y-4">
      {fields.map((field) => (
        <div key={field}>
          {field === "message" ? (
            <textarea
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              onChange={formik.handleChange}
              value={formik.values[field]}
              className="w-full p-3 border rounded-md"
              rows={4}
            />
          ) : (
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              onChange={formik.handleChange}
              value={formik.values[field]}
              className="w-full p-3 border rounded-md"
            />
          )}
          {formik.touched[field] && formik.errors[field] && (
            <p className="text-red-500 text-sm">{formik.errors[field]}</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
