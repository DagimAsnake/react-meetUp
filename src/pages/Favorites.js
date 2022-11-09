import React, { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList'

function Favorites() {

    const facoritesCtx = useContext(FavoritesContext)

    let content

    if (facoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={facoritesCtx.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default Favorites