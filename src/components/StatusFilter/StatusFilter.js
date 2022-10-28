import { useSelector } from 'react-redux';
import { statusFilters } from 'Redux/constantas';
import { getStatusFilter } from '../../Redux/selectors';

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);

  return (
    <div>
      <button selected={filter === statusFilters.all}>All</button>
      <button selected={filter === statusFilters.active}></button>
      <button selected={filter === statusFilters.complited}></button>
    </div>
  );
};
