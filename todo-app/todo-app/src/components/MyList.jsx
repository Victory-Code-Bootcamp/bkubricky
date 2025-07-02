import todoData from "../../data/todoData";
import CheckListItem from "./CheckListItem";

function MyList() {
  const myComponents = todoData.map(({ id, text, completed }) => (
    <CheckListItem key={id} text={text} completed={completed} />
  ));
  return (
    <>
      <h1>Todo List</h1>
      <p>This will be a todo list</p>
      <ul>{myComponents}</ul>
    </>
  );
}
export default MyList;
