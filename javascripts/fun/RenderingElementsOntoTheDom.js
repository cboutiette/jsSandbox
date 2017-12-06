// React.createElement( /* type */, /* props */, /* content */ );

import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('div', null, 'Hey look at me!')

ReactDOM.render(
    element,
    document.getElementById('root')
)

/**
 * Now the more advanced version
 */

const videoGames = [
    { name: 'Overwatch' },
    { name: 'Paladins' },
    { name: 'Destiny 2' }
]

const advancedElement = React.createElement('ol', null,
    videoGames.map((game, index) => (
        React.createElement('li', { key: index }, game.name)
    ))
)

ReactDOM.render(
    advancedElement,
    document.getElementById('root2')
)

/**
 * Now an even more advanced version
 */
/**
 * import React, { Component } from 'react';
 * Allows you to do the following
 * class VideoGamesList extends Component {
  */

class VideoGamesList extends React.Component {
    render() {
        const videoGames = [
            {name: 'Overwatch'},
            {name: 'Paladins'},
            {name: 'Destiny 2'}
        ]

        return videoGames.map((game, index) => (<ol>
            <li key={index}>{game.name}</li>
        </ol>))
    }
}

ReactDOM.render(
    <VideoGamesList/>,
    document.getElementById('root3')
)

