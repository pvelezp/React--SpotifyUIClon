export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQA-cgvX6Jp-vtfg35TdHN8b6evnt3qsPal07PS_FDF2UUehrCIY73hnTxhvTgD4FyLVyS6-_a51jfy0-hNgl6gEh-XdpHYWaBWZPHZeZQQtGBE-N4Cxyv1cOp3-RzWhyeZzYds9G-MFFyQP8PluwzcyyN-oy1uvByX8ADaVLgvcPIv5SY2Q",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
