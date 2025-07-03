// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

package util

// {fact rule=go-http-cookie-httponly-notset@v1.0 defects=0}
import (
	"net/http"
)

func httpCookieSecureNotsetCompliant(w http.ResponseWriter, name, value string) {
	// Compliant: `HttpOnly` is set to `true`.
	cookie := http.Cookie{
		Secure:   true,
		HttpOnly: true,
		Name:     name,
		Value:    value,
	}
	http.SetCookie(w, &cookie)
}
// {/fact}
