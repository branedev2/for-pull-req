# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# {fact rule=python-cdk-ec2-expose-selective-ports@v1.0 defects=1}
import aws_cdk as cdk
from aws_cdk.aws_ec2 import CfnSecurityGroupIngress


class SelectivePorts(cdk.Stack):

    def exposure_of_sensitive_information_noncompliant(self):
        # Noncompliant: The CfnSecurityGroupIngress instantiation uses the 0.0.0.0/0 range.
        CfnSecurityGroupIngress(cdk.Stack, 'rIngress',
                                ip_protocol='tcp',
                                cidr_ip='0.0.0.0/0')

# {/fact}
