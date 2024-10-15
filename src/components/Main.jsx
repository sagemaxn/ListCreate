import List from "../app/pages/List";
import Create from "../app/pages/Create";

const Main = ({ view }) => {
  return (
    <main className="main-content">
      {view === "list" && <List />}
      {view === "create" && <Create />}
    </main>
  );
};

export default Main;
