// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=typescript-cdk-auto-scaling-group-health-check@v1.0 defects=1}
import {
  CfnAutoScalingGroup
} from 'aws-cdk-lib/aws-autoscaling';
import * as cdk from 'aws-cdk-lib';
import { Stack } from "aws-cdk-lib";

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // Noncomplaint: Uses `ELB` health check without a load balancer, causing potential misconfigurations.
    new CfnAutoScalingGroup(Stack, 'rAsg', {
      minSize: '7',
      maxSize: '42',
      healthCheckType: 'ELB'
    });
  }
}
// {/fact}
