const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const confirmar = window.confirm(
      "¿Estas seguro que quieres eliminar este paciente?"
    );

    if (confirmar) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          onClick={() => {
            setPaciente(paciente);
          }}
          className="bg-indigo-600 py-3 px-4 text-sm text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition duration-300 ease-in-out"
        >
          Editar
        </button>

        <button
          onClick={handleEliminar}
          className="bg-red-600 py-3 px-4 text-sm text-white uppercase font-bold hover:bg-red-700 rounded-md cursor-pointer transition duration-300 ease-in-out"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
export default Paciente;
