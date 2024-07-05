import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import LogoVaqui from "../assets/Logo decoration.svg";
import PrincipalButton from "../components/buttons/PrincipalButton.jsx";

function Registration() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="" src={LogoVaqui} alt="logo" />
          </a>

          <div className="">
            <div className="">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Registro
              </h1>

              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = "Ingresa tu nombre";
                  }
                  if (!values.email) {
                    errors.email = "El campo no puede estar vacio.";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Dirección de correo inválida.";
                  }
                  if (!values.password) {
                    errors.password = "El campo no puede estar vacio.";
                  }
                  return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    const response = await fetch(
                      "http://localhost:3000/users/",
                      {
                        method: "POST",
                        body: JSON.stringify(values),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    );

                    if (response.ok) {
                      navigate("/inicio");
                    } else {
                      const data_response = await response.json();
                      setErrorMessage(data_response["email"]);
                    }
                  } catch (error) {
                    console.error(
                      "Error al comunicarse con el servidor:",
                      error
                    );
                    // setSubmitting(false);
                    setErrorMessage("Error al comunicarse con el servidor.");
                  }
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-4 md:space-y-6">
                    <div>
                      <Field
                        type="name"
                        name="name"
                        placeholder="Nombre"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        max={100}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-left mt-4 font-bold text-xs text-rose-600"
                      />
                    </div>
                    <div>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Correo"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-left mt-4 font-bold text-xs text-rose-600"
                      />
                    </div>
                    <div>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-left mt-4 font-bold text-xs text-rose-600"
                      />
                    </div>
                    {errorMessage && (
                      <div className="text-left mt-4 font-bold text-xs text-rose-600">
                        {errorMessage}
                      </div>
                    )}

                    <div>
                      <PrincipalButton text="Registrarme" />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;
