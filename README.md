# TypeTasks — Part 1: Data Model

A small TypeScript task model built around a strict `Task` interface and a `TaskStatus` union.

## Model

- `TaskStatus`: `"todo" | "in-progress" | "done"`
- `Task`: numeric `id`, string `title`, and a valid `status`
- `addTask`: adds a new task with the next ID and a default `todo` status
- `completeTask`: marks a task as done by ID
- `filterByStatus`: selects tasks by status

Additional helpers include `deleteTask` and `countByStatus`.

## Check the types

Install dependencies and run the type checker:

```sh
npm install
npm run typecheck
```

The TypeScript compiler uses strict mode and does not emit build files.
