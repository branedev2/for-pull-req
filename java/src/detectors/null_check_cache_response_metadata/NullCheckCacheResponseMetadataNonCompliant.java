// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=java-null-check-cache-response-metadata@v1.0 defects=1}
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.S3ResponseMetadata;
import com.amazonaws.AmazonWebServiceRequest;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class NullCheckCacheResponseMetadataNonCompliant {

    // Noncompliant: getCachedResponseMetadata result used without null check, causing NullPointerException if metadata is not available.
    public void nonCompliant(AmazonWebServiceRequest request, AmazonS3 amazonS3Client) {
        S3ResponseMetadata responseMetadata = amazonS3Client.getCachedResponseMetadata(request);
        log.info("Request ID: " + responseMetadata.getRequestId());
    }
}
// {/fact}
