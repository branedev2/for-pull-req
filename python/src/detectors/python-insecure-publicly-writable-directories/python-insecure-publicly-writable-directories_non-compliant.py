#  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
#  SPDX-License-Identifier: MIT-0

# {fact rule=python-insecure-publicly-writable-directories@v1.0 defects=1}
import tempfile
import os

def non_compliant():
    try:
        # Noncompliant: Insecure file creation in global directory.
        file = open("/tmp/temp.txt", "w+")
    finally:
        file.close()
# {/fact}
