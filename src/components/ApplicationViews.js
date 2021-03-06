import React from "react"
import { Route } from "react-router-dom"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            Application views
        </main>

        <GameProvider>
            <Route exact path="/">
                <GameList />
            </Route>
            <Route exact path="/games/new" render={props => <GameForm {...props} />} />
        </GameProvider>

        <EventProvider>
            <Route exact path="/events">
                <EventList />
            </Route>
        </EventProvider>
    </>
}
