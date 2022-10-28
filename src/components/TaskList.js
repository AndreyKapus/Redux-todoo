import { useSelector } from 'react-redux';
import { statusFilters } from 'Redux/constantas';
import { StatusFilter } from './StatusFilter/StatusFilter';
import { getTasks, getStatusFilter } from '../Redux/selectors';
import { Task } from './task';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilter.active:
      return tasks.filter(task => !task.complited);

    case statusFilters.completed:
      return tasks.filter(task => task.complited);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  const statusFilter = useSelector(getStatusFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul>
      {visibleTasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
