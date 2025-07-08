// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=javascript-jwt-exposed-credential@v1.0 defects=1}
const jwt = require('jsonwebtoken');

const payload = {
    userId: '123456',
    username: 'john_doe',
    // Noncompliant: Sensitive data like 'password' is being sent as a part of the payload.
    password: 'abc123'
};

const secretKey = process.env.JWT_SECRET;
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

console.log('Generated JWT:', token);
// {/fact}
