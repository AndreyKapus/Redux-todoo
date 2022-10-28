import { AppBar } from './AppBar';
import { Layout } from './Layout';
import { TaskList } from './TaskList';

export const App = () => {
  return (
    <div>
      <Layout>
        <AppBar />
        <TaskList />
      </Layout>
    </div>
  );
};
