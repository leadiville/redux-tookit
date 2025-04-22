"use client";

export default function Home() {
  const handleTodo = (e: Event) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <h1 className="title is-2 has-text-centered m-6">
        Redux State Management
      </h1>

      <form action="#" className="form">
        <div className="field is-horizontal">
          <p className="control">
            <input type="text" className="input" placeholder="enter title" />
          </p>
          <p className="control">
            <input type="text" className="input" placeholder="enter todo" />
          </p>
          <p className="control">
            <input
              type="submit"
              className="input is-link"
              onSubmit={(e) => handleTodo(e)}
            />
          </p>
        </div>
      </form>

      <article className="my-6">
        <div className="control has-adds-on">
          <button className="button is-small is-warning">Pending</button>
          <button className="button is-small is-success">Completed</button>
        </div>

        <div className="todo-list">
          <div className="card">
            <div className="card-content">
              <span>
                <h3 className="title is-4 is-capitalized pb-2">todo title</h3>
              </span>
              <p>This an example todo</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
