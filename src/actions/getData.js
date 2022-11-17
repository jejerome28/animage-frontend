import getAnime from "../api/fetch";

const url = 'https://api.jikan.moe/v4';

// to get the top anime list then export to anilist component
export const getTopAni = async (set_state)=> {
    const topAni = await getAnime(`${url}/top/anime`, {filter: 'favorite', page:1});
    set_state(topAni);
}

export const getSznAni = async (set_state)=> {
    const sznAni = await getAnime(`${url}/seasons/now`, {page:1})
    set_state(sznAni.slice(0,10))
}