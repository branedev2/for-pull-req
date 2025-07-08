# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# {fact rule=terraform-unencryted-codebuild-projects@v1.0 defects=0}
resource "aws_codebuild_project" "example" {
  name         = "example-project"
  service_role = "arn:aws:iam::123456789:role/example-role"

  artifacts {
    type                = "S3"
    encryption_disabled = false
    location           = "example-bucket/artifacts"
  }

  logs_config {
    cloudwatch_logs {
      status = "ENABLED"
      group_name = "example-log-group"
      stream_name = "build-logs"
    }
  }
  # Compliant: CodeBuild projects are encrypted.
  encryption_key = "arn:aws:kms:region:account:key/example-key-id"
}
# {/fact}