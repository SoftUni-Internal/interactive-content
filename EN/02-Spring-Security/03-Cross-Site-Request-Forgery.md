# Cross-Site Request Forgery

[slide hideTitle]
# Spring CSFR Protection

Cross-site request forgery also known as CSRF is one of the many security attacks that a web application could suffer.

For example, a user logs into his bank account the bank gives him a session token (cookie).

A hacker would send you an email with a malicious link that looks like it is pointing to some trusted location but it connects to the user's bank.

So when the user clicks on the fake link it uses the previously set session token.

The hacker's request is executed and the user's account is hacked, for example, money from the user's account can be transferred to the hacker's account.

The hacker's request to the bank was forged as used the same session token (cookie) of the user which did not require the user to log in again.

In Spring such attack could be easily prevented:

```java
.csrf()
   .csrfTokenRepository(csrfTokenRepository();

private CsrfTokenRepository csrfTokenRepository() {
  HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
  repository.setSessionAttributeName("_csrf");
  return repository;
}
```

Preventing CSRF, we do not need to make any additional adjustments, it comes out of the box.

```js
// form.html

<input type='hidden' th:name='${_csrf.parameterName}' th:value='${_csrf.token}' />
```

This is a hidden field that is attached when using Thymeleaf, which prevents CSRF attacks.
[/slide]