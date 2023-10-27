import {Link} from "react-router-dom";
import React from "react";

const FriendsAPI = {
    friends: [
        {number: 1, name:"Anna89"},
        {number: 2, name:"kirieshka78"},
        {number: 3, name:"yukikx"},
        {number: 4, name:"svetik81"},
        {number: 5, name:"skyfirecat"},
    ],
    all: function () {return this.friends},
    get: function (id) {
        const isPlayer = p => p.number === id
        return this.friends.find(isPlayer)
    }
}

const AllFriends = () =>(
    <div>
        <ul>
            {
                FriendsAPI.all().map(p => (
                    <li key = { p.number}>
                        <Link to={`/friends/$(p.number)`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default AllFriends