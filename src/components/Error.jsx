const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-100 mb-5 text-center py-2 px-3 w-full text-red-700 rounded-md">
      <p>Todos los campos son obligatorios</p>
    </div>
  );
};

export default Error;
