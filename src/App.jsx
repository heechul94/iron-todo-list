import "./App.css";
import Layout from "./components/commons/Layout/Layout";
import TodoListContainer from "./components/units/Todo/TodoListContainer";

function App() {
    return (
        <Layout>
            <TodoListContainer />
        </Layout>
    );
}

export default App;
