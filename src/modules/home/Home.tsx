import useUserStore from "@/modules/stores/userStore";

export const Home = () => {
  const { user, setUser, clearUser } = useUserStore();

  return (
    <div>
      {user ? (
        <div>
          <h1>Bienvenido, {user.name}</h1>
          <p>Email: {user.email}</p>
          <button onClick={clearUser}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <h1>No hay usuario logueado</h1>
          <button
            onClick={() =>
              setUser({
                _id: "1",
                name: "John Doe",
                email: "john.doe@example.com",
              })
            }
          >
            Iniciar sesión
          </button>
        </div>
      )}
    </div>
  );
};
