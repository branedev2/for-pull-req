# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# {fact rule=python-cdk-neptune-cluster-automatic-minor-version-upgrade@v1.0 defects=0}
import aws_cdk as cdk
from aws_cdk import Stack
from aws_cdk.aws_neptune import CfnDBInstance

class CdkStarterStack(cdk.Stack):
    def __init__(self, scope: cdk.App, id: str):
      super(scope, id)    
    # Compliant: The CfnDBInstance instantiation sets the `auto_minor_version_upgrade` property to True.
    CfnDBInstance(Stack, 'rDatabaseInstance', 
        db_instance_class= 'db.r4.2xlarge',
        auto_minor_version_upgrade= True,
    ) 
# {/fact}