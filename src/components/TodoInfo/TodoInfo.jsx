import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo, user }) => (
  <article className="TodoInfo TodoInfo--completed">
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={user} key={user.id} />
  </article>
);
