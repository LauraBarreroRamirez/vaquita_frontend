import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import LogoVaqui from "../assets/Logo decoration.svg";
import PrincipalButton from "../components/buttons/PrincipalButton.jsx";
import Registration from "./Registration.jsx";
import { loginApi } from "../api/auth.jsx";
import apiClient from "../api/apiCLiente.jsx";
import useAuthContext from "../utils/providers/auth/useAuthContext.jsx";

export function LoginPage() {
  const { isAuthenticated, login } = useAuthContext();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/inicio");
    }
  }, [isAuthenticated, navigate]);

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
                Iniciar Sesión
              </h1>

              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
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
                    await login(values);
                  } catch (error) {
                    setErrorMessage(
                      "Error al iniciar sesión. Verifica tus credenciales."
                    );
                  }
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-4 md:space-y-6">
                    <div>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Correo"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      <PrincipalButton
                        text="Ingresar"
                        type="submit"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <PrincipalButton
                        text="Registrarme"
                        onClick={() => {
                          navigate("/registro");
                        }}
                      />
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
