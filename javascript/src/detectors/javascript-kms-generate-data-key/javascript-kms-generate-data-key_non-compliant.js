// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=javascript-kms-generate-data-key@v1.0 defects=1}
function nonCompliant() {
    let KMS = require('aws-sdk/clients/kms')
    let kms = new KMS()
    var params = {
        KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
        KeySpec: "AES_128" 
    };

    // Noncompliant: KMS API is misused when generating data keys.
    kms.generateDataKey(params, function(err, data) {
        if (err) console.log(err, err.stack); 
        else    console.log(data);     
    });
}
// {/fact}
