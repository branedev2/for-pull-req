// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=javascript-detect-insecure-websocket@v1.0 defects=0}
// Compliant: Set `httpOnly` to true here since we don't want to focus on this vulnerability for this rule.
let socket = new WebSocket("wss://javascript.org/article/websocket/demo/hello");
socket.onopen = function(e) {
    alert("[open] Connection established");
    alert("Sending to server");
    socket.send("My name is John");
};
// {/fact}
