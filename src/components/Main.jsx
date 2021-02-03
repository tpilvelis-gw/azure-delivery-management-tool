import GWLogo from "./GWLogo";
import UserStoryBar from "./UserStoryBar";
import * as azdev from "azure-devops-node-api";
import React, { useState, useEffect } from "react";
import $ from "jquery";

let style = {
    //display: "flex",
    //justifyContent: "center",
    //alignItems: "center",
    height: "200vh",
    background: "linear-gradient(-45deg, #196480, #0c3450)"
}

function Main() {

    let userStoryIDs = ["114352", "114369", "113284"]
    let userStories = []
    let elements = []

    for (let i = 0; i < userStoryIDs.length; i++){

        var settings = {
            "url": "http://localhost:8000/user_story/" + userStoryIDs[i],
            "method": "GET",
            "timeout": 0,
            "async": false
        };

        $.ajax(settings).done(function (response) {
            userStories.push(response);
            console.log(response);

            elements.push(<UserStoryBar 
                name={userStories[i].user_story_name} 
                tasks={userStories[i].tasks} />
                );
        });
    }

    return (
        <>
        <div style={style}>
            <GWLogo /> 
            {elements}
        </div>
        </>
    );
}
export default Main;