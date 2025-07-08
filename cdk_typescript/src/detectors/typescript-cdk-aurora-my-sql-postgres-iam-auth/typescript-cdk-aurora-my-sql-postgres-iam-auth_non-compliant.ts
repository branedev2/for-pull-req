// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=typescript-cdk-aurora-my-postgres-iam-auth@v1.0 defects=1}
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import {
  AuroraMysqlEngineVersion,
  DatabaseCluster,
  DatabaseClusterEngine
} from 'aws-cdk-lib/aws-rds';
import * as cdk from 'aws-cdk-lib';
import { Stack } from 'aws-cdk-lib';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // Noncomplaint: Disables IAM authentication, relying on less secure authentication methods.
    new DatabaseCluster(Stack, 'rDbCluster', {
      engine: DatabaseClusterEngine.auroraMysql({
        version: AuroraMysqlEngineVersion.VER_5_7_12,
      }),
      instanceProps: { vpc: new Vpc(Stack, 'rVpc') },
      iamAuthentication: false
    });
  }
}
// {/fact}
