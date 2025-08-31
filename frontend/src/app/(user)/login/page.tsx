/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description login page for authentication the user
 */

// ui component
import Form from "./_ui/Form";

const LoginPage = () => {
  return (
    <section className=" fix-height container m-auto px-7 flex items-center justify-center">
      <div className=" m-auto bg-white rounded-lg p-5 w-full md:w-2/3">
        <h1 className=" text-3xl font-bold text-gray-800 mb-5">Log In</h1>

        {/* Form component */}
        <Form />
      </div>
    </section>
  );
};

export default LoginPage;
