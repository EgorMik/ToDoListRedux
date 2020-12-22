const Form = (state, action) => {

    if (state === undefined) {
      return {
        items: [],
        loading: true,
        error: null
      };
    }
    switch (action.type) {
        case "ADD_TODO":
          return [
            ...state,
            {
              id: action.id,
              complete: action.complete,
              text: action.text
            }
          ];
        }
};
export default Form;