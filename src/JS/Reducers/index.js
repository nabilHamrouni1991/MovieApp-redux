import {ADD_MOVIES, SEARCH_MOVIES, RATE_MOVIES, DELETE_MOVIES, EDIT_MOVIES} from "../Constants/actions-types"

const initialState ={
    movies : [{
        id: 1,
        title: "Lost In Space",
        image:
          "https://img.over-blog-kiwi.com/1/50/78/51/20180702/ob_47caba_perdus-dans-l-espace-photo-perdus-dans.jpg",
        categorie:"Film de science-fiction‎",
        trailer:"https://www.youtube.com/embed/fzmM0AB60QQ",
        rating: 3
      },
     
      {
        id: 2,
        title: "The Matrix",
        image:
          "https://s.scifi-universe.com/galeries/images/0/217-affiche-the-matrix-reloaded.jpg",
          categorie:"Film de science-fiction‎",
          trailer:"https://www.youtube.com/embed/kYzz0FSgpSU",
          rating: 4
      },
      {
        id: 3,
        title: "Batman The Dark Night Rises",
        image:
          "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
          categorie:"Film d'Action",
          trailer:"https://www.youtube.com/embed/GokKUqLcvD8",
          rating: 5
      }],
      searchInput : "",
      ratingSearch : 0
}

const Reducers = (state = initialState,action)=>{
    switch (action.type) {
        case ADD_MOVIES:
            return{
                movies : [...state.movies,action.payload]
            };
        case SEARCH_MOVIES:
            return{
                ...state,
                searchInput:action.payload
            };
        case RATE_MOVIES:
            return{
                ...state,
                ratingSearch:action.payload
            };
        case DELETE_MOVIES:
            return{
                ...state,
                movies: state.movies.filter(el =>el.id !== action.payload)
              }; 
        case EDIT_MOVIES:
            return{
                movies : state.movies.map(el => el.id === action.payload.id?action.payload:el)
            }         
        default:
            
    }return state

}

export default Reducers;