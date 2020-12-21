import updateList from './task-list';
import updateForm from './form';

const reducer = (state, action) => {
  return {
    taskList: updateList(state, action),
    addForm: updateForm(state, action)
  };
};

export default reducer;